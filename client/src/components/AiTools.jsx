import React from 'react';
import {AiToolsData} from "../assets/assets.js";
import {useNavigate} from "react-router-dom";
import {useUser} from "@clerk/clerk-react";

const AiTools = () => {
    const navigate = useNavigate();
    const {user}=useUser();
    return (
        <div className="px-4 sm:px-20 xl:px-32 my-24">
            <div className="text-center">
                <h2 className='text-slate-700 text-[42px] font-semibold'>Powerful AI Tools</h2>
                <p className="text-gray-500 max-w-lg mx-auto text-center text-lg sm:text-xl leading-relaxed">
                    Everything you need to create, enhance, and optimize your content with cutting-edge
                    <span className="text-blue-500 font-semibold"> AI technology</span>.
                </p>
            </div>

            <div className="flex flex-wrap justify-center mt-12 ">
                {AiToolsData.map((tool,index)=>(
                    <div key={index} className="p-8 m4 max-w-xs rounded-lg bg-[#FDFDFE]
                    shadow-lg border border-gray-100 hover:tralate-y-1 transition-all duration-300 cursor-pointer"
                    onClick={()=> user && navigate(tool.path)}>
                  <tool.Icon className="w-12 h-12 p3 text-white round-xl"{{background:`linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`}} />
                    </div>
                ))}
            </div>


        </div>
    );
}

export default AiTools;
