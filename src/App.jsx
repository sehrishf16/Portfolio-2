import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import ScrollProgress from "./components/ScrollTop/ScrollTop";
import Loader from "./components/Loader/Loader";
import Education from "./components/Education/Education";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  } 
  return (
    <>
    <ScrollProgress />
      <Navbar />

      <Hero />

      <About />

      <Skills />
      

      <Experience />

      <Education/>

      <Projects />

      <Contact />

      <Footer />
    </>
  );
}

export default App;