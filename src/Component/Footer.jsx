
import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaWhatsapp,
    FaXTwitter
} from "react-icons/fa6";
import log from "../assets/logo.png";

function Footer() {
    return (
        <footer className="bg-[#000006] text-white border-t border-gray-800">

            <div className="
                max-w-7xl
                mx-auto
                px-6
                py-12
                md:px-10
                lg:px-16
            ">

                {/* Main Footer */}
                <div className="
                    flex
                    flex-col
                    gap-10
                    md:grid
                    md:grid-cols-2
                    lg:grid-cols-4
                ">

                    {/* Brand */}
                    <div className="text-center md:text-left">

                        
                        
                            {/* Brand Name */}
                            <div className="flex gap-2 align-baseline items-center justify-center md:justify-start group">

                                 <img
                                src={log}
                                alt="VickieTrust Tech Logo"
                                className="
                        
                                    w-12
                                    h-10
                                    md:w-10
                                    md:h-10
                                    object-contain
                                    transition-transform
                                    duration-300
                                    group-hover:scale-105
                                "
                            />
                                <span className="
                                    text-white
                                    font-bold
                                    text-[15px]
                                    md:text-[16px]
                                    tracking-tight
                                ">
                                    VickieTrust
                                </span>
                        
                                <span className="
                                    text-[#0770FA]
                                    font-semibold
                                    text-[13px]
                                    md:text-[14px]
                                    mt-1
                                ">
                                    Tech.
                                </span>
                            </div>

                        <p className="
                            text-gray-400
                            mt-2
                            text-sm
                        ">
                            Software Engineer
                        </p>

                        <p className="
                            text-gray-400
                            mt-4
                            text-sm
                            leading-6
                        ">
                            Building modern, responsive and
                            user-friendly digital experiences.
                        </p>

                    </div>


                    {/* Quick Links */}
                    <div className="text-center md:text-left">

                        <h3 className="
                            text-lg
                            font-semibold
                            mb-4
                        ">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-gray-400">

                            <li>
                                <a
                                    href="/"
                                    className="hover:text-[#0770FA] transition"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#about"
                                    className="hover:text-[#0770FA] transition"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#skills"
                                    className="hover:text-[#0770FA] transition"
                                >
                                    Skills
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#projects"
                                    className="hover:text-[#0770FA] transition"
                                >
                                    Projects
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#services"
                                    className="hover:text-[#0770FA] transition"
                                >
                                    Services
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#contact"
                                    className="hover:text-[#0770FA] transition"
                                >
                                    Contact
                                </a>
                            </li>

                        </ul>

                    </div>


                    {/* Services */}
                    <div className="text-center md:text-left">

                        <h3 className="
                            text-lg
                            font-semibold
                            mb-4
                        ">
                            Services
                        </h3>

                        <ul className="space-y-3 text-gray-400">

                            <li>Frontend Development</li>

                            <li>React Development</li>

                            <li>Responsive Web Design</li>

                            <li>Website Development</li>

                            <li>UI Implementation</li>

                        </ul>

                    </div>


                    {/* Contact */}
                    <div className="text-center md:text-left">

                        <h3 className="
                            text-lg
                            font-semibold
                            mb-4
                        ">
                            Connect With Me
                        </h3>

                        <p className="
                            text-gray-400
                            text-sm
                            mb-5
                        ">
                            Let's work together and bring
                            your ideas to life.
                        </p>


                        {/* Social Icons */}
                        <div className="
                            flex
                            justify-center
                            md:justify-start
                            gap-4
                        ">

                            {/* GitHub */}
                            <a
                                href="https://github.com/nenwavictor"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    text-xl
                                    text-gray-400
                                    hover:text-white
                                    hover:-translate-y-1
                                    transition
                                "
                            >
                                <FaGithub />
                            </a>


                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/Victor-Nenwa-1a2b3c4d5e/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    text-xl
                                    text-gray-400
                                    hover:text-[#0770FA]
                                    hover:-translate-y-1
                                    transition
                                "
                            >
                                <FaLinkedin />
                            </a>


                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com/Ogochukwu-Victor-Nenwa"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    text-xl
                                    text-gray-400
                                    hover:text-[#0770FA]
                                    hover:-translate-y-1
                                    transition
                                "
                            >
                                <FaFacebook />
                            </a>


                            {/* X */}
                            <a
                                    href="https://www.twitter.com/in/NenwaVicto71573/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                    text-xl
                                    text-gray-400
                                    hover:text-white
                                    hover:-translate-y-1
                                    transition
                                "
                            >
                                <FaXTwitter />
                            </a>


                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/2348108909137"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    text-xl
                                    text-gray-400
                                    hover:text-green-500
                                    hover:-translate-y-1
                                    transition
                                "
                            >
                                <FaWhatsapp />
                            </a>

                        </div>

                    </div>

                </div>


                {/* Divider */}
                <div className="
                    border-t
                    border-gray-800
                    mt-10
                    pt-6
                ">

                    <div className="
                        flex
                        flex-col
                        gap-3
                        items-center
                        text-center
                        text-sm
                        text-gray-500
                        md:flex-row
                        md:justify-between
                    ">

                        <p>
                            © 2026 VickieTrust Tech.
                            All rights reserved.
                        </p>

                        <p>
                            Designed & Developed by
                            <span className="text-[#0770FA] ml-1">
                                VickieTrust Tech
                            </span>
                        </p>

                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;

