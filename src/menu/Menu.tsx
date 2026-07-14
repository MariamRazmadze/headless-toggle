import React from "react";
import Toggle from "../Toggle/Toggle";

type MenuProps = {
  children: React.ReactNode;
  onOpen: () => void;
};

export default function Menu({ children, onOpen }: MenuProps) {
  return (
    <Toggle onToggle={onOpen}>
      <div className="menu">{children}</div>
    </Toggle>
  );
}
