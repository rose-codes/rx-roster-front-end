import { Link } from "react-router-dom";
import CurrentMedsList from "../components/CurrentMedsList";
import Footer from "../components/shared/Footer";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <span>
        <Link to="/about">About</Link>
      </span>
      <span>
        <Link to="/all-medications">All Medications</Link>
      </span>
      <h1>Welcome Back, User</h1>
      <h2>Current Medications</h2>
      <CurrentMedsList />
      <Footer />
    </div>
  );
};

export default Dashboard;
