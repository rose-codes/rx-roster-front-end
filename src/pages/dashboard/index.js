import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import SideMenu from "../../components/shared/SideMenu";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRxContext } from "../../hooks/useRxContext";
import { CalendarCard } from "../../components/CalendarCard";
import CurrentMedsList from "../../components/CurrentMedsList";
import { useRouter } from "next/router";
// import { ModalComp } from "../../components/Modal";

const Dashboard = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const [calledPush, setCalledPush] = useState(true);
  const { medications, dispatch, getCurrentMedications } = useRxContext();
  const [formDisplayed, setFormDisplayed] = useState(false);
  const router = useRouter();

  const handleButtonClick = () => {
    setFormDisplayed(!formDisplayed);
  };

  useEffect(() => {
    if (user) {
      getCurrentMedications();
      console.log("inside dashboard:", medications);
      return;
    } else {
      router.push("/");
      setCalledPush(true);
    }
  }, [dispatch, user]);

  const handleClick = () => {
    logout();
  };

  return (
    <div className="flex">
      <div className="w-20 md:w-80 duration-300 bg-neutral relative sidebar-container flex flex-col gap-y-4 bg-sky-100/50">
        <SideMenu />
      </div>
      <div className="bg-slate-50/80">
        <div className="drawer-content flex flex-col justify-center">
          <section className="max-w-full flex basis-0 flex-col grow shrink flex-nowrap px-6 pb-16 xl:pr-2 mt-8">
            <div className="dashboard-container gap-4">
              <div className="header row-span-1 col-span-2 dashboard-heading">
                <h3 className="mb-4 font-bold text-2xl sm:text-3xl sm:mb-5">
                  Dashboard
                </h3>
              </div>
              <div className="dashboard-card row-start-2 col-start-1 bg-white">
                <div className="db-card-body">
                  <h4 className="mb-3 text-lg sm:text-xl">
                    Current Medications
                  </h4>
                  <div>
                    {medications && (
                      <CurrentMedsList medications={medications} />
                    )}
                  </div>
                </div>
              </div>

              <div className="dashboard-card row-start-2 col-start-2 bg-white">
                <div className="db-card-body">
                  <h4 className="mb-3 text-lg sm:text-xl">
                    Prescription Schedule
                  </h4>
                  {medications && <CalendarCard medications={medications} />}
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* <ModalComp /> */}
      </div>
    </div>
  );
};

export default Dashboard;
