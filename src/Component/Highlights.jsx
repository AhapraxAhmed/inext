import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { rightImg, watchImg } from "../utils"
import VideoCarousel from "./VideoCarousel";
const Highlight = () => {
    useGSAP(() => {
        gsap.to('#title', {
            opacity: 1,
            y: 0
        })
        gsap.to('.link', {
            opacity: 1,
            y: 0,
            stagger: 0.25,
            delay: 1
        })
    }, [])
    return (
        <section
            id="highlight"
            className="w-screen h-screen bg-zinc-900 
            common-padding overflow-hidden"
        >
            <div className="screen-max-width">
                <div className="mb-10 w-full items-end justify-between md:flex">
                    <h1 id="title" className="section-heading">Get the highlight.</h1>
                    <div className="flex flex-wrap item-end gap-5">
                        <p className="link">Watch the flim
                            <img src={watchImg} alt="watch" className="ml-2" />
                        </p>
                        <p className="link">Watch the event
                            <img src={rightImg} alt="event" className="ml-2" />
                        </p>
                    </div>
                </div>
                <VideoCarousel />
            </div>
        </section>
    )
}

export default Highlight
