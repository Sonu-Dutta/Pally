import { Button } from "@mui/material";
import React from "react";
import HomeImg from "../assets/home.png";
import "../components/Home.css";

function HomeDisplay() {
  return (
    <>
      <div className="homepage">
        <div className="left2">
          <h2>PALLY</h2>
          <h1>Pallet Builder</h1>
          <p>
            Programming your robot palletizer has never been easier. Use this
            easy to use pallet builder to design your 3D pallet in just a few
            minutes, then simply export the file over to your robot palletizer.
          </p>
          <p>Supported robot palletizing platforms:</p>
          <li>Pally</li>
          <li> miniPAL</li>
          <li> GoBot Palletise Solution</li>
          <li> Flexipall</li>
          <li> PAL.co</li>
          <li> PalletBooster2000</li>
          <div className="btns">
            <Button
              variant="contained"
              className="btn1"
              style={{ background: "#112e51" }}
            >
              {" "}
              <span className="btn "> Continue</span>
            </Button>
            <Button variant="outlined" style={{ border: "1px solid #e3e3e3" }}>
              {" "}
              <span className="btn" style={{ color: "#112e51" }}>
                <pre> New Project </pre>
              </span>
            </Button>
            <Button variant="outlined" style={{ border: "1px solid #e3e3e3" }}>
              {" "}
              <span className="btn" style={{ color: "#112e51" }}>
                <pre> Import Project </pre>
              </span>
            </Button>
          </div>
          <h5>
            View Pallet Builder v2.3.2{" "}
            <span className="blue-text">changes</span>{" "}
          </h5>
        </div>
        <div className="right2">
          <img src={HomeImg} alt="" />
        </div>
      </div>
    </>
  );
}

export default HomeDisplay;
