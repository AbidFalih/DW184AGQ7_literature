import React from "react";
import NavBar from "../components/NavBar";
import TimePeriod from "../components/TimePeriod";
import Literature from "../components/Literature";
import { useQuery } from "react-query";
import { API } from "../config/api";
import { BoxLoading } from "react-loadingg";
import Search from "../components/Search";
import { useParams } from "react-router-dom";

const SearchResult = () => {
  const { searchQuery } = useParams();
  const { isLoading, error, data: literatures } = useQuery(
    "getLiteratures",
    () => API.get("/literatures")
  );
  if (isLoading) return <BoxLoading />;
  if (error) return "An error has occured: " + error.message;

  console.log(searchQuery);
  return (
    <div className="bg-black">
      <NavBar />
      <Search />
      <div className="d-flex">
        <TimePeriod />
        <div className="row mb-3 flex-grow-1">
          {literatures.data.literatures.map((literature) =>
            literature.title
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            searchQuery.includes("*") ? (
              <Literature literature={literature} />
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
