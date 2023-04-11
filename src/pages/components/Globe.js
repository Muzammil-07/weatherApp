import { Canvas } from '@react-three/fiber'
import React, { Suspense ,useEffect,useRef, useState} from 'react'
import { OrbitControls, useTexture ,PerspectiveCamera} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'





const Scene = () => {
    const[time,setTime]=useState(0.01)
  const ballRef= useRef(null);
  const orbitcontrolRef =useRef(null)
  useFrame(({clock})=>{
    // const {x,y}=state.mouse.current;
    // console.log(clock)
//    console.log(state.current)
const a =clock.getElapsedTime();
setTime(time+0.01);

//   ballRef.current.rotate.x=a;
ballRef.current.rotation.y=time


})
    useEffect(()=>{
       
if(!ballRef){
    console.log(ballRef)
}
    },[ballRef.current])
    const colourMap= useTexture('/2k_earth_daymap.jpg')
    const cloudMap =useTexture("/2k_earth_clouds.jpg")
    // const texture =useTexture({
    //     map:'/2k_earth_daymap.jpg',
    //     roughnessMap:"/2k_earth_clouds.jpg"
    // })
    return (
        <>
        {/* <OrbitControls ref={orbitcontrolRef}/> */}
            {/* <ambientLight intensity={0.2} /> */}
            <spotLight args={["white",2,8,Math.PI*180/80,0.02 ]} position={[-1.5,0,3]}/>
            <PerspectiveCamera makeDefault position={[0,0,2.5]} />
             
            <mesh rotation={[1,0,0]} ref={ballRef}  position={[0,0,0]}>
                <sphereGeometry args={[1, 33, 33]} />
                <meshStandardMaterial  map={colourMap}/>
            </mesh>
        </>
    )
}

const Globe = () => {

    return (
        <Canvas>
            <Suspense fallback={null}>
                <Scene />
            </Suspense>
        </Canvas>
    )
}

export default Globe