import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas
} from "./components";

import Certifications from "/src/components/Certifications.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🌍 Main website route */}
        <Route
          path="/"
          element={
            <div className="relative z-0 bg-primary">
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
              </div>
              <About />
              <Experience />
              <Tech />
              <Works />
              <Certifications />
              <Feedbacks />
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
