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
            "Frontend engineer building AutoZone's e-commerce storefronts with React and Next.js. Maker of Orablo and Vinqua, running on Cloudflare Workers.",
        profiles: {
            github: "https://github.com/eliangerard/",
            linkedin: "https://www.linkedin.com/in/eliangerard/"
        },
        about:
            "Frontend engineer with 2+ years building AutoZone's e-commerce storefronts (React, Next.js, TypeScript) for the US, Mexico and Brazil. One of 3 frontend engineers on Customer Reviews, which grew review submissions more than 5x. I also run two products of my own on Cloudflare Workers, built mostly with Claude Code."
    },
    experience: [
        {
            title: "Systems Engineer (Frontend)",
            subtitle: "AutoZone",
            date: "June 2024 - Present",
            description:
                "Progression: IT Intern (Jun 2024), Associate Systems Engineer (Aug 2024), Systems Engineer (Mar 2026).",
            highlights: [
                "Built Customer Reviews as one of 3 frontend engineers and set its build order and integration plan. Launched in the US, then Mexico. Submissions grew more than 5x year over year.",
                "Rebuilt the review form to make adding text, photos and videos easier. Review quality (written content, photos and videos) rose about 40%. Both figures come from AutoZone's business analytics team.",
                "Started a legacy cleanup unprompted: rewrote post-sign-in redirects across 70+ files and began moving state management from Redux to TanStack Query (in progress).",
                "Received AutoZone's Extra Miler award (May 2026) for teamwork and the legacy cleanup.",
                "Mentored an intern. Review pull requests and help interns and associate engineers on other teams.",
                "Run A/B tests in Monetate and Forte, manage feature flags and translated labels in Oracle ATG BCC, and take part in releases, production fixes and troubleshooting calls with third-party vendors.",
                "Ship features from Figma designs that are responsive, ADA-compliant and covered by Jest and React Testing Library tests, working with Product and Design in a Scrum team and in annual planning."
            ],
            link: "https://autozone.com/"
        },
        {
            title: "Independent Developer",
            subtitle: "Personal Products (Orablo, Vinqua)",
            date: "July 2026 - Present",
            description:
                "Built mostly with Claude Code under my direction. I decide what to build and how, and ship it.",
            highlights: [
                "Orablo (orablo.com) teaches pronunciation in 6 languages on web and Android (Capacitor), grading speech in the browser with the Web Speech API and an on-device Vosk fallback. Daily lessons are drafted with the Claude Agent SDK and gated by a separate LLM judge. Next.js 16 and Tailwind CSS on Cloudflare Workers (D1, KV, R2).",
                "Vinqua (vinqua.com) builds a free VIN report from 8 NHTSA and EPA endpoints, streamed section by section with React Suspense. A two-layer cache lets different VINs share lookups."
            ]
        },
        {
            title: "Full-Stack Developer",
            subtitle: "Freelance (TintoTenis, Por Amor a Tobby)",
            date: "December 2023 - April 2025",
            highlights: [
                "Built full-stack apps for two clients: a platform a tennis academy uses for class management, payments and reporting, and an adoption platform for animal shelters (poramoratobby.com).",
                "Owned the database schema, REST API design and deployment (React, Express, MySQL)."
            ]
        },
        {
            title: "Programming Tutor",
            subtitle: "Superprof",
            date: "October 2023 - June 2025",
            highlights: [
                "Coached students 1-on-1 in web development (HTML, CSS, React, Node.js), debugging their projects with them in real time."
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
            name: "Professional Cloud Architect",
            issuer: "Google Cloud",
            icon: "/tech-stack/gcp.svg",
            link: "https://www.credly.com/badges/d4a5f875-e681-4eac-b627-e3bfb4804342"
        },
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
            title: "Orablo",
            description:
                "Daily pronunciation practice in 6 languages. Every day is a new edition of ten words and the sentences they live in, graded in the browser by speech recognition.",
            technologies: ["Next.js", "React", "TypeScript", "Tailwind", "Cloudflare Workers"],
            image: "/orablo.webp",
            link: "https://orablo.com/"
        },
        {
            title: "Vinqua",
            description:
                "Free VIN check that pulls every public U.S. government record on a vehicle into one report: full specification decode, open safety recalls, the parts owners most often report failing, crash-test ratings and real-world fuel economy. No account and no card.",
            technologies: ["Next.js", "React", "TypeScript", "Tailwind", "Cloudflare Workers"],
            image: "/vinqua.webp",
            link: "https://vinqua.com/"
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
