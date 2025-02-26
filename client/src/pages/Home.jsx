import LeftMenu from "../components/LeftMenu";
import RightMenu from "../components/RightMenu";
import HeroSection from "../components/HeroSection";


export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Sidebar (Profile Menu) */}
      <div className="hidden md:block w-72">
        <LeftMenu />
      </div>

      {/* Main Content (Centered Hero Section) */}
      <div className="flex-1 flex items-center justify-center">
        <HeroSection />
      </div>

      {/* Right Sidebar (Navigation Menu) */}
      <div className="hidden md:block w-16">
        <RightMenu />
      </div>
    </div>
  );
}
