import React, { useState, useEffect, useRef } from "react";

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
  onToggle: () => void;
};

export default function Toggle({ children, onToggle }: ToggleProps) {
  const firstRender = useRef(true);
  const [on, setOn] = useState(false);
  const toggle = () => {
    setOn((prevOn) => !prevOn);
  };
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      onToggle();
    }
  }, [on]);
  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      <div>{children}</div>
    </ToggleContext.Provider>
  );
}

export { ToggleContext };
