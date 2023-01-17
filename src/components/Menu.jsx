import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Menu({ setShow }) {
  return (
    <div>
      <div className="menu-heading">Project data</div>
      <div>
        <div
          className="menu-list"
          onClick={() => {
            setShow("project");
          }}
        >
          <div>Project </div>
          <div>
            <ArrowForwardIosIcon className="arrow" />{" "}
          </div>
        </div>

        <div
          className="menu-list"
          onClick={() => {
            setShow("product");
          }}
        >
          <div>Product </div>
          <div>
            <ArrowForwardIosIcon className="arrow" />{" "}
          </div>
        </div>
        <div
          className="menu-list"
          onClick={() => {
            setShow("pallet");
          }}
        >
          <div>Pallet </div>
          <div>
            <ArrowForwardIosIcon className="arrow" />{" "}
          </div>
        </div>
        <div
          className="menu-list"
          onClick={() => {
            setShow("palletizing");
          }}
        >
          <div>Palletizing </div>
          <div>
            <ArrowForwardIosIcon className="arrow" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
