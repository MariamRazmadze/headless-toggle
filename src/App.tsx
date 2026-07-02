import React from "react";
import MenuButton from "./menu/MenuButton";
import MenuDropdown from "./menu/MenuDropdown";
import MenuItem from "./menu/MenuItem";
import Menu from "./menu/Menu";
import Star from "./Star";

export default function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];
  return (
    <div>
      <Star />
      <Menu>
        <MenuButton>Menu</MenuButton>
        <MenuDropdown>
          {sports.map((sport) => (
            <MenuItem key={sport}>{sport}</MenuItem>
          ))}
        </MenuDropdown>
      </Menu>
    </div>
  );
}
