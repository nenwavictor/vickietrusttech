
import {
  FaCode,
  FaReact,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaTools,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    description:
      "I build modern, responsive and user-friendly websites and web applications using HTML, CSS, JavaScript, React and Tailwind CSS.",
  },
  {
    icon: <FaReact />,
    title: "React Development",
    description:
      "I create interactive React applications with reusable components, routing, state management, forms and API integration.",
  },
  {
    icon: <FaServer />,
    title: "Web Application Development",
    description:
      "I develop functional web applications such as e-commerce platforms, dashboards, management systems and business applications.",
  },
  {
    icon: <FaDatabase />,
    title: "API & Data Integration",
    description:
      "I connect applications to APIs and databases to retrieve, display and manage real-world data efficiently.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    description:
      "I build websites that work smoothly across mobile phones, tablets, laptops and desktop screens.",
  },
  {
    icon: <FaTools />,
    title: "Website Maintenance",
    description:
      "I help improve existing websites by fixing issues, adding features, improving responsiveness and maintaining functionality.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-[#020817] text-white px-5 py-20 md:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-cyan-400 font-semibold uppercase tracking-widest mb-3">
            My Services
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            What I Can Do
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            I build modern and functional digital solutions that help
            individuals and businesses establish a strong presence online.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-7 rounded-2xl border border-slate-800
              bg-slate-900/50 hover:bg-slate-900
              hover:border-cyan-400/50
              transition-all duration-300
              hover:-translate-y-2"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 flex items-center justify-center
                rounded-xl bg-cyan-400/10 text-cyan-400
                text-2xl mb-6
                group-hover:bg-cyan-400
                group-hover:text-[#020817]
                transition-all duration-300"
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-7">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;