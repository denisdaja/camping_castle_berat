import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Facilities from "./components/Facilities";
import Destinations from "./components/Destinations";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Facilities />
        <Destinations />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
