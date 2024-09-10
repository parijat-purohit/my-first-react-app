import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const MapChart = () => {
  const markerData = {
    coordinates: [65.85, 128.80],
    name: "Calgary"
  };
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [108.0, -75.0, 10],
        center: [6, -10],
        scale: 700
      }}
    >
      <Geographies
        geography="/features.json"
        fill="Black"
        stroke="Grey"
        strokeWidth={1}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Marker coordinates={markerData.coordinates}>
        <circle r={4} fill="#FF0000" stroke="#FFF" strokeWidth={1} />
        <text
          textAnchor="middle"
          y={-11}
          style={{ fontFamily: "system-ui", fill: "#FFF" }}
        >
          {markerData.name}
        </text>
      </Marker>
    </ComposableMap>
  );
};

export default MapChart;
