import React from "react";
import Marquee from "react-fast-marquee";
import { Sparkles } from "lucide-react"; 

const items = [
  "AI Generated Logo Animation",
  "AI Generated Promotional Video",
  "Cinematic Story Telling Video",
  "YouTube Video Editing",
  "Horizontal Video Editing",
  "Vertical Video Editing",
];

const PromoMarque = () => {
  return (
    <section className="pb-14 md:pb-20 pt-3">
      <Marquee gradient={false} speed={60} >
        {items.map((item, index) => (
          <div
            key={index}
            className="mx-4 inline-flex items-center gap-2 px-8 py-6 md:py-8 rounded-lg bg-gray-200 text-blue-950 text-base md:text-2xl font-semibold whitespace-nowrap shadow-lg"
            
          >
            <Sparkles className="w-6 h-6 text-orange-400" /> 
            {item}
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default PromoMarque;
