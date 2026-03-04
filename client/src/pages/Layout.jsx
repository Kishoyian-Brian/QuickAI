import React, { useState } from "react";
import { Outlet ,useNavigate} from "react-router-dom";
import { assets } from "../assets/assets";
import { X, Menu } from "lucide-react";
import Sidebar from "../components/Sidebar.jsx";
import { SignIn, useUser } from "@clerk/clerk-react";

const Layout = () => {

    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const {user} = useUser();


    return user ? (
        <div className='flex flex-col items-start justify-start h-screen'>
            
            <nav>
                <img src={assets.logo} alt="" onClick={()=>navigate('/')}/>
                {
                    sidebarOpen ? <X onClick={()=> setSidebarOpen(false)} className="cursor-pointer w-6 h-6 text-gray-600 sm:hidden" /> 
                    : <Menu onClick={()=> setSidebarOpen(true)} className="cursor-pointer w-6 h-6 text-gray-600 sm:hidden" />
                }
            </nav>

            <div className="flex-1 w-full flex h-[calc(100vh-64px)]">
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div>
                    <Outlet/>
                </div>
            </div>

            <Outlet />
        </div>
    ) : (
        <div className=" flex items center justify-center h-screen">
           <SignIn/>
        </div>
    )
}
export default Layout;