import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import { useMutation } from "react-query";
import { LiteratureContext } from "../context/LiteratureContext";
import { API, urlAssets } from "../config/api";

const ChangePP = (props) => {
  const [state, dispatch] = useContext(LiteratureContext);
  const [thumb, setThumb] = useState("");
  const [preview, setPreview] = useState(urlAssets.img + state.user.thumb);

  const [patchUser] = useMutation(async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const formData = new FormData();
      formData.append("thumb", thumb, thumb.name);

      const res = await API.patch("/update-photo", formData, config);

      setThumb("");
      props.onHide();
      dispatch({
        type: "CHANGE_PP_SUCCESS",
        payload: res.data.user,
      });
      props.refetch();
      return res;
    } catch (err) {
      alert(`Error: ${err}`);
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    patchUser();
  };
  return (
    <Modal {...props} centered>
      <Modal.Body>
        <form onSubmit={(e) => handleSubmit(e)}>
          {/* <input
            type="text"
            class="form-control"
            placeholder="Please input your URL image profile"
            value={thumb}
            onChange={(e) => {
              setFormData(e.target.value);
            }}
          /> */}
          <input
            type="file"
            className="form-control-file"
            onChange={(e) => {
              setThumb(e.target.files[0]);
              const objectURL = URL.createObjectURL(e.target.files[0]);
              setPreview(objectURL);
            }}
          />
          <button type="submit" class="btn btn-danger btn-block my-3">
            Change
          </button>
        </form>
        <div className="center-all">
          <img
            src={preview}
            className="img-profile-big"
            alt="selected-picture"
          />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ChangePP;
