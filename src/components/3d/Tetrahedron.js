import * as THREE from 'three';
import React, { forwardRef } from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Tetrahedron = forwardRef(({
                                  children,
                                  ...props
                                }, ref) => {
  const model = useLoader(GLTFLoader, 'models/tetrahedron.glb');
  const material = new THREE.MeshNormalMaterial();

  model.scene.traverse((obj) => {
    if (obj.isMesh) {
      obj.material = material;
    }
  });

  return (
    <primitive
      object={model.scene}
      position={[ 10, 0, 0 ]}
      dispose={null}
    />
  );
});

export default Tetrahedron;
