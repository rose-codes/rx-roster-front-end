import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiGoogledocs } from "react-icons/si";
import { ReactSVG } from "react-svg";
import React from "react";

const Footer = () => {
  return (
    <div data-theme="pastel" className="footer-component">
      <footer className="footer px-10 py-4 bg-neutral text-neutral-content">
        <aside>
          <ReactSVG
            src="/assets/rxLogo.svg"
            className="w-20 h-20 -ml-4 -mb-4"
          />

          <p>
            RxRoster
            <br />A full-stack medication tracker by @rose-codes, circa 2023.
          </p>
        </aside>
        <nav>
          <header className="footer-title">Social</header>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://github.com/rose-codes/rx-roster-front-end"
              className="link"
            >
              <FaGithub size="3em" fill="neutral-content" />
            </a>
            <a href="https://www.linkedin.com/in/rhle" className="link">
              <FaLinkedin size="3em" fill="neutral-content" />
            </a>
            <a
              href="https://drive.google.com/file/d/1JWejS4tYwUeSleWp27hPxvbduM4z5jHT/view?usp=drive_link"
              className="link"
            >
              <SiGoogledocs size="3em" fill="neutral-content" />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
