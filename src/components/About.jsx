import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { CardSpotlight } from "../components/ui/card-spotlight";
import { motion, useInView } from "framer-motion";
import { fadeIn, textVariant, staggerContainer } from "../lib/motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const prog = {
    logos: [
      { name: "Web Developer" },
      { name: "Machine Learning" },
      { name: "Deep Learning" },
      { name: "Frontend Developer" },
      { name: "Backend Developer" },
    ],
  };

  return (
    <section
      ref={ref}
      className="w-full p-5 min-h-screen flex flex-col gap-5 items-center xl:px-36 xl:gap-10 bg-black"
    >
      <motion.h1
        variants={textVariant(1)}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="text-6xl font-bold w-full text-white"
      >
        ABOUT.
      </motion.h1>

      <div className="w-full flex justify-between">
        <motion.div
          variants={fadeIn("up", "spring", 0.1, 1)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="w-full flex justify-center xl:w-3/4 xl:justify-start"
        >
          <p className="w-full xl:w-4/5 text-white text-left">
            I&apos;m a final year B.Tech student specializing in Artificial
            Intelligence and Machine Learning (AIML) at Madhav Institute of
            Technology and Science, Gwalior. Passionate about exploring the
            intersections of technology, I&apos;m driven by a relentless
            curiosity to learn and grow. Proficient in web development,
            particularly in HTML, CSS, JavaScript, and various frameworks, I
            enjoy crafting intuitive web experiences. Eager to gain real-world
            experience, I aim to bridge the gap between AIML and web
            development to create innovative solutions. I thrive on challenges
            and am committed to leveraging my skills to contribute meaningfully
            to projects. Let&apos;s collaborate and create something
            extraordinary together!
          </p>
        </motion.div>

        <div className="hidden lg:flex w-1/2  justify-center items-center">
          <div className="w-56 h-56 rounded-full border overflow-hidden">
            <img src="https://res.cloudinary.com/dj0eulqd8/image/upload/v1732890959/WhatsApp_Image_2024-11-29_at_8.00.45_PM_dy8hod.jpg" alt="profile_pic" />
          </div>
        </div>
      </div>

      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="w-full flex flex-col gap-5 pt-10 md:flex-row md:flex-wrap xl:pt-0 xl:flex-row xl:justify-between"
      >
        {prog.logos.map((logo, index) => (
          <motion.div
            key={index}
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <CardContainer className="inter-va max-w-xs">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto rounded-xl border flex justify-center items-center text-center sm:w-[14rem] h-[16rem]">
                <CardSpotlight className="w-full h-full rounded-xl">
                  <CardItem
                    translateZ="100"
                    className="w-full h-full flex justify-center items-center"
                  >
                    <span className="text-4xl font-bold text-white text-wrap">
                      {logo.name}
                    </span>
                  </CardItem>
                </CardSpotlight>
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
