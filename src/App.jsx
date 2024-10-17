import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Mywork from "./components/MyWork/Mywork";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Mywork />
      <Contact />
      <Footer />
    </div>
  );
}
