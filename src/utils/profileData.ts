type ResumeProps = {
    role: string
    company: string
    duration: {
        from: Date
        to: Date | string
    }
    link?: string
    description: string
    languages: string[]
    bulletPoints: string[]
}

type PersonalDetailsProps = {
    name: string
    brief: string
    email: string
    phone: string
    githubLink: string
    portfolioLink: string
}

type SkillsProps = {
    programmingLanguages: string[]
    libraries: string[]
    tools: string[]
}

type EducationProps = {
    name: string
    major: string
}

const personalDetails: PersonalDetailsProps = {
    name: "Salim Hussaini",
    brief: "Experienced fullstack software engineer focused on building accessible products for the web",
    email: "salimabdu008@gmail.com",
    phone: "(234) 9037927947",
    githubLink: "github.com/SummaDiaboli/",
    portfolioLink: "portfolio-salim.vercel.app",
}

const skills: SkillsProps = {
    programmingLanguages: [
        "Typescript",
        "Javascript",
        "Dart",
        "Rust",
        "Go",
        "Python",
        "PostgreSQL",
    ],
    libraries: [
        "React",
        "Next.js",
        "React Native",
        "TailwindCSS",
        "Flutter",
        "Node.js",
        "Express.js",
    ],
    tools: [
        "Hasura",
        "Firebase",
        "Git",
        "GitHub",
        "Supabase",
        "Vercel",
        "Netlify",
    ],
}

const resume: ResumeProps[] = [
    {
        company: "National Agency for AI and Robotics",
        role: "Software Developer",
        link: "https://ncair.nitda.gov.ng/",
        description: "",
        duration: { from: new Date("2023-8"), to: "Present" },
        languages: ["Flutter", "React", "Nodejs", "Python"],
        bulletPoints: [
            "Teaching programming classes in Python at the beginner and intermediate levels.",
            "Developed a flutter application that utilizes the TensorflowLite flutter library.",
            "Worked with the National Director to strategize projects for the organization.",
        ],
    },
    {
        company: "Freelance",
        role: "Fullstack Web Developer",
        description:
            "Creating web software solutions for client according to their specifications",
        duration: { from: new Date("2022-9"), to: new Date("2023-7") },
        languages: [
            "Next.js",
            "React",
            "Typescript",
            "React Native",
            "Express.js",
            "PostgreSQL",
            "TailwindCSS",
        ],
        bulletPoints: [
            "Built front-end user-facing applications for clients using Next.js, and deployed them using Vercel.",
            "Used Nodejs Express to develop backend APIs for more complex applications.",
            "Used React Native to develop mobile applications for clients.",
            "Created and integrated PostgreSQL databases using Supabase.",
        ],
    },
    {
        company: "3.14 Limited",
        role: "Fullstack Web Developer",
        description: "",
        link: "https://314ltd.com/",
        duration: { from: new Date("2022-7"), to: new Date("2022-9") },
        languages: ["Typscript", "Firebase", "React", "TailwindCSS", "Node.js"],
        bulletPoints: [
            "Created the web application using React.",
            "Connected the web application to the Firebase backend.",
            "Utilized company API to read live data from the smart devices and displayed relevant data.",
            "Deployed the application for internal use through Firebase hosting.",
        ],
    },
    {
        company: "Yiaga Africa",
        role: "Fullstack Web Developer - Intern",
        link: "https://yiaga.org/",
        description:
            "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
        duration: { from: new Date("2021-8"), to: new Date("2021-9") },
        languages: [
            "Typscript",
            "Firebase",
            "Hasura",
            "GraphQL",
            "D3.js",
            "PostgreSQL",
            "Python",
        ],
        bulletPoints: [
            "Created the web application using React and Next.js.",
            "Created an interactive and detailed map of Nigeria using D3.js.",
            "Created a Hasura GraphQL backend that was connected to a Heroku-deployed PostgreSQL backend.",
            "Coordinated with the Head of IT to retrieve and structure the data for the backend by scrapping data using Python.",
        ],
    },
    {
        company: "Logical Address",
        role: "Fullstack Web Developer",
        description:
            "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
        duration: { from: new Date("2019-9"), to: new Date("2019-12") },
        languages: [
            "Javascript",
            "Typscript",
            "Firebase",
            "Next.js",
            "Preact",
            "Express.js",
            "Cloudinary",
        ],
        bulletPoints: [
            "Implemented the front-end product using Preact.",
            "Led the development of the NodeJS backend that was deployed on Heroku.",
            "Set up the Firebase services for media storage and connected the application to it.",
        ],
    },
    {
        company: "Mercy Corps",
        link: "https://nigeria.mercycorps.org/",
        role: "Mobile Application Developer",
        description:
            "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
        duration: { from: new Date("2022-6"), to: new Date("2022-10") },
        languages: ["Javascript", "Typscript", "Firebase"],
        bulletPoints: [
            "Implemented the internal mobile application according to specifications using Flutter.",
            "Integrated the organization's social media feed into the application from the existing Twitter feed.",
            "Communicated with the project manager to develop and iterate over features in the mobile app.",
            "Implemented poll and survey features using Pollfish.",
            "Deployed the mobile application for use in rural locations in Northern Nigeria.",
        ],
    },
]

const education: EducationProps = {
    name: "American University of Nigeria",
    major: "Bachelor of Science in Software Engineering",
}

const interests: string[] = [
    "Sci-Fi Fantasy Novels",
    "League of Legends",
    "Watching shows with my partner",
]

export const profileData = {
    personalDetails,
    skills,
    resume,
    education,
    interests,
}
