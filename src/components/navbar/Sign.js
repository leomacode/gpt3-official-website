import React from "react";
import "./sign.css";

function Sign({ sign_className }) {
  return (
    <div className={sign_className}>
      <p>Sign In</p>
      <button type="button">sign up</button>
    </div>
  );
}

export default Sign;
