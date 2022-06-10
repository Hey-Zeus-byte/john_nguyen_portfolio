import React from "react";
import {Route, Routes as BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Designs from "./pages/Designs";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import YumYum from "./pages/projects/YumYum";
import NonProfit from "./pages/projects/NonProfit";
import Joblify from "./pages/projects/Joblify";
import Montana from "./pages/projects/Montana";

const RoutesTo = () => {
  return (
    <BrowserRouter>
      <Route path="/" element={<Home />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/designs" element={<Designs />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects/yumyum" element={<YumYum />} />
      <Route path="/projects/nonprofit" element={<NonProfit />} />
      <Route path="/projects/joblify" element={<Joblify />} />
      <Route path="/projects/montana" element={<Montana />} />
    </BrowserRouter>
  );
};

export default RoutesTo;
