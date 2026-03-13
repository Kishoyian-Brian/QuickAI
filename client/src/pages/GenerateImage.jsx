import { Image, Sparkles, Hash } from "lucide-react";
import React, { useState } from "react";

const GenerateImage = () => {

  const imageStyle = [
    'Realistic',
    'Anime',
    'Pixel Art',
    '3D Render',
    'Cartoon',
    'Isometric',
    'Potrait',

  ];

  const [selectedStyle, setSelectedStyle] = useState('Realistic');
  const [input, setInput] = useState("");

  const [publish, setPublish] = useState(false)

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
            <Sparkles className="w-6 text-[#00AD25]" />
            <h1 className="text-xl font-semibold">AI Image Generator</h1>
          </div>

          <p className="mt-6 text-sm font-medium">Describe your image</p>

          <textarea
            onChange={(e) => setInput(e.target.value)}
            value={input}
            rows={4}
            className="w-full mt-2 p-3 text-sm border border-gray-300 rounded-md outline-none"
            placeholder="Describe what you want to see in the image...."
            required
          />

          <p className="mt-5 text-sm font-medium">Style</p>

          <div className="mt-3 flex flex-wrap gap-3">
            {imageStyle.map((item) => (
              <span
                key={item}
                onClick={() => setSelectedStyle(item)}
                className={`text-xs px-4 py-2 border rounded-full cursor-pointer ${selectedStyle === item
                  ? "bg-green-50 text-green-700 border-blue-200"
                  : "text-gray-700 border-gray-300"
                  }`}
              >
                {item}
              </span>
            ))}
          </div>

          <div className="my-6 flex items-center gap-3">

            <label className="relative inline-flex items-center cursor-pointer">

              <input
                type="checkbox"
                className="sr-only peer"
                onChange={(e) => setPublish(e.target.checked)}
                checked={publish}
              />

              {/* Track */}
              <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-colors"></div>

              {/* Thumb */}
              <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></span>

            </label>

            <p className="text-sm text-gray-700">Make This Image Public</p>

          </div>
          <br />

          <button
            className="w-full flex justify-center items-center gap-2 mt-6
                            bg-gradient-to-r from-[#00AD25] to-[#04FF50]
                            text-white px-4 py-2 text-sm rounded-lg"
          >
            <Image className="w-5" />
            Generate Image
          </button>
        </form>

        {/* RIGHT COLUMN */}
        <div className="w-full bg-white p-5 rounded-lg border border-gray-200 flex flex-col min-h-[420px]">

          <div className="flex items-center gap-3">
            <Image className="w-5 h-5 text-[#00AD25]" />
            <h1 className="text-xl font-semibold">Generated Images</h1>
          </div>

          <div className="flex-1 flex justify-center items-center text-center">
            <div className="flex flex-col items-center gap-4 text-gray-400 text-sm">
              <Image className="w-9 h-9" />
              <p>Enter a description and click "Generate Image" to get started</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default GenerateImage;