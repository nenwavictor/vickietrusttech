import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import Victorab from "../assets/victorabout.png";
import MyJourney from "./Journey";
import AboutDetails from "./Aboutdetail";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function MoreAbout() {

    const navigate = useNavigate();

const scrollToSection = (sectionId) => {
    navigate(`/#${sectionId}`);
};

    return (
        <div className="bg-[#020817] min-h-screen">

            {/* HEADER */}
            <div className="flex gap-8 items-center px-6 py-4">

                {/* Back button */}
                {/* <button
                    onClick={() => navigate("contact")}
                    className="cursor-pointer"
                >
                    <FaArrowLeft
                        className="
                            text-2xl
                            md:text-2xl
                            lg:text-3xl
                            text-amber-50
                            hover:text-blue-400
                            transition
                        "
                    />
                </button> */}

                <h3
                    className="
                        text-[#e7f0fc]
                        text-lg
                        md:text-xl
                        font-semibold
                        
                    "
                >
                    More about Me
                </h3>

            </div>


            {/* ABOUT CONTENT */}
            <section className="relative ml-5 mr-5">

                {/* HOME ICON */}
                <div className="flex gap-2 items-center mb-4 text-white">
                    {/* <IoMdHome /> */}
                    {/* <div>About Me</div> */}
                </div>


                {/* IMAGE */}
                <div className="mb-5">
                    <img
                        src={Victorab}
                        alt="Vickietrust Tech"
                        className="rounded-2xl w-full"
                    />
                </div>


                {/* ABOUT TEXT */}
                <div className="bg-[#050c1a] p-5">

                    <h1 className="text-blue-400">
                        ABOUT ME
                    </h1>

                   <p className="text-3xl font-medium leading-tight text-gray-300 sm:text-4xl md:text-5xl lg:text-6xl">
                        Hi, I'm{" "}
                        <span className="font-extrabold text-[#0770FA]">
                            Vickietrust Tech
                        </span>
                    </p>

                    <h6 className="text-blue-400 text-sm sm:text-base font-semibold tracking-wide uppercase">
    Software Engineer <span className="text-gray-500">|</span> Web Developer
</h6>

<p className="text-gray-300 mt-5 max-w-2xl text-sm sm:text-base md:text-[15px] lg:text-base leading-7 tracking-wide">
    I'm a passionate software engineer focused on building modern,
    responsive, and user-friendly web applications. I transform ideas
    into meaningful digital products through clean code, modern
    technologies, and a strong problem-solving mindset.

    <br />
    <br />

    I continuously learn and explore new technologies, improving my
    skills to create scalable solutions that deliver real value and
    lasting impact.
</p>

                    {/* BUTTONS */}
                    <nav className="flex gap-2 mt-4">

                        {/* DOWNLOAD CV */}
                        <button
                            className="
                                rounded-sm
                                border
                                border-blue-300
                                text-red-600
                                w-34
                                md:w-60
                                lg:w-70
                                flex
                                gap-1
                                justify-center
                                items-center
                                py-2
                                px-1
                            "
                        >
                            <MdOutlineFileDownload />
                            Download CV
                        </button>


                        {/* CONTACT */}
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="
                                rounded-sm
                                border
                                border-blue-500
                                w-34
                                md:w-50
                                lg:w-60
                                text-white
                                text-2xl
                                hover:bg-blue-500
                                transition
                            "
                        >
                            Contact Me
                        </button>

                    </nav>

                </div>

            </section>


            {/* JOURNEY */}
            <MyJourney />


            {/* ABOUT DETAILS */}
            <AboutDetails />

        </div>
    );
}

export default MoreAbout; 