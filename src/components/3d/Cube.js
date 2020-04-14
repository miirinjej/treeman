import * as THREE from 'three';
import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

export default function Cube() {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      ref={mesh}
      geometry={geometry}
      material={material}
    />
  );
}
