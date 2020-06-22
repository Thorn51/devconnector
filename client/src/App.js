import React, { Fragment } from "react";
import Navbar from "../src/components/layout/Navbar";
import Landing from "../src/components/layout/Landing";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Landing />
    </Fragment>
  );
};

export default App;
