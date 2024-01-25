import { CiPillsBottle1 } from "react-icons/ci";
import { FaPills } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { ReactSVG } from "react-svg";
import { MdOutlineDescription } from "react-icons/md";
import { GrLogout } from "react-icons/gr";
import Link from "next/link";
import { useLogout } from "../../hooks/useLogout";

const SideMenu = () => {
  const { logout } = useLogout();
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
  ];

  const handleClick = () => {
    logout();
  };

  return (
    <>
      <div className="side-logo my-8 pl-8">
        <Link
          href="/"
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
            <li className="my-3 ml-3 sm:ml-6">
              <Link
                href={link.page}
                className="navbar-link-content flex gap-x-4 justify-self-start items-center font-title text-md md:text-lg"
                data-sveltekit-preload-data="hover"
              >
                <span>{link.svg}</span>
                <span className="hidden md:inline-flex">{link.title}</span>
              </Link>
            </li>
          );
        })}
        <li>
          <button
            className="navbar-link-content flex gap-x-4 justify-self-start items-center font-title text-md md:text-lg ml-3 sm:ml-6"
            onClick={() => handleClick()}
          >
            <span>
              <GrLogout />
            </span>
            <span className="hidden md:inline-flex">Logout</span>
          </button>
        </li>
      </ul>
    </>
  );
};

export default SideMenu;
