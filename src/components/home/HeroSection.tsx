
import React from "react";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight-new";

const HeroSection = () => {
  return (
    <section className="relative h-[50rem] pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-black/[0.96] -z-10" />
      <Spotlight />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="md:max-w-2xl mx-auto space-y-6 animate-fade-up relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Turn Your <span className="text-primary">Ideas</span> Into <span className="text-primary">Reality</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 max-w-xl mx-auto">
              Join our incubation center to access mentorship, funding, and resources 
              needed to transform your startup idea into a thriving business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-md">Apply for Incubation</Button>
              <Button size="lg" variant="outline" className="text-md">
                Schedule a Tour
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
