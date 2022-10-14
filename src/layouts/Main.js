import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

export default function Main() {
  return (
    <div className="p-10">
      <Header />
      <Outlet />
    </div>
  );
}
