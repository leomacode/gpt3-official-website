import React from "react";
import "./footer.css";
import Logo from "./../../assets/logo.svg";
import { Linkset } from "./../../components";

function Footer() {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <button type="button">Request Early Access</button>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={Logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <Linkset
          heading="Links"
          link1="Overons"
          link2="Social Media"
          link3="Counters"
          link4="Contact"
        />

        <Linkset
          heading="Company"
          link1="Terms & Conditions"
          link2="Privacy Policy"
          link3="Contact"
        />

        <Linkset
          heading="Get in touch"
          link1="Crechterwoord K12 182 DK Alknjkcb"
          link2="085-132567"
          link3="info@payme.net"
        />
      </div>

      <div className="gpt3__footer-copyright">
        <p>© {new Date().getFullYear()} GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
