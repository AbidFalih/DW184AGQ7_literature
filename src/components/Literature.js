import React from "react";
import { useHistory } from "react-router-dom";

const Literature = ({ literature }) => {
  const history = useHistory();

  return (
    <div className="col-sm-3 mb-4">
      <div
        role="button"
        className="card h-100 mx-1 bg-black"
        onClick={() => history.push(`/detail-literature/${literature.id}`)}
      >
        <img
          className="card-img-top"
          src={literature.thumb}
          // src="http://uploader.nusaserver.com/server/php/files/Brisingr_book_cover.png"
          alt="literature"
          style={{ height: "270px" }}
        />
        <div className="card-body pb-0">
          {/* <h6>Judul Bukuu</h6>
          <p>Nama Penulis</p> */}
          <h6>{literature.title}</h6>
          <p>{literature.author}</p>
        </div>
      </div>
    </div>
  );
};

export default Literature;
