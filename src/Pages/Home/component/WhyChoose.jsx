import React from "react";
import {
  Users,
  PenTool,
  CheckCircle,
  FileText,
  User,
  RefreshCcw,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Team",
    desc: "Our experienced team stays ahead of digital trends and implements best practices for every project.",
    desc: "Our team of experienced professionals stays ahead of the curve with the digital marketing trends and best practices.",
    borderClass: "border-b border-r",
  },
  {
    icon: PenTool,
    title: "Customized Strategies",
    desc: "Every business is unique. We craft tailored strategies aligned with your specific goals and brand voice.",
  },
  {
    icon: CheckCircle,
    title: "Proven Results",
    desc: "We consistently deliver measurable outcomes, helping brands grow their visibility and impact.",
  },
  {
    icon: FileText,
    title: "Transparent Reporting",
    desc: "You’ll always know what’s happening — we provide clear, regular reports with actionable insights.",
  },
  {
    icon: User,
    title: "Client-Centric Approach",
    desc: "Your success is our priority. We partner closely to create content and strategies that truly work for you.",
  },
  {
    icon: RefreshCcw,
    title: "Latest Tools & Techniques",
    desc: "We harness the latest tools, trends, and platforms to stay ahead and give you a competitive edge.",
  },
];

const WhyChoose = () => {
  return (
    <section className="px-4 py-16 mx-auto max-w-7xl">
      <h6 className="mb-2 font-semibold tracking-widest uppercase text-primary">
        Why Choose Us
      </h6>
      <h3 className="text-2xl md:text-5xl font-bold mb-12 max-w-4xl text-blue-950 !leading-[1.2]">
        What Makes DigitalCrafted Your Ideal Creative Partner
      </h3>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <div
              key={i}
              className="p-8 text-center transition-all duration-300 bg-white border border-gray-200 group rounded-2xl hover:shadow-xl"
            >
              <div className="flex items-center justify-center mx-auto mb-5 text-white transition rounded-full w-14 h-14 bg-primary/90 group-hover:scale-110">
                <Icon className="w-6 h-6" />
              </div>
              <h4 className="mb-2 text-xl font-bold text-blue-900">
                {feature.title}
              </h4>
              <p className="text-sm leading-relaxed text-gray-600">
                {feature.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChoose;
