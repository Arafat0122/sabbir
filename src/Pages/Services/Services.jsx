import React from 'react';
import servicesData from './component/servicesData';
import ServiceCard from './component/ServiceCard';


const Services = () => {
  return (
    <div className="min-h-screen px-4 py-16 mt-10 md:mt-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h3 className="text-4xl font-extrabold tracking-tight text-blue-950 sm:text-5xl lg:text-6xl ">
            Our Services
          </h3>
          <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-500">
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
