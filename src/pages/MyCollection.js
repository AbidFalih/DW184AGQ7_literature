import React, { useContext } from "react";
import Literature from "../components/Literature";
import NavBar from "../components/NavBar";
import { useQuery } from "react-query";
import { API } from "../config/api";
import { BoxLoading } from "react-loadingg";
import { LiteratureContext } from "../context/LiteratureContext";

const MyCollection = () => {
  const [state, _] = useContext(LiteratureContext);

  const { isLoading, error, data } = useQuery("getCollectionUser", () =>
    API.get(`/collection/${state.user.id}`)
  );
  if (isLoading) return <BoxLoading />;
  if (error) return "An error has occured: " + error.message;

  return (
    <div class="px-5 py-2 bg-black">
      <NavBar />
      <div>
        <h3 className="fo-tnr">My Library</h3>
        <div className="row mb-3">
          {data.data.collectionsUser.userLiteratures.map((literature) => (
            <Literature literature={literature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCollection;
