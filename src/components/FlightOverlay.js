import React, { useState } from "react";

function FlightOverlay({ onFetchFlight }) {
  const [flightNumber, setFlightNumber] = useState("");

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
      <button onClick={() => onFetchFlight(flightNumber)}>Submit</button>
      <div></div>
      {/* More UI elements as needed */}
    </div>
  );
}

export default FlightOverlay;
