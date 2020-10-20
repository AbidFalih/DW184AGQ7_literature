import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import Profile from "./pages/Profile";
import MyCollection from "./pages/MyCollection";
import AddLiterature from "./pages/AddLiterature";
import DetailLiteratur from "./pages/DetailLiteratur";
import HomeAdmin from "./pages/HomeAdmin";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/search-result" component={SearchResult} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/my-collection" component={MyCollection} />
        <Route exact path="/add-literature" component={AddLiterature} />
        <Route exact path="/detail-literature" component={DetailLiteratur} />
        <Route exact path="/admin" component={HomeAdmin} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
