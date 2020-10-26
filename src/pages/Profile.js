import React, { useState, useContext } from "react";
import { useQuery } from "react-query";
import { API } from "../config/api";
import { BoxLoading } from "react-loadingg";
import { LiteratureContext } from "../context/LiteratureContext";
import ChangePP from "../components/ChangePP";

import NavBar from "../components/NavBar";

import { MdLocationOn, MdMail } from "react-icons/md";
import { FaPhoneAlt, FaTransgender } from "react-icons/fa";
import Literature from "../components/Literature";
import InfoProfile from "../components/InfoProfile";
import { urlAssets } from "../config/api";

const Profile = () => {
  const [changePP, setChangePP] = useState(false);
  const [state, _] = useContext(LiteratureContext);

  const { isLoading, error, data: literatures } = useQuery(
    "getLiteratures",
    () => API.get("/literatures")
  );

  const {
    isLoading: isLoading2,
    error: error2,
    data,
    refetch,
  } = useQuery("getUser", () => API.get(`/user/${state.user.id}`));

  if (isLoading || isLoading2) return <BoxLoading />;
  if (error) return "An error has occured: " + error.message;
  if (error2) return "An error2 has occured: " + error2.message;

  return (
    <div className="container-fluid bg-black h-100vh">
      <NavBar />
      <div className="mx-5 d-flex flex-column">
        <div className="half-page d-flex flex-column my-2">
          <h3 className="fo-tnr">Profile</h3>
          <div className="jumbotron py-4 px-5 d-flex bg-profile">
            <div className="flex-grow-1 my-auto">
              <InfoProfile
                icon={<MdMail className="ic-profile" />}
                valueLabel="Email"
                value={data.data.user.email}
              />
              <InfoProfile
                icon={<FaTransgender className="ic-profile" />}
                valueLabel="Gender"
                value={data.data.user.gender ? "Woman" : "Male"}
              />
              <InfoProfile
                icon={<FaPhoneAlt className="ic-profile" />}
                valueLabel="Mobile Phone"
                value={data.data.user.phone}
              />
              <InfoProfile
                icon={<MdLocationOn className="ic-profile" />}
                valueLabel="Address"
                value={data.data.user.address}
              />
            </div>
            <div className="d-flex align-items-center">
              <div>
                <img
                  className="img-profile-big"
                  src={urlAssets.img + data.data.user.thumb}
                  alt="user"
                />
                <button
                  className="btn btn-block btn-danger mx-auto mt-2"
                  onClick={() => setChangePP(true)}
                >
                  Change Photo Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="my-3 p-0">
          <h3 className="fo-tnr my-3">My Literature</h3>
          <div className="row mb-3">
            {literatures.data.literatures.map((literature) =>
              literature.user.id == state.user.id ? (
                <div style={{ position: "relative" }}>
                  {literature.status != "Approved" && (
                    <div className="no-acc-literature">
                      {literature.status == "Cancelled" ? (
                        <b className="text-danger">Cancelled</b>
                      ) : (
                        <b className="text-warning">Waiting to be Verified</b>
                      )}
                    </div>
                  )}
                  <Literature literature={literature} />
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
      <ChangePP
        show={changePP}
        onHide={() => setChangePP(false)}
        refetch={() => refetch()}
      />
    </div>
  );
};

export default Profile;
