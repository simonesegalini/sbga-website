import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import "./style.css";
import L from "leaflet";
import { addressLatLngPosition } from "../../../utils";
import { useCallback } from "react";

const defaultZoom = 16;

export const blackIcon = new L.Icon({
  iconUrl:
    "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapComponent = () => {
  const showInMapClicked = useCallback((addressLatLngPosition: LatLngTuple) => {
    window.open(
      "https://maps.google.com?q=" +
        addressLatLngPosition[0] +
        "," +
        addressLatLngPosition[1]
    );
  }, []);
  return (
    <>
      <MapContainer
        style={{ width: "100%", height: "100%" }}
        center={addressLatLngPosition}
        zoom={defaultZoom}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={addressLatLngPosition}
          icon={blackIcon}
          eventHandlers={{
            click: () => {
              showInMapClicked(addressLatLngPosition);
            },
          }}
        />
      </MapContainer>
    </>
  );
};

export default MapComponent;
