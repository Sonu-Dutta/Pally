import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectData from "./ProjectData";
import HomeDisplay from "./HomeDisplay";
import PalletDisplay from "./PalletDisplay";

function Page() {
  return (
    <>
      <Router>
        <div className="whole">
          <div className="navbar-wrapper">
            <Navbar />
          </div>

          <Routes>
            <Route path="/" element={<HomeDisplay />} />
            <Route path="/home" element={<HomeDisplay />} />
            <Route path="/projectdata" element={<ProjectData />} />
            <Route path="/pallet" element={<PalletDisplay />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default Page;
