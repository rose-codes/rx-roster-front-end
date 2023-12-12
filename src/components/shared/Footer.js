import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiGoogledocs } from "react-icons/si";
import { ReactSVG } from "react-svg";
import React from "react";

const Footer = () => {
  return (
    <div data-theme="pastel" className="footer-component">
      <footer className="footer px-10 py-2 bg-neutral text-neutral-content grid grid-cols-2">
        <aside className="flex flex-col">
          <ReactSVG src="/assets/rxLogo.svg" className="w-20 h-20 -ml-4" />

          <h3 className="font-bold mt-1 sm:mt-3">
            RxRoster
            <br className="font-normal" />A full-stack medication tracker by
            @rose-codes, circa 2023.
          </h3>
        </aside>
        <nav className="flex flex-col justify-center">
          <header className="font-bold">Social</header>
          <div className="flex gap-4 sm:gap-5">
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
