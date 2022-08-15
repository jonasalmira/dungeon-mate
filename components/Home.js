import React from "react";
import { Link } from "react-router-dom";
import logoGif from "../img/full-logo-with-shadow-and-bg.gif";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div>
        <Link to="/map">
          <img src={logoGif} alt="dungeon-mate" className="main-logo" />
        </Link>
      </div>
    </>
  );
};

export default Home;
