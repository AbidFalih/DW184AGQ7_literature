import React from "react";
import InfoDetail from "../components/InfoDetail";
import NavBar from "../components/NavBar";

const DetailLiteratur = () => {
  return (
    <div className="bg-black m-0 p-0">
      <NavBar />
      <div class="d-flex bd-highlight">
        <div class="p-2 bd-highlight">
          <img
            src="http://uploader.nusaserver.com/server/php/files/Brisingr_book_cover.png"
            alt="detail-literature"
            className="card-img-top detail-thumb"
          />
        </div>
        <div class="p-2 flex-grow-1 bd-highlight">
          <InfoDetail
            labelValue={<h1 className="mb-0 fo-tnr">dummy-Title Literature</h1>}
            value={
              <h6 className="mt-0 mb-4 text-muted font-weight-normal">
                dummy-Penulis
              </h6>
            }
          />
          <InfoDetail
            labelValue={<h6 className="mb-0 pb-0">Publication date</h6>}
            value={<small className="text-muted">dummy-April 2020</small>}
          />
          <InfoDetail
            labelValue={<h6 className="mb-0 pb-0">Pages</h6>}
            value={<small className="text-muted">dummy-819</small>}
          />
          <InfoDetail
            labelValue={<h6 className="mb-0 pb-0 fo-red">ISBN</h6>}
            value={<small className="text-muted">dummy-918291739103</small>}
          />
          <button className="btn btn-danger">Download (icon)</button>
        </div>
        <div class="p-2 bd-highlight">
          <button className="btn btn-danger">Add My Collection (icon)</button>
        </div>
      </div>
    </div>
  );
};

export default DetailLiteratur;
