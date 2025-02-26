import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeftMenu from "./components/LeftMenu";  // Your Profile Sidebar
import RightMenu from "./components/RightMenu"; // Your Navigation Menu
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ProjectPage from "./pages/Project";

function App() {
  return (
    <Router>
      <div className="flex h-screen w-screen bg-gray-100">
        {/* Left Sidebar (Profile Menu) */}
        <LeftMenu />

        {/* Main Content Area */}
        <div className="flex-grow flex justify-center items-center p-6">
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Right Sidebar (Navigation Menu) */}
        <RightMenu />
      </div>
    </Router>
  );
}

export default App;
