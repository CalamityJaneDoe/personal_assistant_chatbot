import { useState } from "react";

type DramaLevel = "Low" | "Medium" | "High";

const levels: DramaLevel[] = ["Low", "Medium", "High"];

function DramaLevelSelector() {
    const [selectedLevel, setSelectedLevel] = useState<DramaLevel>("Medium");

    return (
        <div className="flex flex-col items-center gap-4 w-full max-w-sm mx-auto">
            <h2 className="text-gray-700 text-lg font-medium text-center">Drama Level</h2>

            {/* Slider container */}
            <div className="flex justify-between w-full bg-gray-100 rounded-full px-2 py-1 shadow-inner">
                {levels.map((level) => (
                    <button
                        key={level}
                        onClick={() => console.log(level)}
                        className={`
              flex-1 flex items-center justify-center px-3 py-2 rounded-full text-sm font-medium transition
              ${
                            selectedLevel === level
                                ? "bg-gray-400 text-white shadow-md"
                                : "text-gray-700 hover:bg-gray-200"
                        }
            `}
                    >
                        {level}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default DramaLevelSelector;