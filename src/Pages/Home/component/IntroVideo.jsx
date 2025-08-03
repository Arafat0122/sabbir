import React from "react";

const IntroVideo = () => {
  return (
    <section className="py-16 p-4 max-w-7xl mx-auto">
      <h4 className="text-primary font-semibold tracking-widest uppercase mb-2">
        Intro Video
      </h4>
      <h3 className="text-2xl md:text-5xl font-bold mb-12 max-w-3xl text-blue-950 !leading-[1.2]">
        Take a Quick Look Inside Our Work
      </h3>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Grow Your Brand with Result-Driven Digital Marketing
          </h3>
          <p className="text-gray-500 mb-6 leading-relaxed">
            From reaching the right audience to converting them into loyal
            customers — we handle everything. Our structured marketing framework
            helps you generate more leads, boost sales and build a powerful
            online presence.
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>• Strategic planning & analysis</li>
            <li>• Creative content that converts</li>
            <li>• Data-driven campaigns for measurable success</li>
          </ul>
        </div>
        <div className="flex-1 rounded-xl overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="380"
            src="https://www.youtube.com/embed/GWHLosmkyjM?autoplay=1&mute=1"
            title="YouTube video player"
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
