import React from "react";
import { Product } from "@/lib/types"; // Assuming these types are defined correctly
import { PRODUCTS } from "@/lib/constants";

export default function ProductReel() {
  return (
    <section className="flex flex-wrap justify-center bg-gray-200 p-5  mx-auto">
      <ul className="w-full flex flex-wrap justify-start max-w-6xl">
        {PRODUCTS.map((product: Product) => (
          <li
            className="flex-1 p-4 border border-gray-300 m-2 rounded shadow min-w-[200px] max-w-[calc(33.333% - 1rem)]"
            key={product.id}
          >
            <article>
              <h2 className="text-xl pb-1">{product.name}</h2>
              <p className="text-sm pb-1">{product.description}</p>
              <p className="text-lg">${product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
