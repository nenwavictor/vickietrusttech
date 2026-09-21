
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt,
    FaGithub,
    FaDatabase
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiReactrouter,
    SiVercel
} from "react-icons/si";

function Skills() {

    const skills = [
        {
            name: "HTML5",
            description: "Building clean and semantic web structures.",
            icon: <FaHtml5 />,
            color: "text-orange-500"
        },

        {
            name: "CSS3",
            description: "Creating modern layouts, animations and styling.",
            icon: <FaCss3Alt />,
            color: "text-blue-500"
        },

        {
            name: "JavaScript",
            description: "Adding functionality and interactive experiences.",
            icon: <FaJs />,
            color: "text-yellow-400"
        },

        {
            name: "React.js",
            description: "Building reusable and dynamic user interfaces.",
            icon: <FaReact />,
            color: "text-cyan-400"
        },

        {
            name: "Tailwind CSS",
            description: "Designing responsive interfaces with utility classes.",
            icon: <SiTailwindcss />,
            color: "text-cyan-300"
        },

        {
            name: "React Router",
            description: "Creating navigation and multiple pages in React applications.",
            icon: <SiReactrouter />,
            color: "text-red-500"
        },

        {
            name: "Git",
            description: "Managing and tracking changes throughout development.",
            icon: <FaGitAlt />,
            color: "text-orange-600"
        },

        {
            name: "GitHub",
            description: "Managing repositories and collaborating on projects.",
            icon: <FaGithub />,
            color: "text-white"
        },

        {
            name: "API Integration",
            description: "Connecting applications with external APIs and data.",
            icon: <FaDatabase />,
            color: "text-purple-400"
        },

        {
            name: "Local Storage",
            description: "Storing and managing data directly in the browser.",
            icon: <FaDatabase />,
            color: "text-green-400"
        },

        {
            name: "Responsive Design",
            description: "Creating websites that work across mobile, tablet and desktop.",
            icon: <FaCss3Alt />,
            color: "text-blue-400"
        },

        {
            name: "Vercel",
            description: "Deploying and hosting modern web applications.",
            icon: <SiVercel />,
            color: "text-white"
        }
    ];


    return (
        <section
            id="skills"
            className="
                min-h-screen
                bg-[#020817]
                text-white
                px-5
                py-20
                sm:px-8
                md:px-10
                lg:px-16
                xl:px-24
            "
        >

            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">

                <p className="
                    text-[#0770FA]
                    text-sm
                    md:text-base
                    font-semibold
                    uppercase
                    tracking-[3px]
                    mb-3
                ">
                    My Skills
                </p>

                <h1 className="
                    text-3xl
                    sm:text-4xl
                    md:text-5xl
                    font-bold
                ">
                    What I Know & How I Build
                </h1>

                <p className="
                    text-gray-400
                    mt-4
                    text-sm
                    sm:text-base
                    md:text-lg
                    leading-7
                ">
                    I use modern web technologies to build responsive,
                    interactive and user-friendly digital experiences.
                </p>

            </div>


            {/* Skills Grid */}
            <div
                className="
                    max-w-7xl
                    mx-auto
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                    gap-5
                    md:gap-6
                    lg:gap-7
                "
            >

                {skills.map((skill, index) => (

                    <div
                        key={index}
                        className="
                            group
                            bg-[#0a1022]
                            border
                            border-gray-800
                            rounded-2xl
                            p-6
                            md:p-7
                            transition-all
                            duration-300
                            hover:-translate-y-2
                            hover:border-[#0770FA]
                            hover:shadow-[0_10px_35px_rgba(7,112,250,0.15)]
                        "
                    >

                        {/* Icon */}
                        <div
                            className={`
                                text-4xl
                                md:text-5xl
                                ${skill.color}
                                mb-5
                                transition-transform
                                duration-300
                                group-hover:scale-110
                            `}
                        >
                            {skill.icon}
                        </div>


                        {/* Skill Name */}
                        <h2 className="
                            text-lg
                            md:text-xl
                            font-semibold
                            mb-2
                        ">
                            {skill.name}
                        </h2>


                        {/* Description */}
                        <p className="
                            text-gray-400
                            text-sm
                            md:text-[15px]
                            leading-6
                        ">
                            {skill.description}
                        </p>

                    </div>

                ))}

            </div>


            {/* Bottom statement */}
            <div className="
                max-w-4xl
                mx-auto
                text-center
                mt-14
                md:mt-20
            ">

                <p className="
                    text-gray-400
                    text-sm
                    md:text-base
                ">
                    Always learning, improving and exploring better
                    ways to build for the web.
                </p>

            </div>

        </section>
    );
}

export default Skills;

