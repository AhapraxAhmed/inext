import ModelVeiw from "./ModelVeiw"
import { yellowImg } from "../utils"
import { useEffect, useRef, useState } from "react"
import *  as THREE from 'three'
import { models, sizes } from "../Constant"
import { View } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Canvas } from '@react-three/fiber';
import { animateWithGsapTimeline } from "../utils/animation"


const Model = () => {

    const [size, setSize] = useState('small')
    const [model, setModel] = useState({
        title: 'iphone 16 pro in Natural Titanium',
        color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
        img: yellowImg
    })

    //camera control
    const cameraControlSmall = useRef()
    const cameraControlLarge = useRef()

    //model
    const small = useRef(new THREE.Group());
    const large = useRef(new THREE.Group());

    //rotation
    const [smallRotation, setSmallRotation] = useState(0)
    const [largeRotation, setLargeRotation] = useState(0)

    const tl = gsap.timeline();
    useEffect(() => {
        if (size === 'large') {
            animateWithGsapTimeline(tl, small, smallRotation, '#view1', '#view2', {
                transform: 'translateX(-100%)',
                duration: 2
            })
        }
        if (size === 'small') {
            animateWithGsapTimeline(tl, large, largeRotation, '#view2', '#view1', {
                transform: 'translateX(0)',
                duration: 2
            })
        }
    }, [size])

    useGSAP(() => {
        gsap.to('#heading', {
            opacity: 1,
            y: 0
        })
    }, [])

    return (
        <section className="common-padding mt-12">
            <div className="screen-max-width">
                <h1 id="heading" className="section-heading">
                    TAKE A LOOK
                </h1>
                <div className="flex flex-col item-center mt-5">
                    <div className="w-full h-[75vh] md:[90vh]
                    overflow-hidden relative">
                        <ModelVeiw
                            index={1}
                            groupRef={small}
                            gsapType="view1"
                            controlRef={cameraControlSmall}
                            setRototionState={setSmallRotation}
                            item={model}
                            size={size}
                        />
                        <ModelVeiw
                            index={2}
                            groupRef={large}
                            gsapType="view2"
                            controlRef={cameraControlLarge}
                            setRototionState={setLargeRotation}
                            item={model}
                            size={size}
                        />

                        <Canvas
                            className="w-full h-full"
                            style={{
                                position: 'fixed',
                                top: 0,
                                bottom: 0,
                                right: 0,
                                left: 0,
                                overflow: 'hidden'
                            }}
                            eventSource={document.getElementById('root')}
                        >
                            <View.Port />
                        </Canvas>
                    </div>

                    <div className="mx-auto w-full margin">
                        <p className="text-sm font-light text-center margin">
                            {model.title}
                        </p>
                        <div className="flex-center">
                            <ul className="color-container color">
                                {models.map((item, i) => (
                                    <li key={i} className="w-6 h-6 rounded-full
                                     cursor-pointer margin1"
                                        style={{
                                            background: item.color[0]
                                        }}
                                        onClick={() => setModel(item)}
                                    />
                                ))}
                            </ul>

                            <button className="size-btn-container size">
                                {sizes.map(({ label, value }) => (
                                    <span key={label} className="size-btn"
                                        style={{
                                            backgroundColor: size === value ? 'white' : 'transparent',
                                            color: size === value ? 'black' : 'white'
                                        }}
                                        onClick={() => setSize(value)}>
                                        {label}
                                    </span>
                                ))}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Model