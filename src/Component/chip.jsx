import gsap, { ScrollTrigger } from 'gsap/all';
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react';
import { animateWithGsap } from '../utils/animation';
gsap.registerPlugin(ScrollTrigger);

const Chip = () => {
    const videoRef = useRef();
    useGSAP(() => {
        gsap.from('#chip', {
            scrollTrigger: {
                trigger: '#chip',
                start: '20% bottom',
            },
            scale: 2,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
        })
        animateWithGsap('.g-fadeIn', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
        })
    }, []);

    return (
        <section className="common-padding">
            <div className="screen-max-width">
                <div id='chip' className="flex-center w-full my">
                    <img src={chipImg} alt="iPhone chip" width={180}
                        height={180} />
                </div>
                <div className="flex flex-col items-center">
                    <h2 className='hiw-title'>
                        A18 Pro Chip
                        <br />A monster win for Gaming.
                    </h2>
                    <p className="hiw-subtitle">
                        It's here.The biggest redsign in the history
                        of Apple GPUs.
                    </p>
                </div>

                <div className="mt-10 md:mt-20 mb-15">
                    <div className="relative h-full flex-center">
                        <div className="overflow-hidden">
                            <img src={frameImg} alt="Phone Frame" className='bg-transparent 
                            relative z-10' />
                        </div>
                        <div className="hiw-video">
                            <video className="pointer-events-none" playsInline
                                preload='none' muted autoPlay ref={videoRef}>
                                <source src={frameVideo} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <p className="text-gray-400 
                    font-semibold text-center mt-4">Pubg: Erangel
                    </p>
                </div>

                <div className="hiw-text-container marginbottom">
                    <div className="flex1 justify-center flex-col">
                        <p className="hiw-text g-fadeIn">
                            A18 Pro is an entirely{' '}
                            <span className="text-white">
                                new 3nm architecture with a 6-core CPU, 6-core GPU, and 16-core Neural Engine.
                            </span>
                        </p>

                        <p className="hiw-text
                                    g-fadeIn">
                            Mobile {''}
                            <span className="text-white">
                                games will look and feel so imersive
                            </span>,
                            with incredibly detailed environments and characters.
                        </p>
                    </div>

                    <div className="flex1 flex justify-center
                        flex-col g-fadeIn">
                        <p className='hiw-text'>New</p>
                        <p className='hiw-bigtext'>Pro-class GPU</p>
                        <p className='hiw-text'>with 6.5 cores</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Chip