import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "react-query";

import { API } from "../config/api";
import { LiteratureContext } from "../context/LiteratureContext";

import ModalNotif from "./ModalNotif";

const FormAddLiterature = () => {
  const [addBook, setaddBook] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    publication: "",
    pages: "",
    isbn: "",
    author: "",
    thumb: "",
    attache: "",
  });

  let { title, publication, pages, isbn, author, thumb, attache } = formData;

  const [state] = useContext(LiteratureContext);
  const userId = state.user.id;

  const history = useHistory();

  const [storeLiterature] = useMutation(async () => {
    try {
      if (thumb == "")
        thumb =
          "http://uploader.nusaserver.com/server/php/files/Rectangle%2010.png";

      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const body = JSON.stringify({
        title,
        thumb,
        publication,
        userId,
        pages,
        isbn,
        author,
        attache,
      });
      const res = await API.post("/literature", body, config);

      setFormData({
        title: "",
        publication: "",
        pages: "",
        isbn: "",
        author: "",
        thumb: "",
        attache: "",
      });

      return res;
    } catch (err) {
      alert(`Error creating literature: ${err}`);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    storeLiterature();
  };

  return (
    <div className="my-3">
      <h3 className="fo-tnr">Add Literature</h3>
      <form className="my-5" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className="form-control my-4"
          id="title"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setFormData({ ...formData, title: e.target.value });
          }}
        />
        <input
          type="text"
          className="form-control"
          id="thumb"
          placeholder="Put your image URL for book cover"
          value={thumb}
          onChange={(e) => {
            setFormData({ ...formData, thumb: e.target.value });
          }}
        />
        <input
          className="form-control my-4"
          type="date"
          id="publicationDate"
          placeholder="Publication Date"
          value={publication}
          onChange={(e) => {
            setFormData({ ...formData, publication: e.target.value });
          }}
        />
        <input
          className="form-control"
          type="number"
          id="pages"
          placeholder="Pages"
          value={pages}
          onChange={(e) => {
            setFormData({ ...formData, pages: e.target.value });
          }}
        />
        <input
          type="text"
          className="form-control my-4"
          id="isbn"
          placeholder="ISBN"
          value={isbn}
          onChange={(e) => {
            setFormData({ ...formData, isbn: e.target.value });
          }}
        />
        <input
          type="text"
          className="form-control"
          id="author"
          placeholder="Author, e.g. E E Eizky, Astina Haris, Chloe Grace Moretz)"
          value={author}
          onChange={(e) => {
            setFormData({ ...formData, author: e.target.value });
          }}
        />
        <input
          type="text"
          className="form-control my-4"
          id="file"
          placeholder="Put your book URL for book file"
          value={attache}
          onChange={(e) => {
            setFormData({ ...formData, attache: e.target.value });
          }}
        />
        {/* <button className="btn btn-grey d-block my-4 p-2">
            Attache Book File &nbsp;&nbsp;
            <CgAttachment style={{ verticalAlign: "baseline" }} />
          </button> */}
        <div class="d-flex flex-row-reverse">
          <button
            className="btn btn-danger m-lg-0 p-2"
            onClick={() => setaddBook(true)}
          >
            Add Literature
          </button>
        </div>
      </form>

      <ModalNotif
        show={addBook}
        onHide={() => {
          setaddBook(false);
        }}
        message="Thank you for adding your own literature to our website, please
          wait 1 x 24 hours to verify whether this literature is valid"
      />
    </div>
  );
};

export default FormAddLiterature;
