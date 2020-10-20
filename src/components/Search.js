import React from "react";

import { ImSearch } from "react-icons/im";

const Search = () => {
  return (
    <form class="form-inline my-2 my-lg-0">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="btn btn-danger my-2 my-sm-0" type="submit">
        <ImSearch />
      </button>
    </form>
  );
};

export default Search;
