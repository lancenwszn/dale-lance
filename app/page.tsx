import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { About, Capabilities, Contact, Experience, Footer, Work } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
