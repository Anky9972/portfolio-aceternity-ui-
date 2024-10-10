import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";

const Hero = () => {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-5xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Hello, I&apos;m Vivek Gaur,<br /><span className="text-purple-300">a Web Developer and Machine Learning enthusiast</span>
      </motion.h1>
      <MagicButton
        title="Show my work"
        icon={<FaLocationArrow />}
        position="right"
      />
    </LampContainer>
  );
};

export default Hero;
