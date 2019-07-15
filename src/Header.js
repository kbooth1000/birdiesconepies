import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="cloudline" />
      <Link to="/">
      <div className="logo">
        <h1 aria-hidden="true">Birdie's Cone Pies</h1>
        <h2 aria-hidden="true">Peckin' Delicious</h2>
      </div>
      </Link>
    </header>
  );
}
