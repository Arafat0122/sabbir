import {
  LuRocket,
  LuPalette,
  LuGlobe,
  LuVideo,
  LuMonitorSmartphone,
} from 'react-icons/lu';

const servicesData = [
  {
    title: "Video Editing",
    description: "Professional editing with dramatic visuals, pacing, and sound design for campaigns, brand films, or events.",
    features: [
      "Cinematic Video Editing",
      "YouTube Video Editing",
      "Vertical & Horizontal Video Editing",
      "Shorts & Reels Editing",
    ],
    badge: { text: "Prime Services", color: "bg-purple-600" },
    icon: LuVideo, 
    bgImage: "https://cdn-icons-png.freepik.com/256/16907/16907552.png?semt=ais_white_label",
  },
  {
    title: "Content Creation",
    description: "High-impact visuals created using AI and professional editing to promote your product or service with speed and creativity.",
    features: [
      "AI-Generated Brand Promotional Videos",
      "AI Storytelling Videos",
      "Logo Animation & Intro Videos",
    ],
    badge: { text: "Prime Services", color: "bg-purple-600" },
    icon: LuPalette,
    bgImage: "https://cdn-icons-png.flaticon.com/512/8070/8070177.png",
  },
  {
    title: "Business Growth Services",
    description: "Tools beyond content — to boost visibility, reach, and results.",
    features: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing (SMM)",
      "YouTube Channel Management + SEO",
    ],
    comingSoon: true,
    icon: LuRocket,
    bgImage: "https://cdn-icons-png.flaticon.com/512/7768/7768618.png",
  },
  {
    title: "Website Development",
    description: "Build your brand’s online home with modern, responsive, and business-ready websites.",
    features: [
      "Custom Business Websites",
      "Landing Pages for Ads",
      "Portfolio & E-Commerce Sites",
    ],
    futureExpansion: true,
    icon: LuGlobe,
    bgImage: "https://cdn-icons-png.freepik.com/256/17365/17365478.png?semt=ais_white_label",
  },
  {
    title: "Graphics Design Services",
    description: "Transform your brand identity with stunning visuals and creative designs.",
    features: [
      "Logo & Branding",
      "Social Media Graphics",
      "Print Design (Brochures, Flyers)",
      "UI/UX Design",
      "Packaging Design",
      "Custom Illustrations",
    ],
    badge: { text: "Prime Services", color: "bg-purple-600" },
    icon: LuPalette,
    bgImage: "https://cdn-icons-png.flaticon.com/512/6002/6002286.png",
  },
  {
    title: "App Development",
    description: "Build innovative mobile and web applications to engage your audience and drive business growth.",
    features: [
      "iOS & Android App Development",
      "Cross-Platform Applications",
      "Web App Development",
      "Custom Software Solutions",
      "App Maintenance & Support",
    ],
    badge: { text: "Prime Services", color: "bg-purple-600" },
    icon: LuMonitorSmartphone,
    bgImage: "https://cdn-icons-png.flaticon.com/512/9663/9663087.png",
  },
];

export default servicesData;
