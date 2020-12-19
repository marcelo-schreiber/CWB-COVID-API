import React from "react";

import Endpoints from "./components/Endpoints";
import FAQ from "./components/FAQ";
import Header from "./components/Header";
import Landing from "./components/Landing";

import "./styles/global.css";

function App() {
  return (
    <>
      <Header />
      <Landing />
      <Endpoints />
      <FAQ />
    </>
  );
}

export default App;
