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
import AddEducation from "../src/components/profile-forms/AddEducation";
import Profile from "./components/profile/Profile";
import Profiles from "./components/Profiles/Profiles";
import Posts from "./components/posts/Posts";
import "./App.css";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import Alert from "./components/layout/Alert";

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
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/:id" component={Profile} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
              <PrivateRoute
                exact
                path="/add-experience"
                component={AddExperience}
              />
              <PrivateRoute
                exact
                path="/add-education"
                component={AddEducation}
              />
              <Posts exact path="/posts" component={Posts} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
