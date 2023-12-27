import React from "react";
import { perks } from "@/lib/constants";

export default function PerksAI() {
  return (
    <section className="flex flex-wrap justify-center gap-10 p-5 bg-gray-100">
      {perks.map(({ id, title, description, icon, color }) => (
        <article
          key={id}
          className="flex flex-col items-center p-4 max-w-sm mx-auto bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          <span className="text-6xl" style={{ color }}>
            {icon}
          </span>
          <h2 className="mt-4 text-xl font-semibold text-gray-700">{title}</h2>
          <p className="mt-2 text-gray-600">{description}</p>
        </article>
      ))}
    </section>
  );
}
