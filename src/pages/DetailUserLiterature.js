import React from "react";
import BoxLoading from "react-loadingg/lib/BoxLoading";
import { useQuery } from "react-query";
import { API, urlAssets } from "../config/api";

const DetailUserLiterature = (props) => {
  let propsLocation = props.location.pathname;

  const { isLoading, error, data } = useQuery("getLiteratureUser", () =>
    API.get(propsLocation)
  );

  if (isLoading) return <BoxLoading />;
  if (error) return console.log(error);

  console.log(propsLocation);
  console.log(data.data.literatureUser[0]);

  return (
    <div>
      <h1>List buku yang dimiliki:</h1>
      {data.data.literatureUser.map((literatureA) => (
        <>
          <img
            src={urlAssets.img + literatureA.thumb}
            style={{ width: "100px", height: " 100px" }}
          />
          <p>{literatureA.title}</p>
        </>
      ))}
    </div>
  );
};

export default DetailUserLiterature;
