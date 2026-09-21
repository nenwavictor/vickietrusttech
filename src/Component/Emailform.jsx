import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { emailConfig } from "../data/emailConfig";

function EmailForm() {
const form = useRef();
const [status, setStatus] = useState("");

const sendEmail = (e) => {
e.preventDefault();


setStatus("Sending message...");

emailjs
  .sendForm(
    emailConfig.serviceId,
    emailConfig.templateId,
    form.current,
    {
      publicKey: emailConfig.publicKey,
    }
  )
  .then(
    () => {
      setStatus("Message sent successfully!");
      form.current.reset();
    },
    (error) => {
      console.error("Email error:", error);
      setStatus("Failed to send message. Please try again.");
    }
  );


};

return ( <form
   ref={form}
   onSubmit={sendEmail}
   className="
     bg-slate-900/60
     border border-white/10
     rounded-2xl
     p-6 md:p-8
     backdrop-blur-md
   "
 >
{/* Name */} <div className="mb-5"> <label
       htmlFor="username"
       className="block text-sm font-medium text-white mb-2"
     >
Full Name </label>


    <input
      id="username"
      type="text"
      name="username"
      placeholder="Enter your full name"
      required
      className="
        w-full
        rounded-lg
        bg-[#020817]
        border border-white/10
        px-4 py-3
        text-white
        outline-none
        transition
        focus:border-[#0770FA]
      "
    />
  </div>

  {/* Email */}
  <div className="mb-5">
    <label
      htmlFor="useremail"
      className="block text-sm font-medium text-white mb-2"
    >
      Email Address
    </label>

    <input
      id="useremail"
      type="email"
      name="useremail"
      placeholder="Enter your email address"
      required
      className="
        w-full
        rounded-lg
        bg-[#020817]
        border border-white/10
        px-4 py-3
        text-white
        outline-none
        transition
        focus:border-[#0770FA]
      "
    />
  </div>

  {/* Subject */}
  <div className="mb-5">
    <label
      htmlFor="subject"
      className="block text-sm font-medium text-white mb-2"
    >
      Subject
    </label>

    <input
      id="subject"
      type="text"
      name="subject"
      placeholder="What would you like to discuss?"
      required
      className="
        w-full
        rounded-lg
        bg-[#020817]
        border border-white/10
        px-4 py-3
        text-white
        outline-none
        transition
        focus:border-[#0770FA]
      "
    />
  </div>

  {/* Message */}
  <div className="mb-6">
    <label
      htmlFor="message"
      className="block text-sm font-medium text-white mb-2"
    >
      Message
    </label>

    <textarea
      id="message"
      name="message"
      rows="6"
      placeholder="Tell me about your project..."
      required
      className="
        w-full
        resize-none
        rounded-lg
        bg-[#020817]
        border border-white/10
        px-4 py-3
        text-white
        outline-none
        transition
        focus:border-[#0770FA]
      "
    />
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="
      w-full
      rounded-lg
      bg-[#0770FA]
      py-3
      font-semibold
      text-white
      transition
      hover:bg-blue-600
    "
  >
    Send Message
  </button>

  {/* Status Message */}
  {status && (
    <p className="mt-4 text-center text-sm text-white">
      {status}
    </p>
  )}
</form>

);
}

export default EmailForm;
