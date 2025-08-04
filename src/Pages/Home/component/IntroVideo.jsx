import React from "react";
import { FaVideo, FaChartLine, FaLaptopCode } from "react-icons/fa";

const IntroVideo = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h4 className="text-primary font-semibold tracking-widest uppercase mb-2">
        What We Offer
      </h4>
      <h3 className="text-2xl md:text-5xl font-bold mb-12 max-w-4xl text-blue-950 !leading-[1.2]">
        Transforming Ideas into Impactful Digital Experiences
      </h3>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-blue-900">
            Our Core Services
          </h3>

          <ul className="space-y-5 text-gray-700">
            {/* Video Editing */}
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1"><FaVideo /></span>
              <div>
                <h4 className="font-semibold text-lg">Video Editing & Content Creation</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  High-quality AI-generated promos, cinematic storytelling, logo animation, and YouTube content that boosts brand presence and connects with your audience.
                </p>
              </div>
            </li>

            {/* Business Growth */}
            <li className="flex items-start gap-3 opacity-60">
              <span className="text-primary text-xl mt-1"><FaChartLine /></span>
              <div>
                <h4 className="font-semibold text-lg">Business Growth Services <span className="text-sm text-yellow-500">(Coming Soon)</span></h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  From SEO and social media marketing to YouTube growth strategies — everything you need to grow online.
                </p>
              </div>
            </li>

            {/* Web Development */}
            <li className="flex items-start gap-3 opacity-100">
              <span className="text-primary text-xl mt-1"><FaLaptopCode /></span>
              <div>
                <h4 className="font-semibold text-lg">Website Development <span className="text-sm text-green-400">(Most Popular)</span></h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Scalable, user-friendly websites built with modern tech stacks for a strong digital foundation.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Video Right */}
        <div className="flex-1 rounded-xl overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="380"
            src="https://www.youtube.com/embed/GWHLosmkyjM?autoplay=1&mute=1"
            title="Intro Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default IntroVideo;