import React from "react";
import Star from "./Star";
import Toggle from "./Toggle/Toggle";
import ToggleButton from "./Toggle/ToggleButton";

export default function App() {
  return (
    <div>
      <Toggle>
        <Star />
        <ToggleButton>Toggle Buton </ToggleButton>
      </Toggle>
    </div>
  );
}
