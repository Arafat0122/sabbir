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
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h6 className="text-primary font-semibold tracking-widest uppercase mb-2">
        Why Choose Us
      </h6>
      <h3 className="text-2xl md:text-5xl font-bold mb-12 max-w-4xl text-blue-950 !leading-[1.2]">
        What Makes DigitalCrafted Your Ideal Creative Partner
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <div
              key={i}
              className="group bg-white text-center p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-primary/90 text-white mb-5 transition group-hover:scale-110">
                <Icon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-xl text-blue-900 mb-2">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
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
