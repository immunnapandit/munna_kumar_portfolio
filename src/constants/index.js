import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  python,
  nirma,
  liu,
  match,
  book,
  movie,
  custom,
  probuddy,
  brik,
} from "../assets";

export const navLinks = [
  {
    id: "linkedin",
    icon: "/linkedin.png", 
    url: "https://www.linkedin.com/in/immunnapandit/",
  },
  {
    id: "github",
    icon: "/github.png", 
    url: "https://github.com/immunnapandit",
  },
  {
    id: "email",
    icon: "/mail.png", 
    url: "mailto:munnamkpandit@gmail.com",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Technical Consultant",
    icon: mobile,
  },
  {
    title: "Software Developer",
    icon: backend,
  },
  {
    title: "Blogger",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Technical Consultant",
    company_name: "AtiSunya Pvt. Ltd. | On-Site | Noida, India",
    icon: brik,
    iconBg: "#708090",
    date: "Jan 2024 – Present",
    points: [
      "Assisted in designing and developing custom features in Dynamics 365FO using X++, ensuring alignment with business requirements.",
      "Worked on integrating external applications with Dynamics 365FO using OData services, supporting data exchange and API-based interactions.",
      "Assisted in designing and configuring Electronic Reporting (ER) frameworks to generate business reports and comply with regulatory requirements.",
      "Designed and implemented frontend interfaces using React, Next.js, and Radix UI for performance and accessibility.",
      "Participated in code reviews, performed unit testing, and helped troubleshoot issues to improve solution quality."
    ],
  },
  {
    title: "M and S Engineer",
    company_name: "GE Vernova | On-Site | Noida, India",
    icon: liu,
    iconBg: "#383E56",
    date: "Aug 2023 – Dec 2023",
    points: [
      "Skillfully diagnosed and resolved hardware and software issues for end-users, ensuring minimal downtime and maximum productivity.",
      "Managed and configured servers to optimize performance and security, over-seeing software installations, updates, and patch management to maintain syste",
      "Efficiently troubleshot and resolved network-related issues, including those involving switches, firewalls, routers, and servers, to ensure seamless connectivity and network performance."
    ],
  },
  
  {
    title: "Bachelor of Technology",
    company_name: "IES College of Technology | Bhopal | India",
    icon: nirma,
    iconBg: "#383E56",
    date: "Aug 2019 – May 2023",
    points: [
      "Computer Science and Enginnering",
      "CGPA: 8.23 / 10.0",
    ],
  },
];

const testimonials = [
  // Uncomment and customize as needed
  /*
  {
    title: "AI For Everyone",
    organization: "Coursera - Andrew Ng",
    icon: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Coursera_logo.svg",
    date: "March 2024",
    certificate_link: "https://coursera.org/verify/your-certificate-id",
  },
  */
];

const projects = [
  {
    name: "Study Notion EduTech Project",
    description:
      "Contributed to the front-end development of StudyNotion, an interactive learning platform catering to students and instructors.Utilized HTML, CSS, JavaScript, and React.js to create intuitive and engaging userinterfaces.Developed key pages for students, including the homepage, course list, wish list, and cart checkout, optimizing user journey.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: match,
    source_code_link: "https://github.com/immunnapandit/StudyNotion",
  },
  {
    name: "Food Junction App",
    description:
      "Developed a responsive web application using React.js to display restaurant information.Successfully integrated the Swiggy.com API, a comprehensive source of real-time data on various restaurants.This integration allowed the application to dynamically fetch and display up-to-date information, ensuring a seamlessuser experience.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
    ],
    image: book,
    source_code_link: "https://github.com/immunnapandit/Food_Junction_App",
  },
  {
    name: "Movie Recommendation System Using Auto Encoders",
    description:
      "Created a movie recommendation system using Auto Encoders, applying the Embarrassingly Shallow Auto Encoders algorithm for improved performance. Evaluated across datasets like Netflix and Million Songs.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/",
  },
  {
    name: "E-Commerce Platform for Custom Jewelry",
    description:
      "Built a full-featured e-commerce platform with Stripe-based secure checkout, SSR enabled Next.js pages, and MongoDB backend.      Implemented advanced search and filtering using Elasticsearch and aggregation pipelines for personalized product discovery.Designed an admin dashboard for inventory, orders, and analytics with real-time data management.Deployed on Vercel with optimized performance settings, improving SEO and reducing load times by over 40%.",
      tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
    ],
    image: custom,
    source_code_link: "https://github.com/",
  },
  
];

const certifications = [
  {
    name: "Microsoft Azure Fundamentals",
    provider: "Microsoft",
    description:
      "AZ-900: Builds basic knowledge of cloud concepts, Azure services, security, pricing, and support for a solid Azure foundation. Also helps understand how Azure fits into real-world business scenarios.",
    cert_link: "/Microsoft Azure Fundamentals.pdf",
    image: "/Microsoft Azure Fundamental.png",
  },
  {
    name: "Microsoft Azure Data Fundamentals",
    provider: "Microsoft",
    description:
      "DP-900: Provides basic knowledge of core data concepts, Azure data services, and how to work with relational, non-relational, and analytics solutions.",
    cert_link: "/Microsoft Azure Data Fundamentals.pdf",
    image: "/Azure Data Fundamental.png",
  },
  {
    name: "Microsoft Azure AI Fundamentals",
    provider: "Microsoft",
    description:
      "Azure AI Fundamentals (AI-900) provides basic knowledge of AI concepts, Azure AI services, and how to use them for real-world solutions without deep technical skills.",
    cert_link: "/Azure AI Fundamentals.pdf",
    image: "/Azure AI Fundamental.png",
  },
  {
    name: "Microsoft 365 Fundamentals",
    provider: "Microsoft",
    description:
    "MS-900: Introduces Microsoft 365 concepts, services, security, compliance, and pricing for understanding cloud productivity solutions.",
    cert_link: "/Microsoft 365 Fundamentals.pdf",
    image: "/Microsoft 365 Fundamentals.png",
  }
];

export { services, technologies, experiences, testimonials, projects, certifications, };
