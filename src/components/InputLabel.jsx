import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkTyping } from "../slices/typingSlice";

export default function InputLabel() {
  const paragraph = useSelector((state) => state.typing.paragraph);
  const { checkParagraph, currentIndex, points } = useSelector(
    (state) => state.typing
  );
  const dispatch = useDispatch();

  const highlightedText = paragraph.split("").map((char, index) => (
    <span
      key={index}
      className={
        checkParagraph[index] === char
          ? "text-green-500"
          : checkParagraph[index] === null
          ? "text-red-500"
          : index === currentIndex
          ? "bg-yellow-200 border-b-2 border-yellow-500"
          : "text-gray-800"
      }
    >
      {char}
    </span>
  ));

  const handleChange = (e) => {
    const inputChar = e.target.value.slice(-1);
    dispatch(checkTyping({ inputChar }));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace") {
      e.preventDefault();
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 ">
      <label
        htmlFor="input"
        className="mb-4 text-lg font-semibold text-gray-700"
      >
        Type the following:
      </label>
      <p className="mb-4 text-lg font-semibold text-blue-600">
        Points: {points}
      </p>
      <div
        className="mb-6 p-4 rounded-lg bg-white shadow-md border border-gray-300 w-full max-w-2xl"
        aria-label="Highlighted Paragraph"
      >
        {highlightedText}
      </div>
      <input
        type="text"
        id="input"
        className="p-3 w-full max-w-2xl rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        placeholder={paragraph}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
