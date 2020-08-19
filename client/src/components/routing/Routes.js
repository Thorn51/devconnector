import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import AddExperience from "../profile-forms/AddExperience";
import AddEducation from "../profile-forms/AddEducation";
import Alert from "../layout/Alert";
import CreateProfile from "../profile-forms/CreateProfile";
import Dashboard from "../dashboard/Dashboard";
import EditProfile from "../profile-forms/EditProfile";
import NotFound from "../layout/NotFound";
import PrivateRoute from "./PrivateRoute";
import Post from "../post/Post";
import Posts from "../posts/Posts";
import Profile from "../profile/Profile";
import Profiles from "../Profiles/Profiles";
import Register from "../auth/Register";
import Login from "../auth/Login";

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:id" component={Profile} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/add-experience" component={AddExperience} />
        <PrivateRoute exact path="/add-education" component={AddEducation} />
        <PrivateRoute exact path="/post/:id" component={Post} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
