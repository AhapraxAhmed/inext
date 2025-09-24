import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";
const Highlight = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      stagger: 0.25,
      delay: 1,
    });
  }, []);
  return (
    <section
      id="highlight"
      className="w-screen h-[110vh] margin-forpatanahi bg-zinc-900 
            common-padding overflow-hidden"
    >
      <div className="screen-max-width px-4">
        <div className="mb-10 w-full flex flex-col md:flex-row md:items-end md:justify-between">
          <h1 id="title" className="section-heading mb-4 md:mb-0">
            Get the highlight.
          </h1>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 md:gap-5">
            <p className="link flex items-center gap-2">
              Watch the film
              <img src={watchImg} alt="watch" className="w-5 h-5" />
            </p>
            <p className="link flex items-center gap-2">
              Watch the event
              <img src={rightImg} alt="event" className="w-5 h-5" />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlight;
