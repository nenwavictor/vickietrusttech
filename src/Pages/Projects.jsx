// import { Link } from "react-router-dom";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
} from "react-icons/fa";

// import { useNavigate } from "react-router-dom";
const projects = [
  {
    id: "hi-tech-ecommerce",

    title: "Hi-Tech E-Commerce",

    image: "/assets/e-commerce.PNG",

    overview:
      "Hi-Tech E-Commerce is a modern Amazon-style shopping application built to provide users with a smooth online shopping experience. Users can browse products, search for products, add items to their cart, checkout, and view their orders.",

    features: [
      "Product browsing",
      "Product search",
      "Product categories",
      "Shopping cart",
      "Checkout",
      "Order management",
      "Product details",
      "Responsive design",
    ],

    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "React Router",
      "REST API",
      "LocalStorage",
    ],

    challenges:
      "One of the challenges was managing product data, cart information, and orders across different pages while keeping the application responsive.",

    solution:
      "I used React state management, React Router, LocalStorage, reusable components, and API data to organize the application and maintain data between different pages.",

    live: "#",
    github: "#",
  },

  {
    id: "portfolio",

    title: "VickieTrust Tech Portfolio",

    image: "/assets/port.PNG",

    overview:
      "VickieTrust Tech is a personal portfolio website created to showcase my skills, projects, services, and experience as a software engineer.",

    features: [
      "Responsive design",
      "Project showcase",
      "About section",
      "Skills section",
      "Contact form",
      "Social media links",
      "Email integration",
    ],

    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "React Router",
      "EmailJS",
    ],

    challenges:
      "The main challenge was creating a professional interface that works well across desktop, tablet, and mobile devices.",

    solution:
      "I used responsive Tailwind CSS utilities and reusable React components to create a consistent experience across different screen sizes.",

    live: "#",
    github: "#",
  },

  {
    id: "school-management",

    title: "School Management System",

    image: "/assets/school.png",

    overview:
      "A modern school management system designed to help administrators manage students, academic information, attendance, and other school operations.",

    features: [
      "Admin dashboard",
      "Student management",
      "Student profiles",
      "Attendance management",
      "Academic records",
      "Search and filtering",
      "Responsive dashboard",
    ],

    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "React Router",
    ],

    challenges:
      "The challenge was designing a dashboard that could organize a large amount of school information without making the interface difficult to use.",

    solution:
      "I organized the application into reusable components and separate dashboard sections so administrators can quickly access important information.",

    live: "#",
    github: "#",
  },
];

function Projects() {
  return (
    <section className="min-h-screen bg-[#020817] px-6 py-20 text-white">

      <div className="mx-auto max-w-6xl">

        {/* Back */}
        <button
          
          className="mb-10 inline-flex items-center gap-2 text-gray-400 transition hover:text-[#0770FA]"
        >
          <FaArrowLeft />
          Back Home
        </button>

        {/* Heading */}
        <div className="mb-16 text-center">

          <p className="font-semibold text-[#0770FA]">
            MY WORK
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            My Projects
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Explore the applications and digital experiences I have
            designed and developed.
          </p>

        </div>

        {/* Projects */}
        <div className="space-y-20">

          {projects.map((project) => (

            <article
              key={project.id}
              className="overflow-hidden rounded-2xl border border-gray-800 bg-[#0a1224]"
            >

              {/* Project Image */}
              <div className="h-64 overflow-hidden md:h-96">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />

              </div>

              {/* Project Details */}
              <div className="p-6 md:p-10">

                <h2 className="text-3xl font-bold md:text-4xl">
                  {project.title}
                </h2>

                {/* Overview */}
                <div className="mt-8">

                  <h3 className="text-xl font-bold text-[#0770FA]">
                    Overview
                  </h3>

                  <p className="mt-3 leading-7 text-gray-400">
                    {project.overview}
                  </p>

                </div>

                {/* Features */}
                <div className="mt-8">

                  <h3 className="text-xl font-bold text-[#0770FA]">
                    Key Features
                  </h3>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">

                    {project.features.map((feature) => (

                      <div
                        key={feature}
                        className="rounded-lg bg-[#111c35] px-4 py-3 text-gray-300"
                      >
                        ✓ {feature}
                      </div>

                    ))}

                  </div>

                </div>

                {/* Technologies */}
                <div className="mt-8">

                  <h3 className="text-xl font-bold text-[#0770FA]">
                    Technologies
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-3">

                    {project.technologies.map((tech) => (

                      <span
                        key={tech}
                        className="rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-300"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                </div>

                {/* Challenges */}
                <div className="mt-8">

                  <h3 className="text-xl font-bold text-[#0770FA]">
                    Challenges
                  </h3>

                  <p className="mt-3 leading-7 text-gray-400">
                    {project.challenges}
                  </p>

                </div>

                {/* Solution */}
                <div className="mt-8">

                  <h3 className="text-xl font-bold text-[#0770FA]">
                    Solution
                  </h3>

                  <p className="mt-3 leading-7 text-gray-400">
                    {project.solution}
                  </p>

                </div>

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap gap-4">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-[#0770FA] px-6 py-3 font-semibold transition hover:bg-blue-600"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-gray-700 px-6 py-3 font-semibold transition hover:border-[#0770FA]"
                  >
                    <FaGithub />
                    View GitHub
                  </a>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;