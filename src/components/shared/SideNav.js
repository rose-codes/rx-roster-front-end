import { Link, useLocation } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import Dashboard from "../../pages/v2/Dashboard";
import { CiPillsBottle1 } from "react-icons/ci";
import { FaPills } from "react-icons/fa6";
import { FcAbout } from "react-icons/fc";
import { RxDashboard } from "react-icons/rx";
import AllMedsPage from "../../pages/AllMedsPage";
import { ReactSVG } from "react-svg";
import { MdOutlineDescription } from "react-icons/md";

const SideNav = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const location = useLocation();

  const handleClick = () => {
    logout();
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {user && location.pathname === "/all-medications" && <AllMedsPage />}
        {user && location.pathname === "/" && <Dashboard />}
      </div>
      <div
        data-theme="pastel"
        className="drawer-side z-40 scroll-smooth scroll-pt-20 bg-neutral"
      >
        <label
          htmlFor="drawer"
          className="drawer-overlay"
          aria-label="Close menu"
        ></label>
        <aside className="w-80">
          {/* logo */}
          <div className="side-logo">
            <Link
              to="/"
              aria-current="page"
              aria-label="Homepage"
              className="btn btn-ghost !flex flex-0 px-2"
              data-svelte-h="svelte-pw6yxt"
            >
              <ReactSVG src="/assets/rxLogo.svg" className="w-12 h-12 -ml-2" />
              <div class="font-title text-lg md:text-2xl">
                <span className="text-color-neutral-content">RxRoster</span>
              </div>
            </Link>
          </div>
          {/* Hidden Nav */}
          <ul className="menu menu-horizontal w-full justify-between px-4 py-2 lg:hidden">
            <li>
              <Link
                to="/"
                className="navbar-link-content"
                data-sveltekit-preload-data="hover"
              >
                <span>
                  <RxDashboard />
                </span>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/all-medications"
                className="navbar-link-content"
                data-sveltekit-preload-data="hover"
              >
                <span>
                  <FaPills />
                </span>
                <span>Current Medications</span>
              </Link>
            </li>
            <li>
              <Link
                to="/all-medications"
                className="navbar-link-content"
                data-sveltekit-preload-data="hover"
              >
                <span>
                  <CiPillsBottle1 />
                </span>
                <span>All Medications</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="navbar-link-content"
                data-sveltekit-preload-data="hover"
              >
                <span>
                  <MdOutlineDescription fill="neutral-content" />
                </span>
                <span>About</span>
              </Link>
            </li>
          </ul>
          <div className="h-4"></div>
          {/* Large NavBar */}
          <ul className="menu menu-sm lg:menu-md px-4 py-0">
            {/* Sidebar content here */}
            <li>
              <Link
                to="/"
                className="navbar-link-content"
                data-sveltekit-preload-data="hover"
              >
                <span>
                  <RxDashboard />
                </span>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/all-medications"
                className="navbar-link-content"
                data-sveltekit-preload-data="hover"
              >
                <span>
                  <CiPillsBottle1 />
                </span>
                <span>All Medications</span>
              </Link>
            </li>
            <li>
              <Link
                to="/all-medications"
                className="navbar-link-content"
                data-sveltekit-preload-data="hover"
              >
                <span>
                  <FaPills />
                </span>
                <span>Current Medications</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="navbar-link-content"
                data-sveltekit-preload-data="hover"
              >
                <span>
                  <MdOutlineDescription fill="neutral-content" />
                </span>
                <span>About</span>
              </Link>
            </li>
          </ul>
          <ul className="menu menu-sm lg:menu-md px-4 py-0"></ul>
          <div className="bg-base-100 pointer-events-none sticky bottom-0 flex h-40 [mask-image:linear-gradient(transparent,#000000)]"></div>
        </aside>
      </div>
    </div>
  );
};

export default SideNav;
