'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';


const Crown = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Set up Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Perform any updates to your scene here

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Crown;
