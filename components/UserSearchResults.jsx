import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import ReactPaginate from 'react-paginate';

const style = {
  list: {
    textAlign:'left',
    paddingLeft:'25em',
    paddingRight:'25em',
    paddingTop:'2em'
  },
};

export default function UserSearchResults({
  results,
  loading,
  clickPage,
  startSlice,
  endSlice,
  autoValue
}) {
  const resultPage = results.slice(startSlice,endSlice);
  const showPaginate = (results.length > 0 ) ? true :false;
  const autoPage = Math.round(results.length/autoValue) <= 1 ? Math.floor(results.length/autoValue)+1: Math.floor(results.length/autoValue);
  return (
    <div>
    <div style={style.list}>
      <Paper style={style} zDepth={3}>
      {resultPage.map(result => (
        <div key={result.id}>
          <ListItem
              leftAvatar={<Avatar src={result.avatar_url} />}
              primaryText={result.login}
              secondaryText={
                <p>
                  {result.url}
                </p>
              }
              secondaryTextLines={2}
            />
          <Divider inset={true} />
        </div>
      ))}
      </Paper>
    </div>
    {showPaginate &&
    <ReactPaginate 
      previousLabel={"previous"}
      initialPage={0}
      nextLabel={"next"}
      breakLabel={<a href="">...</a>}
      breakClassName={"break-me"}
      pageCount={autoPage}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={(v)=>clickPage(v.selected)}
      containerClassName={"pagination"}
      subContainerClassName={"pages pagination"}
      activeClassName={"active"} 
      />
    }
    </div>
  );
}