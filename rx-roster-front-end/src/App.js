import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllMedsPage from "./pages/AllMedsPage";
import AboutPage from "./pages/AboutPage";
import { RxProvider } from "./context/RxContext";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/shared/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap";

function App() {
  return (
    <RxProvider>
      <Router>
        <div className="App">
          <NavBar />
          <h1>Rx Roster</h1>
        </div>
      </Router>
    </RxProvider>
  );
}

export default App;
