import React from "react";

export default function NavBar() {
  return (
    <header className="bg-slate-100 max-w-6xl top-0 mx-auto px-4 py-6">
      <nav className="">
        <ul className="flex gap-10 justify-center">
          <li>Home</li>
          <li>Categories</li>
          <li>Search</li>
          <li>Cart</li>
          <li>Account</li>
        </ul>
      </nav>
    </header>
  );
}
