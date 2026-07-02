import React from "react";

export default function MenuButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return <button>{children}</button>;
}
