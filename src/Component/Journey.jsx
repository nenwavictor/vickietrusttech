const journey = [
  {
    year: "2025",
    text: "I Started my programming journey. I learned the basics of HTML, CSS and JavaScript and built my first mini projects.",
  },
  {
    year: "2025",
    text: "I dived deep into JavaScript, React and modern web development. Built responsive projects and improved my problem-solving skills.",
  },
  {
    year: "2026",
    text: "I am building full-stack applications, working with APIs, databases and authentication.",
  },
  {
    year: "Future",
    text: "I am growing every day to become a complete Full-Stack Software Engineer and building products that help people.",
  },
];

function MyJourney() {
  return (
    <section className="bg-[#020817] px-5 py-16 md:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <h2 className="mb-12 text-3xl font-bold tracking-wide text-blue-500 md:text-4xl">
          MY JOURNEY
        </h2>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-[15px] top-0 h-full w-[3px] bg-gradient-to-b from-blue-500 via-blue-500 to-cyan-400"></div>

          {journey.map((item, index) => (
            <div
              key={item.year}
              className="relative mb-10 flex gap-8 last:mb-0"
            >

              {/* Dot */}
              <div className="relative z-10 mt-1 h-8 w-8 shrink-0 rounded-full bg-blue-500 shadow-[0_0_20px_#008cff]">
                <div className="absolute inset-2 rounded-full bg-cyan-300"></div>
              </div>

              {/* Content */}
              <div className="pb-2">
                <h3 className="mb-1 text-3xl font-bold text-cyan-400 md:text-4xl">
                  {item.year}
                </h3>

                <p className="max-w-5xl text-base leading-7 text-gray-300 md:text-xl md:leading-8">
                  {item.text}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
export default MyJourney;