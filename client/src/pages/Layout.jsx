import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { X, Menu } from "lucide-react";
import Sidebar from "../components/Sidebar.jsx";
import { SignIn, useUser } from "@clerk/clerk-react";

const Layout = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, isLoaded } = useUser();

  if (!isLoaded) return null;

  return user ? (
    <div className="flex flex-col h-screen">
      <nav className="flex items-center justify-between px-4 py-2 sm:px-8 sm:py-3 w-full border-b border-gray-200">
        <img
          className="cursor-pointer w-32"
          src={assets.logo}
          alt="logo"
          onClick={() => navigate("/")}
        />
        {sidebarOpen ? (
          <X
            onClick={() => setSidebarOpen(false)}
            className="cursor-pointer w-6 h-6 text-gray-600 sm:hidden"
          />
        ) : (
          <Menu
            onClick={() => setSidebarOpen(true)}
            className="cursor-pointer w-6 h-6 text-gray-600 sm:hidden"
          />
        )}
      </nav>

      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex flex-1 w-full h-[calc(100vh-64px)]">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen w-full">
      <SignIn />
    </div>
  );
};

export default Layout;