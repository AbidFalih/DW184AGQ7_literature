import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
// import { useMutation } from "react-query";
// import { BookContext } from "../Context/bookContext";
// import { API } from "../Config/api";

const ChangePP = (props) => {
  const [thumb, setFormData] = useState("");
  // const [state, _] = useContext(BookContext);

  // const [patchUser] = useMutation(async () => {
  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };
  //     const body = JSON.stringify({ thumb });
  //     const res = await API.patch(`/user/${state.user.id}`, body, config);

  //     setFormData("");
  //     props.onHide();
  //     props.refetch();
  //     return res;
  //   } catch (err) {
  //     alert(`Error: ${err}`);
  //   }
  // });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // patchUser();
  };
  return (
    <Modal {...props} centered>
      <Modal.Body>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            class="form-control"
            placeholder="Please input your URL image profile"
            value={thumb}
            onChange={(e) => {
              setFormData(e.target.value);
            }}
          />
          <button type="submit" class="btn btn-danger btn-block my-3">
            Change
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ChangePP;
