import React from "react";

export default function Header({ title }) {
  return (
    <header className="bg-blue-600 p-6 shadow-lg">
      <h1 className="text-white text-3xl font-bold text-center">{title}</h1>
    </header>
  );
}
