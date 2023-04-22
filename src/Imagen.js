import { useState } from "react";
import { DoubleSide } from "three";
import { useTexture } from "@react-three/drei";

export default function Imagenes(props) {

    const demoniosPaths = [
        "/static/rui.jpg",
        "/static/enmu.jpg",
        "/static/gyutaro.jpg"
    ];

    const cazadoresPaths = [
      "/static/tanjiro.png",
      "/static/inosuke.jpg",
      "/static/zenitsu.webp",
    ];

    const [textureIndexCazadores, setTextureIndexCazadores] = useState(0);

    const [textureIndexDemonios, setTextureIndexDemonios] = useState(0);
    
    const textureCazadores = useTexture(cazadoresPaths[textureIndexCazadores]);

    const textureDemonios = useTexture(demoniosPaths[textureIndexDemonios]);





    const onHandleImageClick = (cazador) => {
        if (cazador) {
          setTextureIndexCazadores(
            (textureIndexCazadores + 1) % cazadoresPaths.length
          ); // Selecciona la siguiente imagen en la lista circularmente
        }
        else {
          setTextureIndexDemonios(
            (textureIndexDemonios + 1) % demoniosPaths.length
          ); 
        }
    };

  return (
    <group {...props}>
      //pared izquierda
      <mesh position={[-10, 1, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[15, 8, 5]} />
        <meshStandardMaterial
          map={textureCazadores}
          opacity={0}
          side={DoubleSide}
        />
      </mesh>
      <mesh
        position={[-10, 1, 0]}
        rotation={[0, Math.PI / 2, 0]}
        onDoubleClick={() => onHandleImageClick(true)}
      >
        <planeGeometry args={[15, 8, 5]} />
        <meshStandardMaterial transparent opacity={0} />
      </mesh>
      //pared derecha
      <mesh position={[10, 1, 0]} rotation={[0, (3 * Math.PI) / 2, 0]}>
        <planeGeometry args={[15, 8, 5]} />
        <meshStandardMaterial
          map={textureDemonios}
          opacity={0}
          side={DoubleSide}
        />
      </mesh>
      <mesh
        position={[10, 1, 0]}
        rotation={[0, (3 * Math.PI) / 2, 0]}
        onDoubleClick={() => onHandleImageClick(false)}
      >
        <planeGeometry args={[15, 8, 5]} />
        <meshStandardMaterial
          map={textureDemonios}
          opacity={0}
          side={DoubleSide}
        />
      </mesh>
    </group>
  );
}
