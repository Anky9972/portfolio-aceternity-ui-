import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";
import confetti from "canvas-confetti";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [sentStatus, setSentStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); 

    emailjs
      .send(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_APP_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSentStatus("Message sent successfully!");
          triggerConfetti();
        },
        (err) => {
          console.log("FAILED...", err);
          setSentStatus("Failed to send message.");
        }
      )
      .finally(() => {
        setIsSubmitting(false); // Reset loader state
      });
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff0a00", "#00ff9f", "#00aaff", "#ffbb00"],
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-start justify-center bg-black text-white px-6 sm:px-12 lg:px-28">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-left mb-6"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
          Have a <span className="text-indigo-300">question?</span>
        </h1>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-2">
          Ready to <span className="text-indigo-300">start?</span>
        </h1>
        <p className="text-gray-400 mt-4 w-full sm:w-4/5 lg:w-3/5">
          Let’s start a conversation! Fill out our contact form, and we&apos;ll
          get back to you as soon as possible.
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        className="w-full flex flex-col gap-6"
        onSubmit={handleSubmit}
      >
        <div className="text-2xl sm:text-3xl lg:text-4xl">
          <span>Hello 😊</span>
        </div>

        <div className="text-lg sm:text-xl w-full flex flex-col sm:flex-row gap-6 sm:gap-10">
          <span className="w-full sm:w-1/3 font-semibold text-4xl sm:text-5xl lg:text-6xl">
            My name is{" "}
          </span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="px-5 bg-transparent border-b-2 border-gray-600 w-full focus:outline-none focus:border-white transition-colors"
            required
          />
        </div>

        <div className="text-lg sm:text-xl w-full flex flex-col sm:flex-row gap-6 sm:gap-10">
          <span className="w-full sm:w-1/4 font-semibold text-4xl sm:text-5xl lg:text-6xl">
            I'm from{" "}
          </span>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Enter your company name"
            className="px-5 bg-transparent border-b-2 border-gray-600 w-full focus:outline-none focus:border-white transition-colors"
            required
          />
        </div>

        <div className="text-lg sm:text-xl w-full flex flex-col sm:flex-row gap-6 sm:gap-10">
          <span className="w-full sm:w-3/5 font-semibold text-4xl sm:text-5xl lg:text-6xl">
            Here is my email{" "}
          </span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="px-5 bg-transparent border-b-2 border-gray-600 w-full focus:outline-none focus:border-white transition-colors"
            required
          />
        </div>

        <div className="text-lg sm:text-xl w-full flex flex-col sm:flex-row gap-6 sm:gap-10">
          <span className="w-full sm:w-1/2 font-semibold text-4xl sm:text-5xl lg:text-6xl">
            And message{" "}
          </span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="px-5 bg-transparent border-b-2 border-gray-600 w-full focus:outline-none focus:border-white transition-colors"
            required
          />
        </div>

        {sentStatus ? (
          <p className="mt-6 p-2 text-5xl font-bold text-center text-pink-400">
            {sentStatus}
          </p>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="mt-4 mb-2 bg-white text-black text-2xl px-8 py-3 rounded-full flex items-center justify-between space-x-2 w-full "
          >
            <span className="text-xl sm:text-2xl lg:text-3xl font-semibold">
              Submit
            </span>
            {isSubmitting ? (
              <span className="loader"></span>
            ) : (
              <motion.div
                className="bg-black text-white p-2 rounded-full"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.5 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.div>
            )}
          </motion.button>
        )}
      </motion.form>
    </div>
  );
};

export default ContactForm;
