import React from "react";
import ToggleOn from "../Toggle/ToggleOn";

export default function MenuDropdown({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToggleOn>
      <div className="menu-dropdown">{children}</div>
    </ToggleOn>
  );
}
