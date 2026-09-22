import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import HomeCard from "./HomeCard";
import Footer from "./Component/Footer";
import MoreAbout from "./Component/MoreAbout";
import ScrollToTop from "./Component/Scrollup";
import Projects from "./Pages/Projects";
// import About from "./Pages/About";


function App() {
  return (
    
    <>
    <BrowserRouter>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomeCard />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/more-about" element={<MoreAbout />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      
        
      <Footer/>
    </BrowserRouter>

    </>
  );
}

export default App;