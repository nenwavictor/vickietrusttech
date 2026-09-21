import { FaArrowRight, FaLocationArrow } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { GoHomeFill } from "react-icons/go";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";

function About() {
    return (
        <section className="bg-[#0a1022] py-16 px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28">
            
            <div className="max-w-7xl mx-auto">

                {/* ABOUT CONTENT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* LEFT SIDE */}
                    <div>
                        <h3 className="text-[#0770FA] text-sm md:text-base font-semibold uppercase tracking-[3px] mb-3">
                            ABOUT ME
                        </h3>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-amber-50 py-2">
                            Get to know me
                        </h2>

                        <p className="text-base sm:text-lg md:text-xl leading-7 md:leading-8 text-gray-400 max-w-2xl">
                            I'm a passionate software engineer who loves building
                            web applications. I enjoy turning ideas into real
                            products that solve problems and add value.
                        </p>

                        <Link
                            to="/more-about"
                            className="
                                inline-flex
                                items-center
                                gap-2
                                mt-6
                                rounded-lg
                                border border-[#0770FA]
                                px-5 py-3
                                text-sm md:text-base
                                font-semibold
                                text-white
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:bg-[#0770FA]
                            "
                        >
                            More About Me
                            <FaArrowRight />
                        </Link>
                    </div>


                    {/* RIGHT SIDE - DETAILS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* NAME */}
                        <div
                            className="
                                border border-gray-700
                                rounded-xl
                                p-4
                                flex items-start
                                gap-3
                                bg-[#0d162b]
                                hover:border-[#0770FA]
                                transition
                                duration-300
                            "
                        >
                            <IoMdContact className="text-2xl md:text-3xl text-[#0770FA] shrink-0" />

                            <p className="text-gray-300 text-sm md:text-base">
                                <span className="text-gray-400">
                                    Name
                                </span>
                                <br />
                                <span className="text-white font-medium">
                                    VickieTrust Tech
                                </span>
                            </p>
                        </div>


                        {/* LOCATION */}
                        <div
                            className="
                                border border-gray-700
                                rounded-xl
                                p-4
                                flex items-start
                                gap-3
                                bg-[#0d162b]
                                hover:border-[#0770FA]
                                transition
                                duration-300
                            "
                        >
                            <CiLocationOn className="text-2xl md:text-3xl text-[#0770FA] shrink-0" />

                            <p className="text-gray-300 text-sm md:text-base">
                                <span className="text-gray-400">
                                    Location
                                </span>
                                <br />
                                <span className="text-white font-medium">
                                    Enugu, Nigeria
                                </span>
                            </p>
                        </div>


                        {/* EXPERIENCE */}
                        <div
                            className="
                                border border-gray-700
                                rounded-xl
                                p-4
                                flex items-start
                                gap-3
                                bg-[#0d162b]
                                hover:border-[#0770FA]
                                transition
                                duration-300
                            "
                        >
                            <GoHomeFill className="text-2xl md:text-3xl text-[#0770FA] shrink-0" />

                            <p className="text-gray-300 text-sm md:text-base">
                                <span className="text-gray-400">
                                    Experience
                                </span>
                                <br />
                                <span className="text-white font-medium">
                                    1 year +
                                </span>
                            </p>
                        </div>


                        {/* AVAILABILITY */}
                        <div
                            className="
                                border border-gray-700
                                rounded-xl
                                p-4
                                flex items-start
                                gap-3
                                bg-[#0d162b]
                                hover:border-[#0770FA]
                                transition
                                duration-300
                            "
                        >
                            <FaLocationArrow className="text-2xl md:text-3xl text-[#0770FA] shrink-0" />

                            <p className="text-gray-300 text-sm md:text-base">
                                <span className="text-gray-400">
                                    Availability
                                </span>
                                <br />
                                <span className="text-white font-medium">
                                    Open to work
                                </span>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;