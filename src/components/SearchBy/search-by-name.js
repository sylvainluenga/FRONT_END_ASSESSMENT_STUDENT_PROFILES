import React from "react";

const SearchByName = props => {

  return (
    <div className="search-container">
      <input id="search-name" type="text" value={props.searchName} onChange={props.handleChange} placeholder="Search by Name"/>
    </div>
  );
}

export default SearchByName;