import {
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import {
  SiTypescript,
  SiFlask,
  SiNumpy,
  SiScipy,
  SiPytorch,
} from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa6";

export default function Tools() {
  return (
    <div>
      <h1 className="text-title">Languages/Tools</h1>
      <div className="flex flex-col gap-4">
        <div>
          <div className="flex flex-row items-center text-lg gap-2 text-muted">
            <FaHtml5 className="text-lg hover:text-orange-500" title="HTML" />
            <FaCss3Alt className="hover:text-orange-500" title="CSS" />
            <IoLogoJavascript
              className="hover:text-orange-500"
              title="JavaScript"
            />
            <FaPython className="hover:text-orange-500" title="Python" />
            <SiTypescript
              className="text-base hover:text-orange-500"
              title="TypeScript"
            />
            <FaJava className="hover:text-orange-500" title="Java" />
          </div>
        </div>
        <div>
          <div className="flex flex-row items-center text-lg gap-2 text-muted">
            <RiTailwindCssFill
              className="hover:text-orange-500"
              title="Tailwind CSS"
            />
            <RiNextjsFill className="hover:text-orange-500" title="Next.js" />
            <FaReact className="hover:text-orange-500" title="React.js" />
            <IoLogoNodejs className="hover:text-orange-500" title="Node.js" />
            <SiFlask className="hover:text-orange-500" title="Flask" />
            <FaGitAlt className="hover:text-orange-500" title="Git" />
            <FaGithub className="hover:text-orange-500" title="GitHub" />
            <SiNumpy className="hover:text-orange-500" title="Numpy" />
            <SiScipy className="hover:text-orange-500" title="Scipy" />
            <SiPytorch className="hover:text-orange-500" title="Pytorch" />
          </div>
        </div>
      </div>
    </div>
  );
}
