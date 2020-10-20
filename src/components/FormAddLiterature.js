import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
// import { useHistory } from "react-router-dom";
// import { useQuery, useMutation } from "react-query";

// import { API } from "../Config/api";
// import { BookContext } from "../Context/bookContext";

import ModalNotif from "./ModalNotif";
// import { BoxLoading } from "react-loadingg";

const FormAddLiterature = () => {
  const [addBook, setaddBook] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    publication: "",
    pages: "",
    isbn: "",
    author: "",
    thumb: "",
    file: "",
  });

  let { title, publication, pages, isbn, author, thumb, file } = formData;

  // const [state] = useContext(BookContext);
  // const userId = state.user.id;
  // console.log(`ini userId: ${userId}`);

  // const history = useHistory();

  // const [storeBook] = useMutation(async () => {
  //   try {
  //     if (thumb == "")
  //       thumb =
  //         "http://uploader.nusaserver.com/server/php/files/Thin-Book-3D-Template-Thin.jpg";

  //     const config = {
  //       headers: { "Content-Type": "application/json" },
  //     };
  //     const body = JSON.stringify({
  //       title,
  //       thumb,
  //       publication,
  //       categoryId,
  //       userId,
  //       pages,
  //       isbn,
  //       aboutBook,
  //       file,
  //     });
  //     const res = await API.post("/book", body, config);

  //     setFormData({
  //       title: "",
  //       publication: "",
  //       categoryId: "",
  //       pages: "",
  //       isbn: "",
  //       aboutBook: "",
  //       thumb: "",
  //       file: "",
  //     });

  //     return res;
  //   } catch (err) {
  //     alert(`Error creating book: ${err}`);
  //   }
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    // storeBook();
  };

  // const { isLoading, error, data: categories } = useQuery("getCategories", () =>
  //   API.get("/categories")
  // );

  // if (isLoading) return <BoxLoading />;
  // if (error) return "An error has occured: " + error.message;

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
          value={file}
          onChange={(e) => {
            setFormData({ ...formData, file: e.target.value });
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
