import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col items-center h-screen max-w-6xl mx-auto py-10">
      {children}
    </main>
  );
}
