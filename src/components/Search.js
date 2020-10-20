import React, { useState } from "react";

import { ImSearch } from "react-icons/im";
import { useHistory } from "react-router-dom";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState(null);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    searchQuery
      ? history.push(`/search-result/${searchQuery}`)
      : history.push(`/search-result/*`);
  };

  return (
    <form class="form-inline my-2 my-lg-0" onSubmit={(e) => handleSubmit(e)}>
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        id="search"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
      <button class="btn btn-danger my-2 my-sm-0" type="submit">
        <ImSearch />
      </button>
    </form>
  );
};

export default Search;
