export interface Project {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  fullDescription: string[];
  role: string;
  responsibilities: string[];
  tech: string[];
  image: string;
  images?: string[];
  startDate?: string;
  endDate?: string;
  link?: string;
  secondaryLink?: string;
  secondaryLinkLabel?: string;
  company?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "joulhub",
    title: "JoulHub",
    shortDescription:
      "Property management website and mobile app with a sales-led go-to-market focus and UX/UI improvements for property owners and landlords.",
    description:
      "Co-founded JoulHub and supported its growth through sales, client discovery, and UX/UI design improvements for its website and mobile app.",
    fullDescription: [
      "JoulHub is a property management website and mobile app designed to help property owners and landlords streamline day-to-day operations, tenant records, and billing in one organized system.",
      "In my role across sales and UX/UI design, I worked closely with potential users to understand their needs, shape the product direction, and improve how both the website and mobile app were presented and experienced.",
      "I refined the interface and user flow to make the experience more intuitive, professional, and easier to use across both platforms.",
      "I also supported the go-to-market effort by handling outreach, product conversations, and relationship-building with prospective clients.",
    ],
    role: "Co-Founder | Sales & UX/UI Design",
    responsibilities: [
      "Led outreach and product conversations with property owners and landlords as part of the sales process",
      "Turned client feedback into actionable product and feature improvements",
      "Reviewed and improved the UI/UX for both the website and mobile app to make the platform more intuitive and market-ready",
      "Worked on interface flow and visual presentation to strengthen the user experience across both platforms",
      "Supported product testing and demo preparation to ensure the platform was ready for client presentations",
    ],
    tech: [
      "Property Management",
      "Billing Automation",
      "Tenant Management",
      "SaaS",
    ],
    image: "/projects/JoulHub.png",
    startDate: "February 2026",
    endDate: "Present",
    company: "JoulHub",
    link: "https://joulhub.com/",
    secondaryLink:
      "https://www.figma.com/design/Mbxw03hUKZISBFKfIWJKSV/JoulHub-Mobile-app?node-id=0-1&t=eKjl8uJzecqwoqTv-1",
    secondaryLinkLabel: "View Mobile App Design",
  },
  {
    id: 4,
    slug: "badminton-saas",
    title: "Badminton Booking System",
    shortDescription:
      "A mobile-responsive UI/UX design for a badminton court booking platform, featuring streamlined user workflows from court selection to checkout.",
    description:
      "An academic project designing a mobile-responsive user interface and interactive prototypes for a badminton court booking system, focused on enhancing user experience for the Player Role.",
    fullDescription: [
      "Badminton Booking System is an academic project focused on designing an intuitive and mobile-responsive user interface for a badminton court booking platform. The project emphasizes creating a seamless booking experience for players looking to reserve courts.",
      "Designed comprehensive wireframes and interactive prototypes in Figma that demonstrate the end-to-end user journey from court discovery and selection through to final checkout, ensuring a modern and user-friendly design aesthetic.",
      "The design specifically targets the Player Role, streamlining the booking workflow with clear navigation, intuitive controls, and responsive layouts that work seamlessly across mobile and desktop devices.",
      "Translated project requirements into clean, maintainable design components while maintaining consistency and usability throughout the entire booking experience.",
    ],
    role: "Front-End & UI/UX Designer",
    responsibilities: [
      "Designed a mobile-responsive user interface in Figma for the Player Role",
      "Built interactive prototypes demonstrating the end-to-end user journey from court selection through to checkout",
      "Translated project requirements into clean wireframes maintaining a modern and intuitive design aesthetic",
      "Ensured responsive design across mobile and desktop platforms",
      "Conducted user flow analysis to streamline the booking workflow",
    ],
    tech: [
      "Figma",
      "UI/UX Design",
      "Wireframing",
      "Prototyping",
      "Mobile Design",
      "Interactive Design",
      "Design Systems",
    ],
    image: "/projects/badminton.png",
    images: ["/projects/badminton.png", "/projects/badminton1.png"],
    startDate: "January 2026",
    endDate: "Present",
    link: "https://www.figma.com/design/nlvXBbKtwFaXBU64U9qWdS/UI-badminton-saas?node-id=0-1&t=XAdk6OTO7cblLi4G-1",
  },
  {
    id: 5,
    slug: "quickbite",
    title: "QUICKBITE - Restaurant Ordering System",
    shortDescription:
      "A modern, real-time restaurant ordering system where customers scan QR codes on their tables to browse menus, place orders, and track status in real-time with dedicated staff and kitchen management views.",
    description:
      "Built a comprehensive restaurant ordering platform where customers scan QR codes on their tables to access the menu and order directly from their devices, with real-time order tracking and dedicated staff/kitchen management interfaces.",
    fullDescription: [
      "QUICKBITE is a modern, full-stack restaurant ordering and management system designed to streamline dining operations. Customers simply scan a QR code posted on their table to access the menu and ordering system on their own devices, eliminating the need for physical menus or waiter ordering.",
      "The platform provides three distinct interfaces: a customer-facing ordering system accessible via QR code scanning, a staff management portal for order management, and a real-time kitchen view for order fulfillment. Implemented real-time data synchronization using Firebase Firestore, enabling instant order status updates across all devices without polling.",
      "Customers can browse restaurant menus organized by categories, add items to cart with quantity selection, and track active orders in real-time from their table. Developed a secure staff login system with role-based access control. Staff members receive real-time order notifications and can update order statuses through a streamlined workflow (Pending → Preparing → Completed).",
      "The kitchen view displays all pending and preparing orders with live synchronization, ensuring efficient order fulfillment. Engineered an admin dashboard for menu and category management, order analytics, and system configuration with responsive design optimized for mobile, tablet, and desktop devices using Radix UI and Tailwind CSS.",
      "Features include secure Firebase Authentication, form validation with React Hook Form and Zod, toast notifications via Sonner, and analytics integration with Vercel Analytics. The entire system is production-ready and deployed on Vercel with proper error handling and user feedback mechanisms.",
    ],
    role: "Full-Stack Developer",
    responsibilities: [
      "Architected the complete application structure using Next.js app directory and React components",
      "Implemented QR code integration for seamless table-to-device ordering experience",
      "Implemented real-time Firebase Firestore integration for instant order synchronization across all views",
      "Built customer interface with menu browsing, cart management, and active order tracking",
      "Developed secure staff login system with Firebase Authentication and role-based access control",
      "Created real-time kitchen management view with live order queue display and status updates",
      "Designed admin dashboard for menu, category, and order analytics management",
      "Deployed application to Vercel with proper environment variables and security rules",
    ],
    tech: [
      "Next.js 16",
      "React",
      "TypeScript",
      "Firebase Firestore",
      "Firebase Authentication",
      "Radix UI",
      "Tailwind CSS",
      "React Hook Form",
      "Zod",
      "Sonner",
      "Lucide Icons",
      "Vercel Analytics",
      "QR Code Technology",
    ],
    image: "/projects/quickbite.png",
    images: [
      "/projects/quickbite.png",
      "/projects/quickbite1.png",
      "/projects/quickbite2.png",
    ],
    startDate: "May 2026",
    endDate: "Present",
    link: "https://quick-qr-ordering.vercel.app/",
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};
