import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { BackgroundGradient } from "./ui/background-gradient";
import { PiArrowSquareOut } from "react-icons/pi";
import { Button } from "./ui/moving-border";
import { fadeIn, textVariant } from "../lib/motion";
import { motion, useInView } from 'framer-motion';
import { useRef } from "react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [expandedProjects, setExpandedProjects] = useState({});

  const projects = [
    {
      title: "Color Palette Generator",
      description: "Developed a user-friendly color palette generator that can generate thousands of color palettes.",
      fullDescription: "Developed a comprehensive color palette generator web application that create thousands of unique color combinations. The platform provides designers and developers with an intuitive interface to explore, customize, and export color schemes for various design projects.",
      tech: [
        "Tailwind CSS", "JavaScript", "ReactJs", "Framer motion", 
        "NodeJs", "ExpressJs", "MongoDB"
      ],
      github: "https://github.com/Anky9972/colorpalette",
      live: "https://colorpalettegenerate.vercel.app/",
      img: "https://res.cloudinary.com/dj0eulqd8/image/upload/v1718995276/palette1_hz7iht.png"
    },
    {
      title: "Smart Farming",
      description: "Our smart farming project, built on Flask and trained with Random Forest Classifier achieving 99% accuracy, revolutionizes agriculture.",
      fullDescription: "A cutting-edge agricultural technology solution that uses machine learning to predict crop health, detect pests, and estimate yield. The project integrates advanced Random Forest Classifier algorithms to provide farmers with actionable insights and optimize farming practices.",
      tech: ["HTML", "CSS", "Javascript", "Flask", "Jinja2", "Scikit-Learn","Machine Learning"],
      github: "https://github.com/Anky9972/AI-ENABLED_AGRICULTURE",
      live: "",
      img: "https://res.cloudinary.com/dj0eulqd8/image/upload/v1718995357/Screenshot_2024-05-20_160151_y5gqh8.png"
    },
    {
      title: "Epic Reads",
      description: "An internship assignment to showcase frontend developer skills by fetching and displaying book data.",
      fullDescription: "A dynamic book showcase web application developed during an internship, demonstrating proficiency in frontend technologies. The project involves integrating an external API to fetch and elegantly display book information using modern web development techniques.",
      tech: [
        "HTML", "CSS", "Javascript", "ReactJs", 
        "Tailwind CSS", "Framer motion"
      ],
      github: "https://github.com/Anky9972/bookstore",
      live: "https://bookstore-rho-three.vercel.app/",
      img: "https://res.cloudinary.com/dj0eulqd8/image/upload/v1719497859/bookstore_wiiyns.png"
    },
    {
      title: "Clever Books",
      description: "An internship assignment to showcase frontend skills.",
      fullDescription: "A frontend web application created as part of an internship challenge, showcasing responsive design, interactive UI components, and efficient state management using modern React development practices.",
      tech: [
        "HTML", "CSS", "Javascript", "ReactJs", 
        "Tailwind CSS", "Framer motion"
      ],
      github: "https://github.com/Anky9972/cleverbooks",
      live: "https://cleverbooks-seven.vercel.app/",
      img: "https://res.cloudinary.com/dj0eulqd8/image/upload/v1719498555/Screenshot_2024-06-27_195849_qly5rh.png"
    },
    {
      title: "Pixl Paradise",
      description: "A full-stack web application developed to demonstrate proficiency in frontend and backend technologies.",
      fullDescription: "It's an image-gallery web application that allows users to upload, view, and download images. The project showcases proficiency in frontend and backend technologies, including React, Node.js, Express.js, and MongoDB.",
      tech: [
        "HTML", "CSS", "Javascript", "ReactJs", 
        "Tailwind CSS", "NodeJs", "ExpressJs", "MongoDB"
      ],
      github: "https://github.com/Anky9972/pixlparadise",
      live: "https://pixlparadise.vercel.app/",
      img: "https://res.cloudinary.com/dj0eulqd8/image/upload/v1720521974/Screenshot_2024-07-09_161533_kwi9gc.png"
    },
    {
      title: "TrimLink",
      description: "URL shortening project with advanced features like custom urls, link tree's.",
      fullDescription: "A sophisticated URL shortening platform that goes beyond basic link management. The project offers advanced features such as custom URLs, QR code generator, link trees, and detailed analytics to help users manage and track their shortened links effectively.",
      tech: [
        "HTML", "CSS", "Javascript", "ReactJs", 
        "Tailwind CSS", "Shadcn UI", "Supabase"
      ],
      github: "https://github.com/Anky9972/urlshortner",
      live: "https://trimlink.netlify.app/",
      img: "https://res.cloudinary.com/dj0eulqd8/image/upload/v1732889101/Screenshot_from_2024-11-29_19-29-33_ludlc0.png"
    }
  ];

  const toggleDescription = (index) => {
    setExpandedProjects(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section 
      ref={ref} 
      className="w-full min-h-screen flex flex-col items-center bg-black p-5 xl:px-36 gap-10 pb-20"
    >
      <motion.div 
        variants={textVariant(1)}
        initial="hidden"
        animate={isInView ? "show" : "hidden"} 
        className="w-full text-4xl xl:text-6xl font-bold text-white text-center"
      >
        A Small collection of <span className="text-purple-300">Projects.</span>
      </motion.div>
      
      <div className="md:w-full flex flex-col md:flex-row md:flex-wrap md:justify-center xl:flex-row xl:flex-wrap gap-5 mt-5">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <BackgroundGradient className="rounded-[22px] max-w-sm p-5 md:max-w-xs lg:max-w-md xl:max-w-sm min-h-[600px] md:min-h-[560px] relative bg-white dark:bg-zinc-900">
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
                {expandedProjects[index] 
                  ? project.fullDescription 
                  : project.description.substring(0, 150) + "..."}
              </p>
              
              {project.fullDescription && project.description.length < project.fullDescription.length && (
                <button 
                  onClick={() => toggleDescription(index)}
                  className="text-purple-500 text-sm mt-2 hover:underline"
                >
                  {expandedProjects[index] ? "Read Less" : "Read More"}
                </button>
              )}

              <div className="w-full flex gap-2 flex-wrap">
                {project.tech.map((t, i) => (
                  <motion.button 
                    key={i}
                    initial={{ scale: 0.8 }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full px-3 py-1 text-white flex items-center space-x-2 
                    bg-gradient-to-r from-purple-600 to-indigo-600 
                    mt-2 text-xs font-bold 
                    hover:from-purple-700 hover:to-indigo-700 
                    transition-all duration-300 ease-in-out"
                >
                  <span>{t}</span>
                </motion.button>
                ))}
              </div>
              
              <a
                href={project.github}
                target="_blank"
                className="absolute top-6 right-6 flex justify-center items-center gap-3 p-1 backdrop-blur-xl bg-black dark:bg-zinc-800 text-white font-bold rounded-full"
              >
                <FaGithub className="text-4xl"/>
              </a>
              
              <div className=" absolute right-5 bottom-5 w-full flex justify-end mt-10">
                <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 flex justify-center items-center"
                >
                  <a 
                    href={project.live} 
                    target="_blank" 
                    className="flex gap-2 items-center"
                  >
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