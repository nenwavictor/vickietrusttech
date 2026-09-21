// import { MdPermContactCalendar } from "react-icons/md";
import EmailForm from "../Component/EmailForm";
// import {Link} from "react-router-dom";
function Contact() {
  return (
    <section className="min-h-screen bg-[#020817] px-6 py-20 text-white">
            {/* <MdPermContactCalendar /> */}
      <div className="mx-auto max-w-5xl">

        <div className="mb-12 text-center">
          <p className="font-semibold text-[#0770FA]">
            GET IN TOUCH
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Let's Work Together
          </h1>

          <p className="mt-4 text-gray-400">
            Have a project in mind? Send me a message.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">

          {/* Contact information */}
          <div>
            <h2 className="text-2xl font-bold">
              Contact Me
            </h2>

            <p className="mt-4 text-gray-400">
              Feel free to contact me for collaborations,
              projects, or other opportunities.
            </p>
          </div>

          {/* Email Form */}
          <EmailForm />

        </div>
      </div>
    </section>
  );
}

export default Contact;