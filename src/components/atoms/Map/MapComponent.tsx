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
      "https://www.google.com/maps/place/SBGA+%7C+BLENGINI+GHIRARDELLI/@45.4532824,9.164343,19.3z/data=!4m6!3m5!1s0x4786c17208a250f3:0x50759b2f41c1bcc5!8m2!3d45.4534072!4d9.1649784!16s%2Fg%2F11d_9j_8v8?entry=ttu"
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
