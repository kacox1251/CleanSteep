import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RouteSearch from "./pages/routeSearch";
import SavedRoutes from "./pages/savedRoutes";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Header from "./components/Header";

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path={ "/" }>
          <Home />
        </Route>
        <Route exact path={ "/signup"}>
          <Signup />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path="/search">
          <RouteSearch />
        </Route>
        <Route exact path="/routes">
          <SavedRoutes />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
