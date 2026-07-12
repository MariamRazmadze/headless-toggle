import React from "react";
import { BsStarFill, BsStar } from "react-icons/bs";
import Toggle from "./Toggle/Toggle";
import ToggleButton from "./Toggle/ToggleButton";
import ToggleOff from "./Toggle/ToggleOff";
import ToggleOn from "./Toggle/ToggleOn";

export default function Star({ onChange }: { onChange: () => void }) {
  return (
    <div>
      <Toggle onToggle={onChange}>
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
