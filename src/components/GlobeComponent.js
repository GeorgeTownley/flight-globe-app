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
      endLng: 18.4734, // Cape of Good Hope longitude
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
        labelText="text"
        labelLat="lat"
        labelLng="lng"
        labelColor="color"
        labelAltitude={0.01}
        labelSize="size"
        labelRotation={0}
        labelResolution={3}
        labelIncludeDot={true}
        labelDotRadius={0.1}
        labelDotOrientation="bottom"
        labelsTransitionDuration={1000}
        // Add arcs related properties
        arcsData={arcsData} // pass arcs data to the globe
        arcColor="color"
        arcAltitudeAutoScale={0.2}
        arcStroke={0.1}
        arcDashLength={1} // this will make the arc dashed
        arcDashGap={0} // this will determine the gap between dashes
      />
    </div>
  );
}

export default GlobeComponent;
