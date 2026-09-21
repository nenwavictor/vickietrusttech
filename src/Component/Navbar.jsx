import { useState } from "react";
import log from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    // Scroll to a section on HomeCard
    const scrollToSection = (sectionId) => {
        // If we are not on the homepage, go home first
        if (window.location.pathname !== "/") {
            navigate("/");

            // Wait for HomeCard to render
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, 100);
        } else {
            document.getElementById(sectionId)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

        setMenuOpen(false);
    };

    return (
        <>
            {/* ================= NAVBAR ================= */}
            <header
                className="
                    bg-[#000006]
                    p-4
                    flex
                    items-center
                    justify-around
                    h-16
                    fixed
                    top-0
                    left-0
                    right-0
                    z-50
                "
            >

                {/* Logo */}
                <Link
    to="/"
    onClick={() => setMenuOpen(false)}
    className="flex items-center gap-2.5 px-2 py-1 rounded-lg group"
>
    {/* Logo */}
    <img
        src={log}
        alt="VickieTrust Tech Logo"
        className="

            w-12
            h-12
            md:w-10
            md:h-10
            object-contain
            transition-transform
            duration-300
            group-hover:scale-105
        "
    />

    {/* Brand Name */}
    <div className="flex flex-col leading-none">
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
</Link>


                {/* ================= DESKTOP NAVIGATION ================= */}
                <nav>
                    <ul
                        className="
                            hidden
                            md:flex
                            text-white
                            gap-6
                            lg:gap-18
                            text-[18px]
                        "
                    >

                        {/* HOME */}
                        <li
                            onClick={() => scrollToSection("home")}
                            className="
                                hover:text-[#0770FA]
                                cursor-pointer
                            "
                        >
                            Home
                        </li>


                        {/* ABOUT */}
                        <li
                            onClick={() => scrollToSection("about")}
                            className="
                                hover:text-[#0770FA]
                                cursor-pointer
                            "
                        >
                            About
                        </li>


                        {/* SKILLS */}
                        <li
                            onClick={() => scrollToSection("skills")}
                            className="
                                hover:text-[#0770FA]
                                cursor-pointer
                            "
                        >
                            Skills
                        </li>


                        {/* PROJECTS */}
                        <li
                            onClick={() => scrollToSection("projects")}
                            className="
                                hover:text-[#0770FA]
                                cursor-pointer
                            "
                        >
                            Projects
                        </li>


                        {/* SERVICES */}
                        <li
                            onClick={() => scrollToSection("services")}
                            className="
                                hover:text-[#0770FA]
                                cursor-pointer
                            "
                        >
                            Services
                        </li>


                        {/* CONTACT */}
                        <li
                            onClick={() => scrollToSection("contact")}
                            className="
                                hover:text-[#0770FA]
                                cursor-pointer
                            "
                        >
                            Contact
                        </li>

                    </ul>
                </nav>


                {/* ================= RIGHT SIDE ================= */}
                <div className="flex items-center">

                    {/* Hamburger */}
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="
                            md:hidden
                            text-white
                            text-3xl
                            hover:text-[#0770FA]
                        "
                    >
                        <GiHamburgerMenu />
                    </button>


                    {/* Let's Talk */}
                    <button
                        onClick={() => scrollToSection("contact")}
                        className="
                            hidden
                            md:block
                            hover:text-[#07fad1]
                            cursor-pointer
                            bg-[#e607fa]
                            text-white
                            px-3
                            py-1
                        "
                    >
                        Let's Talk
                    </button>

                </div>

            </header>


            {/* ================= MOBILE SIDEBAR ================= */}

            {menuOpen && (
                <>
                    {/* Overlay */}
                    <div
                        onClick={() => setMenuOpen(false)}
                        className="
                            fixed
                            inset-0
                            bg-black/60
                            z-[90]
                            md:hidden
                        "
                    ></div>


                    {/* Sidebar */}
                    <aside
                        className="
                            fixed
                            top-0
                            right-0
                            h-screen
                            w-[400px]
                            max-w-[90%]
                            bg-[#020817]
                            z-[100]
                            shadow-2xl
                            md:hidden
                        "
                    >

                        {/* Sidebar Header */}
                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                px-6
                                py-5
                                border-b
                                border-gray-800
                                h-[80px]
                            "
                        >

                            {/* Logo */}
                            <Link
                                to="/"
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center gap-3"
                            >
                                <img
                                    src={log}
                                    alt="Logo"
                                    className="w-10 h-10"
                                />

                                <p className="text-[#0770FA] font-semibold text-2xl">
                                    Vickietrust{" "}
                                    <span className="text-[#07fad1]">
                                        Tech
                                    </span>
                                </p>
                            </Link>


                            {/* Close */}
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="
                                    text-white
                                    text-3xl
                                    hover:text-[#0770FA]
                                    transition
                                "
                            >
                                <IoClose />
                            </button>

                        </div>


                        {/* Sidebar Navigation */}
                        <nav className="px-6 py-8">

                            <ul className="flex flex-col gap-2">

                                {/* HOME */}
                                <li>
                                    <button
                                        onClick={() => scrollToSection("home")}
                                        className="
                                            w-full
                                            text-left
                                            text-white
                                            text-[30px]
                                            px-4
                                            py-3
                                            rounded-lg
                                            hover:bg-[#0770FA]/10
                                            hover:text-[#0770FA]
                                            transition
                                        "
                                    >
                                        Home
                                    </button>
                                </li>


                                {/* ABOUT */}
                                <li>
                                    <button
                                        onClick={() => scrollToSection("about")}
                                        className="
                                            w-full
                                            text-left
                                            text-white
                                            text-[30px]
                                            px-4
                                            py-3
                                            rounded-lg
                                            hover:bg-[#0770FA]/10
                                            hover:text-[#0770FA]
                                            transition
                                        "
                                    >
                                        About
                                    </button>
                                </li>


                                {/* SKILLS */}
                                <li>
                                    <button
                                        onClick={() => scrollToSection("skills")}
                                        className="
                                            w-full
                                            text-left
                                            text-white
                                            text-[30px]
                                            px-4
                                            py-3
                                            rounded-lg
                                            hover:bg-[#0770FA]/10
                                            hover:text-[#0770FA]
                                            transition
                                        "
                                    >
                                        Skills
                                    </button>
                                </li>


                                {/* PROJECTS */}
                                <li>
                                    <button
                                        onClick={() => scrollToSection("projects")}
                                        className="
                                            w-full
                                            text-left
                                            text-white
                                            text-[30px]
                                            px-4
                                            py-3
                                            rounded-lg
                                            hover:bg-[#0770FA]/10
                                            hover:text-[#0770FA]
                                            transition
                                        "
                                    >
                                        Projects
                                    </button>
                                </li>


                                {/* SERVICES */}
                                <li>
                                    <button
                                        onClick={() => scrollToSection("services")}
                                        className="
                                            w-full
                                            text-left
                                            text-white
                                            text-[30px]
                                            px-4
                                            py-3
                                            rounded-lg
                                            hover:bg-[#0770FA]/10
                                            hover:text-[#0770FA]
                                            transition
                                        "
                                    >
                                        Services
                                    </button>
                                </li>


                                {/* CONTACT */}
                                <li>
                                    <button
                                        onClick={() => scrollToSection("contact")}
                                        className="
                                            w-full
                                            text-left
                                            text-white
                                            text-[30px]
                                            px-4
                                            py-3
                                            rounded-lg
                                            hover:bg-[#0770FA]/10
                                            hover:text-[#0770FA]
                                            transition
                                        "
                                    >
                                        Contact
                                    </button>
                                </li>

                            </ul>


                            {/* Let's Talk */}
                            <button
                                onClick={() => scrollToSection("contact")}
                                className="
                                    w-full
                                    mt-8
                                    bg-[#e607fa]
                                    text-white
                                    py-2
                                    rounded-lg
                                    text-[28px]
                                    hover:opacity-80
                                    transition
                                "
                            >
                                Let's Talk
                            </button>


                            {/* Dark Mode */}
                            <button
                                className="
                                    w-full
                                    mt-4
                                    border
                                    border-gray-700
                                    text-white
                                    py-3
                                    rounded-lg
                                    hover:border-[#0770FA]
                                    transition
                                "
                            >
                                🌙 Dark Mode
                            </button>

                        </nav>

                    </aside>
                </>
            )}

        </>
    );
}

export default Navbar;