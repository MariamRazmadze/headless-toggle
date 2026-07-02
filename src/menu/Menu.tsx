import React from "react";
import Toggle from "../Toggle/Toggle";

export default function Menu({ children }: { children: React.ReactNode }) {
  return (
    <Toggle>
      <div className="menu">{children}</div>
    </Toggle>
  );
}
