import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "react-query";

import { API } from "../config/api";
import { LiteratureContext } from "../context/LiteratureContext";

import ModalNotif from "./ModalNotif";

const FormAddLiterature = () => {
  const [addBook, setaddBook] = useState(false);
  const [formControl, setFormControl] = useState({
    title: "",
    publication: "",
    pages: "",
    isbn: "",
    author: "",
    thumb: "",
    attache: "",
  });
  console.log(formControl);

  let { title, publication, pages, isbn, author, thumb, attache } = formControl;

  const [state] = useContext(LiteratureContext);
  const userId = state.user.id;

  const history = useHistory();

  const [storeLiterature] = useMutation(async () => {
    try {
      const config = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      const formData = new FormData();
      formData.append("title", title);
      formData.append("publication_date", publication);
      formData.append("pages", pages);
      formData.append("isbn", isbn);
      formData.append("author", author);
      formData.append("attache", attache);
      formData.append("thumb", thumb);
      formData.append("userId", userId);

      console.log(formData);

      const res = await API.post("/literature", formData, config);

      setFormControl({
        title: "",
        publication: "",
        pages: "",
        isbn: "",
        author: "",
        thumb: "",
        attache: "",
      });

      document.getElementById("form-literature").reset();

      console.log(`ini res: ${res}`);
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
      <form
        id="form-literature"
        className="my-5"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          className="form-control my-4"
          id="title"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setFormControl({ ...formControl, title: e.target.value });
          }}
        />
        <input
          className="form-control my-4"
          type="date"
          id="publicationDate"
          placeholder="Publication Date"
          value={publication}
          onChange={(e) => {
            setFormControl({ ...formControl, publication: e.target.value });
          }}
        />
        <input
          className="form-control"
          type="number"
          id="pages"
          placeholder="Pages"
          value={pages}
          onChange={(e) => {
            setFormControl({ ...formControl, pages: e.target.value });
          }}
        />
        <input
          type="text"
          className="form-control my-4"
          id="isbn"
          placeholder="ISBN"
          value={isbn}
          onChange={(e) => {
            setFormControl({ ...formControl, isbn: e.target.value });
          }}
        />
        <input
          type="text"
          className="form-control"
          id="author"
          placeholder="Author, e.g. E E Eizky, Astina Haris, Chloe Grace Moretz)"
          value={author}
          onChange={(e) => {
            setFormControl({ ...formControl, author: e.target.value });
          }}
        />
        <div className="d-flex form-control my-4">
          <label>Select Image: </label>
          <input
            type="file"
            className="ml-3"
            onChange={(e) => {
              setFormControl({ ...formControl, thumb: e.target.files[0] });
            }}
          />
        </div>

        <div className="d-flex form-control">
          <label>Attache File: </label>
          <input
            type="file"
            className="ml-3"
            onChange={(e) => {
              setFormControl({ ...formControl, attache: e.target.files[0] });
            }}
          />
        </div>

        <div className="d-flex flex-row-reverse my-4">
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
