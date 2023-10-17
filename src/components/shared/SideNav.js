import { Link, useLocation } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import { CiPillsBottle1 } from "react-icons/ci";
import { FaPills } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { ReactSVG } from "react-svg";
import { MdOutlineDescription } from "react-icons/md";
import { GrLogout } from "react-icons/gr";
import { useState } from "react";
import Dashboard from "../../pages/v2/Dashboard";
import AllMedsPage from "../../pages/AllMedsPage";
import { NewMedFormPage } from "../../pages/v2/NewMedFormPage";

const SideNav = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const Links = [
    { title: "Dashboard", svg: <RxDashboard />, page: "/" },
    {
      title: "All Medications",
      svg: <CiPillsBottle1 />,
      page: "/all-medications",
    },
    {
      title: "Current Medications",
      svg: <FaPills />,
      page: "/current-medications",
    },
    {
      title: "About",
      svg: <MdOutlineDescription />,
      page: "https://github.com/rose-codes/rx-roster-front-end",
    },
    { title: "Logout", svg: <GrLogout />, page: "/" },
  ];

  const handleClick = () => {
    logout();
  };

  return (
    <div className="flex" data-theme="pastel">
      <div
        className={`w-20 md:w-80 duration-300 bg-neutral relative sidebar-container flex flex-col gap-y-4`}
      >
        <div className="side-logo my-8 pl-8">
          <Link
            to="/"
            aria-current="page"
            aria-label="Homepage"
            className="btn btn-ghost !flex flex-0 px-2 justify-self-start items-center"
            data-svelte-h="svelte-pw6yxt"
          >
            <ReactSVG src="/assets/rxLogo.svg" className="w-12 h-12 -ml-6" />
            <div className="font-title text-xl md:text-3xl">
              <span className="hidden md:inline-flex text-color-neutral-content`}">
                <span className="capitalize">Rx</span>
                <span className="capitalize">Roster</span>
              </span>
            </div>
          </Link>
        </div>
        <ul>
          {Links.map((link, index) => {
            return (
              <li className="my-3">
                <Link
                  to={link.page}
                  className="navbar-link-content flex gap-x-4 justify-self-start items-center font-title text-md md:text-lg"
                  data-sveltekit-preload-data="hover"
                >
                  <span>{link.svg}</span>
                  <span className="hidden md:inline-flex">{link.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="">
        <div className="drawer-content flex flex-col justify-center">
          {user && location.pathname === "/all-medications" && <AllMedsPage />}
          {user && location.pathname === "/" && <Dashboard />}
          {user && location.pathname === "/new-medication" && (
            <NewMedFormPage />
          )}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
