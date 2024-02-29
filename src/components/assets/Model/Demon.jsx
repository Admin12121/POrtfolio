import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Demon = (props) => {
  const { nodes, materials } = useGLTF('/Three/Demon/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={50}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh geometry={nodes.Merged_Head_Remeshed_HiLo_UV_Merged_Head_Remeshed_HiLo_UV_0.geometry} material={materials.Merged_Head_Remeshed_HiLo_UV} />
          <mesh geometry={nodes.Merged_Head_Remeshed_HiLo_UV_Merged_Head_Remeshed_HiLo_UV_0_1.geometry} material={materials.Merged_Head_Remeshed_HiLo_UV} />
          <mesh geometry={nodes.Merged_Head_Remeshed_HiLo_UV_Merged_Head_Remeshed_HiLo_UV_0_2.geometry} material={materials.Merged_Head_Remeshed_HiLo_UV} />
          <mesh geometry={nodes.Merged_Head_Remeshed_HiLo_UV_Merged_Head_Remeshed_HiLo_UV_0_3.geometry} material={materials.Merged_Head_Remeshed_HiLo_UV} />
          <mesh geometry={nodes.Merged_Head_Remeshed_HiLo_UV_Merged_Head_Remeshed_HiLo_UV_0_4.geometry} material={materials.Merged_Head_Remeshed_HiLo_UV} />
          <mesh geometry={nodes.Merged_Head_Remeshed_HiLo_UV_Merged_Head_Remeshed_HiLo_UV_0_5.geometry} material={materials.Merged_Head_Remeshed_HiLo_UV} />
          <mesh geometry={nodes.Merged_Head_Remeshed_HiLo_UV_Merged_Head_Remeshed_HiLo_UV_0_6.geometry} material={materials.Merged_Head_Remeshed_HiLo_UV} />
          <mesh geometry={nodes.Merged_Head_Remeshed_HiLo_UV_Merged_Head_Remeshed_HiLo_UV_0_7.geometry} material={materials.Merged_Head_Remeshed_HiLo_UV} />
          <mesh geometry={nodes.Merged_Head_Remeshed_HiLo_UV_Merged_Head_Remeshed_HiLo_UV_0_8.geometry} material={materials.Merged_Head_Remeshed_HiLo_UV} />
          <mesh geometry={nodes.Merged_Head_Remeshed_HiLo_UV_Merged_Head_Remeshed_HiLo_UV_0_9.geometry} material={materials.Merged_Head_Remeshed_HiLo_UV} />
          <mesh geometry={nodes.Merged_Head_Remeshed_HiLo_UV_Merged_Head_Remeshed_HiLo_UV_0_10.geometry} material={materials.Merged_Head_Remeshed_HiLo_UV} />
          <mesh geometry={nodes.Merged_Head_Remeshed_HiLo_UV_Merged_Head_Remeshed_HiLo_UV_0_11.geometry} material={materials.Merged_Head_Remeshed_HiLo_UV} />
          <mesh geometry={nodes.Merged_Head_Remeshed_HiLo_UV_Merged_Head_Remeshed_HiLo_UV_0_12.geometry} material={materials.Merged_Head_Remeshed_HiLo_UV} />
          <mesh geometry={nodes.Merged_Head_Remeshed_HiLo_UV_Merged_Head_Remeshed_HiLo_UV_0_13.geometry} material={materials.Merged_Head_Remeshed_HiLo_UV} />
          <mesh geometry={nodes.Merged_Head_Remeshed_HiLo_UV_Merged_Head_Remeshed_HiLo_UV_0_14.geometry} material={materials.Merged_Head_Remeshed_HiLo_UV} />
          <mesh geometry={nodes.Merged_Head_Remeshed_HiLo_UV_Merged_Head_Remeshed_HiLo_UV_0_15.geometry} material={materials.Merged_Head_Remeshed_HiLo_UV} />
          <mesh geometry={nodes.Merged_Head_Remeshed_HiLo_UV_Merged_Head_Remeshed_HiLo_UV_0_16.geometry} material={materials.Merged_Head_Remeshed_HiLo_UV} />
          <mesh geometry={nodes.Merged_Head_Remeshed_HiLo_UV_Merged_Head_Remeshed_HiLo_UV_0_17.geometry} material={materials.Merged_Head_Remeshed_HiLo_UV} />
          <mesh geometry={nodes.Merged_Head_Remeshed_HiLo_UV_Merged_Head_Remeshed_HiLo_UV_0_18.geometry} material={materials.Merged_Head_Remeshed_HiLo_UV} />
          <mesh geometry={nodes.Merged_Head_Remeshed_HiLo_UV_Merged_Head_Remeshed_HiLo_UV_0_19.geometry} material={materials.Merged_Head_Remeshed_HiLo_UV} />
          <mesh geometry={nodes.Merged_Head_Remeshed_HiLo_UV_Merged_Head_Remeshed_HiLo_UV_0_20.geometry} material={materials.Merged_Head_Remeshed_HiLo_UV} />
          <mesh geometry={nodes.Merged_Head_Remeshed_HiLo_UV_Merged_Head_Remeshed_HiLo_UV_0_21.geometry} material={materials.Merged_Head_Remeshed_HiLo_UV} />
          <mesh geometry={nodes.Merged_Head_Remeshed_HiLo_UV_Merged_Head_Remeshed_HiLo_UV_0_22.geometry} material={materials.Merged_Head_Remeshed_HiLo_UV} />
          <mesh geometry={nodes.Merged_Head_Remeshed_HiLo_UV_Merged_Head_Remeshed_HiLo_UV_0_23.geometry} material={materials.Merged_Head_Remeshed_HiLo_UV} />
          <mesh geometry={nodes.Merged_Head_Remeshed_HiLo_UV_Merged_Head_Remeshed_HiLo_UV_0_24.geometry} material={materials.Merged_Head_Remeshed_HiLo_UV} />
          <mesh geometry={nodes.Merged_Head_Remeshed_HiLo_UV_Merged_Head_Remeshed_HiLo_UV_0_25.geometry} material={materials.Merged_Head_Remeshed_HiLo_UV} />
          <mesh geometry={nodes.Merged_Head_Remeshed_HiLo_UV_Merged_Head_Remeshed_HiLo_UV_0_26.geometry} material={materials.Merged_Head_Remeshed_HiLo_UV} />
          <mesh geometry={nodes.Merged_Head_Remeshed_HiLo_UV_Merged_Head_Remeshed_HiLo_UV_0_27.geometry} material={materials.Merged_Head_Remeshed_HiLo_UV} />
          <mesh geometry={nodes.Merged_Head_Remeshed_HiLo_UV_Merged_Head_Remeshed_HiLo_UV_0_28.geometry} material={materials.Merged_Head_Remeshed_HiLo_UV} />
          <mesh geometry={nodes.Merged_Head_Remeshed_HiLo_UV_Merged_Head_Remeshed_HiLo_UV_0_29.geometry} material={materials.Merged_Head_Remeshed_HiLo_UV} />
          <mesh geometry={nodes.Merged_Head_Remeshed_HiLo_UV_Merged_Head_Remeshed_HiLo_UV_0_30.geometry} material={materials.Merged_Head_Remeshed_HiLo_UV} />
          <mesh geometry={nodes.Merged_Head_Remeshed_HiLo_UV_Merged_Head_Remeshed_HiLo_UV_0_31.geometry} material={materials.Merged_Head_Remeshed_HiLo_UV} />
          <mesh geometry={nodes.Merged_Head_Remeshed_HiLo_UV_Merged_Head_Remeshed_HiLo_UV_0_32.geometry} material={materials.Merged_Head_Remeshed_HiLo_UV} />
        </group>
      </group>
    </group>
  )
}
export default Demon;

useGLTF.preload('/Three/Demon/scene.gltf')
