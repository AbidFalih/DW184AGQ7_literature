import React, { useState, useContext } from "react";
import { FaCheckCircle } from "react-icons/fa";

import { LiteratureContext } from "../context/LiteratureContext";
import { useQuery, useMutation } from "react-query";
import { API } from "../config/api";
import { BoxLoading } from "react-loadingg";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";

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
        {literatures.data.literatures.map((literature, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>
              <Link
                to={`/detailUserLiterature/${literature.user.id}`}
                userId={literature.user.id}
              >
                {literature.author}
              </Link>
            </td>
            <td>{literature.isbn}</td>
            <td className="text-primary">{literature.attache}</td>
            <td
              className={
                literature.status == "Approved"
                  ? "text-success"
                  : literature.status == "Cancelled"
                  ? "text-danger"
                  : "text-warning"
              }
            >
              {literature.status}
            </td>
            {literature.status == "Approved" ? (
              <td className="td-center">
                <FaCheckCircle style={{ color: "green" }} />
              </td>
            ) : literature.status == "Cancelled" ? (
              <td className="td-center">
                <MdCancel style={{ color: "red" }} />
              </td>
            ) : (
              <td>
                <button
                  className="btn btn-danger btn-form"
                  onClick={() => handleCancel(literature.id)}
                >
                  Cancel
                </button>{" "}
                <button
                  className="btn btn-success btn-form"
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
