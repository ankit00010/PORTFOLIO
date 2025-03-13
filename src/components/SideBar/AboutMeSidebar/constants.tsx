import { JSX } from "react";
import { FaFilePdf } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
type FolderItem = {
  name: string;
  color: string;
  subFolders: string[];
  subFolder_icon: JSX.Element;
  context: string[] | null;
};

export const folders: FolderItem[] = [
  {
    name: "bio",
    color: "#FB6380",
    subFolders: ["aboutme.ts"],
    subFolder_icon: <SiTypescript />,
    context: [
      `
      /**
       * About Me
       * I have 1 year of experience in web development.
       * My expertise lies in backend development and system integration.
       * My Tech Stack: Node.js, Express.js, MongoDB, React.js, Next.js, 
       * Vercel, System Design, TypeScript, JavaScript.
       * 
       * Being consistent has given me the confidence to tackle any challenges.
       * Discipline has helped me stay structured both physically and mentally.
       * I constantly evolve and adapt to stay competitive in the market.
       * 
       * Tell me what you need!
      **/
      `,
    ],
  },
  {
    name: "interests",
    color: "#01CCB8",
    subFolders: ["goals.ts", "hobbies.ts"],
    subFolder_icon: <SiTypescript />,
    context: [
      `
      /**
       * Goals
       * - Gain deep expertise in backend development.
       * - Develop market knowledge to bridge the gap between technical 
       *   and non-technical domains.
       * - Continuously work on self-improvement to become a better 
       *   version of myself.
      **/
      `,

      `
      /**
       * Hobbies
       * - Playing cricket.
       * - Listening to music.
       * - Drawing and sketching.
      **/
      `,
    ],
  },
  {
    name: "education",
    color: "#5B5AEF",
    subFolders: ["school.ts", "univer.ts", "pG.ts"],
    subFolder_icon: <SiTypescript />,
    context: [
      `
      /**
       * School Education
       * - Chandresh Lodha Memorial School (State Board)
       * - Achieved: 82.24% in SSC.
      **/
      `,

      `
      /**
       * University Education
       * - The SIA College of Higher Education, Dombivli, Maharashtra.
       * - Bachelor of Science in Information Technology (GPA: 8.83).
       * - Duration: June 2020 – May 2023.
      **/
      `,

      `
      /**
       * Postgraduate Education
       * - Amity University, Uttar Pradesh.
       * - Pursuing MBA (Started: September 2024 – Present).
      **/
      `,
    ],
  },
  {
    name: "experience",
    color: "#FF8C00",
    subFolders: ["corbin.ts"],
    subFolder_icon: <SiTypescript />,
    context: [
      `
      /**
       * Work Experience - Corbin Technology Solutions Pvt Ltd
       * Location: Thane, Maharashtra.
       * Role: Full Stack Developer.
       * Duration: Dec 2023 – Sep 2024.
       *
       * Key Contributions:
       * - Led development for multiple projects including an eCommerce platform, 
       *   LMS, AI-based chatbot, and CMS.
       * - Designed and implemented a modular backend architecture, enhancing 
       *   maintainability and efficiency.
       * - Managed backend development for high-traffic applications, ensuring 
       *   robustness and scalability.
       * - Integrated payment gateways such as PayPal, Eazebuzz, and HDFC for 
       *   secure transactions.
       * - Played a vital role in project planning and management, aligning 
       *   development with business objectives.
      **/
      `,
    ],
  },
  {
    name: "certifications",
    color: "#734CA1",
    subFolders: ["fullstack"],
    subFolder_icon: <FaFilePdf />,
    context: [
      `      /**
       * Certifications
       * - Completed "The Complete 2024 Web Development Bootcamp" from Udemy.
       * - Certificate: https://www.udemy.com/certificate/UC-2e3a7346-3483-4849-9e66-4fd49c10bb64/
       * - Built a full-stack project as part of the course, gaining hands-on 
       *   experience in modern web development.
      **/
`,
    ],
  },
];
