import React, { useState } from "react";

import { ImSearch } from "react-icons/im";
import { useHistory } from "react-router-dom";

const Search = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();
  return (
    <form
      class="form-inline my-2 my-lg-0"
      onSubmit={(e) => {
        e.preventDefault();
        props.setQuery(searchQuery);
        props.isYear == undefined
          ? history.push(`/search-result?title=${searchQuery}`)
          : history.push(
              `/search-result?title=${searchQuery}&public_year=${props.isYear}`
            );
      }}
    >
      <input
        class="form-control mr-2 custom-input search-home"
        type="search"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
      <button class="btn btn-danger my-2" type="submit">
        <ImSearch />
      </button>
    </form>
  );
};

export default Search;
