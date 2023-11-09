import React from "react";
import "./App.css";
import GlobeComponent from "./components/GlobeComponent";
import FlightOverlay from "./components/FlightOverlay";

function App() {
  return (
    <div className="App">
      <GlobeComponent />
      <FlightOverlay />
    </div>
  );
}

export default App;
