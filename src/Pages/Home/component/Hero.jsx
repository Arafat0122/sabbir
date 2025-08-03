import React from "react";
import { HeroVideoDialogDemo } from "./HeroVideoDialog";
import GradientButton from "@/components/ui/GradientButton";
import { ArrowRight, Rocket } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative  min-h-screen  flex items-center justify-center "
      style={{ backgroundImage: "url(/HeroBackground.jpg)" }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center  px-4 text-white mt-[50px] md:mt-[80px]">
        
        <div className="max-w-3xl mx-auto">
              <h1 className="text-2xl md:text-6xl font-bold mb-4 !leading-[1.2] ">
          Boost Your Business with Digital Marketing
        </h1>
        <p className="text-lg md:text-2xl">
          Reach your audience effectively and grow your brand online.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <GradientButton variant="primary" icon={Rocket}>
            Get Started
          </GradientButton>
          <GradientButton variant="secondary" icon={ArrowRight}>
            Learn More
          </GradientButton>
        </div>
        </div>

        {/* <div className="mt-10 flex justify-center relative max-h-[400px]">
          <HeroVideoDialogDemo />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
