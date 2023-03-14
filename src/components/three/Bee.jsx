/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 bee.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { angleToRadians } from '../../utils/angle'

export function Bee() {
  // referencing the model to reference after each render
  const group = useRef()
  // reference the nodes and materials (surface) from the glb file containing the binary file
  const { nodes, materials } = useGLTF('/models/bee/bee.glb')
  return (
    <group ref={group} dispose={null} scale={1} rotation={[0, angleToRadians(-35), 0]}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} rotation={[0.05, -0.24, 0.16]} scale={[0.87, 0.94, 0.94]}>
        <mesh geometry={nodes.Cube001_1.geometry} material={materials['Material.004']} position={[1.51, 0.06, 0.16]} rotation={[Math.PI, -1.52, Math.PI]} scale={[0.07, 0.07, 0.01]} />
        <mesh geometry={nodes.Cube002_1.geometry} material={materials['Material.004']} position={[1.51, 0.06, -0.2]} rotation={[Math.PI, -1.52, Math.PI]} scale={[0.07, 0.07, 0.01]} />
        <mesh geometry={nodes.Cube003.geometry} material={materials['Material.004']} position={[1.57, -0.01, 0.06]} scale={[0.04, 0.03, 0.03]} />
        <mesh geometry={nodes.Cube004.geometry} material={materials['Material.002']} position={[-0.31, 0, 0]} scale={[0.24, 1.06, 1.06]} />
        <mesh geometry={nodes.Cube005.geometry} material={materials['Material.002']} position={[0.53, 0, 0]} scale={[0.25, 1.06, 1.06]} />
        <mesh geometry={nodes.Cube006.geometry} material={materials['Material.002']} position={[1.41, 0.63, 0.28]} rotation={[0, 0, -0.85]} scale={-0.05} />
        <mesh geometry={nodes.Cube007.geometry} material={materials['Material.002']} position={[1.41, 0.63, -0.31]} rotation={[0, 0, -0.85]} scale={-0.05} />
        <mesh geometry={nodes.Cube008.geometry} material={materials['Material.003']} position={[1.45, -0.06, 0.42]} rotation={[Math.PI, -1.52, Math.PI]} scale={[0.11, 0.11, 0.02]} />
        <mesh geometry={nodes.Cube009.geometry} material={materials['Material.003']} position={[1.45, -0.06, -0.45]} rotation={[Math.PI, -1.52, Math.PI]} scale={[0.11, 0.11, 0.02]} />
        <mesh geometry={nodes.Plane.geometry} material={materials['Material.005']} position={[0.27, 0.64, 1.05]} rotation={[-0.32, 0, 0]} scale={[0.65, 0.6, 0.6]} />
        <mesh geometry={nodes.Plane002.geometry} material={materials['Material.005']} position={[0.27, 0.64, -0.94]} rotation={[0.29, 0, 0]} scale={[0.65, 0.6, 0.6]} />
      </mesh>
      <mesh geometry={nodes.Plane001.geometry} material={materials['Material.006']} position={[0, -2.1, 0]} scale={6.41} />
      <mesh geometry={nodes.Cube010.geometry} material={materials['Material.007']} position={[-0.91, 1.7, 0.77]} scale={0.19} />
      <mesh geometry={nodes.Cube011.geometry} material={materials['Material.007']} position={[-0.62, -0.11, 1.87]} scale={0.19} />
      <mesh geometry={nodes.Cube012.geometry} material={materials['Material.007']} position={[1.81, 0.26, -0.95]} scale={0.19} />
      <mesh geometry={nodes.Cube013.geometry} material={materials['Material.007']} position={[1.59, 0.74, -1.07]} scale={0.08} />
      <mesh geometry={nodes.Cube014.geometry} material={materials['Material.007']} position={[-0.4, 1.36, 0.5]} scale={0.13} />
      <mesh geometry={nodes.Cube015.geometry} material={materials['Material.007']} position={[-0.67, 0.27, 1.47]} scale={0.08} />
      <mesh geometry={nodes.Cube016.geometry} material={materials['Material.007']} position={[1.39, -1.67, 0.32]} scale={0.19} />
      <mesh geometry={nodes.Cube017.geometry} material={materials['Material.007']} position={[1.48, -1.13, -0.16]} scale={0.08} />
      <mesh geometry={nodes.Cube018.geometry} material={materials['Material.007']} position={[-0.05, -1.47, 1.12]} rotation={[0, 0.56, 0]} scale={0.19} />
      <mesh geometry={nodes.Cube019.geometry} material={materials['Material.007']} position={[-0.3, -1, 1.13]} rotation={[0, 0.56, 0]} scale={0.08} />
      <mesh geometry={nodes.Cube020.geometry} material={materials['Material.007']} position={[1.39, 1.88, -0.5]} scale={0.19} />
      <mesh geometry={nodes.brw.geometry} material={materials['Material.007']} position={[1.27, -2.06, -0.91]} rotation={[1.58, -0.01, -0.52]} scale={0.14} />
    </group>
  )
}

useGLTF.preload('/bee.glb')
