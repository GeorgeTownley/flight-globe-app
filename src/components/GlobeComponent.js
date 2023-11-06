import React, { useState } from "react";
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

  return (
    <div id="Globe-container" style={{ width: "100%", height: "600px" }}>
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
        labelDotOrientation="bottom" // Changed to a string instead of a function that returns a string
        labelsTransitionDuration={1000}
      />
    </div>
  );
}

export default GlobeComponent;
