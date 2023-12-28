import React from "react";
import NavItems from "./nav-items";

export default function NavBar() {
  return (
    <header className="bg-slate-100 w-full mx-auto px-4 py-6">
      <nav className="">
        <NavItems />
      </nav>
    </header>
  );
}
