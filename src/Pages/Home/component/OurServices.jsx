import React from "react";
import { Video, BarChart3, MonitorSmartphone } from "lucide-react";
import { Link } from "react-router-dom";


const services = [
    {
        icon: Video,
        title: "Video Editing & Content Creation",
        status: "Prime Services",
        to: "/services/video-editing",
        available: true,
    },
    {
        icon: BarChart3,
        title: "Business Growth Services",
        status: "Coming Soon",
        to: "#",
        available: false,
    },
    {
        icon: MonitorSmartphone,
        title: "Website Development",
        status: "Future Expansion",
        to: "/services/web-development",
        available: true,
    },
];

const OurServices = () => {
    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            <h6 className="text-primary font-semibold tracking-widest uppercase mb-2">
                Our Services
            </h6>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-950 mb-12">
                Everything You Need to <br /> Grow Digitally
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {/* eslint-disable-next-line no-unused-vars */}
                {services.map(({ icon: Icon, title, status, to, available }, i) => (
                    <div
                        key={i}
                        className={`p-6 border rounded-2xl shadow-sm text-center transition hover:shadow-lg ${available ? "bg-white" : "bg-gray-50 opacity-80 cursor-not-allowed"
                            }`}
                    >
                        <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-primary/90 text-white mb-5">
                            <Icon className="w-6 h-6" />
                        </div>
                        <h4 className="text-xl font-semibold text-blue-900 mb-1">{title}</h4>
                        <p className="text-sm text-gray-500 mb-4">{status}</p>

                        {available ? (
                            <Link
                                to={to}
                                className="inline-block mt-auto px-5 py-2 text-sm font-medium text-white bg-blue-700 rounded hover:bg-blue-800 transition"
                            >
                                Explore
                            </Link>
                        ) : (
                            <span className="inline-block mt-auto px-5 py-2 text-sm font-medium text-gray-400 border border-gray-300 rounded">
                                Coming Soon
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurServices;