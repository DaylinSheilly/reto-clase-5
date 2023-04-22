 /**
  * Hooks Reactjs: https://legacy.reactjs.org/docs/hooks-intro.html
  * React Three Fiber: https://docs.pmnd.rs/react-three-fiber/getting-started/introduction
  * Hooks de R3F: https://docs.pmnd.rs/react-three-fiber/api/hooks
  * React three drei: https://github.com/pmndrs/drei
  * Three.js: https://threejs.org/docs/
  * 
*/

import { Center,  OrbitControls, Html } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";
import { DoubleSide } from "three";
import Video from "./Video.js";
import Imagen from "./Imagen.js";
import Video2 from "./Video.js";
import Video3 from "./Video3.js";

export function Experience() {
    
    return (
      <>
        <directionalLight position={[6, 6, 9]} intensity={1} />
        <ambientLight color={"white"} intensity={0.5} />
        <color attach="background" args={["grey"]} />
        <Suspense fallback={null}>
          <Center>
            <Video2 position={[0, 1, -7.4]} />
            <Imagen />
            //piso
            <mesh position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[20, 15, 8]} />
              <meshStandardMaterial color={"#03C988"} side={DoubleSide} />
            </mesh>
            //techo
            <mesh position={[0, 5, 0]} rotation={[(-3 * Math.PI) / 2, 0, 0]}>
              <planeGeometry args={[20, 15, 8]} />
              <meshStandardMaterial color={"#A31ACB"} side={DoubleSide} />
            </mesh>
          </Center>
        </Suspense>
        <OrbitControls />
        {/*<OrbitControls
          makeDefault
          enableRotate={false}
          enablePan={false}
          maxZoom={0.0001}
          maxDistance={6}
    />*/}
      </>
    );
  }
