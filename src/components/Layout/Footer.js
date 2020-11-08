import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <span>
        &copy;&nbsp;
        {year}
        &nbsp;-&nbsp;SwagSoft
      </span>
    </footer>
  );
}
export default Footer;
