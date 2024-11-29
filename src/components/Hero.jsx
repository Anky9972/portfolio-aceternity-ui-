import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <LampContainer>
      <div className="flex flex-col items-center space-y-6 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl lg:text-7xl"
        >
          Hello, I&apos;m <span className="text-purple-400 font-bold">Vivek Gaur</span>,<br />
          <span className="text-purple-300 text-2xl md:text-4xl lg:text-5xl">
            a Web Developer and Machine Learning Enthusiast
          </span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.6,
            ease: "backOut"
          }}
        >
          <Link to="projects"
            smooth={true}
            duration={500}>
          <MagicButton
            title="Show my work"
            icon={<FaLocationArrow />}
            position="right"
            />
            </Link>
        </motion.div>
      </div>
    </LampContainer>
  );
};

export default Hero;