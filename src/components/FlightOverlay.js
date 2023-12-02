import React, { useState } from "react";

function FlightOverlay() {
  const [callsign, setCallsign] = useState("");
  const [flightInfo, setFlightInfo] = useState(null);
  const [error, setError] = useState("");

  const fetchFlightData = () => {
    setError(""); // Clear any previous errors
    if (!callsign) {
      setError("Please enter a callsign.");
      return;
    }

    // OpenSky API endpoint to fetch data by callsign
    const openSkyEndpoint = `https://opensky-network.org/api/states/all?callsign=${callsign
      .toUpperCase()
      .trim()}`;

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
        const flightData = data.states?.find(
          (state) => state[1]?.trim() === callsign.toUpperCase().trim()
        );
        if (!flightData) {
          throw new Error("No data found for this callsign.");
        }
        // Map the response data to a more readable format
        const formattedFlightInfo = {
          icao24: flightData[0],
          callsign: flightData[1]?.trim(),
          origin_country: flightData[2],
          time_position: new Date(flightData[3] * 1000).toLocaleString(),
          last_contact: new Date(flightData[4] * 1000).toLocaleString(),
          longitude: flightData[5],
          latitude: flightData[6],
          baro_altitude: flightData[7],
          on_ground: flightData[8],
          velocity: flightData[9],
          true_track: flightData[10],
          vertical_rate: flightData[11],
          geo_altitude: flightData[13],
          spi: flightData[15],
          position_source: flightData[16],
        };
        setFlightInfo(formattedFlightInfo); // Save the formatted flight data to state
      })
      .catch((error) => {
        setError(error.message);
        setFlightInfo(null); // Clear the flight data on error
      });
  };

  return (
    <div className="flight-overlay">
      <input
        type="text"
        value={callsign}
        onChange={(e) => setCallsign(e.target.value)}
        placeholder="Enter callsign"
        className="flight-input"
      />
      <button onClick={fetchFlightData} className="fetch-button">
        Fetch Flight
      </button>
      <div className="flight-data">
        {error && <p className="error-message">{error}</p>}
        {flightInfo && (
          <div className="flight-info">
            {Object.entries(flightInfo).map(([key, value]) => (
              <p key={key}>
                <strong>{key.replace(/_/g, " ")}:</strong> {value}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FlightOverlay;
