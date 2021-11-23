import React from "react";
import "./brandIMG.css";

function BrandIMG({ img_name }) {
  return (
    <div className="brand__img">
      <img src={img_name} alt={`${img_name}`} />
    </div>
  );
}

export default BrandIMG;
