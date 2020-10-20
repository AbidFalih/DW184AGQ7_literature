import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { LiteratureContext } from "../context/LiteratureContext";
import { BoxLoading } from "react-loadingg";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const [state] = useContext(LiteratureContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        state.loading ? (
          <BoxLoading />
        ) : state.isLogin ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export const AdminRoute = ({ component: Component, ...rest }) => {
  const [state] = useContext(LiteratureContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        state.loading ? (
          <BoxLoading />
        ) : state.isAdmin ? (
          <Component {...props} />
        ) : (
          <Redirect to="/home" />
        )
      }
    />
  );
};
