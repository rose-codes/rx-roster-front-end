import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import CurrentMedsList from "./components/CurrentMedsList";
import CompleteMedHistory from "./components/CompleteMedHistory";
import NewMedForm from "./components/NewMedForm";
import AboutPage from "./pages/AboutPage";
import { RxProvider } from "./context/RxContext";

function App() {
  const [medications, setMedications] = useState([]);

  // const fetchRx = async () => {
  //   const response = await fetch(`http://localhost:5000/medications`);
  //   console.log("response promise:", response);
  //   const data = await response.json();
  //   console.log(data);
  // };

  const addMed = (newMed) => {
    //make Create Request
    //setMedications([newMed, ...medications])
    console.log(newMed);
  };
  return (
    <RxProvider>
      <Router>
        <div className="App">
          <h1>Rx Roster</h1>
          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <div>
                    <CurrentMedsList />
                    <CompleteMedHistory />
                    <NewMedForm />
                  </div>
                }
              ></Route>
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </RxProvider>
  );
}

export default App;
