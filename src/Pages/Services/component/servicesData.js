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
    bgImage: "j.jpg",
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
    bgImage: "j.jpg",
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
    bgImage: "j.jpg",
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
    bgImage: "j.jpg",
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
    bgImage: "j.jpg",
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
    bgImage: "j.jpg",
  },
];

export default servicesData;
