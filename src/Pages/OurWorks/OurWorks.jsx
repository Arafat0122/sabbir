

const projects = [
    {
        title: "Video Editing Magic",
        description: "Crafted compelling visual stories for YouTube influencers and brands.",
        image: "https://images.unsplash.com/photo-1602524201345-3ac0bff43b81", // placeholder
    },
    {
        title: "Content Creation Hub",
        description: "Built engaging digital content for social media growth and brand reach.",
        image: "https://images.unsplash.com/photo-1612831455543-8b1b8a2b6846",
    },
    {
        title: "Business Growth Campaign",
        description: "Boosted client ROI with strategic SEO, marketing & CRM integrations.",
        image: "https://images.unsplash.com/photo-1532619675605-1ede6aeb60ba",
    },
    {
        title: "Web Development",
        description: "Designed & developed full-stack websites with React, MongoDB & Tailwind.",
        image: "https://images.unsplash.com/photo-1581091870632-66c2f9a0e6e1",
    },
    {
        title: "Graphic Design Portfolio",
        description: "Created logos, posters, and visual assets with stunning precision.",
        image: "https://images.unsplash.com/photo-1623052382531-178c71baf89e",
    },
    {
        title: "Mobile App Experience",
        description: "Developed sleek and responsive mobile apps using React Native.",
        image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
    },
];

const OurWorks = () => {
    return (
        <div className="relative min-h-screen px-4 py-20 sm:px-6 lg:px-8 bg-[#0e0e0e] text-white overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0 opacity-50"
                style={{
                    backgroundImage:
                        "url('https://images.squarespace-cdn.com/content/v1/5efdf9035a50d17d5ed9a068/1593712216494-Z6X05RBMRL5XSS698SG3/modern-blue-business-technology-background-footage-077433698_prevstill.jpeg')",
                }}
            />

            {/* Glass Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-[#0e0e0e]/60 to-black/70 backdrop-blur-sm z-10" />

            {/* Content */}
            <div className="relative z-20 mx-auto max-w-7xl">
                <div className="text-center">
                    <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-500 text-transparent bg-clip-text drop-shadow-lg">
                        Our Works
                    </h3>
                    <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-300">
                        Explore some of our best works crafted to empower digital experiences.
                    </p>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 gap-10 mt-16 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl backdrop-blur-md hover:scale-[1.02] transition-all duration-300"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full group-hover:scale-105 transition duration-300"
                                />
                            </div>
                            <div className="p-5">
                                <h4 className="text-xl font-semibold text-white mb-2">{project.title}</h4>
                                <p className="text-gray-300 text-sm">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurWorks;