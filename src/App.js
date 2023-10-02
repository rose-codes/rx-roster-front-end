import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AllMedsPage from "./pages/AllMedsPage";
import AboutPage from "./pages/AboutPage";
import { RxProvider } from "./context/RxContext";
import Dashboard from "./pages/v2/Dashboard";
import NotFound from "./pages/NotFound";
import NavBar from "./components/shared/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap";
import LoginPage from "./pages/v2/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import SignUpPage from "./pages/v2/SignUpPage";
import { useAuthContext } from "./hooks/useAuthContext";
import Footer from "./components/shared/Footer";
import SideNav from "./components/shared/SideNav";
import { NewMedFormPage } from "./pages/v2/NewMedFormPage";

function App() {
  const { user } = useAuthContext();
  return (
    <RxProvider>
      <div className="App">{!user && <NavBar />}</div>
      <Routes>
        <Route
          path="/"
          element={user ? <SideNav /> : <Navigate to="/login" />}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/all-medications" element={<SideNav />} />
        <Route
          path="/login"
          element={!user ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route
          path="/signup"
          element={!user ? <SignUpPage /> : <Navigate to="/" />}
        />
        <Route path="/new-medication" element={<SideNav />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      {user && <Footer />}
    </RxProvider>
  );
}

export default App;
