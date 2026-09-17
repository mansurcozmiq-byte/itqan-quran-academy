import { useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

import Hero from "./sections/Hero";
import Introduction from "./sections/Introduction";
import WhyItqan from "./sections/WhyItqan";
import Programs from "./sections/Programs";
import LearningJourney from "./sections/LearningJourney";
import ChildrenLearning from "./sections/ChildrenLearning";
import VisualStory from "./sections/VisualStory";
import VideoSection from "./sections/VideoSection";
import ParentMessage from "./sections/ParentMessage";
import AdmissionCTA from "./sections/AdmissionCTA";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";

import "./styles/index.css";

function App() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    import("gsap")
      .then(({ default: gsap }) =>
        import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
          gsap.registerPlugin(ScrollTrigger);

          // Section entrance — subtle
          gsap.utils.toArray(".section").forEach((sec) => {
            gsap.fromTo(
              sec,
              { opacity: 0.88, y: 28 },
              {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: sec,
                  start: "top 88%",
                  toggleActions: "play none none none",
                },
              }
            );
          });

          // Section titles — gentle reveal
          gsap.utils.toArray(".section-title").forEach((el) => {
            gsap.fromTo(
              el,
              { opacity: 0.7, y: 16 },
              {
                opacity: 1,
                y: 0,
                duration: 0.55,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 90%",
                  toggleActions: "play none none none",
                },
              }
            );
          });
        })
      )
      .catch(() => {
        /* content stays visible */
      });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Introduction />
        <WhyItqan />
        <Programs />
        <LearningJourney />
        <ChildrenLearning />
        <VisualStory />
        <VideoSection />
        <ParentMessage />
        <AdmissionCTA />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
