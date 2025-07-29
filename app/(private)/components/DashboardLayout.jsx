"use client";

import React, { useState } from "react";
import { Nav } from "./Nav"; // Adjust the path as needed
import { Icon } from "@iconify/react";

const DashboardLayout = ({ children }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Nav show={showNav} setShow={setShowNav} />

      {/* Main Content */}
      <div className="flex flex-col flex-1 min-h-screen bg-[#1a173b] text-white">
        {/* Toggle Button */}
        <div className="p-4">
          <button
            onClick={() => setShowNav(prev => !prev)}
            className="p-2 rounded-md bg-[#2e2a57] hover:bg-[#3a3667] text-white flex items-center gap-2"
          >
            <Icon icon="charm:menu-hamburger" width="24" height="24" />
            {showNav ? "Close" : "Open"} Menu
          </button>
        </div>

        {/* Your page content here */}
        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
