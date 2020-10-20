import React, { createContext, useReducer } from "react";

export const LiteratureContext = createContext();

const initialState = {
  literatures: [],
  isLogin: false,
  isAdmin: false || localStorage.getItem("isAdmin"),
  user: null,
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "USER_LOADED":
      return {
        ...state,
        isLogin: true,
        user: action.payload,
        loading: false,
      };
    case "AUTH_ERROR":
    case "LOGIN_FAIL":
      return {
        ...state,
        isLogin: false,
        user: null,
        loading: false,
      };
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isLogin: true,
        loading: false,
      };
    case "ADMIN":
      localStorage.setItem("isAdmin", true);
      return {
        ...state,
        isAdmin: true,
      };
    case "LOGOUT":
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("token");
      return {
        ...state,
        isLogin: false,
        isAdmin: false,
        user: null,
      };
    default:
      throw new Error();
  }
};

export const LiteratureContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LiteratureContext.Provider value={[state, dispatch]}>
      {props.children}
    </LiteratureContext.Provider>
  );
};
