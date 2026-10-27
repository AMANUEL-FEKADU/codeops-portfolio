
"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src || markerIcon,
  iconRetinaUrl: markerIcon2x.src || markerIcon2x,
  shadowUrl: markerShadow.src || markerShadow,
});

function FitBounds({ markers }) {
  const map = useMap();
  useEffect(() => {
    if (markers && markers.length > 0) {
      const bounds = L.latLngBounds(markers.map((m) => m.position));
      map.fitBounds(bounds, { padding: [40, 40] });
    }
  }, [map, markers]);
  return null;
}

export default function DeliveryMap({ markers }) {
  const defaultMarkers = [
    { id: "courier", position: [8.995, 38.7896], label: "Courier (Almaz)" },
    { id: "destination", position: [8.988, 38.781], label: "Delivery Address (Bole)" },
  ];

  const points = markers || defaultMarkers;
  const initialCenter = points[0].position;

  return (
    <MapContainer
      center={initialCenter}
      zoom={14}
      style={{ height: "320px", width: "100%", borderRadius: "1rem" }}
      className="z-0"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {points.map((m) => (
        <Marker key={m.id} position={m.position}>
          <Popup>{m.label}</Popup>
        </Marker>
      ))}
      <FitBounds markers={points} />
    </MapContainer>
  );
}