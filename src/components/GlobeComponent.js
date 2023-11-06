import React from "react";
import Globe from "react-globe.gl";

function GlobeComponent() {
  // For now, we'll skip the pointsData since you just want the globe to be rendered.

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      />
    </div>
  );
}

export default GlobeComponent;
