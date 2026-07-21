import React from "react";
import Toggle from "./Toggle/Toggle";
import ToggleButton from "./Toggle/ToggleButton";
import ToggleDisplay from "./Toggle/ToggleDisplay";

export default function Box() {
  return (
    <div>
      <Toggle onToggle={() => console.log("hook effect")}>
        <ToggleButton>
          <ToggleDisplay>
            {(on) => <div className={`box ${on ? "filled" : ""}`}></div>}
          </ToggleDisplay>
        </ToggleButton>
      </Toggle>
    </div>
  );
}
