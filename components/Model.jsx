/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useState }  from "react";
import { useGLTF, PerspectiveCamera, useProgress } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function Model(props) {
  const { progress } = useProgress()
  const { nodes, materials } = useGLTF("./qhacks_crown.gltf");
  const crownRef = useRef();

  useState(() => {
    if (progress >= 100) {
      console.log("hiding loading screen now :)")
      props.setShowLoadingScreen(false)
    }
  }, [progress])
  
  useFrame((state, delta) => {
      crownRef.current.rotation.y += 0.0005;
  });

  return (
    <group dispose={null} ref={crownRef}>
      <group scale={0.01}>
        <group scale={2}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_21.geometry}
            material={nodes.Rectangle_21.material}
            position={[-0.36076, -116.64761, -25]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_20.geometry}
            material={nodes.Rectangle_20.material}
            position={[-90.36605, -156.38364, -25]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Boolean.geometry}
            material={nodes.Boolean.material}
            position={[-127.1005, -40.6896, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_17.geometry}
            material={nodes.Rectangle_17.material}
            position={[-143.52679, 91.61636, -25]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_16.geometry}
            material={nodes.Rectangle_16.material}
            position={[-195.52679, 117.61636, -25]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_14.geometry}
            material={nodes.Rectangle_14.material}
            position={[-110.52679, -31.38364, -25]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_13.geometry}
            material={nodes.Rectangle_13.material}
            position={[-66.52679, -8.38364, -25]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_12.geometry}
            material={nodes.Rectangle_12.material}
            position={[-29.52679, 29.61636, -25]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_11.geometry}
            material={nodes.Rectangle_11.material}
            position={[-56.52679, 108.61636, -25]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_10.geometry}
            material={nodes.Rectangle_10.material}
            position={[-10.52679, 143.61636, -25]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_9.geometry}
            material={nodes.Rectangle_9.material}
            position={[30.47321, 110.61636, -25]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_8.geometry}
            material={nodes.Rectangle_8.material}
            position={[25.47321, -3.38364, -25]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_6.geometry}
            material={nodes.Rectangle_6.material}
            position={[-4.52679, 39.61636, -25]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_5.geometry}
            material={nodes.Rectangle_5.material}
            position={[113.63395, 51.61636, -25]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_4.geometry}
            material={nodes.Rectangle_4.material}
            position={[164.63395, 71.61636, -25]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Boolean_2.geometry}
            material={nodes.Boolean_2.material}
            position={[126.45433, -41.4425, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle.geometry}
            material={nodes.Rectangle.material}
            position={[76.47321, -25.38364, -25]}
          />
        </group>
        <directionalLight
          intensity={0.7}
          decay={2}
          rotation={[-0.50644, 0.62901, 0.75597]}
        />
        <PerspectiveCamera
          makeDefault={false}
          far={100000}
          near={70}
          fov={45}
          position={[563.06587, 459.33302, 1917.47171]}
          rotation={[-0.23512, 0.27817, 0.06568]}
        />
      </group>
    </group>
  );
}

// useGLTF.preload("./qhacks_crown.gltf");
