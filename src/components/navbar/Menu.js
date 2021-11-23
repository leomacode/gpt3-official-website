import React from "react";
import Navlink from "./Navlink";
import "./menu.css";
function Menu({ menu_className }) {
  return (
    <div className={menu_className}>
      <Navlink section__name="home" section__location="home" />
      <Navlink section__name="Waht is GPT3" section__location="wgpt3" />
      <Navlink section__name="Open AI" section__location="possibility" />
      <Navlink section__name="Case Studies" section__location="features" />
      <Navlink section__name="Library" section__location="blog" />
    </div>
  );
}

export default Menu;
