import React from "react";
import "./linkset.css";

function Linkset({ heading, link1, link2, link3, link4 = "" }) {
  return (
    <div className="gpt3__footer-linkset">
      <h4>{heading}</h4>
      <p>{link1}</p>
      <p>{link2}</p>
      <p>{link3}</p>
      <p>{link4}</p>
    </div>
  );
}

export default Linkset;
