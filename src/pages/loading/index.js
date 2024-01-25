import SideMenu from "../../components/shared/SideMenu";
import { ReactSVG } from "react-svg";

import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex">
      <div className="w-20 md:w-80 duration-300 bg-neutral relative sidebar-container flex flex-col gap-y-4 bg-sky-100/50">
        <SideMenu />
      </div>
      <div className="bg-slate-50/80 w-full">
        <section className="w-full flex basis-0 flex-col grow shrink flex-wrap pb-16 mt-8 relative">
          <div className="flex flex-col justify-center align-items-center text-center mt-28 mb-28 dashboard-heading">
            <span className="font-bold text-3xl sm:text-5xl !leading-[1.5]">
              Loading
            </span>
            <ReactSVG
              src="/assets/rxLogo.svg"
              className="w-1/5 h-1/5 animate-spin"
            />
            <span className="font-bold text-lg sm:text-2xl !leading-[1.5]">
              {`We\'ll be with you in just a moment.`}
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoadingPage;
