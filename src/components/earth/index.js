import React from "react";
import EarthDayMap from "../../assets/textures/earthdaymap.jpg";
import EarthSpecularMap from "../../assets/textures/earthspec1k.jpg";
import EarthCloudMap from "../../assets/textures/earthcloudsmap.jpg";
import EarthNormalMap from "../../assets/textures/earthlights.jpg";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls, Stars } from "@react-three/drei";
import { DoubleSide } from "three";

const Earth = (props) => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudMap]
  );

  return (
    <>
      <ambientLight intensity={1} />
      <pointLight color="#f6f3ea" position={[2, 0, 2]} intensity={1.2} />
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh>
        <sphereGeometry args={[1.008, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={DoubleSide}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
};

export default Earth;
