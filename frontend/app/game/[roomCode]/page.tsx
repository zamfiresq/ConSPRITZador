"use client";

import { useState } from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import { doc, updateDoc } from "@/lib/firebase";
import { db } from "@/lib/firebase";
import { LatLngExpression } from "leaflet";

type BucharestMapProps = {
  roomCode: string;
  currentUserUid: string;
  zones: Record<string, string>;
};

type District = {
  name: string;
  coordinates: LatLngExpression[];
};

const districts: District[] = [
  {
    name: "Giulești",
    coordinates: [
      [44.449, 26.041],
      [44.451, 26.041],
      [44.451, 26.043],
      [44.449, 26.043],
    ],
  },
  {
    name: "Cotroceni",
    coordinates: [
      [44.435, 26.044],
      [44.437, 26.044],
      [44.437, 26.046],
      [44.435, 26.046],
    ],
  },
];

export default function BucharestMap({ roomCode, currentUserUid, zones }: BucharestMapProps) {
  const [claimed, setClaimed] = useState<string | null>(null);

  const handleDistrictClick = async (districtName: string) => {
    if (!zones[districtName]) {
      setClaimed(districtName);
      console.log("District claimed:", districtName, "by player", currentUserUid);

      try {
        const gameRef = doc(db, "games", roomCode);
        await updateDoc(gameRef, {
          [`zones.${districtName}`]: currentUserUid,
        });
      } catch (err) {
        console.error("Failed to claim district:", err);
      }
    }
  };

  return (
    <MapContainer center={[44.4268, 26.1025]} zoom={12} scrollWheelZoom={false} className="h-full rounded-2xl">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {districts.map((district: District) => (
        <Polygon
          key={district.name}
          positions={district.coordinates}
          pathOptions={{
            color: "blue",
            fillColor: zones[district.name] ? "green" : "gray",
            fillOpacity: zones[district.name] ? 0.7 : 0.3,
          }}
          eventHandlers={{
            click: () => handleDistrictClick(district.name),
          }}
        />
      ))}
    </MapContainer>
  );
}
