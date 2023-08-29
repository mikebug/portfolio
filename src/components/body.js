import React from "react";
import styled from "styled-components";
import Project from "./project";
import CurencyV4 from "../assets/currency-v4.png";
import Esteem from "../assets/Esteem.png";
// import EsteemOpening from "../assets/Opening Page.png";
import CustomerProfilePage from "../assets/CustomerProfilePage.png";
import aiCard from "../assets/aicard.png";
import currencyV5 from "../assets/currency-v5.png";

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Project.defaultProps = [
  {
    name: "Video-to-Note Converter App",
    role: "Lead Developer",
    date: "2022 - Current",
    description:
      "Developed an application that converts videos into note cards and written notes, streamlining the process of capturing important content from video sources. Implemented innovative features to enhance user experience and productivity.",
    tags: [
      "Figma",
      "Next.js",
      "Web Development",
      "User Experience",
      "Productivity",
      "Innovation",
      "User Experience Research",
    ],
    picture: aiCard,
    modalDescription: `
    The application I created is designed to transform videos into both visual note cards and written notes, revolutionizing the way users capture and retain essential information from video content. By incorporating cutting-edge functionalities, I aimed to elevate the user experience and overall productivity.
    
    Through meticulous development, the application seamlessly converts video content into concise note cards. These note cards distill the key concepts, ideas, and information present in the video, ensuring that users can quickly grasp the essential content without having to review the entire video again. This feature significantly accelerates the learning process and enables users to efficiently absorb knowledge.
    
    In addition to the note card feature, the application also generates comprehensive written notes from the video content. The notes are structured in a logical and coherent manner, capturing the main points, examples, and explanations provided in the video. This written format facilitates deeper understanding and serves as a valuable resource for users who prefer traditional note-taking methods.
    
    To enhance the user experience, the application incorporates innovative functionalities. For instance, I implemented advanced algorithms that can automatically identify key moments within the video, such as important discussions, demonstrations, or explanations. This eliminates the need for users to manually select these moments, saving them time and effort.
    
    Furthermore, the application offers customization options to tailor the note-taking process to individual preferences. Users can choose different note card formats, select the level of detail for written notes, and even annotate the note cards with personal insights and comments. This versatility empowers users to create notes that align with their specific learning and information retention styles.
    
    Overall, my application not only simplifies the process of extracting valuable content from videos but also enhances the effectiveness of learning and knowledge retention. By combining note cards, written notes, and innovative features, I aimed to provide users with a powerful tool that optimizes their interaction with video-based educational and informative content.
    `,
  },
  {
    name: "Design System V5",
    role: "Lead Software/UI Engineer",
    date: "2023 - Current",
    description:
      "Created an Astro.js documentation site, a Storybook design framework, and Figma wireframes. Utilized Typescript, React, Redux, Angular, Salesforce Lightning, Figma, and Storybook to create multi-framework, multilanguage web components for developers and designers across the bank. Built deployment and testing pipelines and scheduled releases for design system repositories. Led, managed, and mentored new developers as the Engineering Lead. Worked cross-functionally with UX designers and Frontend Developers to optimize UI workflow.",
    tags: [
      "Design System",
      "UI Engineering",
      "Typescript",
      "React",
      "Redux",
      "Angular",
      "Salesforce Lightning",
      "Figma",
      "Storybook",
      "Team Leadership",
      "Collaboration",
    ],
    picture: currencyV5,
    modalDescription: `
I created a comprehensive documentation site using Astro.js, developed a Storybook design framework, and designed wireframes in Figma. This involved leveraging a range of technologies including Typescript, React, Redux, Angular, Salesforce Lightning, Figma, and Storybook. The primary aim was to construct a versatile set of web components that catered to multiple frameworks and languages, serving the needs of both developers and designers across the entire bank.

To ensure smooth development and collaboration, I established deployment and testing pipelines. These pipelines played a crucial role in maintaining the quality and consistency of the design system repositories. Furthermore, I implemented a scheduled release strategy to efficiently manage updates and enhancements to the design system.

In my capacity as the Engineering Lead, I took on the responsibility of leading, managing, and mentoring a team of new developers. This role allowed me to guide their growth and development, fostering a collaborative and high-performing team environment.

One of the key aspects of my role was fostering collaboration between different departments. I worked closely with UX designers and Frontend Developers to optimize the UI workflow. By establishing effective communication channels and shared goals, we were able to align our efforts, resulting in a more streamlined and cohesive user experience.

In summary, my role encompassed a wide range of activities, from technical development and documentation to team leadership and cross-functional collaboration. Through the projects I led and the systems I developed, I contributed to the creation of a powerful design system that enhanced the efficiency and consistency of web development across the bank.
    `,
  },
  {
    name: "Customer Servicing Hub",
    role: "Software Engineer",
    date: "2021 - Current",
    description:
      "Developed a UI library for standardized UX design across frontend applications. Implemented full stack features in Angular and C# to improve customer experience. Facilitated cross-organizational communications to ensure deliverables met the needs of all stakeholders.",
    tags: [
      "UI Library",
      "Angular",
      "C#",
      "Customer Experience",
      "Communication",
    ],
    picture: CustomerProfilePage,
    modalDescription: `
    
I developed a comprehensive UI library aimed at enhancing and unifying the user experience design across various frontend applications. In this project, I played a pivotal role in implementing a range of full-stack features using Angular on the frontend and C# on the backend. The primary objective was to elevate the overall customer experience by delivering a consistent and cohesive user interface across different software applications.

The UI library I created served as a central repository of design elements, components, and patterns that adhered to established best practices. By providing a standardized set of tools, it ensured that the visual and interactive aspects of the applications were coherent and intuitive, regardless of the specific context or purpose of each individual application.

Working on both the frontend and backend aspects of the project allowed me to gain a holistic understanding of the software development process. On the frontend, I utilized Angular to develop responsive and user-friendly interfaces, integrating the components from the UI library seamlessly into various applications. On the backend, I leveraged the power of C# to build robust functionalities that supported the frontend features and facilitated smooth user interactions.

A critical aspect of this project was effective communication and collaboration across different teams and departments. I played a key role in fostering cross-organizational discussions, ensuring that the requirements and expectations of all stakeholders were addressed. This proactive approach helped align the project's objectives with the needs of various teams, resulting in a final product that not only met but exceeded expectations.

In conclusion, my contribution to this project involved creating a UI library that established a unified and user-centric design language across frontend applications. By implementing features using Angular and C#, I aimed to enhance the overall customer experience. Furthermore, my efforts in facilitating communication between different stakeholders were crucial in ensuring the successful delivery of a solution that satisfied the diverse needs of the organization.
    `,
  },
  {
    name: "Esteem App",
    location: "Buffalo, NY",
    date: "2020 - 2022",
    description:
      "Building a social media platform to allow users to interact with each other and build discussions. Developed Figma sketches and React Native frontend for the web, Android, and iOS platforms. Served as the project manager of the application, ensuring that we stayed on the determined velocity until alpha.",
    tags: [
      "Social Media",
      "Figma",
      "React Native",
      "Project Management",
      "Web Development",
      "Android",
      "iOS",
    ],
    picture: Esteem,
    modalDescription: `
    In the dynamic realm of digital communication, embarking on the journey to establish a novel social media platform holds the promise of forging connections and igniting conversations across the virtual landscape. This innovative endeavor encompasses a harmonious blend of design, development, and strategic project management, all aimed at creating an interactive online haven where users can engage, interact, and cultivate discussions.

The odyssey commences with the conceptualization of a visionary space, one that encapsulates the essence of sharing thoughts, passions, and experiences. The blueprint takes form in the hallowed realm of Figma, a collaborative design platform that breathes life into skeletal sketches, rendering an intuitive and aesthetically pleasing interface. These preliminary designs not only delineate user pathways and interactions but also serve as a compass guiding the overall visual narrative.

With the design narrative etched, the spotlight turns towards the realm of development. Here, the React Native framework steps into the limelight, assuming the pivotal role of shaping the platform's frontend. This astute choice ensures that the platform extends its embrace to users traversing the web, Android, and iOS domains, all while maintaining a harmonious continuum of user experience. React Native's intrinsic versatility expedites the development process by enabling the crafting of a unified codebase that resonates seamlessly across diverse platforms.

As the wheels of development churn, the figure of the project manager emerges as the fulcrum of organizational prowess. An orchestrator of resources, timelines, and the collective creative effort, the project manager's mantle involves navigating the project's vessel through the currents of progress. This stewardship ensures that the project retains its course, adhering to predefined velocity and objectives. In the hands of the project manager, the complex orchestra of designers, developers, and stakeholders aligns harmoniously to produce a symphony of progress.

Culminating in the milestone of an alpha release, the project's voyage marks an inflection point. The alpha release presents a nascent embodiment of the platform, accessible to a limited audience for invaluable user insights. A fertile testing ground for refining functionalities and identifying potential enhancements, this stage crystallizes the collaborative efforts into tangible user experiences. The alpha release stands as a testament to the cumulative endeavors, offering a prelude to the platform's grand debut.

In summation, the creation of a social media platform stands as a testament to the fusion of creativity, technical acumen, and strategic dexterity. From the inception of a visionary concept to the meticulous design articulation and the finesse of a cross-platform frontend, each chapter contributes to the platform's grand narrative of fostering connections and nurturing discussions. The project manager's orchestrative role infuses coherence into the creative cadence, guiding the ensemble towards the symphony of the alpha release, where initial interactions pave the way for a vibrant digital tapestry of engagement.
 `,
  },
  {
    name: "Currency Design System V4",
    date: "2019 - 2020",
    description:
      "Worked on digital design efforts to enhance brand identity across platforms. Ensured seamless compatibility on diverse devices and browsers. Developed modern web components using JavaScript, HTML5, and SCSS. Collaborated with stakeholders for efficient UI component distribution.",
    tags: [
      "UI Design",
      "Digital Design",
      "Compatibility",
      "Web Components",
      "JavaScript",
      "HTML5",
      "SCSS",
    ],
    picture: CurencyV4,
    modalDescription: `
    
In my role, I was extensively engaged in digital design projects aimed at elevating our brand identity consistently across various platforms. A primary focus of my work was to ensure a uniform and appealing user experience, regardless of the device or browser being used. This involved implementing responsive design principles and conducting rigorous compatibility testing to guarantee that our digital assets looked and functioned flawlessly across a wide array of devices, screen sizes, and browsers.

A significant aspect of my contribution was centered around the development of modern and interactive web components. To achieve this, I employed a combination of JavaScript, HTML5, and SCSS (Sass) to create engaging and functional UI elements. These components not only enhanced the visual appeal of our digital interfaces but also played a crucial role in providing users with intuitive and seamless interactions.

Collaboration was a key element of my work process. I actively engaged with stakeholders from various teams, including design, development, and marketing, to ensure the efficient distribution and integration of UI components. By working closely with these stakeholders, I was able to gather valuable feedback and insights that contributed to the refinement and optimization of our digital design efforts.

In addition to my technical contributions, I also played a role in maintaining and evolving our brand identity guidelines. This involved adhering to established design principles and ensuring that our digital assets consistently reflected our brand's visual identity and values.

Overall, my role involved a blend of technical expertise, creativity, and effective communication. Through my work on digital design initiatives, I contributed to enhancing our brand's digital presence, elevating user experiences, and ensuring a cohesive and engaging visual identity across various platforms.
    `,
  },
];

export default function Body() {
  return (
    <Contents className="container">
      {Project.defaultProps.map((project) => (
        <Project {...project} />
      ))}
    </Contents>
  );
}
