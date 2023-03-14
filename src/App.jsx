import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "./App.css";
import Three from "./components/three";
import React from "react";
import Tilt from "react-vanilla-tilt";

function App() {
  return (
    <>
      <Canvas id="three-canvas-container" shadows>
        <Suspense fallback={<></>}>
          <Three />
        </Suspense>
      </Canvas>

      <Tilt
        style={{
          backgroundColor: "#fff",
          width: 500,
          height: 250,
          margin: '2%'
        }}
        options={{ scale: 5, max: 25 }}
      >
        <div
          style={{
            padding: 25,
          }}
        >
          <p>Tilt this card with mouse</p>
        </div>
      </Tilt>
    </>
  );
}

export default App;
