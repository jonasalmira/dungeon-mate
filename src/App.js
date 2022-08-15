import React from "react";
import Home from "../components/Home";
import Map from "../components/Map";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/map" element={<Map />}></Route>
      </Routes>
    </>
  );
};

export default App;
