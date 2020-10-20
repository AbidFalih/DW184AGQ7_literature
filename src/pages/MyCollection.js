import React, { useContext } from "react";
import Book from "../components/Book";
import NavBar from "../components/NavBar";
// import { useQuery } from "react-query";
// import { API } from "../Config/api";
// import { BoxLoading } from "react-loadingg";
// import { BookContext } from "../Context/bookContext";

const MyCollection = () => {
  //   const [state, _] = useContext(BookContext);

  //   const { isLoading, error, data } = useQuery("getBookmarkUser", () =>
  //     API.get(`/bookmark/${state.user.id}`)
  //   );
  //   if (isLoading) return <BoxLoading />;
  //   if (error) return "An error has occured: " + error.message;

  return (
    <div class="px-5 py-2 bg-black">
      <NavBar />
      <div>
        <h3 className="fo-tnr">My Library</h3>
        <div className="row mb-3">
          <Book />
          {/* {data.data.bookmarksUser.bookmarkedBooks.map((book) => (
              <Library book={book} />
            ))} */}
        </div>
      </div>
    </div>
  );
};

export default MyCollection;
