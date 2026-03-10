import { Sparkles, Edit } from "lucide-react";
import React, { useState } from "react";

const WriteArticle = () => {
    const articleLength = [
        { length: 800, text: "Short (500-800 words)" },
        { length: 1200, text: "Medium (800-1200 words)" },
        { length: 1600, text: "Long (1200+ words)" }
    ];

    const [selectedLength, setSelectedLength] = useState(articleLength[0]);
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
                        <Sparkles className="w-6 text-[#4A7AFF]" />
                        <h1 className="text-xl font-semibold">Article Configuration</h1>
                    </div>

                    <p className="mt-6 text-sm font-medium">Article Topic</p>

                    <input
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                        type="text"
                        className="w-full mt-2 p-3 text-sm border border-gray-300 rounded-md outline-none"
                        placeholder="The future of artificial intelligence is..."
                        required
                    />

                    <p className="mt-5 text-sm font-medium">Article Length</p>

                    <div className="mt-3 flex flex-wrap gap-3">
                        {articleLength.map((item, index) => (
                            <span
                                key={index}
                                onClick={() => setSelectedLength(item)}
                                className={`text-xs px-4 py-2 border rounded-full cursor-pointer ${selectedLength.text === item.text
                                        ? "bg-blue-50 text-blue-700 border-blue-200"
                                        : "text-gray-700 border-gray-300"
                                    }`}
                            >
                                {item.text}
                            </span>
                        ))}
                    </div>

                    <button
                        className="w-full flex justify-center items-center gap-2 mt-6
                            bg-gradient-to-r from-[#226BFF] to-[#65ADFF]
                            text-white px-4 py-2 text-sm rounded-lg"
                    >
                        <Edit className="w-5" />
                        Generate Article
                    </button>
                </form>

                {/* RIGHT COLUMN */}
                <div className="w-full bg-white p-5 rounded-lg border border-gray-200 flex flex-col min-h-[420px]">

                    <div className="flex items-center gap-3">
                        <Edit className="w-5 h-5 text-[#4A7AFF]" />
                        <h1 className="text-xl font-semibold">Generated Articles</h1>
                    </div>

                    <div className="flex-1 flex justify-center items-center text-center">
                        <div className="flex flex-col items-center gap-4 text-gray-400 text-sm">
                            <Edit className="w-9 h-9" />
                            <p>Enter a topic and click "Generate article" to get started</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default WriteArticle;