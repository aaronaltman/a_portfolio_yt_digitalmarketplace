import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return <main className="h-screen">{children}</main>;
}
