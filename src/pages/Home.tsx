import { useRef } from "react";

import Header from "@/sections/Navbar";
import Intro from "@/sections/Intro";
import About from "@/sections/About";
import Education from "@/sections/Education";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

const Home = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header
        onNavigate={{
          about: () => aboutRef.current?.scrollIntoView({ behavior: "smooth" }),
          experience: () =>
            experienceRef.current?.scrollIntoView({ behavior: "smooth" }),
          education: () =>
            educationRef.current?.scrollIntoView({ behavior: "smooth" }),
          contact: () =>
            contactRef.current?.scrollIntoView({ behavior: "smooth" }),
        }}
      />
      <main className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <Intro />
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={experienceRef}>
          <Experience />
        </div>
        <div ref={educationRef}>
          <Education />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
