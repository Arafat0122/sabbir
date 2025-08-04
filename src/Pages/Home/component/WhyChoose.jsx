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
    borderClass: "border-b border-r",
  },
  {
    icon: PenTool,
    title: "Customized Strategies",
    desc: "We understand that every business is unique. Our tailored strategies are designed to meet specific goals needs.",
    borderClass: "border-b border-r bg-gray-100/70",
  },
  {
    icon: CheckCircle,
    title: "Proven Results",
    desc: "We have a track record of delivering measurable results, helping businesses grow their online presence.",
    borderClass: "border-b ",
  },
  {
    icon: FileText,
    title: "Transparent Reporting",
    desc: "We believe in transparency and keep you informed with regular reports and insights into your campaign performance.",
    borderClass: " border-r bg-gray-100/70",
  },
  {
    icon: User,
    title: "Client-Centric Approach",
    desc: "Your success is priority. We work closely with you to understand your business and deliver solutions real impact.",
    borderClass: " border-r",
  },
  {
    icon: RefreshCcw,
    title: "Latest Tools & Techniques",
    desc: "Our team of experts leverages the latest tools and techniques to deliver results that matter.",
    borderClass: " bg-gray-100/70",
  },
];

const WhyChoose = () => {
  return (
    <section className="p-4 py-16 mx-auto max-w-7xl">
      <h6 className="mb-2 font-semibold tracking-widest uppercase text-primary">
        Why Choose Us
      </h6>
      <h3 className="text-2xl md:text-5xl font-bold mb-12 max-w-3xl text-blue-950 !leading-[1.2]">
        Learn What Sets Us Apart In The World Of Digital Marketing
      </h3>

      <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
        {features.map(({ icon: Icon, title, desc, borderClass }, i) => {
          return (
            <div
              key={i}
              className={`text-center p-8 ${borderClass} hover:shadow-md transition`}
            >
              <div className="flex items-center justify-center mx-auto mb-4 rounded-full w-14 h-14 bg-secondary">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-blue-950">{title}</h3>
              <p className="text-sm text-gray-500">{desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChoose;
