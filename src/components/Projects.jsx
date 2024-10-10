import { FaGithub } from "react-icons/fa6";
import { BackgroundGradient } from "./ui/background-gradient";
import { PiArrowSquareOut } from "react-icons/pi";
import { Button } from "./ui/moving-border";
import { fadeIn, textVariant,  } from "../lib/motion";
import  {motion, useInView} from'framer-motion';
// import {TextGenerateEffect} from './ui/TextGenerateEffect';
import { useRef } from "react";
export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const projects = [
    {
      title: "Color Palette Generator",
      description:
        "Developed a user-friendly color palette generator that can generate thousands of color palettes.",
      tech: [
        "Tailwind CSS",
        "JavaScript",
        "ReactJs",
        "Framer motion",
        "NodeJs",
        "ExpressJs",
        "MongoDB",
      ],
      github: "https://github.com/Anky9972/colorpalette",
      live: "https://colorpalettegenerate.vercel.app/",
      img: "https://res.cloudinary.com/dj0eulqd8/image/upload/v1718995276/palette1_hz7iht.png",
    },
    {
      title: "Smart Farming",
      description:
        "Our smart farming project, built on Flask and trained with Random Forest Classifier achieving 99% accuracy, revolutionizes agriculture. Predicting crop health, pest detection, and yield estimation, it optimizes farming practices.",
      tech: ["HTML", "CSS", "Javascript", "Flask", "Jinja2", "Scikit-Learn"],
      github: "https://github.com/Anky9972/AI-ENABLED_AGRICULTURE",
      live: "",
      img: "https://res.cloudinary.com/dj0eulqd8/image/upload/v1718995357/Screenshot_2024-05-20_160151_y5gqh8.png",
    },
    {
      title: "Epic Reads",
      description:
        "It's an internship assignment to showcase skills for frontend developer. My task was to use an api to fetch all books data and show in form of cards.",
      tech: [
        "HTML",
        "CSS",
        "Javascript",
        "ReactJs",
        "Tailwind CSS",
        "Framer motion",
      ],
      github: "https://github.com/Anky9972/bookstore",
      live: "https://bookstore-rho-three.vercel.app/",
      img: "https://res.cloudinary.com/dj0eulqd8/image/upload/v1719497859/bookstore_wiiyns.png",
    },
    {
      title: "Clever Books",
      description:
        "It's an internship assignment to showcase skills for frontend.",
      tech: [
        "HTML",
        "CSS",
        "Javascript",
        "ReactJs",
        "Tailwind CSS",
        "Framer motion",
      ],
      github: "https://github.com/Anky9972/cleverbooks",
      live: "https://cleverbooks-seven.vercel.app/",
      img: "https://res.cloudinary.com/dj0eulqd8/image/upload/v1719498555/Screenshot_2024-06-27_195849_qly5rh.png",
    },
    {
      title: "Pixl Paradise",
      description:
        "It's an internship assignment to showcase skills for frontend.",
      tech: [
        "HTML",
        "CSS",
        "Javascript",
        "ReactJs",
        "Tailwind CSS",
        "NodeJs",
        "ExpressJs",
        "MongoDB",
      ],
      github: "https://github.com/Anky9972/pixlparadise",
      live: "https://pixlparadise.vercel.app/",
      img: "https://res.cloudinary.com/dj0eulqd8/image/upload/v1720521974/Screenshot_2024-07-09_161533_kwi9gc.png",
    },
    {
      title: "TrimLink",
      description:
        "Our smart farming project, built on Flask and trained with Random Forest Classifier achieving 99% accuracy, revolutionizes agriculture. Predicting crop health, pest detection, and yield estimation, it optimizes farming practices. Integrating Gemini API for chatbot assistance and Google Translator for multilingual support enhances accessibility.",
      tech: [
        "HTML",
        "CSS",
        "Javascript",
        "ReactJs",
        "Tailwind CSS",
        "Shadcn UI",
        "Supabase",
      ],
      github: "https://github.com/Anky9972/urlshortner",
      live: "https://trimlink.netlify.app/",
      img: "https://res.cloudinary.com/dj0eulqd8/image/upload/v1720522301/Screenshot_2024-07-09_162126_lpekqi.png",
    },
  ];
  return (
    <section ref={ref} className="w-full min-h-screen flex flex-col items-center bg-black p-5 xl:px-36 gap-10 pb-20">
      <motion.div variants={textVariant(1)}
        initial="hidden"
        animate={isInView ? "show" : "hidden"} className="w-full text-4xl xl:text-6xl font-bold text-white text-center">A Small collection of <span className=" text-purple-300">Projects.</span></motion.div>
      {/* <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          /> */}
      <div className="md:w-full flex flex-col md:flex-row md:flex-wrap md:justify-center  xl:flex-row xl:flex-wrap gap-5 mt-5">
        {projects.map((project, index) => (
          <motion.div key={index}
          variants={fadeIn("up", "spring", index * 0.5, 0.75)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"} >
            <BackgroundGradient className="rounded-[22px] max-w-sm p-5 md:max-w-xs lg:max-w-md xl:max-w-sm  xl:min-h-[600px] relative  bg-white dark:bg-zinc-900">
              <img
                src={project.img}
                alt={project.title}
                height="600"
                width="400"
                className="object-contain rounded-xl"
              />
              <p className="text-base sm:text-xl text-black mt-8 mb-2 dark:text-neutral-200">
                {project.title}
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-5">
                {project.description}
              </p>
              <div className="w-full flex space-x-5 flex-wrap">
                {project.tech.map((t, i) => (
                  <button
                    key={i}
                    className="rounded-full pl-4 pr-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800"
                  >
                    <span>{t} </span>
                  </button>
                ))}
              </div>
                <a
                  href={project.github}
                  target="_blank"
                  className="absolute top-6 right-6 flex justify-center items-center gap-3 p-1 backdrop-blur-xl bg-black dark:bg-zinc-800 text-white font-bold rounded-full"
                >
                  <FaGithub className="text-4xl"/>
                </a>
              <div className="w-full flex justify-end mt-10">
                <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 flex justify-center items-center"
                >
                  <a href={project.live} target="_blank" className="flex gap-2 items-center">
                    Live
                    <PiArrowSquareOut />
                  </a>
                </Button>
              </div>
            </BackgroundGradient>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
