import React from "react";
import "./navlink.css";
function Navlink({ section__name, section__location }) {
  return (
    <p>
      <a href={`#${section__location}`}>{section__name}</a>
    </p>
  );
}

export default Navlink;
