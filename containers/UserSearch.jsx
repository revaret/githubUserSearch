import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import UserSearchInput from '../components/UserSearchInput';
import UserSearchResults from '../components/UserSearchResults';
import { searchUsers } from '../actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const style = {
  container: {
    textAlign: 'center'
  },
};

class UserSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleUserSearch = this.handleUserSearch.bind(this);
    this.handleClickPage = this.handleClickPage.bind(this);
    this.handleChangeDropdown = this.handleChangeDropdown.bind(this);
    this.state = {
      startValue:0,
      startSlice:0,
      endSlice:5,
      endValue :5,
      value:5
    }
  }

  componentDidMount() {
    this.handleUserSearch(this.props.query);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.query !== nextProps.query) {
      this.handleUserSearch(nextProps.query);
    }
  }

  handleUserSearch(query) {
    this.props.searchUsers(query);
  }

  handleChangeDropdown(event, index, value) {
    console.log('dropdown',value)
    this.setState({
      value:value,
      endSlice: value,
      endValue: value,
      startSlice:0
    });
  }

  handleClickPage(v) {
    console.log('clicked page',v);
    this.setState({
      endSlice:this.state.endValue+(this.state.value *(v)),
      startSlice:this.state.startValue+(this.state.value *(v))
    })
  }

  render() {
    const {
      query,
      results,
      searchInFlight,
      saveQuery
    } = this.props;

    const items = [];
    for (let i = 1; i < results.length; i++ ) {
      items.push(<MenuItem value={i} key={i} primaryText={`${i} nos`} />);
    }

    const {
      startSlice,
      endSlice,
      value
    } = this.state

    console.log(query)
    return (
       <MuiThemeProvider>
        <div style={style.container}>
          <UserSearchInput
            onChange={this.handleUserSearch}
            status={searchInFlight}
            dataSource={saveQuery}
            defaultValue={query}
          />
          {items.length > 0 &&
           <div>
              <h5>Select number of items to display</h5>
              <DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleChangeDropdown}>
                {items}
              </DropDownMenu>
            </div>
          }
          <UserSearchResults
            results={results}
            loading={searchInFlight}
            clickPage = {this.handleClickPage}
            startSlice = {startSlice}
            endSlice = {endSlice}
            autoValue = {value}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(
  ({ routing, userResults, searchInFlight,saveQuery }) => ({
    query: routing.locationBeforeTransitions.query.q,
    results: userResults,
    saveQuery,
    searchInFlight
  }),
  { searchUsers }
)(UserSearch);
