import { useState } from "react";

export default function useToggle(): [boolean, () => void] {
  const [on, setOn] = useState(false);

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  return [on, toggle];
}
