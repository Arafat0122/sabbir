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
            <span className="font-extrabold text-3xl md:text-7xl text-sky-100">C</span>rafted with Strategy
            <br />
            Delivered with <span className="font-extrabold text-3xl md:text-7xl text-gray-300">S</span>tyle.
          </h1>
          <p className="text-sm md:text-base">
            At DigitalCrafted, we help businesses grow through powerful content and smart digital solutions.
            <br />
            From AI-generated videos and animations to SEO, social media, and web development — we craft every service with strategy, creativity, and results in mind.
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