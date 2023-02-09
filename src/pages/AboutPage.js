import { Link } from "react-router-dom";
import Footer from "../components/shared/Footer";
const AboutPage = () => {
  return (
    <div className="about">
      <h1>About This Project</h1>
      <p>This is a React app</p>
      <p>Version: 1.0.0</p>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
      <Footer />
    </div>
  );
};

export default AboutPage;
