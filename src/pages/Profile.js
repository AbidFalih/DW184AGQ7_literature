import React, { useState, useContext } from "react";
// import { useQuery } from "react-query";
// import { API } from "../Config/api";
// import { BoxLoading } from "react-loadingg";
// import { BookContext } from "../Context/bookContext";
import ChangePP from "../components/ChangePP";

import NavBar from "../components/NavBar";

import { MdLocationOn, MdMail } from "react-icons/md";
import { FaPhoneAlt, FaTransgender } from "react-icons/fa";
import Book from "../components/Book";
import InfoProfile from "../components/InfoProfile";

const Profile = () => {
  const [changePP, setChangePP] = useState(false);
  // const [state, _] = useContext(BookContext);

  // const { isLoading, error, data: books } = useQuery("getBooks", () =>
  //   API.get("/books")
  // );

  // const { isLoading: isLoading2, error: error2, data, refetch } = useQuery(
  //   "getUser",
  //   () => API.get(`/user/${state.user.id}`)
  // );

  // if (isLoading || isLoading2) return <BoxLoading />;
  // if (error) return "An error has occured: " + error.message;
  // if (error2) return "An error2 has occured: " + error2.message;

  return (
    <div class="px-5 py-2 bg-black">
      <NavBar />
      <div class="p-2">
        <div className="d-flex flex-column">
          <div className="half-page d-flex flex-column my-3">
            <h3 className="fo-tnr">Profile</h3>
            <div className="jumbotron p-0 py-4 px-5 d-flex bg-profile">
              <div className="flex-grow-1 my-auto">
                {/* {data.data.user.email} */}
                <InfoProfile
                  icon={<MdMail />}
                  valueLabel="Email"
                  value="email-dummy@gmail.com"
                />
                <InfoProfile
                  icon={<MdMail />}
                  valueLabel="Gender"
                  value="gender-dummy-male"
                />
                <InfoProfile
                  icon={<MdMail />}
                  valueLabel="Mobile Phone"
                  value="phone-dummy-089671826452"
                />
                <InfoProfile
                  icon={<MdMail />}
                  valueLabel="Address"
                  value="address-dummy-Jawa Timur"
                />
              </div>
              <div className="m-2 d-flex flex-column">
                <img
                  className="img-profile-big"
                  src="http://uploader.nusaserver.com/server/php/files/soompi-28b1304617c4ff994f12a840b309edfc_750x500.jpg"
                  // src={data.data.user.thumb}
                  alt="big-chloe"
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
          <div className="my-2">
            <h3 className="fo-tnr my-3">My Literature</h3>
            <div className="row mb-3">
              <Book />
              {/* {books.data.books.map((book) =>
                book.user.id == state.user.id ? <Library book={book} /> : ""
              )} */}
            </div>
          </div>
        </div>
      </div>
      <ChangePP
        show={changePP}
        onHide={() => setChangePP(false)}
        // refetch={() => refetch()}
      />
    </div>
  );
};

export default Profile;
