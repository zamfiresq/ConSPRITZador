"use client";

import { MapContainer, TileLayer, Polygon, Tooltip } from "react-leaflet";
import { LatLngExpression, PathOptions } from "leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import clsx from "clsx";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

type BucharestMapProps = {
  roomCode: string;
  currentUserUid: string;
  zones: Record<string, string>;
};

type District = {
  name: string;
  coordinates: LatLngExpression[];
  color: string;
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
    color: "emerald",
  },
  {
    name: "Cotroceni",
    coordinates: [
      [44.435, 26.044],
      [44.437, 26.044],
      [44.437, 26.046],
      [44.435, 26.046],
    ],
    color: "sky",
  },
];

export default function BucharestMap({ roomCode, currentUserUid, zones }: BucharestMapProps) {
  const [claimed, setClaimed] = useState<string | null>(null);

  const handleClaimDistrict = async (districtName: string) => {
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
    <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-xl border border-zinc-700">
      <MapContainer
        center={[44.4328, 26.1043] as LatLngExpression}
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {districts.map((district: District) => {
          const fillOwner = zones[district.name];
          const options: PathOptions = {
            color: district.color,
            fillColor: fillOwner
              ? fillOwner === currentUserUid
                ? "green"
                : "red"
              : district.color,
            fillOpacity: fillOwner ? 0.7 : 0.3,
            weight: 2,
          };

          return (
            <Polygon
              key={district.name}
              pathOptions={options}
              positions={district.coordinates as LatLngExpression[]}
              eventHandlers={{
                click: () => handleClaimDistrict(district.name),
              }}
            >
              <Tooltip
                sticky
                className={clsx(
                  "bg-zinc-900 text-white px-2 py-1 rounded-lg shadow-md font-semibold text-sm"
                )}
              >
                {district.name} {fillOwner ? (fillOwner === currentUserUid ? "(You)" : "(Other)") : ""}
              </Tooltip>
            </Polygon>
          );
        })}
      </MapContainer>
    </div>
  );
}
