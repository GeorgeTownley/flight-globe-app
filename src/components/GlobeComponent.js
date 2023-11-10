import React, { useState, useEffect } from "react";
import Globe from "react-globe.gl";

function GlobeComponent() {
  const [labelsData] = useState([
    {
      lat: 51.5074, // London's latitude
      lng: -0.1278, // London's longitude
      text: "London", // Text to display
      color: "lightblue", // Label color
      size: 0.5, // Size of the label text
    },
  ]);

  // Define the arcs data
  const [arcsData] = useState([
    {
      startLat: 51.5074, // London latitude
      startLng: -0.1278, // London longitude
      endLat: -34.3568, // Cape of Good Hope latitude
      endLng: 18.4735, // Cape of Good Hope longitude
      color: "lightblue",
    },
  ]);

  useEffect(() => {
    // Fetch the data from the AviationStack API when the component mounts
    const API_KEY = process.env.REACT_APP_API_KEY; // Make sure your .env file has REACT_APP_API_KEY defined.
    const flightNumber = "DAL75"; // Replace with a real flight number for testing.

    const apiUrl = `http://api.aviationstack.com/v1/flights?access_key=${API_KEY}&flight_iata=${flightNumber}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Network response was not ok: " + response.statusText
          );
        }
        return response.json();
      })
      .then((data) => {
        console.log("Flight data:", data); // Log the data to the console
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);

  return (
    <div id="Globe-container" style={{ width: "100%", height: "100%" }}>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        labelsData={labelsData}
        labelText="text"
        labelLat="lat"
        labelLng="lng"
        labelColor="color"
        labelAltitude={0}
        labelSize="size"
        labelRotation={0}
        labelResolution={3}
        labelIncludeDot={true}
        labelDotRadius={0.1}
        labelDotOrientation="bottom"
        labelsTransitionDuration={1000}
        arcsData={arcsData}
        arcColor="color"
        arcAltitudeAutoScale={0.1}
        arcStroke={0.1}
        arcAltitude={0.3}
        arcDashLength={1}
        arcDashGap={0.1}
      />
    </div>
  );
}

export default GlobeComponent;
