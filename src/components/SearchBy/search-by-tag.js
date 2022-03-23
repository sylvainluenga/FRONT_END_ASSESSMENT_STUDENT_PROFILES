import React from "react";

const SearchByTag = props => {

  return (
    <div className="search-container">
      <input id="search-tag" type="text" value={props.searchTag} onChange={props.handleChange} placeholder="Search by Tag"/>
    </div>
  );
}

export default SearchByTag;