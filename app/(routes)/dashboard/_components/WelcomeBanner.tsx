import { Button } from "@/components/ui/button";
import React from "react";

function WelcomeBanner() {
  return (
    <div className="p-5 bg-gradient-to-r from-[#BE5757] via-[#A338E3] to-[#AC76D6] rounded-xl">
      <h2 className="font-bold text-2xl text-white">AI Career Coach Agent</h2>
      <p className="text-white">
        Smarter career descisions start here - get tailored advice, real-time
        market insigtts, and a roadmap to your dream job with our AI Career
        Coach Agent.
      </p>
      <Button variant={"outline"} className="mt-5">
        Let's Get Started
      </Button>
    </div>
  );
}

export default WelcomeBanner;
