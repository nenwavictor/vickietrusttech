import { FaCode, FaUser, FaBook, FaGraduationCap, FaCertificate } from "react-icons/fa";

function AboutDetails() {
  return (
    <section className="min-h-screen bg-[#020817] px-4 py-16 text-white md:px-8 lg:px-12">
         <h2 className="mb-6 text-2xl font-bold text-blue-500">
            DEVELOPMENT PHILOSOPHY
          </h2>
      {/* TOP CARDS */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

        {/* CLEAN CODE */}
        <div className="rounded-2xl border border-blue-900/60 bg-[#07142c] p-6 shadow-lg">
          <div className="flex items-center gap-5">

            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-blue-600/20 text-4xl text-blue-500">
              <FaCode />
            </div>

            <div>
              <h3 className="mb-2 text-xl font-bold text-blue-400">
                Clean Code
              </h3>

              <p className="text-sm leading-6 text-gray-300">
                I write clean, readable and maintainable code that makes a
                project scalable and easy to understand.
              </p>
            </div>

          </div>
        </div>


        {/* USER FIRST */}
        <div className="rounded-2xl border border-blue-900/60 bg-[#07142c] p-6 shadow-lg">
          <div className="flex items-center gap-5">

            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-4xl text-teal-400">
              <FaUser />
            </div>

            <div>
              <h3 className="mb-2 text-xl font-bold text-teal-400">
                User First
              </h3>

              <p className="text-sm leading-6 text-gray-300">
                I build applications that provide great user experience and
                solve real world problems.
              </p>
            </div>

          </div>
        </div>


        {/* KEEP LEARNING */}
        <div className="rounded-2xl border border-blue-900/60 bg-[#07142c] p-6 shadow-lg">
          <div className="flex items-center gap-5">
            

            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-4xl text-purple-400">
              <FaBook />
            </div>

            <div>
              <h3 className="mb-2 text-xl font-bold text-purple-400">
                Keep Learning
              </h3>

              <p className="text-sm leading-6 text-gray-300">
                I believe in continuous learning and staying up to date with
                new technologies.
              </p>
            </div>

          </div>
        </div>

      </div>


      {/* BOTTOM SECTION */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">

        {/* EDUCATION */}
        <div className="rounded-2xl border border-blue-900/60 bg-[#07142c] p-6">

          <h2 className="mb-6 text-2xl font-bold text-blue-500">
            EDUCATION
          </h2>


          {/* HND */}
          <div className="rounded-2xl border border-blue-900/50 bg-[#081936] p-5">
            <div className="flex items-start gap-5">

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-600/20 text-3xl text-blue-500">
                <FaGraduationCap />
              </div>

              <div>
                <h3 className="text-lg font-bold leading-6">
                  Higher National Diploma (HND)
                  <br />
                  in Office Technology and Management
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Delta State Polytechnic, Ogwashi-Uku
                </p>

                <p className="mt-1 text-blue-400">
                  2016 - 2021
                </p>
              </div>

            </div>
          </div>


          {/* CERTIFICATIONS */}
          <div className="mt-4 rounded-2xl border border-blue-900/50 bg-[#081936] p-5">

            <div className="flex items-start gap-5">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-600/20 text-2xl text-blue-500">
                <FaCertificate />
              </div>

              <div className="flex-1">

                <h3 className="text-lg font-bold">
                  Certifications
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Responsive Web Design - Hi-Techniversity, Enugu
                  <br />
                  JavaScript Algorithms - Hi-Techniversity, Enugu
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* CURRENTLY LEARNING */}
        <div className="rounded-2xl border border-blue-900/60 bg-[#07142c] p-6">

          <h2 className="mb-7 text-2xl font-bold text-blue-500">
            CURRENTLY LEARNING
          </h2>


          {/* Advanced JavaScript */}
          <div className="mb-6">

            <div className="mb-2 flex items-center gap-3">

              <span className="h-3 w-3 rounded-full bg-blue-500"></span>

              <span className="text-sm text-gray-200 md:text-base">
                Advanced JavaScript
              </span>

              <span className="ml-auto text-sm text-gray-300">
                80%
              </span>

            </div>

            <div className="h-2 overflow-hidden rounded-full bg-gray-800">
              <div className="h-full w-[80%] rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"></div>
            </div>

          </div>


          {/* Node */}
          <div className="mb-6">

            <div className="mb-2 flex items-center gap-3">

              <span className="h-3 w-3 rounded-full bg-blue-500"></span>

              <span className="text-sm text-gray-200 md:text-base">
                Node.js & Express
              </span>

              <span className="ml-auto text-sm text-gray-300">
                70%
              </span>

            </div>

            <div className="h-2 overflow-hidden rounded-full bg-gray-800">
              <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"></div>
            </div>

          </div>


          {/* MongoDB */}
          <div className="mb-6">

            <div className="mb-2 flex items-center gap-3">

              <span className="h-3 w-3 rounded-full bg-blue-500"></span>

              <span className="text-sm text-gray-200 md:text-base">
                Databases (MongoDB)
              </span>

              <span className="ml-auto text-sm text-gray-300">
                65%
              </span>

            </div>

            <div className="h-2 overflow-hidden rounded-full bg-gray-800">
              <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"></div>
            </div>

          </div>


          {/* Authentication */}
          <div className="mb-6">

            <div className="mb-2 flex items-center gap-3">

              <span className="h-3 w-3 rounded-full bg-blue-500"></span>

              <span className="text-sm text-gray-200 md:text-base">
                Authentication (JWT)
              </span>

              <span className="ml-auto text-sm text-gray-300">
                60%
              </span>

            </div>

            <div className="h-2 overflow-hidden rounded-full bg-gray-800">
              <div className="h-full w-[60%] rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"></div>
            </div>

          </div>


          {/* System Design */}
          <div>

            <div className="mb-2 flex items-center gap-3">

              <span className="h-3 w-3 rounded-full bg-blue-500"></span>

              <span className="text-sm text-gray-200 md:text-base">
                System Design
              </span>

              <span className="ml-auto text-sm text-gray-300">
                40%
              </span>

            </div>

            <div className="h-2 overflow-hidden rounded-full bg-gray-800">
              <div className="h-full w-[40%] rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"></div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutDetails;