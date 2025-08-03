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
    desc: "Our team of experienced professionals stays ahead of the curve with the digital marketing trends and best practices.",
  },
  {
    icon: PenTool,
    title: "Customized Strategies",
    desc: "We understand that every business is unique. Our tailored strategies are designed to meet specific goals needs.",
  },
  {
    icon: CheckCircle,
    title: "Proven Results",
    desc: "We have a track record of delivering measurable results, helping businesses grow their online presence.",
  },
  {
    icon: FileText,
    title: "Transparent Reporting",
    desc: "We believe in transparency and keep you informed with regular reports and insights into your campaign performance.",
  },
  {
    icon: User,
    title: "Client-Centric Approach",
    desc: "Your success is priority. We work closely with you to understand your business and deliver solutions real impact.",
  },
  {
    icon: RefreshCcw,
    title: "Latest Tools & Techniques",
    desc: "Our team of experts leverages the latest tools and techniques to deliver results that matter.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-16 p-4 max-w-7xl mx-auto">
      <h6 className="text-primary font-semibold tracking-widest uppercase mb-2">
        Why Choose Us
      </h6>
      <h3 className="text-2xl md:text-5xl font-bold mb-12 max-w-3xl text-blue-950 !leading-[1.2]">
        Learn What Sets Us Apart In The World Of Digital Marketing
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map(({ icon: Icon, title, desc }, i) => (
          <div
            key={i}
            className="text-center p-8 rounded-lg shadow-sm border hover:shadow-md transition"
          >
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-secondary mb-4">
              <Icon className="text-white w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl text-blue-950 mb-2">{title}</h3>
            <p className="text-gray-500 text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
