import React, { useState } from "react";
import useEffectOnUpdate from "../hooks/useEffectOnUpdate";
import useToggle from "../hooks/useToggle";

type ToggleContextType = {
  on: boolean;
  toggle: () => void;
};

const ToggleContext = React.createContext<ToggleContextType>({
  on: false,
  toggle: () => {},
});

type ToggleProps = {
  children: React.ReactNode;
  onToggle?: () => void;
};

export default function Toggle({ children, onToggle = () => {} }: ToggleProps) {
  const [on, toggle] = useToggle();

  useEffectOnUpdate(onToggle, [on]);
  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      <div>{children}</div>
    </ToggleContext.Provider>
  );
}

export { ToggleContext };
