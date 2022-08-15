import React from "react";
import { Link } from "react-router-dom";
import mapImg from "../img/dnd-map.jpg";
import "./Map.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Audio from "./Audio";

const Map = () => {
  return (
    <>
      {/* <Link to="/">&larr; Home</Link> */}
      <Link to="/" className="home-button">
        Home
      </Link>
      <div style={{ height: 540, width: 960, position: "relative", left: 275 }}>
        <TransformWrapper
          defaultScale={100}
          defaultPositionX={1}
          defaultPositionY={1}
        >
          <TransformComponent>
            <div>
              <img src={mapImg} alt="swordfish-map" className="swordfish-map" />
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>
      <Audio />
    </>
  );
};

export default Map;
