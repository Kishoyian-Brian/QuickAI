import React from "react";
import { useUser, useClerk } from "@clerk/clerk-react";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { user, isLoaded } = useUser(); // <- isLoaded is key
  const { signOut, openUserProfile } = useClerk();

  // Wait until user is loaded
  if (!isLoaded || !user) return null;

  return (
    <div
      className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between 
      items-center max-sm:absolute top-14 bottom-0 ${
        sidebarOpen ? "translate-x-0" : "max-sm:-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="my-7 w-full text-center">
        <img
          src={user.imageUrl || "/default-avatar.png"} // fallback if image missing
          alt="user avatar"
          className="w-13 rounded-full mx-auto"
        />
        <h1>
          {user.firstName} {user.lastName}
        </h1>
      </div>
    </div>
  );
};

export default Sidebar;
