import React from "react";
import { BsStarFill, BsStar } from "react-icons/bs";
import Toggle from "./Toggle/Toggle";
import ToggleButton from "./Toggle/ToggleButton";
import ToggleOff from "./Toggle/ToggleOff";
import ToggleOn from "./Toggle/ToggleOn";

export default function Star({ onToggle }: { onToggle?: () => void }) {
  return (
    <div>
      <Toggle onToggle={onToggle}>
        <ToggleButton>
          <ToggleOn>
            <BsStarFill className="star filled" />
          </ToggleOn>
          <ToggleOff>
            <BsStar className="star " />
          </ToggleOff>
        </ToggleButton>
      </Toggle>
    </div>
  );
}
