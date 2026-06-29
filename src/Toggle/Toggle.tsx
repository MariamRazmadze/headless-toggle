import React, { useState } from "react";

type ToggleContextType = {
  on: boolean;
  toggle: () => void;
};

const ToggleContext = React.createContext<ToggleContextType>({
  on: false,
  toggle: () => {},
});

export default function Toggle({ children }: { children: React.ReactNode }) {
  const [on, setOn] = useState(false);
  const toggle = () => {
    setOn((prevOn) => !prevOn);
  };
  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      <div>{children}</div>;
    </ToggleContext.Provider>
  );
}

export { ToggleContext };
