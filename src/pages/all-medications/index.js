import { useAuthContext } from "../../hooks/useAuthContext";
import { useRxContext } from "../../hooks/useRxContext";
import { useEffect, useState } from "react";
import SideMenu from "../../components/shared/SideMenu";
import { useRouter } from "next/router";
import { GiLiquidSoap } from "react-icons/gi";
import { IconContext } from "react-icons";
import { FaTablets } from "react-icons/fa6";
import { FaPills } from "react-icons/fa";
// import { ModalComp } from "../../components/Modal";

const AllMedsPage = () => {
  const { dispatch, user } = useAuthContext();
  const { medications, getMedications, getCurrentMedications } = useRxContext();
  const [isLoading, setIsLoading] = useState(false);
  const [calledPush, setCalledPush] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setIsLoading(true);
    if (!user) {
      router.push("/");
      setIsLoading(false);
    } else if (isLoading) {
      router.push("/loading");
      setIsLoading(false);
    } else {
      getMedications();
      setIsLoading(false);
      return;
    }
  }, [dispatch, user]);

  return (
    <div className="flex">
      <div className="w-20 md:w-80 duration-300 bg-neutral relative sidebar-container flex flex-col gap-y-4 bg-sky-100/50">
        <SideMenu />
      </div>
      <div className="bg-slate-50/80 w-full">
        <div className="drawer-content flex flex-col justify-center">
          <section className="w-full flex basis-0 flex-col grow shrink flex-wrap px-6 pb-16 xl:pr-2 mt-8 relative">
            <div className="gap-4">
              <div className="header row-span-1 col-span-2 dashboard-heading">
                <h3 className="mb-4 font-bold text-2xl sm:text-3xl sm:mb-5">
                  Medication History
                </h3>
              </div>
              <section className="flex flex-wrap justify-stretch gap-3 px-5 sm:px-7 sm:gap-5">
                {medications &&
                  medications.map((medication) => (
                    <div className="flex flex-col border p-3 sm:p-5 w-[min(100%,20rem)]">
                      <div className="hidden sm:bg-lime-100 sm:mb-7 sm:flex sm:items-center sm:justify-center">
                        <IconContext.Provider value={{ size: "5rem" }}>
                          <div className="p-5">
                            {medication.medForm === "cream" && <GiLiquidSoap />}
                            {medication.medForm === "tablet" && <FaTablets />}
                            {medication.medForm === "capsule" && <FaPills />}
                          </div>
                        </IconContext.Provider>
                      </div>
                      <div className="flex font-semibold text-base mb-1 sm:mb-3 sm:text-lg">
                        <span>{medication.genericName}</span>
                        {medication.brandName && (
                          <span>/{medication.brandName}</span>
                        )}
                      </div>
                      <div className="flex gap-1 sm:gap-1.5 pb-3 sm:pb-5">
                        <div className="flex gap-1 sm:gap-1.5">
                          <h2>{medication.strength}</h2>
                          <h2>{medication.strengthUnits}</h2>
                        </div>
                        <h2>{medication.medForm}</h2>
                      </div>
                    </div>
                  ))}
                {/* <ModalComp /> */}
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AllMedsPage;
