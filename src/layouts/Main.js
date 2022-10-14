import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

export default function Main() {
  return (
    <div className="px-8 items-start md:items-center flex justify-center h-screen">
      {/* <Header /> */}
      <Outlet />
    </div>
  );
}
