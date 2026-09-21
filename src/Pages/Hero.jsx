
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { SiHtmx } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs, FaHtml5 } from "react-icons/fa";

import profile from "../assets/VICK.png";
import lapto from "../assets/lapto.png";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Hero() {

    const [text, setText] = useState("");
    const navigate = useNavigate();
    const scrollToSection = (sectionId) => {
    navigate(`/#${sectionId}`);
};
const fullText = "Hi, I'm Vickietrust Tech!";

useEffect(() => {
  let index = 0;

  const typing = setInterval(() => {
    setText(fullText.slice(0, index + 1));
    index++;

    if (index >= fullText.length) {
      clearInterval(typing);
    }
  }, 100);

  return () => clearInterval(typing);
}, []);
  return (
    <section
      className="
        relative overflow-hidden
        min-h-screen
        bg-[#020817]
        px-5 py-16
        sm:px-8
        md:px-10 md:py-20
        lg:px-16 lg:py-24
      "
    >
      {/* Background glow */}
      <div
        className="
          absolute
          left-1/2 top-1/3
          h-[300px] w-[300px]
          -translate-x-1/2
          rounded-full
          bg-blue-600/10
          blur-[120px]
          md:h-[450px] md:w-[450px]
        "
      />

      <div
        className="
          absolute
          right-[-100px] top-20
          h-[250px] w-[250px]
          rounded-full
          bg-cyan-400/10
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          bottom-[-100px] left-[-100px]
          h-[300px] w-[300px]
          rounded-full
          bg-purple-600/10
          blur-[130px]
        "
      />

      {/* MAIN CONTENT */}
      <div
        className="
          relative z-10
          mx-auto
          flex max-w-7xl
          flex-col
          items-center
          gap-16
          md:flex-row
          md:items-center
          md:gap-8
          lg:gap-16
        "
      >
        {/* LEFT SIDE */}
        <div
          className="
            w-full
            max-w-xl
            text-center
            md:w-1/2
            md:max-w-none
            md:text-left
          "
        >
          {/* Badge */}
          <div
            className="
              mx-auto mb-6
              flex w-fit
              items-center justify-center gap-2
              rounded-full
              border border-[#0770FA]
              bg-[#0770FA]/5
              px-4 py-2
              text-xs font-semibold
              tracking-wide
              text-[#0770FA]
              md:mx-0
              md:text-sm
            "
          >
            <SiHtmx className="text-sm md:text-base" />
            Software Engineer
          </div>

          {/* Heading */}
          <h1 className="min-h-[70px] text-3xl font-bold leading-tight sm:text-4xl md:text-4xl lg:text-5xl">
  {text.length <= 8 ? (
    <span className="text-white">{text}</span>
  ) : (
    <>
      <span className="text-white">Hi, I'm </span><br/>
      <span className="text-[#0770FA]">
        {text.slice(8)}
      </span>
    </>
  )}

  
</h1>
          {/* Job title */}
          <p
            className="
              mt-3
              text-xs
              font-semibold
              tracking-widest
              text-[#0770FA]
              sm:text-sm
              md:text-xs
              lg:text-sm
            "
          >
            SOFTWARE ENGINEER | WEB DEVELOPER
          </p>

          {/* Description */}
          <p
            className="
              mx-auto mt-5
              max-w-xl
              text-sm
              leading-7
              text-gray-300
              sm:text-base
              md:mx-0
              md:text-sm
              lg:text-base
            "
          >
            I am a passionate and skilled software engineer with expertise in
            web development and UI/UX design. I have a strong foundation in
            programming languages, frameworks, and tools, allowing me to create
            innovative and user-friendly applications.
          </p>

          <p
            className="
              mx-auto mt-3
              max-w-xl
              text-sm
              leading-7
              text-gray-400
              sm:text-base
              md:mx-0
              md:text-sm
              lg:text-base
            "
          >
            With a keen eye for detail and a focus on delivering high-quality
            solutions, I strive to create seamless user experiences that solve
            real-world problems.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-7
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:justify-center
              md:justify-start
            "
          >
            <button
              className="
                w-full
                rounded-lg
                bg-[#0770FA]
                px-6 py-3
                text-sm font-semibold
                text-white
                shadow-lg shadow-blue-500/20
                transition
                duration-300
                hover:-translate-y-1
                hover:bg-blue-600
                sm:w-auto
                md:text-sm
              "
            >
              View My Work
            </button>

            <button
            onClick={() => scrollToSection("contact")}
              className="
                w-full
                rounded-lg
                border border-[#0770FA]
                px-6 py-3
                text-sm font-semibold
                text-white
                transition
                duration-300
                hover:-translate-y-1
                hover:bg-[#0770FA]
                sm:w-auto
                md:text-sm
              "
            >
              Contact Me
            </button>
          </div>

          {/* Social Icons */}
          <div
            className="
              mt-8
              flex
              justify-center
              gap-3
              md:justify-start
            "
          >
            {/* LinkedIn */}
            <a
                href="https://www.linkedin.com/in/Ogochukwu Nenwa/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex h-10 w-10
                items-center justify-center
                rounded-lg
                border border-[#01ad96]/60
                bg-slate-950/50
                text-white
                transition
                duration-300
                hover:-translate-y-1
                hover:border-[#0770FA]
                hover:text-[#0770FA]
              "
            >
              <FaLinkedin className="text-xl" />
            </a>

            {/* X */}
            <a
              href="https://x.com/@NenwaVicto71573"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-lg
                border border-[#01ad96]/60
                bg-slate-950/50
                text-white
                transition
                duration-300
                hover:-translate-y-1
                hover:border-[#0770FA]
                hover:text-[#0770FA]
              "
            >
              <FaXTwitter className="text-xl" />
            </a>

            {/* Github */}
            <a
              href="https://github.com/nenwavictor"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-lg
                border border-[#01ad96]/60
                bg-slate-950/50
                text-white
                transition
                duration-300
                hover:-translate-y-1
                hover:border-[#0770FA]
                hover:text-[#0770FA]
              "
            >
              <FaGithub className="text-xl" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2348108909137"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-lg
                border border-[#01ad96]/60
                bg-slate-950/50
                text-white
                transition
                duration-300
                hover:-translate-y-1
                hover:border-[#0770FA]
                hover:text-[#0770FA]
              "
            >
              <FaWhatsapp className="text-xl" />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/Ogochukwu-Victor-Nenwa"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-lg
                border border-[#01ad96]/60
                bg-slate-950/50
                text-white
                transition
                duration-300
                hover:-translate-y-1
                hover:border-[#0770FA]
                hover:text-[#0770FA]
              "
            >
              <FaFacebook className="text-xl" />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        {/* RIGHT SIDE */}
<div
  className="
    relative
    flex
    h-[480px]
    w-full
    items-end
    justify-center
    overflow-hidden
    md:h-[560px]
    md:w-1/2
    lg:h-[620px]
  "
>
  {/* Main blue glow */}
  <div
    className="
      absolute
      left-1/2
      top-1/2
      h-[320px]
      w-[320px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-blue-600/20
      blur-[120px]
      md:h-[430px]
      md:w-[430px]
    "
  />

  {/* Secondary glow */}
  <div
    className="
      absolute
      bottom-0
      left-1/2
      h-[250px]
      w-[250px]
      -translate-x-1/2
      rounded-full
      bg-cyan-500/10
      blur-[100px]
    "
  />

  {/* Purple glow */}
  <div
    className="
      absolute
      bottom-[-80px]
      left-[-50px]
      h-[250px]
      w-[250px]
      rounded-full
      bg-purple-600/15
      blur-[100px]
    "
  />

  {/* Laptop */}
  <img
    src={lapto}
    alt="Coding laptop"
    className="
      absolute
      right-[2%]
      top-[4%]
      z-20
      w-[230px]
      rotate-[-4deg]
      opacity-35
      drop-shadow-[0_0_40px_rgba(37,99,235,0.3)]
      sm:w-[270px]
      md:right-[0%]
      md:top-[5%]
      md:w-[310px]
      lg:right-[2%]
      lg:w-[350px]
    "
  />

  {/* React */}
  <div
    className="
      absolute
      left-[4%]
      top-[18%]
      z-30
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-xl
      border
      border-cyan-400/20
      bg-slate-950/80
      shadow-[0_0_30px_rgba(34,211,238,0.15)]
      backdrop-blur-md
      transition
      duration-300
      hover:scale-110
    "
  >
    <FaReact className="text-3xl text-cyan-400" />
  </div>

  {/* Tailwind */}
  <div
    className="
      absolute
      right-[2%]
      top-[20%]
      z-30
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-xl
      border
      border-cyan-400/20
      bg-slate-950/80
      shadow-[0_0_30px_rgba(34,211,238,0.15)]
      backdrop-blur-md
      transition
      duration-300
      hover:scale-110
    "
  >
    <RiTailwindCssFill className="text-3xl text-cyan-400" />
  </div>

  {/* Node */}
  <div
    className="
      absolute
      left-[3%]
      top-[52%]
      z-30
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-xl
      border
      border-green-400/20
      bg-slate-950/80
      shadow-[0_0_30px_rgba(34,197,94,0.15)]
      backdrop-blur-md
      transition
      duration-300
      hover:scale-110
    "
  >
    <FaNodeJs className="text-3xl text-green-400" />
  </div>

  {/* HTML */}
  <div
    className="
      absolute
      right-[3%]
      top-[52%]
      z-30
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-xl
      border
      border-orange-400/20
      bg-slate-950/80
      shadow-[0_0_30px_rgba(249,115,22,0.15)]
      backdrop-blur-md
      transition
      duration-300
      hover:scale-110
    "
  >
    <FaHtml5 className="text-3xl text-orange-400" />
  </div>

  {/* ================= MAIN PROFILE IMAGE ================= */}

  <img
    src={profile}
    alt="Vickietrust Tech"
    className="
  absolute
  bottom-0
  left-1/2
  z-20
  h-auto
  w-[500px]
  -translate-x-1/2
  object-contain
  sm:w-[550px]
  md:w-[600px]
  lg:w-[700px]
  xl:w-[780px]
"
    
  />
</div>
      </div>
    </section>
  );
}

export default Hero;
