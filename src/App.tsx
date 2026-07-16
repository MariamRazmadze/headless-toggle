import React from "react";
import MenuButton from "./menu/MenuButton";
import MenuDropdown from "./menu/MenuDropdown";
import MenuItem from "./menu/MenuItem";
import Menu from "./menu/Menu";
import Star from "./Star";
import Box from "./Box";

export default function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];
  return (
    <div>
      <Box />
      <br />
      <br />
      <Star />
      <br />
      <br />
      <Menu onOpen={() => console.log("Toggled from Menu")}>
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
