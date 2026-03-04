import React from "react";
import { Protect, useUser, useClerk } from "@clerk/clerk-react";
import { Eraser, FileText, HashIcon, Home, Image, Scissors, SquarePen, Users, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  {to: '/ai', label: 'Dashboard', Icon: Home},
  {to: '/ai/write-article', label: 'Write Article', Icon: SquarePen},
  {to: '/ai/blog-titles', label: 'Blog Titles', Icon: HashIcon},
  {to: '/ai/generate-images', label: 'Generate Images', Icon: Image},
  {to: '/ai/remove-background', label: 'Remove Background', Icon: Eraser},
  {to: '/ai/remove-object', label: 'Remove Object', Icon: Scissors},
  {to: '/ai/review-resumer', label: 'Review Resume', Icon: FileText},
  {to: '/ai/community', label: 'Community', Icon: Users},
]



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
          src={user.imageUrl || "/default-avatar.png"} 
          alt="user avatar"
          className="w-13 rounded-full mx-auto"
        />

        <h1>
          {user.firstName} {user.lastName}

          <div>
            {navItems.map(({to, label, Icon})=> (
              <NavLink key={to} to={to} end = {to === '/ai'} onClick={()=> setSidebarOpen(false)}
               className={({isActive})=> `px-3.5 py-2.5 flex items-center gap-3 rounded ${isActive ? 'bg-gradient-to-r from-[#3C18FF] to-[#9234EA] text-white' : ''}`}>

                {({isActive})=> (
                  <>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : ''}`} />
                    {label}
                  </>
                )}

              </NavLink>
            ))}
          </div>


        </h1>

      </div>

      <div className="w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between">

        <div onClick={openUserProfile} className="flex gap-2 items-center cursor-pointer">
              <img src={user.imageUrl || "/default-avatar.png"} alt="user avatar" className="w-8 h-8 rounded-full" />

              <div>
                 <h1 className="text-sm font-medium"> {user.firstName} {user.lastName} </h1>
                 <p className='text-xs text-gray-500'>
                    <Protect plan='premium'>Premium</Protect>
                    Plan
                 </p>
              </div>


        </div>

        <LogOut onClick={signOut} className='w-4.5 text-gray-700 hover:text-gray-700 transition cursor-pointer' />
         
      </div>

      
    </div>
  );
};

export default Sidebar;
