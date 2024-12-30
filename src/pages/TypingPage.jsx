import React from "react";
import Header from "../components/Header";
import InputLabel from "../components/InputLabel";
import Buttons from "../components/Buttons";

export default function TypingPage() {
  return (
    <div>
      <Header title={"Typing Game"} />
      <InputLabel />
      <Buttons />
    </div>
  );
}
