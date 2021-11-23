import React from "react";
import "./brand.css";
import { google, slack, atlassian, dropbox, shopify } from "./imports";
import BrandIMG from "./BrandIMG";

function Brand() {
  return (
    <div className="gpt3__brand section__padding">
      <BrandIMG img_name={google} />
      <BrandIMG img_name={slack} />
      <BrandIMG img_name={atlassian} />
      <BrandIMG img_name={dropbox} />
      <BrandIMG img_name={shopify} />
    </div>
  );
}

export default Brand;
