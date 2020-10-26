import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import TimePeriod from "../components/TimePeriod";
import Literature from "../components/Literature";
import { useQuery } from "react-query";
import { API } from "../config/api";
import { BoxLoading } from "react-loadingg";
import Search from "../components/Search";

const SearchResult = (props) => {
  const params = new URLSearchParams(props.location.search);

  const [searchQuery, setSearchQuery] = useState(params.get("title"));
  const [yearQuery, setYearQuery] = useState("");

  let propsLocation = props.location.search;

  useEffect(() => {
    refetch();
  }, [searchQuery, yearQuery]);

  const {
    isLoading,
    error,
    data: literatures,
    refetch,
  } = useQuery("getLiteraturesSearch", () =>
    API.get(`/literature${propsLocation}`)
  );
  if (isLoading) return <BoxLoading />;
  if (error) return "An error has occured: " + error.message;

  return (
    <div className="container-fluid bg-black h-100vh">
      <NavBar />
      <div className="mx-5 p-0">
        <Search
          setQuery={(query) => setSearchQuery(query)}
          isYear={yearQuery}
        />
        <div className="d-flex mt-3">
          <TimePeriod
            setYear={(year) => setYearQuery(year)}
            isQuery={searchQuery}
          />
          <div className="row mb-3 ml-2 flex-grow-1">
            {literatures.data.literature.map(
              (literature) =>
                literature.status == "Approved" && (
                  <Literature literature={literature} />
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
