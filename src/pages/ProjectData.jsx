import React, { useState } from "react";
import Project from "../components/Project";
import Product from "../components/Product";
import Pallet from "../components/Pallet";
import Palletizing from "../components/Palletizing";
import Menu from "../components/Menu";

function ProjectData() {
  const [show, setShow] = useState("project");

  return (
    <div className="whole">
      <div className="menu-wrapper">
        <Menu setShow={setShow} />
      </div>
      <div className="input-compo">
        {show === "project" ? (
          <Project />
        ) : show === "product" ? (
          <Product />
        ) : show === "pallet" ? (
          <Pallet />
        ) : show === "palletizing" ? (
          <Palletizing />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default ProjectData;
