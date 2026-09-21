import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import FeaturedProjects from "./Component/Featuredproject";

function HomeCard() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.replace("#", "");

            setTimeout(() => {
                const section = document.getElementById(sectionId);

                if (section) {
                    section.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }, 300);
        }
    }, [location]);

    return (
        <>
            {/* HOME */}
            <section id="home" className="scroll-mt-20">
                <Hero />
            </section>

            {/* ABOUT */}
            <section id="about" className="scroll-mt-20">
                <About />
            </section>

            {/* SKILLS */}
            <section id="skills" className="scroll-mt-20">
                <Skills />
            </section>

            {/* PROJECTS */}
            <section id="projects" className="scroll-mt-20">
                <FeaturedProjects />
            </section>

            {/* SERVICES */}
            <section id="services" className="scroll-mt-20">
                <Services />
            </section>

            {/* CONTACT */}
            <section id="contact" className="scroll-mt-20">
                <Contact />
            </section>
        </>
    );
}

export default HomeCard;