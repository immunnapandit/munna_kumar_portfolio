import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaDiscord } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  // form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(`❌ Error: ${data.error}`);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("❌ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText} text-pink-500`}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>
          <div className="flex justify-center">
            <button
              type="submit"
              className={`bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary 
                transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-600 active:scale-95 active:bg-purple-700`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>

        {/* Centered Thank You Message */}
        <div className="flex justify-center mt-6">
          <p className="text-lg text-pink-400 text-center font-semibold">
            Thanks for being here!
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="mt-6 flex gap-6 justify-center">
          <a
            href="https://www.linkedin.com/in/immunnapandit/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-tertiary p-4 rounded-full hover:bg-[#0077b5] transition-all duration-300">
              <FaLinkedin className="text-white text-2xl" />
            </div>
          </a>
          <a
            href="https://github.com/immunnapandit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-tertiary p-4 rounded-full hover:bg-gray-700 transition-all duration-300">
              <FaGithub className="text-white text-2xl" />
            </div>
          </a>
          <a href="mailto:munnamkpandit@gmail.com">
            <div className="bg-tertiary p-4 rounded-full hover:bg-red-600 transition-all duration-300">
              <FaEnvelope className="text-white text-2xl" />
            </div>
          </a>
          <a
            href="https://discord.com/users/immunnapandit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-tertiary p-4 rounded-full hover:bg-indigo-600 transition-all duration-300">
              <FaDiscord className="text-white text-2xl" />
            </div>
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] w-full"
      >
        <div className="w-full h-full">
          <EarthCanvas />
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
