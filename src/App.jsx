import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import HomeCard from "./HomeCard";
import Footer from "./Component/Footer";
import MoreAbout from "./Component/MoreAbout";
import ScrollToTop from "./Component/Scrollup";
import FeaturedProjects from "./Component/Featuredproject";
// import About from "./Pages/About";
import Details from "./Pages/Details";


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
        <Route path="/details" element={<Details />} />
        
      </Routes>
      
        
      <Footer/>
    </BrowserRouter>

    </>
  );
}

export default App;