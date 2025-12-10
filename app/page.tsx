import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhyChoose } from "@/components/WhyChoose";
import { Features } from "@/components/Features";
import { WorkflowSection } from "@/components/WorkflowSection";
import { ProductTour } from "@/components/ProductTour";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-indigo-100 selection:text-indigo-900 dark:selection:bg-indigo-900 dark:selection:text-indigo-100">
      <Navbar />
      <Hero />
      <WhyChoose />
      <Features />
      <WorkflowSection />
      <ProductTour />
      <Pricing />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
