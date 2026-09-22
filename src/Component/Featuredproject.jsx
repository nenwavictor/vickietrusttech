import { useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import ecommerce from "../assets/e-commerce.PNG";
import portfolio from "../assets/port.PNG";
import school from "../assets/school.png";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Hi-Tech E-Commerce",
    description:
      "A modern Amazon-style e-commerce application where users can browse products, search, add items to cart, checkout, and view their orders.",
    image: ecommerce,
    technologies: ["React", "Tailwind CSS", "JavaScript", "REST API"],
    live: "#",
    github: "#",
  },
  {
    id: 2,
    title: "VickieTrust Tech Portfolio",
    description:
      "A responsive personal portfolio website designed to showcase my skills, projects, services, and experience as a software engineer.",
    image: portfolio,
    technologies: ["React", "Tailwind CSS", "JavaScript", "EmailJS"],
    live: "#",
    github: "#",
  },
  {
    id: 3,
    title: "School Management System",
    description:
      "A modern school management platform designed to help administrators manage students, attendance, academic records, and school operations.",
    image: school,
    technologies: ["React", "Tailwind CSS", "JavaScript", "React Router"],
    live: "#",
    github: "#",
  },
];

function FeaturedProjects() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#020817] px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="font-semibold tracking-wider text-[#0770FA]">
            MY WORK
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Here are some of the projects I have designed and developed
            using modern web technologies.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={800}
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          className="w-full"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="mx-auto overflow-hidden rounded-2xl border border-gray-800 bg-[#0a1224] shadow-2xl">

                {/* Image */}
                <div className="h-64 overflow-hidden md:h-96">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">

                  <h3 className="text-2xl font-bold md:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-400 md:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-[#111c35] px-3 py-1 text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-7 flex flex-wrap items-center gap-4">

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg bg-[#0770FA] px-5 py-3 text-sm font-semibold transition hover:bg-blue-600"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg border border-gray-700 px-5 py-3 text-sm font-semibold transition hover:border-[#0770FA] hover:text-[#0770FA]"
                    >
                      <FaGithub />
                      GitHub
                    </a>

                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Dots */}
        <div className="mt-8 flex justify-center gap-3">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => {
                swiperRef.current?.slideToLoop(index);
              }}
              aria-label={`Go to project ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-350 ${
                activeIndex === index
                  ? "w-8 bg-[#0770FA]"
                  : "w-2.5 bg-gray-600"
              }`}
            />
          ))}
        </div>

        {/* View All Projects */}
        <div className="mt-10 text-center">
          <Link to="/projects"
            className="rounded-lg border border-[#0770FA] px-6 py-3 font-semibold text-[#0770FA] transition hover:bg-[#0770FA] hover:text-white"
          >
            View All Projects
          </Link>
        </div>

      </div>
    </section>
  );
}

export default FeaturedProjects;