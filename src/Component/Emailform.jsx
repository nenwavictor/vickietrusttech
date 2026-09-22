
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

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-md md:p-8"
    >
      <div className="mb-5">
        <label
          htmlFor="username"
          className="mb-2 block text-sm font-medium text-white"
        >
          Full Name
        </label>

        <input
          id="username"
          type="text"
          name="username"
          placeholder="Enter your full name"
          required
          className="w-full rounded-lg border border-white/10 bg-[#020817] px-4 py-3 text-white outline-none transition focus:border-[#0770FA]"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="useremail"
          className="mb-2 block text-sm font-medium text-white"
        >
          Email Address
        </label>

        <input
          id="useremail"
          type="email"
          name="useremail"
          placeholder="Enter your email address"
          required
          className="w-full rounded-lg border border-white/10 bg-[#020817] px-4 py-3 text-white outline-none transition focus:border-[#0770FA]"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="subject"
          className="mb-2 block text-sm font-medium text-white"
        >
          Subject
        </label>

        <input
          id="subject"
          type="text"
          name="subject"
          placeholder="What would you like to discuss?"
          required
          className="w-full rounded-lg border border-white/10 bg-[#020817] px-4 py-3 text-white outline-none transition focus:border-[#0770FA]"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-white"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          rows="6"
          placeholder="Tell me about your project..."
          required
          className="w-full resize-none rounded-lg border border-white/10 bg-[#020817] px-4 py-3 text-white outline-none transition focus:border-[#0770FA]"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-[#0770FA] py-3 font-semibold text-white transition hover:bg-blue-600"
      >
        Send Message
      </button>

      {status && (
        <p className="mt-4 text-center text-sm text-white">
          {status}
        </p>
      )}
    </form>
  );
}

export default EmailForm;

