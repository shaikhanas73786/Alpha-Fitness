import Home from "./pages/Home.jsx";
import About from "./components/About";
import MemberShip from "./pages/MemberShip.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./pages/ScrollToTop";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/membership" element={<MemberShip />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}
export default App