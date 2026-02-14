import React from "react";
import "./FooterLinks.css";

const FooterLinks = ({title}) => {
  return (
    <div className="footer-links">
        <p className="links-item">{title}</p>
    </div>
  );
};

export default FooterLinks;
