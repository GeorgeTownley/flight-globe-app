// FlightOverlay.js
import React, { useState } from "react";

function FlightOverlay() {
  const [icaoCode, setIcaoCode] = useState(""); // Changed variable name to reflect ICAO code usage
  const [flightData, setFlightData] = useState(null);
  const [error, setError] = useState("");

  const fetchFlightData = () => {
    setError(""); // Clear any previous errors
    if (!icaoCode) {
      setError("Please enter an ICAO code.");
      return;
    }

    // OpenSky Network API endpoint for all states
    const openSkyEndpoint = `https://opensky-network.org/api/states/all?icao24=${icaoCode}`;

    fetch(openSkyEndpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Network response was not ok: " + response.statusText
          );
        }
        return response.json();
      })
      .then((data) => {
        // OpenSky returns an array of states, we are interested in the first one
        const flightInfo = data.states ? data.states[0] : null;
        if (!flightInfo) {
          throw new Error("No data found for this ICAO code.");
        }
        setFlightData(flightInfo); // Save the flight data to state
      })
      .catch((error) => {
        setError(error.message);
        setFlightData(null); // Clear the flight data on error
      });
  };

  return (
    <div
      style={{ position: "absolute", top: "10px", left: "10px", zIndex: 1000 }}
    >
      <input
        type="text"
        value={icaoCode}
        onChange={(e) => setIcaoCode(e.target.value)}
        placeholder="Enter ICAO code"
        style={{ marginRight: "5px" }}
      />
      <button onClick={fetchFlightData}>Fetch Flight</button>
      <div
        style={{ marginTop: "20px", backgroundColor: "white", padding: "10px" }}
      >
        {error && <p style={{ color: "red" }}>{error}</p>}
        {flightData && (
          <pre style={{ maxHeight: "200px", overflowY: "scroll" }}>
            {JSON.stringify(flightData, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}

export default FlightOverlay;
