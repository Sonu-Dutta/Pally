import React, { useState } from "react";
import "./Project.css";
import projectImg from "../assets/project.png";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Project = () => {
  const [data, setData] = useState({
    name: "name",
    desc: "desc",
  });
  console.log(data);
  return (
    <div className="project-main">
      <h1> Project</h1>

      <div className="content">
        <div className="left">
          <form className="inp-form">
            <TextField
              id="filled-basic"
              onChange={(e) =>
                setData((data) => {
                  return { ...data, name: e.target.value };
                })
              }
              label="Name:"
              variant="filled"
            />
            <TextField
              id="filled-basic"
              onChange={(e) =>
                setData((data) => {
                  return { ...data, desc: e.target.value };
                })
              }
              label="Description:"
              variant="filled"
            />
            <p>Will be shown when choosing a pattern on the robot</p>
            <div className="next">
              <Button variant="contained" size="large">
                Next <ArrowForwardIosIcon className="arrow" />
              </Button>
            </div>
          </form>
        </div>
        <div className="right">
          <img src={projectImg} alt="" width={200} height={200} />
        </div>
      </div>
    </div>
  );
};

export default Project;
