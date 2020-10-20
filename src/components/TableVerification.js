import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const TableVerification = () => {
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
        <tr>
          <td>1</td>
          <td>Budiman Keren</td>
          <td>9182719116192</td>
          <td>Eragon.docx</td>
          <td>Accepted</td>
          <td>
            <FaCheckCircle style={{ color: "green" }} className="ml-5" />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Ikannn Laut</td>
          <td>9182719116192</td>
          <td>Brisingr.docx</td>
          <td>Waiting to be Verified</td>
          <td>
            <button className="btn btn-danger">Cancel</button>{" "}
            <button
              className="btn btn-success"
              //   onClick={() => handleAcc(book.id)}
            >
              Approve
            </button>
          </td>
        </tr>
        {/* {books.data.books.map((book) => (
                <tr>
                  <td>{book.id}</td>
                  <td>{book.user.fullName}</td>
                  <td>{book.isbn}</td>
                  <td>{book.file}</td>
                  <td>{book.status}</td>
                  {book.status == "Approved" ? (
                    <td>
                      <FaCheckCircle
                        style={{ color: "green" }}
                        className="ml-5"
                      />
                    </td>
                  ) : (
                    <td>
                      <button className="btn btn-danger">Cancel</button>{" "}
                      <button
                        className="btn btn-success"
                        onClick={() => handleAcc(book.id)}
                      >
                        Approve
                      </button>
                    </td>
                  )}
                </tr>
              ))} */}
      </tbody>
    </table>
  );
};

export default TableVerification;
