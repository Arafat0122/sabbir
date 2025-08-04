import Badge from "@/components/ui/Badge";
import GradientButton from "@/components/ui/GradientButton";
import { ArrowRight } from "lucide-react";
import React from "react";
import { LuCheck } from "react-icons/lu";

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <div className="service_flip_item">
      <div
        className="relative p-8 overflow-hidden text-white shadow-2xl service-card rounded-3xl group flip_box_font"
        style={{
          backgroundImage: `url(${service.bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(17, 24, 39, 0.75)",
        }}
      >
        <div className="absolute inset-0 transition duration-300 bg-gray-900 opacity-75 group-hover:opacity-60 rounded-3xl"></div>

        {service.badge && (
          <Badge text={service.badge.text} color={service.badge.color} />
        )}
        {service.comingSoon && (
          <Badge text="Coming Soon" color="bg-yellow-500" />
        )}
        {service.futureExpansion && (
          <Badge text="Future Expansion" color="bg-cyan-500" />
        )}

        <div className="relative z-10">
          <div className="flex items-center mb-4 space-x-4">
            <Icon className="w-10 h-10 text-white" />
            <h3 className="text-2xl font-bold leading-tight">
              {service.title}
            </h3>
          </div>
          <p className="mt-2 leading-relaxed text-gray-300">
            {service.description}
          </p>
          <ul className="mt-6 space-y-3 text-gray-200">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <LuCheck className="flex-shrink-0 w-5 h-5 mt-1 text-blue-400" />
                <span className="ml-3">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative p-8 overflow-hidden text-white shadow-2xl service-card rounded-3xl group flip_box_back">
        <div className="absolute inset-0 transition duration-300 bg-gray-900 opacity-75 group-hover:opacity-60 rounded-3xl"></div>

        {/* {service.badge && (
          <Badge text={service.badge.text} color={service.badge.color} />
        )}
        {service.comingSoon && (
          <Badge text="Coming Soon" color="bg-yellow-500" />
        )}
        {service.futureExpansion && (
          <Badge text="Future Expansion" color="bg-cyan-500" />
        )} */}

        <div className="relative z-10">
          <div className="flex items-center mb-4 space-x-4">
            <Icon className="w-10 h-10 text-white" />
            <h3 className="text-2xl font-bold leading-tight">
              {service.title}
            </h3>
          </div>
          <p className="mt-2 leading-relaxed text-gray-300">
            {service.description}
          </p>
          <ul className="mt-6 space-y-3 text-gray-200">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <LuCheck className="flex-shrink-0 w-5 h-5 mt-1 text-blue-400" />
                <span className="ml-3">{feature}</span>
              </li>
            ))}
          </ul>
          
         
        </div>
        <div className="absolute bottom-4 right-4">
             <GradientButton variant="secondary" icon={ArrowRight}>
            Get a Service
          </GradientButton>
          </div>
      </div>
    </div>
  );
};

export default ServiceCard;
