import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import InfoDetail from "../components/InfoDetail";
import NavBar from "../components/NavBar";
import { useMutation, useQuery } from "react-query";
import { LiteratureContext } from "../context/LiteratureContext";
import { API, urlAssets } from "../config/api";
import { BoxLoading } from "react-loadingg";
import ModalNotif from "../components/ModalNotif";

import {
  BsBookmarkDash,
  BsBookmarkPlus,
  BsCloudDownload,
} from "react-icons/bs";

const DetailLiteratur = () => {
  const { literatureId } = useParams();
  const [state, _] = useContext(LiteratureContext);
  const userId = state.user.id;

  const [addToCollection, setAddToCollection] = useState(false);
  const [removeFromCollection, setRemoveFromCollection] = useState(false);

  const [storeCollection] = useMutation(async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify({ userId, literatureId });
      const res = await API.post("/collection", body, config);

      refetch();
      return res;
    } catch (err) {
      console.log(err);
    }
  });

  const [deleteCollection] = useMutation(async () => {
    try {
      const res = await API.delete(`/collection/${userId}/${literatureId}`);
      refetch();
    } catch (err) {
      console.log(err);
    }
  });

  const {
    isLoading,
    error,
    data: collectioned,
    refetch,
  } = useQuery("getACollection", () =>
    API.get(`collection/${userId}/${literatureId}`)
  );

  const {
    isLoading: isLoading2,
    error: error2,
    data: detailLiterature,
  } = useQuery("getDetailLiterature", () =>
    API.get(`literature/${literatureId}`)
  );

  if (isLoading || isLoading2) return <BoxLoading />;
  if (error) return "An error has occured: " + error.message;
  if (error2) return "An error has occured: " + error.message;

  return (
    <div className="container-fluid bg-black h-100vh">
      <NavBar />
      <div class="mx-5 mt-3 d-flex bd-highlight">
        <div class="p-2">
          <img
            src={urlAssets.img + detailLiterature.data.literature.thumb}
            alt="detail-literature"
            className="card-img-top detail-thumb"
          />
        </div>
        <div class="ml-4 flex-grow-1">
          <InfoDetail
            labelValue={
              <h1 className="mb-0 fo-tnr">
                {detailLiterature.data.literature.title}
              </h1>
            }
            value={
              <h6 className="mt-0 mb-4 text-muted font-weight-normal">
                {detailLiterature.data.literature.author}
              </h6>
            }
          />
          <InfoDetail
            labelValue={<h6 className="mb-0 mt-5 pb-0">Publication date</h6>}
            value={
              <small className="text-muted">
                {detailLiterature.data.literature.publication_date}
              </small>
            }
          />
          <InfoDetail
            labelValue={<h6 className="mb-0 mt-4 pb-0">Pages</h6>}
            value={
              <small className="text-muted">
                {detailLiterature.data.literature.pages}
              </small>
            }
          />
          <InfoDetail
            labelValue={<h6 className="mb-0 mt-4 pb-0 fo-red">ISBN</h6>}
            value={
              <small className="text-muted">
                {detailLiterature.data.literature.isbn}
              </small>
            }
          />
          <button
            className="btn btn-danger mt-5"
            onClick={() =>
              window.open(
                urlAssets.literature + detailLiterature.data.literature.attache
              )
            }
          >
            Download &nbsp;&nbsp;
            <BsCloudDownload />
          </button>
        </div>
        <div class="p-2 bd-highlight">
          {collectioned.data.selectedLiterature ? (
            <button
              className="btn btn-danger"
              onClick={() => {
                setRemoveFromCollection(true);
                deleteCollection();
              }}
            >
              Remove My Collection &nbsp;&nbsp;
              <BsBookmarkDash />
            </button>
          ) : (
            <button
              className="btn btn-danger"
              onClick={() => {
                setAddToCollection(true);
                storeCollection();
              }}
            >
              Add My Collection &nbsp;&nbsp;
              <BsBookmarkPlus />
            </button>
          )}
        </div>
      </div>
      <ModalNotif
        show={addToCollection}
        onHide={() => {
          setAddToCollection(false);
        }}
        message="Successfully add this Literature to your Collection"
      />

      <ModalNotif
        show={removeFromCollection}
        onHide={() => {
          setRemoveFromCollection(false);
        }}
        message="Successfully removee this Literature from your Collection"
      />
    </div>
  );
};

export default DetailLiteratur;
