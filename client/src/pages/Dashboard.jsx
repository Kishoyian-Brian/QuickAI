import React, { useEffect, useState } from "react";
import { dummyCreationData } from "../assets/assets";
import { Gem, Sparkles } from "lucide-react";
import { Protect } from "@clerk/clerk-react";
import CreationItem from "../components/CreationItem";

const Dashboard = () => {
  const [creation, setCreation] = useState([]);

  useEffect(() => {
    setCreation(dummyCreationData);
  }, []);

  return (
    <div className="h-full overflow-auto p-6">
      {/* Top Cards */}
      <div className="flex flex-wrap gap-4">

        {/* Total Creations */}
        <div className="flex justify-between items-center w-72 p-4 bg-white rounded-xl border border-gray-200">
          <div className="text-slate-600">
            <p className="text-sm">Total Creations</p>
            <h2 className="text-2xl font-semibold">{creation.length}</h2>
          </div>
          <div className="p-2 bg-gradient-to-b from-indigo-600 to-blue-500 rounded-lg flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Active Plan */}
        <div className="flex justify-between items-center w-72 p-4 bg-white rounded-xl border border-gray-200">
          <div className="text-slate-600">
            <p className="text-sm">Active Plan</p>
            <h2 className="text-2xl font-semibold">
              <Protect plan="premium" fallback="Free">Premium</Protect>
            </h2>
          </div>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF61C5] to-[#F472B6] flex items-center justify-center">
            <Gem className="w-6 h-6 text-white" />
          </div>
        </div>

      </div>

      {/* Recent Creations */}
      <div className='space-y-3 mt-6'>
        <p className="mb-4 text-lg font-medium">Recent Creations</p>
        {creation.map((item) => (
          <CreationItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;