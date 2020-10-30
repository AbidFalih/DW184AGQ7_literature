import axios from "axios";

// export const API = axios.create({
//   baseURL: "http://localhost:5000/api/v1",
// });
export const API = axios.create({
  baseURL: "https://ma-literature.herokuapp.com/api/v1",
});

export const setAuthToken = (token) => {
  if (token) API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  else delete API.defaults.headers.common["Authorization"];
};

// export const urlAssets = {
//   img: "http://localhost:5000/src/uploads/images/",
//   literature: "http://localhost:5000/src/uploads/literatures/",
// };
export const urlAssets = {
  img: "https://ma-literature.herokuapp.com/src/uploads/images/",
  literature: "https://ma-literature.herokuapp.com/src/uploads/literatures/",
};
