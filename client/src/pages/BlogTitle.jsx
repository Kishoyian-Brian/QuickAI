import { Edit, Hash, Sparkles } from "lucide-react";
import React, { useState } from "react";


const BlogTitle = () => {

  const blogCategories = [
    'General',
    'Technology',
    'Health',
    'Travel',
    'Food',
    'Lifestyle',
    'Education',
    'Business',
  ];

  const [selectedCategory, setSelectedCategory] = useState('General');
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
            <Sparkles className="w-6 text-[#8E37EB]" />
            <h1 className="text-xl font-semibold">AI Title Generator</h1>
          </div>

          <p className="mt-6 text-sm font-medium">Keyword</p>

          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            className="w-full mt-2 p-3 text-sm border border-gray-300 rounded-md outline-none"
            placeholder="The future of artificial intelligence is..."
            required
          />

          <p className="mt-5 text-sm font-medium">Category</p>

          <div className="mt-3 flex flex-wrap gap-3">
            {blogCategories.map((item) => (
              <span
                key={item}
                onClick={() => setSelectedCategory(item)}
                className={`text-xs px-4 py-2 border rounded-full cursor-pointer ${selectedCategory === item
                  ? "bg-purple-50 text-purple-700 border-blue-200"
                  : "text-gray-700 border-gray-300"
                  }`}
              >
                {item}
              </span>
            ))}
          </div>

          <button
            className="w-full flex justify-center items-center gap-2 mt-6
                            bg-gradient-to-r from-[#C341F6] to-[#8E37EB]
                            text-white px-4 py-2 text-sm rounded-lg"
          >
            <Edit className="w-5" />
            Generate Title
          </button>
        </form>

        {/* RIGHT COLUMN */}
        <div className="w-full bg-white p-5 rounded-lg border border-gray-200 flex flex-col min-h-[420px]">

          <div className="flex items-center gap-3">
            <Hash className="w-5 h-5 text-[#8E37EB]" />
            <h1 className="text-xl font-semibold">Generated Titles</h1>
          </div>

          <div className="flex-1 flex justify-center items-center text-center">
            <div className="flex flex-col items-center gap-4 text-gray-400 text-sm">
              <Hash className="w-9 h-9" />
              <p>Enter a keyword and click "Generate title" to get started</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default BlogTitle;