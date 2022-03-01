import React from "react";
import "./MapBox.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import posIcon from "./icon-location.svg";

const MapBox = ({ ipData }) => {
  const icon = L.icon({
    iconUrl: posIcon,
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
  });

  function MyComponent() {
    const map = useMap();
    map.flyTo(new L.LatLng(mapPos[0], mapPos[1]), 13);
    return null;
  }

  const [mapPos, setMapPos] = React.useState([51.505, -0.09]);

  React.useEffect(() => {
    if (ipData.location) {
      setMapPos([ipData?.location?.lat, ipData?.location?.lng]);
    }
  }, [ipData]);

  return (
    <MapContainer center={mapPos} zoom={13} scrollWheelZoom={true} id="mapid">
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MyComponent />
      {ipData.location && (
        <Marker position={mapPos} icon={icon}>
          <Popup>Your Connection.</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default MapBox;
