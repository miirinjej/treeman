import * as THREE from 'three';
import React, { forwardRef, useMemo } from 'react';
import { useLoader, useUpdate } from 'react-three-fiber';

const Text = forwardRef(({
                           children, vAlign = 'center', hAlign = 'center', size = 1, ...props
                         }, ref) => {
  const font = useLoader(THREE.FontLoader, 'fonts/helvetiker_regular_typeface.json');
  const config = useMemo(() => ({
    font,
    size: 10,
    height: 10,
  }), [ font ]);
  const mesh = useUpdate(
    (self) => {
      const size = new THREE.Vector3();
      self.geometry.computeBoundingBox();
      self.geometry.boundingBox.getSize(size);
      self.position.x = -size.x / 2;
      self.position.y = -size.y;
    },
    [ children ],
  );
  const material = new THREE.MeshNormalMaterial();

  return (
    <group
      ref={ref}
      scale={[ 0.1 * size, 0.1 * size, 0.1 ]}
    >
      <mesh
        ref={mesh}
        material={material}
      >
        <textGeometry
          attach="geometry"
          args={[ children, config ]}
        />
      </mesh>
    </group>
  );
});

export default Text;
