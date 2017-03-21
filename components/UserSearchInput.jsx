import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RefreshIndicator from 'material-ui/RefreshIndicator';


injectTapEventPlugin();

const style = {
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

export default function UserSearchInput({ value, onChange, status, dataSource,defaultValue }) {
  return (
    <div>
    <AutoComplete
      searchText={defaultValue}
      filter={AutoComplete.noFilter}
      dataSource={dataSource}
      floatingLabelText='Search for a GH user'
      onUpdateInput={(evt) => onChange(evt)}
    />
    { status &&
      <RefreshIndicator
        size={20}
        left={-20}
        top={0}
        status="loading"
        style={style.refresh}
      />
    }
    </div>
  );
}