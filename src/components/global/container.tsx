import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return <main className="h-screen max-w-xl mx-auto py-10">{children}</main>;
}
