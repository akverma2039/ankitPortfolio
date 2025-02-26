import LeftMenu from "../components/LeftMenu";
import RightMenu from "../components/RightMenu";
import Projects from "../components/Project";


export default function ProjectPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Sidebar (Profile Menu) */}
      <div className="hidden md:block w-72">
        <LeftMenu />
      </div>

      {/* Main Content (Centered Project Section) */}
      <div className="flex-1 flex items-center justify-center">
        <Projects />
      </div>

      {/* Right Sidebar (Navigation Menu) */}
      <div className="hidden md:block w-16">
        <RightMenu />
      </div>
    </div>
  );
}
