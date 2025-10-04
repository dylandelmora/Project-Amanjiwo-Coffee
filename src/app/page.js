import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";



export default function Home() {
  return (
    <div className="bg-[#2C1A14] text-white">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}
