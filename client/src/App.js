import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RouteSearch from "./pages/routeSearch";
import SavedRoutes from "./pages/savedRoutes";
import Login from "./pages/login";
import Header from "./components/Header";

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path={["/", "/login"]}>
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
