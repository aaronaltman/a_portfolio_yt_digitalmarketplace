import React from "react";
import { perks } from "@/lib/constants";

export default function Perks() {
  return (
    <section className="flex flex-wrap gap-x-5 gap-y-10 mt-10 mb-10">
      {perks.map((perk) => (
        <div key={perk.id} className="w-full sm:w-1/3 mx-auto">
          <p className="flex justify-center items-center">{perk.icon}</p>
          <h2 className="text-3xl">{perk.title}</h2>
          <p>{perk.description}</p>
        </div>
      ))}
    </section>
  );
}
