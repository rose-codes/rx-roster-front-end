import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllMedsPage from "./pages/AllMedsPage";
import AboutPage from "./pages/AboutPage";
import { RxProvider } from "./context/RxContext";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import NavBar from "./components/shared/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <RxProvider>
      <div className="App">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/all-medications" element={<AllMedsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </RxProvider>
  );
}

export default App;
