import React from "react";
import servicesData from "./component/servicesData";
import ServiceCard from "./component/ServiceCard";

const Services = () => {
  return (
    <div className="relative min-h-screen px-4 py-20 sm:px-6 lg:px-8 bg-[#0e0e0e] text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
        style={{
          backgroundImage:
            "url('https://transafricatowersltd.com/wp-content/uploads/2021/01/tech-bg.jpg')",
          transform: "translateY(-10%)", // subtle parallax feel
        }}
      />

      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-sm z-10" />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl">
        <div className="text-center">
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-sky-300 via-blue-500 to-blue-800 text-transparent bg-clip-text drop-shadow-lg">
            Our Services
          </h3>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-300">
            Explore how our creative and technical expertise can help your brand grow.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;