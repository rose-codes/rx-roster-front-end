import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllMedsPage from "./pages/AllMedsPage";
import AboutPage from "./pages/AboutPage";
import { RxProvider } from "./context/RxContext";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <RxProvider>
      <Router>
        <div className="App">
          <h1>Rx Roster</h1>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Dashboard />}></Route>
              <Route path="/about" element={<AboutPage />} />
              <Route path="/all-medications" element={<AllMedsPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </Router>
    </RxProvider>
  );
}

export default App;
