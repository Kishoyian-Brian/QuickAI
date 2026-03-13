import { Edit, Eraser, Hash, Sparkles } from 'lucide-react';
import React, { useState } from 'react'

const RemoveBackground = () => {


  const [input, setInput] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-full overflow-y-auto p-4 md:p-6 text-slate-700">

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* LEFT COLUMN */}
        <form
          onSubmit={onSubmitHandler}
          className="w-full bg-white p-5 rounded-lg border border-gray-200"
        >
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 text-[#FF4938]" />
            <h1 className="text-xl font-semibold">Background Removal</h1>
          </div>

          <p className="mt-6 text-sm font-medium">Upload Image</p>

          <input
            onChange={(e) => setInput(e.target.files[0])}
            type="file"
            accept='image/*'
            className="w-full mt-2 p-3 text-sm border border-gray-300 text-gray-600 rounded-md outline-none"
            required
          />

          <p className='text-xs text-gray-500 font-light mt-1'>Supports JPG,PNG and other image formats</p>

          <button
            className="w-full flex justify-center items-center gap-2 mt-6
                            bg-gradient-to-r from-[#F6AB41] to-[#FF4938]
                            text-white px-4 py-2 text-sm rounded-lg"
          >
            <Eraser className="w-5" />
            Remove Background
          </button>
        </form>

        {/* RIGHT COLUMN */}
        <div className="w-full bg-white p-5 rounded-lg border border-gray-200 flex flex-col min-h-[420px]">

          <div className="flex items-center gap-3">
            <Eraser className="w-5 h-5 text-[#FF4938]" />
            <h1 className="text-xl font-semibold">Processed Image</h1>
          </div>

          <div className="flex-1 flex justify-center items-center text-center">
            <div className="flex flex-col items-center gap-4 text-gray-400 text-sm">
              <Eraser className="w-9 h-9" />
              <p>Upload an image and click "Remove Background" to get started</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default RemoveBackground
