import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import CurrentMedsList from "../components/CurrentMedsList";
import NewMedForm from "../components/NewMedForm";
import { useAuthContext } from "../hooks/useAuthContext";
import { useRxContext } from "../hooks/useRxContext";
import { CalendarCard } from "../components/CalendarCard";

const createEventsList = (list) => {
  let events = [];
  // console.log("list:", list);
  list.forEach((med) => {
    let medObj = {
      id: med.id,
      title: med.genericName,
      start: "2023-09-26'",
      backgroundColor: "red",
    };
    events.push(medObj);
  });
  return events;
};

const Dashboard = () => {
  const { user } = useAuthContext();
  const { medications, dispatch, getCurrentMedications } = useRxContext();
  const [formDisplayed, setFormDisplayed] = useState(false);

  const handleButtonClick = () => {
    setFormDisplayed(!formDisplayed);
  };

  useEffect(() => {
    if (user) {
      getCurrentMedications();
    }
  }, [dispatch, user]);

  return (
    <section className="max-w-screen-xl flex basis-0 flex-col grow shrink flex-nowrap pb-3.5 mb-16">
      <div className="dashboard-container gap-4">
        <div className="header row-span-1 col-span-2 dashboard-heading">
          <h1 className="mb-3">Welcome Back, {user.firstName}</h1>
        </div>
        <div className="dashboard-card row-start-2 col-start-1">
          <div className="db-card-body">
            <h4 className="mb-3">Current Medications</h4>
            <div>
              {medications && <CurrentMedsList medications={medications} />}
            </div>
          </div>
        </div>

        <div className="dashboard-card row-start-2 col-start-2">
          <div className="db-card-body">
            <h4 className="mb-3">Add a New Medication</h4>
            {formDisplayed && <NewMedForm />}
            <Button onClick={handleButtonClick}>
              {formDisplayed ? "Hide Form" : "Show Form"}
            </Button>
          </div>
        </div>

        <div className="dashboard-card row-start-3 col-start-1">
          <div className="db-card-body">
            <h4 className="mb-3">Prescription Schedule</h4>
            {medications && <CalendarCard medications={medications} />}
          </div>
        </div>
        <div className="dashboard-card row-start-3 col-start-2">
          <div className="db-card-body">
            <h4 className="mb-3">Pharmacies</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
