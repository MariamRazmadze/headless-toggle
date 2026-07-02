import React from "react";
import ToggleButton from "../Toggle/ToggleButton";

export default function MenuButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToggleButton>
      <button>{children}</button>
    </ToggleButton>
  );
}
