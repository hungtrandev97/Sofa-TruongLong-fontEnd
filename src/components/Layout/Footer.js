import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <span>
        &copy;&nbsp;
        {year}
        &nbsp;-&nbsp;SOFA TRƯỜNG LONG
      </span>
    </footer>
  );
}
export default Footer;
