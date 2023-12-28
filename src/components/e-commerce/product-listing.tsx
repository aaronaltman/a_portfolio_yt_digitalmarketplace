import React from "react";
import ImageSlider from "./image-slider";
import { PRODUCTS } from "@/lib/constants";

export default function ProductListing() {
  return (
    <div className="max-w-6xl">
      <ImageSlider />
    </div>
  );
}
