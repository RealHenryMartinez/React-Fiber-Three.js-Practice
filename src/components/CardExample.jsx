import { Html } from "@react-three/drei";
import React, { useState } from "react";
import { angleToRadians } from "../utils/angle";
import reactLogo from "../assets/react-logo.png";

function CardExample() {
  const [hidden, setVisible] = useState(false);
  return (
    <group>
      <mesh scale={[1, 1.25, 0.25]}  >
        <boxGeometry/>
        {/* Basic mesh  */}
        <meshStandardMaterial />
        <Html
          style={{
            transition: "all 0.2s",
            opacity: hidden ? 0 : 1,
            transform: `scale(${hidden ? 0.5 : 1})`,
          }}
          distanceFactor={1.5}
          position={[0, 0, 0.51]}
          transform
          occlude
          onOcclude={setVisible}
          
        >
          <div
            style={{
              textAlign: "center",
              
            }}
          >
            <h1 style={{
                fontSize: 15,
                color: "white",
            }}>Rotate me with mouse</h1>
            <img style={{ width: '100%', height: 125, overflow: 'hidden' }} src={reactLogo} />
          </div>
        </Html>
      </mesh>
    </group>
  );
}

export default CardExample;
