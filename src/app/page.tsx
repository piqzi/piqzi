import Profile from "@/app/components/Profile";
import Tools from "@/app/components/Tools";
import Activity from "@/app/components/Activity";
import Projects from "@/app/components/Projects";
import Socials from "@/app/components/Socials";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center gap-8 p-10">
      <Profile />
      <Tools />
      <Activity />
      <Projects />
      <Socials />
    </div>
  );
}
