import React from 'react';
import { Canvas } from 'react-three-fiber';
import './App.scss';
import Cube from './components/3d/Cube';
import Line from './components/3d/Line';

function App() {
  return (
    <div>
      Three.js manual.
      <Canvas
        camera={{
          fov: 75,
          near: 0.01,
          far: 1000,
        }}
      >
        <Cube />
        <Line />
      </Canvas>
    </div>
  );
}

export default App;
