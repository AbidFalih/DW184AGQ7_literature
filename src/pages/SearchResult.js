import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import TimePeriod from "../components/TimePeriod";
import Literature from "../components/Literature";
import { useQuery } from "react-query";
import { API } from "../config/api";
import { BoxLoading } from "react-loadingg";
import Search from "../components/Search";
import { useLocation, useParams } from "react-router-dom";

const SearchResult = (props) => {
  const params = new URLSearchParams(props.location.search);
  // const searchQuery3 = params.get("title");
  // const public_year = params.get("public_year");

  const [searchQuery, setSearchQuery] = useState(params.get("title"));
  const [yearQuery, setYearQuery] = useState("");

  // const { searchQuery2 } = useParams();
  // const [searchQuery, setSearchQuery] = useState(params.get("title"));
  // const [dataaa, setDataaa] = useState([]);

  // useEffect(() => {
  //   setSearchQuery(params.get("title"));
  // }, [params]);

  let propsLocation = props.location.search;

  // let location = useLocation();

  // const [paramss, setParamss] = useState(props.location.search);

  useEffect(() => {
    console.log(`useEffect triggered! ${searchQuery}, ${yearQuery}`);
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

  // console.log(`params: ${paramss}`);
  console.log(literatures);
  // refetch();

  // const {
  //   isLoading,
  //   error,
  //   data: literatures,
  // } = useQuery("getLiteraturesSearch", () =>
  //   API.get(`/literature?title=${searchQuery}&public_year=${public_year}`)
  // );
  // if (isLoading) return <BoxLoading />;
  // if (error) return "An error has occured: " + error.message;

  // setSearchQuery(params.get("title"));

  // console.log(`searchQuery3: ${searchQuery3}`);
  // console.log(`searchQuery: ${searchQuery}`);
  // console.log(`location: ${location.search}`);
  // console.log({ propsLoacation });
  // console.log(`paramss: ${paramss}`);
  // console.log(literatures);
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
            {literatures.data.literature.map((literature) => (
              <Literature literature={literature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
