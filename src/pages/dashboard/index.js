import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import { CiPillsBottle1 } from "react-icons/ci";
import { FaPills } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { ReactSVG } from "react-svg";
import { MdOutlineDescription } from "react-icons/md";
import { GrLogout } from "react-icons/gr";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRxContext } from "../../hooks/useRxContext";
import { CalendarCard } from "../../components/CalendarCard";
import CurrentMedsList from "../../components/CurrentMedsList";
import { useRouter } from "next/router";

const Dashboard = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const [open, setOpen] = useState(true);
  const { medications, dispatch, getCurrentMedications } = useRxContext();
  const [formDisplayed, setFormDisplayed] = useState(false);
  const router = useRouter();

  const handleButtonClick = () => {
    setFormDisplayed(!formDisplayed);
  };

  useEffect(() => {
    if (user) {
      getCurrentMedications();
    } else {
      router.push("/");
    }
  }, [dispatch, user]);
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
              <li className="my-3">
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
            <button onClick={() => handleClick()}>
              Logout <GrLogout />
            </button>
          </li>
        </ul>
      </div>
      <div className="">
        <div className="drawer-content flex flex-col justify-center">
          <section className="max-w-full flex basis-0 flex-col grow shrink flex-nowrap px-6 pb-16 xl:pr-2 pt-6">
            <div className="dashboard-container gap-4">
              <div className="header row-span-1 col-span-2 dashboard-heading">
                <h3 className="mb-3 font-bold">Dashboard</h3>
              </div>
              <div className="dashboard-card row-start-2 col-start-1">
                <div className="db-card-body">
                  <h4 className="mb-3">Current Medications</h4>
                  <div>
                    {medications && (
                      <CurrentMedsList medications={medications} />
                    )}
                  </div>
                </div>
              </div>

              <div className="dashboard-card row-start-2 col-start-2">
                <div className="db-card-body">
                  <h4 className="mb-3">Prescription Schedule</h4>
                  {medications && <CalendarCard medications={medications} />}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
