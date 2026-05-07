import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<Details />} />
        <Route path="/services" element={<Experiences />} />
        <Route path="/portfolio" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
                   
export default App;
