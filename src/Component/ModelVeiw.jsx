import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei"
import Lights from "./Lights"
import Model from "./Ipnone"
import Loader from "./Loader"
import * as THREE from 'three'
import { Suspense } from "react"

const ModelVeiw = ({ index, groupRef, gsapType,
    controlRef, setRototionState, size, item
}) => {
    return (
        <View
            index={index}
            id={gsapType}
            className={`w-full h-full absolute ${index === 2 ?
                'right-[-100%]' : ''}`}
        >

            <ambientLight intensity={1} />

            <PerspectiveCamera makeDefault position={[0, 0, 4]} />

            <Lights />

            <OrbitControls
                makeDefault
                ref={controlRef}
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.4}
                target={new THREE.Vector3(0, 0, 0)}
                onEnd={() => setRototionState(controlRef.current.getAzimuthalAngle())}
            />

            <group ref={groupRef} name={`${index === 1}?
            'small: 'large'`} position={[0, 0, 0]}>
                <Suspense fallback={<Loader />}>
                    <Model
                        scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
                        item={item}
                        size={size}
                    />
                </Suspense>
            </group>
        </View>

    )
}

export default ModelVeiw