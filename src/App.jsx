import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import MemberShip from "./pages/MemberShip.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";

import './App.css'

function App() {
  

  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/MemberShip" element={<MemberShip />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default App
