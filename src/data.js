export const data = {
    me: {
        name: "Elian Gerard",
        legalName: "Elian Ramiro Gerard Ramos",
        title: "Frontend Engineer",
        email: "eliangerardiso@gmail.com",
        url: "https://eliangerard.com",
        location: "Chihuahua, Mexico",
        // Kept near 155 characters so search results show it whole.
        seoDescription:
            "Frontend engineer building fast, accessible web apps with React and Next.js. Currently at AutoZone, and the maker of Vinqua, Orablo and Dahibi.",
        profiles: {
            github: "https://github.com/eliangerard/",
            linkedin: "https://www.linkedin.com/in/eliangerard/"
        },
        about:
            "Frontend Software Engineer specializing in high-performance, scalable web applications with React and Next.js. I build fast, accessible, and pixel-perfect user experiences that drive measurable business impact, with a strong focus on performance, usability, and clean architecture."
    },
    experience: [
        {
            title: "Systems Engineer",
            subtitle: "AutoZone BTSSC",
            date: "March 2026 - Present",
            highlights: [
                "Own and deliver high-performance UI features using React.js and Next.js for a large-scale e-commerce platform.",
                "Led the Customer Reviews feature across multiple regions, driving a 5x+ increase in user-generated reviews (+400% YoY).",
                "Improved review quality by ~40% through optimized submission flows in Order History.",
                "Contributed to AutoZone’s React design system and led frontend refactors improving performance and maintainability.",
                "Collaborate cross-functionally to ship high-impact features under tight deadlines."
            ],
            link: "https://autozone.com/"
        },
        {
            title: "Associate Systems Engineer",
            subtitle: "AutoZone BTSSC",
            date: "August 2024 - March 2026",
            highlights: [
                "Built and shipped production-grade UI features with React.js and Next.js for millions of users.",
                "Redesigned Order History and Order Details pages end-to-end, improving usability and consistency.",
                "Launched the Customer Reviews feature in the US, driving a 5x increase in user-generated reviews.",
                "Focused on performance optimization, reducing layout shift and improving user experience.",
                "Partnered with Product, QA, and Design to deliver high-priority features on schedule."
            ],
            link: "https://autozone.com/"
        },
        {
            title: "Fullstack Developer",
            subtitle: "TintoTenis",
            date: "December 2023 - April 2025",
            highlights: [
                "Architected and built a full-stack web app using React, Tailwind, Express, and MySQL.",
                "Designed database schema, REST APIs, and backend infrastructure from scratch.",
                "Managed deployment, server configuration, and domain setup end-to-end.",
                "Collaborated closely with design to deliver a polished and intuitive user experience.",
                "Digitized core business operations, improving efficiency and data visibility."
            ]
        },
        {
            title: "Programming Tutor",
            subtitle: "SuperProf",
            date: "October 2023 - June 2025",
            highlights: [
                "Provide 1-on-1 coaching in web development (HTML, CSS, React, Node.js).",
                "Debug complex student projects in real time, strengthening problem-solving skills.",
                "Mentor students toward job-ready development skills and best practices.",
                "Built a strong base of returning students through high-quality instruction.",
                "Helped multiple students successfully transition into web development."
            ],
            link: "https://www.superprof.mx/estudiante-ingenieria-ofrece-clases-programacion-html-css-node-react.html"
        }
    ],
    education: [
        {
            title: "Computer Systems Engineer",
            subtitle: "Tecnológico Nacional de México Campus Chihuahua II",
            date: "August 2020 - December 2024",
            highlights: [
                "Strong foundation in JavaScript, Node.js, databases, and software engineering principles.",
                "Experience with AWS, networking, and Agile methodologies.",
                "Active participant in hackathons and coding competitions.",
                "Specialized in Full-Stack Development."
            ],
            link: "/Reticula-ISC-2023.webp"
        }
    ],
    certifications: [
        {
            name: "Associate Cloud Engineer",
            issuer: "Google Cloud",
            icon: "/tech-stack/gcp.svg",
            link: "https://www.credly.com/badges/f2b73bce-eceb-41af-9925-1d0a636b88ed"
        }
    ],
    technologies: [
        {
            name: "React",
            link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-016de529-146c-4e5e-aa3a-7b5924591833.pdf",
        },
        {
            name: "Node.js",
            link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-c2bbdd5b-64cb-482b-9368-3bdc3cbca820.pdf"
        },
        {
            name: "Next.js",
        },
        {
            name: "Tailwind",
        },
        {
            name: "Figma",
        },
        {
            name: "MySQL",
        },
        {
            name: "MongoDB",
        },
        {
            name: "Git",
        },
        {
            name: "Docker",
        },
    ],
    projects: [
        {
            title: "Vinqua",
            description:
                "Free VIN check that pulls every public U.S. government record on a vehicle into one report: full specification decode, open safety recalls, the parts owners most often report failing, crash-test ratings and real-world fuel economy. No account and no card.",
            technologies: ["Next.js", "React", "TypeScript", "Tailwind", "Cloudflare Workers"],
            image: "/vinqua.webp",
            link: "https://vinqua.com/"
        },
        {
            title: "Orablo",
            description:
                "Daily English pronunciation practice. Every day is a new edition of ten words and the sentences they live in, graded in the browser by speech recognition.",
            technologies: ["Next.js", "React", "TypeScript", "Tailwind", "Cloudflare Workers"],
            image: "/orablo.webp",
            link: "https://orablo.com/"
        },
        {
            title: "Dahibi",
            description:
                "One moodboard per day for anything that runs on days. Each day is an infinite canvas for photos, notes and colour swatches, and it is local-first, so everything stays in the browser.",
            technologies: ["Next.js", "React", "TypeScript", "Tailwind", "IndexedDB"],
            image: "/dahibi.webp",
            link: "https://dahibi.com/"
        },
        {
            title: "Por Amor a Tobby",
            description:
                "Web platform for animal shelters to manage and showcase pets for adoption, including a full admin panel for listings and applications.",
            technologies: ["React", "Node.js", "MySQL", "Express", "Tailwind", "Figma"],
            image: "/pat.webp",
            link: "https://poramoratobby.com/"
        },
        {
            title: "TintoTenis",
            description:
                "End-to-end platform for a tennis academy covering class management, payments, and reporting through a custom dashboard.",
            technologies: ["React", "Node.js", "MySQL", "Express", "Tailwind"],
            image: "/tt.webp"
        },
        {
            title: "NavegaTec",
            description:
                "Interactive campus map to help students navigate and discover events in real time.",
            technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind", "Figma"],
            image: "/nt.webp",
            link: "https://navegatest.vercel.app/"
        },
        {
            title: "SimpleTTS",
            description:
                "Open-source Node.js package for simple text-to-speech conversion to MP3, published on npm.",
            technologies: ["Node.js"],
            image: "/stts.png",
            link: "https://www.npmjs.com/package/simple-tts-mp3"
        },
        {
            title: "Minemadness",
            description:
                "Arcade-style game built with Unity and C#, published on Google Play and Huawei AppGallery.",
            technologies: ["Unity", "C#"],
            image: "/mm.webp",
            link: "https://play.google.com/store/apps/details?id=com.GAMEMZ.Minemadness"
        }
    ]
};
