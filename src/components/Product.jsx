import React, { useState } from "react";
import "./Project.css";
import productImg from "../assets/product.png";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Product = () => {
  const [data, setData] = useState({
    length: "length",
    width: "width",
    height: "height",
    weight: "weight",
  });
  console.log(data);
  return (
    <div className="project-main">
      <h1> Product</h1>

      <div className="content">
        <div className="left">
          <form className="inp-form">
            <TextField
              id="filled-basic"
              onChange={(e) =>
                setData((data) => {
                  return { ...data, length: e.target.value };
                })
              }
              label="Length:"
              variant="filled"
            />
            <TextField
              id="filled-basic"
              onChange={(e) =>
                setData((data) => {
                  return { ...data, width: e.target.value };
                })
              }
              label="Width:"
              variant="filled"
            />
            <TextField
              id="filled-basic"
              onChange={(e) =>
                setData((data) => {
                  return { ...data, height: e.target.value };
                })
              }
              label="Height:"
              variant="filled"
            />
            <TextField
              id="filled-basic"
              onChange={(e) =>
                setData((data) => {
                  return { ...data, weight: e.target.value };
                })
              }
              label="Weight:"
              variant="filled"
            />
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Label orientation"
            />

            <p>(Only use if the label has relevance for the pallet pattern)</p>
            <div className="next">
              <Button variant="contained" size="large">
                Next <ArrowForwardIosIcon className="arrow" />
              </Button>
            </div>
          </form>
        </div>
        <div className="right">
          <img src={productImg} alt="" width={250} height={250} />
          <p>Product dimensions</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
