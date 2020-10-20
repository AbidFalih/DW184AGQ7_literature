import React from "react";
import NavBar from "../components/NavBar";
import TimePeriod from "../components/TimePeriod";
import Book from "../components/Book";

const SearchResult = () => {
  return (
    <div className="bg-black h-100vh">
      <NavBar />
      <div className="d-flex">
        <TimePeriod />
        <div className="row mb-3 flex-grow-1">
          <Book />
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
