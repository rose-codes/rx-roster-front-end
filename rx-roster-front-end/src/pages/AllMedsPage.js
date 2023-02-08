import { Link } from "react-router-dom";
import CompleteMedHistory from "../components/CompleteMedHistory";
import NewMedForm from "../components/NewMedForm";
import Footer from "../components/shared/Footer";
const AllMedsPage = () => {
  return (
    <div>
      <div className="all-meds-page">
        <h1>All Medications</h1>
        <CompleteMedHistory />
        <Footer />
        <div className="new-med-form">
          <NewMedForm />
        </div>
      </div>
    </div>
  );
};

export default AllMedsPage;
