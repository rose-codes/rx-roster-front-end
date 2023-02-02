import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CurrentMedsList from "./components/CurrentMedsList";
import CompleteMedHistory from "./components/CompleteMedHistory";
import NewMedForm from "./components/NewMedForm";
import AboutPage from "./pages/AboutPage";
import { RxProvider } from "./context/RxContext";

function App() {
  const [medications, setMedications] = useState([]);

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
