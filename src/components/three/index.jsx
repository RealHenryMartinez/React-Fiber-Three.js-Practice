import { angleToRadians } from "../../utils/angle";

import React, { useRef, useEffect } from "react";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { Bee } from "./Bee";
import CardExample from "../CardExample";

function index() {
  // Code to move the camera around

  // useRef -> values that persists on renders
  const orbitControlsRef = useRef(null);
  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
      // change the mouse movement on the x-axis with the mouse movement offset
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(25));
      // 90 degrees is the default of the polar angle
      // 30 degrees is the angle from the ground up
      // y + 1 => How far from the CENTER can the camera move
      orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));
      // let the camera know that the position changes are changed
      orbitControlsRef.current.update();
    }
  });

  useEffect(() => {
    // check if there are current changes to the frame
    if (!!orbitControlsRef.current) {
      console.log(orbitControlsRef.current);
    }
  }, [orbitControlsRef.current]);

  // Animation
  const ballRef = useRef(null);
  useEffect(() => {
    if (!!ballRef.current) {
      // Timeline
      const timeline = gsap.timeline({ paused: true });

      // x-axis motion
      timeline.to(ballRef.current.position, {
        x: 1,
        duration: 4,
        ease: "power2.out",
      });

      // y-axis motion
      timeline.to(
        ballRef.current.position,
        {
          y: 0.5,
          duration: 1.5,
          ease: "bounce.out",
        },
        "<"
      );

      // Play
      timeline.play();
    }
  }, [ballRef.current]);

  // position => [x, y, z]
  // args => arguments you pass to the component constructor to give its properties
  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 1, 3]} />
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={angleToRadians(60)}
        maxPolarAngle={angleToRadians(80)}
        enableZoom={false}
      />

      {/* Ball Sphere */}
      {/* <mesh position={[-2, 1.5, 0]} castShadow ref={ballRef}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color={"#fff"} />
      </mesh> */}

      <CardExample />
      {/* <Bee /> */}
      {/* <mesh rotation={[-angleToRadians(90), 0, 0]} castShadow receiveShadow>
        <planeGeometry args={[7, 7]} />
        <meshStandardMaterial color={"#6e6a5e"} />
      </mesh> */}

      {/* Ambient Light */}
      {/* <ambientLight args={["#fff", 0.1]} /> */}

      {/* Spot Light */}
      <spotLight
        args={["#96defa", 1, 7, angleToRadians(45), 0.4]}
        position={[-5, 1.5, 0.5]}
        castShadow
      />

      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial color="#233036" side={THREE.BackSide} />
        </mesh>
      </Environment>
    </>
  );
}

export default index;
