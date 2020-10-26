import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//route & pages
import { PrivateRoute, AdminRoute } from "./components/PrivateRoute";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import Profile from "./pages/Profile";
import MyCollection from "./pages/MyCollection";
import AddLiterature from "./pages/AddLiterature";
import DetailLiteratur from "./pages/DetailLiteratur";
import HomeAdmin from "./pages/HomeAdmin";

//config & context
import { API, setAuthToken } from "./config/api";
import { LiteratureContext } from "./context/LiteratureContext";

//if token available
if (localStorage.token) setAuthToken(localStorage.token);

function App() {
  const [state, dispatch] = useContext(LiteratureContext);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await API.get("/auth");

        dispatch({
          type: "USER_LOADED",
          payload: res.data.user,
        });
      } catch (err) {
        dispatch({
          type: "AUTH_ERROR",
        });
      }
    };

    loadUser();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/search-result" component={SearchResult} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/my-collection" component={MyCollection} />
        <PrivateRoute exact path="/add-literature" component={AddLiterature} />
        <PrivateRoute
          exact
          path="/detail-literature/:literatureId"
          component={DetailLiteratur}
        />
        <AdminRoute exact path="/admin" component={HomeAdmin} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
