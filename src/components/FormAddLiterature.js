import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "react-query";

import { API } from "../config/api";
import { LiteratureContext } from "../context/LiteratureContext";

import ModalNotif from "./ModalNotif";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const FormAddLiterature = () => {
  const [addBook, setaddBook] = useState(false);
  const [loading, setLoading] = useState(false);

  const initialValues = {
    title: "",
    publication: "",
    pages: "",
    isbn: "",
    author: "",
    attache: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required(),
    publication: Yup.date().required().nullable(),
    pages: Yup.number().required(),
    isbn: Yup.number().required(),
    author: Yup.string().required(),
    attache: Yup.string().required(),
  });

  const onSubmit = (values) => {
    console.log("Form AddLiterature", values);
    storeLiterature(values);
  };

  const [formControl, setFormControl] = useState({
    title: "",
    publication: "",
    pages: "",
    isbn: "",
    author: "",
    thumb: "literature/thumbs/lite-1_xpevyw.png",
    attache: "",
  });

  let { title, publication, pages, isbn, author, thumb, attache } = formControl;

  const [state] = useContext(LiteratureContext);
  const userId = state.user.id;

  const history = useHistory();

  const [storeLiterature] = useMutation(async (values) => {
    // let { title, publication, pages, isbn, author, attache } = values;
    // let thumb = "literature/thumbs/lite-1_xpevyw.png";
    try {
      setLoading(true);
      const config = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      const formData = new FormData();
      await formData.append("title", title);
      await formData.append("publication_date", publication);
      await formData.append("pages", pages);
      await formData.append("isbn", isbn);
      await formData.append("author", author);
      await formData.append("attache", attache);
      await formData.append("thumb", thumb);
      await formData.append("userId", userId);

      console.log("Form Data", formData);

      const res = await API.post("/literature", formData, config);

      setLoading(false);
      setFormControl({
        title: "",
        publication: "",
        pages: "",
        isbn: "",
        author: "",
        thumb: "literature/thumbs/lite-1_xpevyw.png",
        attache: "",
      });

      document.getElementById("form-literature").reset();

      return res;
    } catch (err) {
      setLoading(false);
      alert(`Error creating literature: ${err}`);
      console.log("Error upload", err);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    storeLiterature();
  };

  return (
    <div className="m-0 p-0">
      <h3 className="fo-tnr">Add Literature</h3>
      {/* <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form className="mt-4" id="form-literature">
              <FormikControl
                control="input"
                type="text"
                name="title"
                placeholder="Title"
                marginY="my-3"
              />
              <FormikControl
                control="date"
                type="date"
                name="publication"
                placeholder="Publication Date"
                marginY="my-3"
              />
              <FormikControl
                control="input"
                type="text"
                name="pages"
                placeholder="Pages"
                marginY="my-3"
              />
              <FormikControl
                control="input"
                type="text"
                name="isbn"
                placeholder="ISBN"
                marginY="my-3"
              />
              <FormikControl
                control="input"
                type="text"
                name="author"
                placeholder="Author"
                marginY="my-3"
              />
              <FormikControl
                control="file"
                type="file"
                name="attache"
                placeholder="Attache Literature"
                marginY="my-3"
              />

              <div className="d-flex flex-row-reverse my-3">
                <button
                  type="submit"
                  disabled={!formik.isValid}
                  className="btn btn-danger m-lg-0 p-2"
                  onClick={() => setaddBook(true)}
                >
                  Add Literature
                </button>
              </div>
            </Form>
          );
        }}
      </Formik> */}
      <form
        id="form-literature"
        className="mt-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          className="form-control my-3 custom-input"
          id="title"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setFormControl({ ...formControl, title: e.target.value });
          }}
        />
        <input
          className="form-control custom-input"
          type="date"
          id="publicationDate"
          placeholder="Publication Date"
          value={publication}
          onChange={(e) => {
            setFormControl({ ...formControl, publication: e.target.value });
          }}
        />
        <input
          className="form-control my-3 custom-input"
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
          className="form-control custom-input"
          id="isbn"
          placeholder="ISBN"
          value={isbn}
          onChange={(e) => {
            setFormControl({ ...formControl, isbn: e.target.value });
          }}
        />
        <input
          type="text"
          className="form-control my-3 custom-input"
          id="author"
          placeholder="Author, e.g. E E Eizky, Astina Haris, Chloe Grace Moretz)"
          value={author}
          onChange={(e) => {
            setFormControl({ ...formControl, author: e.target.value });
          }}
        />
        {/* <div className="d-flex align-items-center">
          <label className="form-control custom-input my-0 label-form">
            Select Image:{" "}
          </label>
          <input
            type="file"
            className="ml-3"
            name="thumb"
            onChange={(e) => {
              setFormControl({ ...formControl, thumb: e.target.files[0] });
            }}
          />
        </div> */}

        <div className="d-flex my-3 align-items-center">
          <label className="form-control custom-input my-0 label-form">
            Attache File :{" "}
          </label>
          <input
            type="file"
            className="ml-3"
            name="file"
            onChange={(e) => {
              setFormControl({ ...formControl, attache: e.target.files[0] });
            }}
          />
        </div>

        <div className="d-flex flex-row-reverse my-3">
          <button
            className="btn btn-danger m-lg-0 p-2"
            onClick={() => setaddBook(true)}
          >
            {loading ? "loading.." : "Add Literature"}
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
