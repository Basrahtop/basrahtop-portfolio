import Navbar       from "@/components/Navbar";
import CustomCursor  from "@/components/CustomCursor";
import Hero          from "@/components/Hero";
import About         from "@/components/About";
import GraphicDesign from "@/components/GraphicDesign";
import WebDev        from "@/components/WebDev";
import Events        from "@/components/Events";
import Volunteering  from "@/components/Volunteering";
import Contact       from "@/components/Contact";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <GraphicDesign />
        <WebDev />
        <Events />
        <Volunteering />
        <Contact />
      </main>
    </>
  );
}
