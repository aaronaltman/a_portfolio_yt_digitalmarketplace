import React from "react";
import { MENU_ITEMS } from "@/lib/constants";

export default function NavItem() {
  return (
    <>
      {MENU_ITEMS.map((item) => (
        <li key={item.id}>
          <a href={item.path} className="text-slate-900 hover:text-slate-700">
            {item.title}
          </a>
        </li>
      ))}
    </>
  );
}
