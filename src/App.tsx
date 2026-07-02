import React from "react";
import Toggle from "./Toggle/Toggle";
import ToggleButton from "./Toggle/ToggleButton";
import ToggleOn from "./Toggle/ToggleOn";
import ToggleOff from "./Toggle/ToggleOff";
import { BsStar, BsStarFill } from "react-icons/bs";
import MenuButton from "./menu/MenuButton";
import MenuDropdown from "./menu/MenuDropdown";
import MenuItem from "./menu/MenuItem";
import Menu from "./menu/Menu";

export default function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];
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
      <Toggle>
        <Menu>
          <ToggleButton>
            <MenuButton>Menu</MenuButton>
          </ToggleButton>
          <ToggleOn>
            <MenuDropdown>
              {sports.map((sport) => (
                <MenuItem key={sport}>{sport}</MenuItem>
              ))}
            </MenuDropdown>
          </ToggleOn>
        </Menu>
      </Toggle>
    </div>
  );
}
