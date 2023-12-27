import { Button } from "@/components/ui/button";
import Link from "next/link";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import { perks } from "@/lib/constants";
import Perks from "@/components/home/perks";
import PerksAI from "@/components/home/perks-ai";

export default function Home() {
  return (
    <main>
      <h1 className="px-6 text-5xl leading-[3.99rem] text-center capitalize">
        Your marketplace for high quality digital assets
      </h1>
      <p className="px-6 text-xl leading-[2rem] text-center uppercase mt-10">
        Welcome to Digital Big Boss Files and More...
      </p>
      <div className="">
        <Button>
          <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Browse Trending
        </Button>
        <Button>
          <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
        </Button>
      </div>
      <Perks />
    </main>
  );
}
