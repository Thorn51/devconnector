import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../src/components/layout/Navbar";
import Landing from "../src/components/layout/Landing";
import Login from "../src/components/auth/Login";
import Register from "../src/components/auth/Register";
import { loadUser } from "./actions/auth";
import Dashboard from "../src/components/dashboard/Dashboard";
import CreateProfile from "../src/components/profile-forms/CreateProfile";
import EditProfile from "../src/components/profile-forms/EditProfile";
import PrivateRoute from "../src/components/routing/PrivateRoute";
import AddExperience from "../src/components/profile-forms/AddExperience";
import "./App.css";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Switch>
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/create-profile" component={CreateProfile} />
              <PrivateRoute path="/edit-profile" component={EditProfile} />
              <PrivateRoute path="/add-experience" component={AddExperience} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
