export type Project = {
  slug: string;
  legacyPath: string;
  title: string;
  discipline: string;
  platform: string;
  year: string;
  image: string;
  hoverImage: string;
  accent: string;
  timeline: string;
  role: string;
  category: string;
  overview: string;
  background: string;
  definition: string;
};

export const projects: Project[] = [
  {
    slug: "dynatax",
    legacyPath: "/produc-dynatax",
    title: "DynaTax Business Management",
    discipline: "UX Design",
    platform: "Desktop Web",
    year: "2026",
    image: "/images/dynatax.jpg",
    hoverImage: "/images/dynatax-hover.jpg",
    accent: "#aee7d8",
    timeline: "May 2025 – Jul 2025",
    role: "Product Designer",
    category: "Tech / Web",
    overview: "A business-management web experience shaped around clearer workflows, focused navigation and approachable product interactions.",
    background: "The Framer case study is currently a draft. Its working research direction explores how fragmented digital resources interrupt focus and create frustrating workflows.",
    definition: "The draft frames the opportunity around recognizing, organizing and retrieving the right resources at the right time.",
  },
  {
    slug: "ahn-group",
    legacyPath: "/produc-ahn",
    title: "AHN Group",
    discipline: "UX Design",
    platform: "Desktop Web",
    year: "2026",
    image: "/images/ahn.png",
    hoverImage: "/images/ahn-hover.jpg",
    accent: "#ead8c8",
    timeline: "May 2025 – Jul 2025",
    role: "Product Designer",
    category: "Tech / App",
    overview: "A digital product concept for Seoul Yongsan Core, presented through a focused, editorial interface system.",
    background: "The Framer case study is currently a draft. Its working research direction explores patterns of overload, scattered organization and poor recall.",
    definition: "The draft investigates a more connected digital ecosystem that brings important resources into a clear, usable workflow.",
  },
  {
    slug: "vital",
    legacyPath: "/produc-vital",
    title: "VITAL",
    discipline: "UX Design",
    platform: "Mobile App",
    year: "2026",
    image: "/images/vital.png",
    hoverImage: "/images/vital-hover.jpg",
    accent: "#d9f8c5",
    timeline: "May 2025 – Jul 2025",
    role: "Product Designer",
    category: "Finance / App",
    overview: "Vital is a virtual AI wallet that centralizes essential documents and banking cards, giving users a smarter, more secure way to manage everyday life with AI-powered assistance.",
    background: "For many users, managing essential documents has become a daily frustration: banking apps in one place, VNeID in another, scattered screenshots, and last-minute searches at the airport when every second matters.",
    definition: "Vital unifies IDs, documents and banking cards into one dependable virtual wallet, helping users move through modern life with confidence, clarity and ease.",
  },
  {
    slug: "anemo",
    legacyPath: "/produc-anemo",
    title: "ANEMO",
    discipline: "UX Design",
    platform: "Desktop App",
    year: "2026",
    image: "/images/anemo.png",
    hoverImage: "/images/anemo-hover.jpg",
    accent: "#b5c8ff",
    timeline: "Jan 2026 – Mar 2026",
    role: "Product Designer",
    category: "Management / Website",
    overview: "An AI bookmark platform that unifies internet resources to help overwhelmed individuals maintain a focused, productive workflow.",
    background: "In today’s digital age, we are surrounded by an overwhelming abundance of information. We consume endlessly and often without realizing how passively we absorb it. The lack of control over digital resources disrupts focus and workflow.",
    definition: "Anemo transforms scattered digital content into a connected knowledge ecosystem. Content recognition, tagging and contextual linking organize information by similarity and relevance.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
