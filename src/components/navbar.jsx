
import { FloatingNav } from "../components/ui/floating-navbar";
// import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { CiHome, CiUser} from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
const Navbar=()=> {
  const navItems = [
    {
      name: "Home",
      link: "hero",
      icon: <CiHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "about",
      icon: <CiUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Project",
      link: "projects",
      icon: (
        <FaRegMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "contact",
      icon: (
        <FaRegMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}


export default Navbar;