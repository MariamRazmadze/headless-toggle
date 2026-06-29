import React from "react";
import Toggle from "./Toggle/Toggle";
import ToggleButton from "./Toggle/ToggleButton";
import ToggleOn from "./Toggle/ToggleOn";
import ToggleOff from "./Toggle/ToggleOff";
import { BsStar, BsStarFill } from "react-icons/bs";

export default function App() {
  return (
    <div>
      <Toggle>
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
