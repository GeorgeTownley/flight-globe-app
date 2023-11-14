import React from "react";
import Globe from "react-globe.gl";
import FlightOverlay from "./FlightOverlay"; // Ensure this import path is correct for your project structure

function GlobeComponent() {
  const labelsData = [
    {
      lat: 51.5074, // London's latitude
      lng: -0.1278, // London's longitude
      text: "London", // Text to display
      color: "lightblue", // Label color
      size: 0.5, // Size of the label text
    },
  ];

  const arcsData = [
    {
      startLat: 51.5074, // London latitude
      startLng: -0.1278, // London longitude
      endLat: -34.3568, // Cape of Good Hope latitude
      endLng: 18.4735, // Cape of Good Hope longitude
      color: "lightblue",
    },
  ];

  return (
    <div
      id="Globe-container"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <FlightOverlay />
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        labelsData={labelsData}
        labelText={(d) => d.text}
        labelLat={(d) => d.lat}
        labelLng={(d) => d.lng}
        labelColor={(d) => d.color}
        labelAltitude={0}
        labelSize={(d) => d.size}
        labelRotation={0}
        labelResolution={3}
        labelIncludeDot={true}
        labelDotRadius={0.1}
        labelDotOrientation="bottom"
        labelsTransitionDuration={1000}
        arcsData={arcsData}
        arcColor={(d) => d.color}
        arcAltitudeAutoScale={0.1}
        arcStroke={0.1}
        arcAltitude={(d) => d.arcAltitude}
        arcDashLength={1}
        arcDashGap={0.1}
      />
    </div>
  );
}

export default GlobeComponent;
