import { BsStarFill, BsStar } from "react-icons/bs";
import useToggle from "./hooks/useToggle";

export default function Star({ onToggle }: { onToggle?: () => void }) {
  const [on, toggle] = useToggle();
  return (
    <>
      {on ? (
        <BsStarFill onClick={toggle} className="star filled" />
      ) : (
        <BsStar onClick={toggle} className="star" />
      )}
    </>
  );
}
