// FlightOverlay.js
import React, { useState } from "react";

function FlightOverlay() {
  const [flightNumber, setFlightNumber] = useState("");
  const [flightData, setFlightData] = useState(null);
  const [error, setError] = useState("");

  const fetchFlightData = () => {
    setError(""); // Clear any previous errors
    if (!flightNumber) {
      setError("Please enter a flight number.");
      return;
    }

    // This endpoint should match the proxy endpoint set up on your server
    const proxyEndpoint = `/api/fetch-flight?flight_iata=${flightNumber.toUpperCase()}`;

    fetch(proxyEndpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Network response was not ok: " + response.statusText
          );
        }
        return response.json();
      })
      .then((data) => {
        if (data.error) {
          throw new Error(data.error.info);
        }
        setFlightData(data); // Save the flight data to state
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
        value={flightNumber}
        onChange={(e) => setFlightNumber(e.target.value)}
        placeholder="Enter flight number"
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
