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
        description:
            "Develop high-quality applications for a variety of projects by collaborating with founders of startups under the organization. Also \
            taught programming courses under the organizations Digital Training programme.",
        duration: { from: new Date("2023-8"), to: "Present" },
        languages: [
            "Flutter",
            "Typescript",
            "React",
            "Nodejs",
            "Python",
            "Tensorflow",
        ],
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
            "Delivered accessible and robust applications for a wide array of projects for public facing businesses.",
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
        description:
            "Developed a web application that would make fuel management easier and more accessible for smart home owners.",
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
            "Collaborated with the legal and tech teams to create an online platform for sensiting Nigerians about the legislature and making more information about political leaders and bills available.",
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
            "Developed a social media web platform aimed to bring people together using podcasts and music with a team of fellow students.",
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
            "Delivered an efficient and accessible social mobile application that would connect people in rural parts of Northern Nigeria and would translate text to a language of their choosing.",
        duration: { from: new Date("2019-6"), to: new Date("2019-9") },
        languages: ["Dart", "Flutter", "Firebase", "Pollfish"],
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
