import React from "react";
// import { useHistory } from "react-router-dom";

const Book = ({ book }) => {
  // const history = useHistory();

  return (
    <div className="col-sm-3 mb-4">
      <div
        role="button"
        className="card h-100 mx-1 bg-black"
        // onClick={() => history.push(`/detailBook/${book.id}`)}
      >
        <img
          className="card-img-top"
          // src={book.thumb}
          src="http://uploader.nusaserver.com/server/php/files/Brisingr_book_cover.png"
          alt="book"
          style={{ height: "270px" }}
        />
        <div className="card-body pb-0">
          <h6>Judul Bukuu</h6>
          <p>Nama Penulis</p>
          {/* <h6>{book.title}</h6>
          <p>{book.user.fullName}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Book;
