'use client';
import { Canvas, useFrame, useThree  } from '@react-three/fiber';
import React, { useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(
     () => {
        const controls = new OrbitControls(camera, gl.domElement);
        controls.minDistance = 3;
        controls.maxDistance = 20;
        return () => { controls.dispose(); };
     },
     [camera, gl]
  );
  return null;
};

function CrownObj() {
  // const crown = useLoader(GLTFLoader, './Crown.gltf')
  const crown = useLoader(GLTFLoader, './QhacksCrown.gltf')
  const meshRef = useRef(null);

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
    meshRef.current.rotation.x += 0.000;
    meshRef.current.rotation.y += 0.001;
  })

  return (
    <mesh ref={meshRef}>
      <primitive object={crown.scene} args={[5,5,5]}>
        <meshStandardMaterial/>
      </primitive>
    </mesh>
  )
}

export default function Crown() {
  return (
    <div className='h-96 w-96'>
      <Canvas style={{ background:"transparent" }} > 
      <CameraController />
        <ambientLight/>
        <pointLight position={[0,0,10]}/>
        <CrownObj />
      </Canvas>
    </div>
  );
}