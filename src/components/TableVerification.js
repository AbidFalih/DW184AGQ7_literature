import React, { useState, useContext } from "react";
import { FaCheckCircle } from "react-icons/fa";

import { LiteratureContext } from "../context/LiteratureContext";
import { useQuery, useMutation } from "react-query";
import { API } from "../config/api";
import { BoxLoading } from "react-loadingg";
import { MdCancel } from "react-icons/md";

const TableVerification = () => {
  const [, dispatch] = useContext(LiteratureContext);
  const [status, setStatus] = useState("");
  const [literatureId, setLiteratureId] = useState(null);

  const [patchLiterature] = useMutation(async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify({ status });
      const res = await API.patch(`/literature/${literatureId}`, body, config);

      refetch();
      return res;
    } catch (err) {
      alert(`Error: ${err}`);
    }
  });

  const {
    isLoading,
    error,
    data: literatures,
    refetch,
  } = useQuery("getLiteratures", () => API.get("/literatures"));

  const handleAcc = async (idLiterature) => {
    await setStatus("Approved");
    await setLiteratureId(idLiterature);
    patchLiterature();
  };
  const handleCancel = async (idLiterature) => {
    await setStatus("Cancelled");
    await setLiteratureId(idLiterature);
    patchLiterature();
  };

  if (isLoading) return <BoxLoading />;
  if (error) return "An error has occured: " + error.message;

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Users or Author</th>
          <th scope="col">ISBN</th>
          <th scope="col">Literature</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {literatures.data.literatures.map((literature) => (
          <tr>
            <td>{literature.id}</td>
            <td>{literature.author}</td>
            <td>{literature.isbn}</td>
            <td>{literature.attache}</td>
            <td>{literature.status}</td>
            {literature.status == "Approved" ? (
              <td>
                <FaCheckCircle style={{ color: "green" }} className="ml-5" />
              </td>
            ) : literature.status == "Cancelled" ? (
              <MdCancel style={{ color: "red" }} className="ml-5" />
            ) : (
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleCancel(literature.id)}
                >
                  Cancel
                </button>{" "}
                <button
                  className="btn btn-success"
                  onClick={() => handleAcc(literature.id)}
                >
                  Approve
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableVerification;
