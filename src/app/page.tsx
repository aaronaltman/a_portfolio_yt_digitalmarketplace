import Perks from "@/components/home/perks";
import ProductReel from "@/components/e-commerce/product-reel";
import ImageSlider from "@/components/e-commerce/image-slider";
import ProductListing from "@/components/e-commerce/product-listing";

export default function Home() {
  return (
    <main>
      <h1 className="px-6 text-5xl leading-[3.99rem] text-center capitalize">
        Your marketplace for high quality digital assets
      </h1>
      <p className="px-6 text-xl leading-[2rem] text-center uppercase mt-10">
        Welcome to Digital Big Boss Files and More...
      </p>
      <Perks />
      <ProductReel />
      <ProductListing />
    </main>
  );
}
