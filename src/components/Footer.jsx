import React from "react";
import "../resource/css/footer.css";

const Footer = () => {
  const fetchYear = () => {
    let d = new Date();
    return d.getFullYear();
  };
  return (
    <footer className="footer">
      <div className="left footer-item">
        <p className="footer-left">
          {" "}
          &#169; {fetchYear()} Writer - Anik Mandal
        </p>
      </div>
      <div className="center footer-item">Created with React</div>
      <div className="right footer-item">
        <a
          href="https://github.com/anikman98/writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="github">
            <img
              src={require("../resource/images/github.png")}
              alt="Github repo"
            />
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
