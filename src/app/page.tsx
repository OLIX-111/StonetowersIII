import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import About from "@/components/About";
import WhyChoose from "@/components/WhyChoose";
import Amenities from "@/components/Amenities";
import Models from "@/components/Models";
import Explore from "@/components/Explore";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <About />
        <WhyChoose />
        <Amenities />
        <Models />
        <Explore />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
