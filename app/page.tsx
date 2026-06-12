import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Accommodation from "./components/Accommodation";
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
        <Accommodation />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
