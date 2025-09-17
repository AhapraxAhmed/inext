import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState, useRef } from "react";
gsap.registerPlugin(useGSAP);

const Hero = () => {
    const [videosrc, setvideosrc] = useState(
        window.innerWidth < 760 ? smallHeroVideo : heroVideo
    );
    const heroRef = useRef();
    const videoRef = useRef();
    const ctaRef = useRef();

    useGSAP(() => {
        gsap.to(heroRef.current, {
            opacity: 1,
            delay: 2,
            y: -4,
        });
        gsap.to(videoRef.current, {
            opacity: 1,
            y: 0,
        });
        gsap.to(ctaRef.current, {
            y: -200,
            opacity: 1,
            delay: 2,
        });
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setvideosrc(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="w-full h-screen bg-black relative">
            <div className="h-full w-full flex flex-col justify-center items-center">
                <p
                    ref={heroRef}
                    className="hero-title text-center uppercase opacity-0 translate-y-4"
                >
                    Iphone 16 pro
                </p>

                <div className="md:w-10/12 sm:w-5/7 w-9/12">
                    <video
                        autoPlay
                        muted
                        playsInline={true}
                        key={videosrc}
                        className="pointer-events-none opacity-0 translate-y-4"
                        ref={videoRef}
                    >
                        <source src={videosrc} type="video/mp4" />
                    </video>
                </div>
            </div>

            <div
                ref={ctaRef}
                className="flex flex-col items-center opacity-0 translate-y-20"
            >
                <a href="#highlights" className="btn">
                    Buy
                </a>
                <p className="font-normal text-xl text-gray-700">
                    From $199/month or $999
                </p>
            </div>
        </section>
    );
};

export default Hero;
