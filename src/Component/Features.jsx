import { useGSAP } from "@gsap/react"
import { animateWithGsap } from "../utils/animation";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import { useRef } from "react";
import gsap from "gsap";


const Features = () => {
    const videoRef = useRef();
    useGSAP(() => {
        gsap.to('#exploreVideo', {
            scrollTrigger: {
                trigger: '#exploreVideo',
                toggleActions: 'play pause reverse restart',
                start: '-10% bottom',
            },
            onComplete: () => {
                videoRef.current.play();
            }
        });
        animateWithGsap('#features-title', {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: 'power2.inOut'
        });
        animateWithGsap('.g_grow', {
            scale: 1,
            opacity: 1,
            ease: 'power2.inOut',
        },
            { scrub: 5.5 });
        animateWithGsap('.g-text', {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: 'power2.inOut'
        });
    }, []);
    return (
        <section className='h-full common-padding bg-zinc-900 
        relative overflow-hidden'>
            <div className='screen-max-width'>
                <div className='w-full'>
                    <h3 className='section-heading1 explore' id="features-title">Explore the full story.</h3>
                </div>
                <div className="flex flex-col justify-center 
                items-center overflow-hidden">
                    <div className="mt-32 mb-24 pl-24 forged">
                        <h2 className="text-5xl font-semibold text-white 
                        mb-6 lg:text-7xl">iPhone.</h2>
                        <h2 className="text-5xl font-semibold text-white 
                        mb-6 lg:text-7xl">Forged With Titanium.</h2>
                    </div>
                    <div className="flex-center flex-col sm:px-10">
                        <div className="relative h-[50vh] w-full flex items-center">
                            <video playsInline id="exploreVideo"
                                className="w-full h-full object-cover object-center"
                                preload="none" muted autoPlay ref={videoRef}>
                                <source src={exploreVideo} type="video/mp4" />
                            </video>
                        </div>
                        <div className="flex flex-col w-full 
                        relative">
                            <div className="feature-video-container">
                                <div className="overflow-hidden flex-1
                                h-[50vh]">
                                    <img src={explore1Img} alt="titanium"
                                        className="feature-video g_grow" />
                                </div>
                                <div className="overflow-hidden flex-1
                                h-[50vh]">
                                    <img src={explore2Img} alt="titanium2"
                                        className="feature-video g_grow" />
                                </div>
                            </div>
                            <div className="feature-text-container">
                                <div className="flex1 flex-center">
                                    <p className="feature-text
                                    g-text">
                                        iPhone 15 Pro is {''}
                                        <span className="text-white">
                                            the first iPhone to feature an
                                            aerospace_grade titanium design
                                        </span>,
                                        using the same alloy used in
                                        spacecraft, rockets, and high_performance.
                                    </p>
                                </div>
                                <div className="flex1 flex-center">
                                    <p className="feature-text
                                    g-text">
                                        Titanium has one of the best
                                        strength-to-weight ratios of any
                                        metal, making these our {''}
                                        <span className="text-white">
                                            lightest Pro models ever
                                        </span>,
                                        You'll notice the difference
                                        the moment you pick one up.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features