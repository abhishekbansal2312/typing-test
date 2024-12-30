import React, { useState, useEffect } from "react";

export default function Buttons() {
  const [highlightedKey, setHighlightedKey] = useState(null);
  const keyboardKeys = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toUpperCase();

      if (keyboardKeys.flat().includes(key)) {
        setHighlightedKey(key);
        setTimeout(() => {
          setHighlightedKey(null);
        }, 500);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      {keyboardKeys.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-2 mt-2">
          {row.map((key) => (
            <button
              key={key}
              className={`w-14 h-14 font-bold text-white rounded-lg shadow-md ${
                highlightedKey === key ? "bg-blue-500" : "bg-gray-600"
              } hover:bg-gray-400 focus:outline-none transition-all`}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
