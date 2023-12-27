import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="px-6 text-5xl leading-[3.99rem] text-center capitalize">
        Your marketplace for high quality digital assets
      </h1>
      <p className="px-6 text-xl leading-[2rem] text-center uppercase mt-10">
        Welcome to Digital Big Boss Files and More...
      </p>
      <Link href="/products">
        <Button>View Products</Button>
      </Link>
    </main>
  );
}
