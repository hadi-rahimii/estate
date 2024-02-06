import React from "react";
import db from "./../../../data/db.json";
import Home from "@/components/modules/Home";

export default function Homes() {
  return (
    <div className="homes">
      {db.homes.slice(0, 6).map((home) => (
        <Home key={home.id} {...home} />
      ))}
    </div>
  );
}
