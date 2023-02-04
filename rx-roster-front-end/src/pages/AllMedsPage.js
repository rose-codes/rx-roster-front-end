import { Link } from "react-router-dom";
import CompleteMedHistory from "../components/CompleteMedHistory";
import Footer from "../components/shared/Footer";
const AllMedsPage = () => {
  return (
    <div className="all-meds-page">
      <h1>All Medications</h1>
      <CompleteMedHistory />
      <Footer />
    </div>
  );
};

export default AllMedsPage;
