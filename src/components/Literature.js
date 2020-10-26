import React from "react";
import { useHistory } from "react-router-dom";
import { urlAssets } from "../config/api";

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
          className="card-img-top mx-auto"
          src={urlAssets.img + literature.thumb}
          alt="literature"
          style={{ height: "240px", width: "180px" }}
        />
        <div className="card-body mx-auto px-0" style={{ width: "180px" }}>
          <h6>{literature.title}</h6>
          <div className="d-flex justify-content-between">
            <small className="text-muted">{literature.author}</small>
            {literature.publication_date != null && (
              <small className="text-muted">
                {literature.publication_date.slice(0, 4)}
              </small>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Literature;
