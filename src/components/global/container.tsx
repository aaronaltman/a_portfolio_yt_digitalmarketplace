import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col h-screen max-w-8xl mx-auto">{children}</main>
  );
}
