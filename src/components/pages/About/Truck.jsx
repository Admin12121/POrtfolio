import React, { useRef , useEffect, useState} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three';
import Sound from 'react-sound';

export function Truck(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/Three/truck.glb');
  const { actions, mixer } = useAnimations(animations, group);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (play) {
      // Play the animation only once
      const carEngineAction = actions['Car engine'];

      carEngineAction.reset().fadeIn(0.5).play().setLoop(THREE.LoopOnce, 1);

      // Set play to false once the animation finishes
      mixer.addEventListener('finished', () => setPlay(false));
    }
  }, [actions, mixer, play]);
  return (
    <group ref={group} {...props} dispose={null} onClick={()=>setPlay(true)}>
      {play && (
        <Sound
          url="/car.wav"
          playStatus={Sound.status.PLAYING}
        />
      )}
      <group name="Sketchfab_Scene" >
        <group name="Sketchfab_model"  rotation={[-Math.PI / 2, 0, 0]}>
          <group name="7f09d404031140d78a7bb6db74b81fa4fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Spring" position={[155.621, 20.722, -81.958]} rotation={[-0.209, Math.PI / 2, 0]} scale={2.803}>
                  <mesh name="Spring_Light_black_0" geometry={nodes.Spring_Light_black_0.geometry} material={materials.Light_black} />
                  <mesh name="Spring_Black_0" geometry={nodes.Spring_Black_0.geometry} material={materials.Black} />
                </group>
                <group name="Spring001" position={[-128.512, 20.722, -81.958]} rotation={[-0.209, Math.PI / 2, 0]} scale={2.803}>
                  <mesh name="Spring001_Light_black_0" geometry={nodes.Spring001_Light_black_0.geometry} material={materials.Light_black} />
                  <mesh name="Spring001_Black_0" geometry={nodes.Spring001_Black_0.geometry} material={materials.Black} />
                </group>
                <group name="Spring002" position={[155.621, 20.722, 81.958]} rotation={[0.209, -Math.PI / 2, 0]} scale={2.803}>
                  <mesh name="Spring002_Light_black_0" geometry={nodes.Spring002_Light_black_0.geometry} material={materials.Light_black} />
                  <mesh name="Spring002_Black_0" geometry={nodes.Spring002_Black_0.geometry} material={materials.Black} />
                </group>
                <group name="Spring003" position={[-128.512, 20.722, 81.958]} rotation={[0.209, -Math.PI / 2, 0]} scale={2.803}>
                  <mesh name="Spring003_Light_black_0" geometry={nodes.Spring003_Light_black_0.geometry} material={materials.Light_black} />
                  <mesh name="Spring003_Black_0" geometry={nodes.Spring003_Black_0.geometry} material={materials.Black} />
                </group>
                <group name="Smoke001" position={[70.408, 165.259, 94.261]} scale={0}>
                  <mesh name="Smoke001_Smoke_0" geometry={nodes.Smoke001_Smoke_0.geometry} material={materials.Smoke} />
                </group>
                <group name="Smoke002" position={[74.602, 165.67, 92.365]} scale={0}>
                  <mesh name="Smoke002_Smoke_0" geometry={nodes.Smoke002_Smoke_0.geometry} material={materials.Smoke} />
                </group>
                <group name="Smoke003" position={[72.18, 166.534, 95.135]} scale={0}>
                  <mesh name="Smoke003_Smoke_0" geometry={nodes.Smoke003_Smoke_0.geometry} material={materials.Smoke} />
                </group>
                <group name="Smoke004" position={[73.14, 165.638, 93.102]} scale={0}>
                  <mesh name="Smoke004_Smoke_0" geometry={nodes.Smoke004_Smoke_0.geometry} material={materials.Smoke} />
                </group>
                <group name="Smoke005" position={[75.198, 166.038, 95.17]} scale={0}>
                  <mesh name="Smoke005_Smoke_0" geometry={nodes.Smoke005_Smoke_0.geometry} material={materials.Smoke} />
                </group>
                <group name="Smoke006" position={[75.865, 167.365, 89.869]} scale={0}>
                  <mesh name="Smoke006_Smoke_0" geometry={nodes.Smoke006_Smoke_0.geometry} material={materials.Smoke} />
                </group>
                <group name="Smoke007" position={[74.987, 167.942, 90.928]} scale={0}>
                  <mesh name="Smoke007_Smoke_0" geometry={nodes.Smoke007_Smoke_0.geometry} material={materials.Smoke} />
                </group>
                <group name="Smoke008" position={[73.567, 166.392, 94.528]} scale={0}>
                  <mesh name="Smoke008_Smoke_0" geometry={nodes.Smoke008_Smoke_0.geometry} material={materials.Smoke} />
                </group>
                <group name="Smoke009" position={[70.765, 159.593, 95.076]} scale={0}>
                  <mesh name="Smoke009_Smoke_0" geometry={nodes.Smoke009_Smoke_0.geometry} material={materials.Smoke} />
                </group>
                <group name="Smoke010" position={[72.875, 163.489, 92.993]} scale={0}>
                  <mesh name="Smoke010_Smoke_0" geometry={nodes.Smoke010_Smoke_0.geometry} material={materials.Smoke} />
                </group>
                <group name="Smoke011" position={[75.049, 162.613, 91.645]} scale={0}>
                  <mesh name="Smoke011_Smoke_0" geometry={nodes.Smoke011_Smoke_0.geometry} material={materials.Smoke} />
                </group>
                <group name="Smoke012" position={[73.821, 161.817, 89.947]} scale={0}>
                  <mesh name="Smoke012_Smoke_0" geometry={nodes.Smoke012_Smoke_0.geometry} material={materials.Smoke} />
                </group>
                <group name="Frame" rotation={[-Math.PI / 2, 0, 0]} scale={[300, 100, 50]}>
                  <mesh name="Frame_Orange_0" geometry={nodes.Frame_Orange_0.geometry} material={materials.Orange} />
                  <mesh name="Frame_Black_0" geometry={nodes.Frame_Black_0.geometry} material={materials.Black} />
                  <mesh name="Frame_Glass_0" geometry={nodes.Frame_Glass_0.geometry} material={materials.Glass} />
                  <mesh name="Frame_Light_0" geometry={nodes.Frame_Light_0.geometry} material={materials.Light} />
                  <mesh name="Frame_Light_red_0" geometry={nodes.Frame_Light_red_0.geometry} material={materials.Light_red} />
                  <mesh name="Frame_Dark_brown_0" geometry={nodes.Frame_Dark_brown_0.geometry} material={materials.Dark_brown} />
                  <mesh name="Frame_Dark_brown_handle_0" geometry={nodes.Frame_Dark_brown_handle_0.geometry} material={materials.Dark_brown_handle} />
                  <mesh name="Frame_Glass_trailer_0" geometry={nodes.Frame_Glass_trailer_0.geometry} material={materials.Glass_trailer} />
                  <mesh name="Frame_Light_black_0" geometry={nodes.Frame_Light_black_0.geometry} material={materials.Light_black} />
                  <mesh name="Frame_Brown_0" geometry={nodes.Frame_Brown_0.geometry} material={materials.Brown} />
                </group>
                <group name="Front_wheel" position={[155.621, 9.27, -127.28]} rotation={[0, 0, -1.403]} scale={[50.096, 50.096, 27.014]}>
                  <mesh name="Front_wheel_Black_0" geometry={nodes.Front_wheel_Black_0.geometry} material={materials.Black} />
                  <mesh name="Front_wheel_Light_black_0" geometry={nodes.Front_wheel_Light_black_0.geometry} material={materials.Light_black} />
                </group>
                <group name="Rear_wheel" position={[-128.512, 14.271, -125.978]} rotation={[0, 0, -2.159]} scale={[55.106, 55.106, 29.617]}>
                  <mesh name="Rear_wheel_Black_0" geometry={nodes.Rear_wheel_Black_0.geometry} material={materials.Black} />
                  <mesh name="Rear_wheel_Light_black_0" geometry={nodes.Rear_wheel_Light_black_0.geometry} material={materials.Light_black} />
                </group>
                <group name="Front_wheel001" position={[155.621, 9.27, 127.28]} rotation={[Math.PI, 0, 1.308]} scale={[50.096, 50.096, 27.014]}>
                  <mesh name="Front_wheel001_Black_0" geometry={nodes.Front_wheel001_Black_0.geometry} material={materials.Black} />
                  <mesh name="Front_wheel001_Light_black_0" geometry={nodes.Front_wheel001_Light_black_0.geometry} material={materials.Light_black} />
                </group>
                <group name="Rear_wheel001" position={[-128.512, 14.271, 125.978]} rotation={[Math.PI, 0, 2.127]} scale={[55.106, 55.106, 29.617]}>
                  <mesh name="Rear_wheel001_Black_0" geometry={nodes.Rear_wheel001_Black_0.geometry} material={materials.Black} />
                  <mesh name="Rear_wheel001_Light_black_0" geometry={nodes.Rear_wheel001_Light_black_0.geometry} material={materials.Light_black} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Three/truck.glb')
