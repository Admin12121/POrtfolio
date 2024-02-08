import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations} from '@react-three/drei';
const Angel = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/angel.glb')
  const { actions } = useAnimations(animations, group)
    useEffect(()=>{
     actions.anim.reset().fadeIn(0.5).play();
    })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="af2389e38ac94dd7969ba31a201058f2fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="halo" position={[-0.049, 3.151, 0.044]}>
                  <group name="halo_outer_ring" position={[0, -0.008, 0.005]} rotation={[0.068, 0.002, 0.003]} scale={1.282}>
                    <mesh name="halo_outer_ring_halo_mat_0" geometry={nodes.halo_outer_ring_halo_mat_0.geometry} material={materials.halo_mat} />
                  </group>
                  <group name="blood_drops_1" position={[0.004, -0.013, 0.046]}>
                    <mesh name="blood_drops_1_halo_mat_0" geometry={nodes.blood_drops_1_halo_mat_0.geometry} material={materials.halo_mat} />
                  </group>
                  <group name="blood_drops_2" position={[0.021, 0.007, 0.011]}>
                    <mesh name="blood_drops_2_halo_mat_0" geometry={nodes.blood_drops_2_halo_mat_0.geometry} material={materials.halo_mat} />
                  </group>
                  <group name="inner_torus" position={[0.008, -0.012, 0.009]} scale={1.19}>
                    <mesh name="inner_torus_inner_halo_mat_0" geometry={nodes.inner_torus_inner_halo_mat_0.geometry} material={materials.inner_halo_mat} />
                  </group>
                  <group name="outter_torus" position={[0.008, -0.012, 0.009]} scale={1.19}>
                    <mesh name="outter_torus_outter_halo_mat_0" geometry={nodes.outter_torus_outter_halo_mat_0.geometry} material={materials.outter_halo_mat} />
                  </group>
                </group>
                <group name="glow_bg">
                <directionalLight intensity={5} color='silver' position={[0, 1, 0]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
                  <group name="glow" position={[0, 2.287, -0.229]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={0.503}>
                    <mesh name="glow_skeleton_glow_mat_0" geometry={nodes.glow_skeleton_glow_mat_0.geometry} material={materials.skeleton_glow_mat} />
                  </group>
                  <group name="glow2" position={[0, 2.287, -0.253]} rotation={[Math.PI / 2, 0, 0]} scale={0.626}>
                    <mesh name="glow2_skeleton_glow_mat_0" geometry={nodes.glow2_skeleton_glow_mat_0.geometry} material={materials.skeleton_glow_mat} />
                  </group>
                  <group name="glow1" position={[0, 2.287, -0.289]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.46}>
                    <mesh name="glow1_skeleton_glow_mat_0" geometry={nodes.glow1_skeleton_glow_mat_0.geometry} material={materials.skeleton_glow_mat} />
                  </group>
                </group>
                <group name="skeletonskeleton">
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_7" />
                    <group name="skeletonskeleton_1" />
                    <group name="skeletonroot_control">
                      <group name="skeletonpelvis_control" position={[0, 1.769, -0.079]} rotation={[0, 0, -0.048]}>
                        <group name="skeletonspine_control" position={[0, 0.184, 0.068]} rotation={[0.024, 0, 0.062]}>
                          <group name="skeletonchest_control" position={[0, 0.198, -0.016]} rotation={[-0.068, 0, 0.009]}>
                            <group name="skeletonneck_base_control" position={[0, 0.443, 0.017]} rotation={[-0.026, -0.01, -0.016]}>
                              <group name="skeletonneck_middle_control" position={[0, 0.125, -0.008]} rotation={[-0.042, -0.092, 0]}>
                                <group name="skeletonhead_control" position={[0, 0.119, 0.03]} rotation={[0.274, -0.125, 0.027]}>
                                  <group name="skeletonjaw_control" position={[0, -0.029, 0.085]} rotation={[0.114, -0.104, 0.009]} />
                                </group>
                              </group>
                            </group>
                            <group name="skeletonshoulder_r_control" position={[-0.222, 0.353, -0.039]} rotation={[-0.027, -0.308, 0.101]} />
                            <group name="skeletonshoulder_l_control" position={[0.222, 0.353, -0.039]} rotation={[0.021, 0.204, -0.159]} />
                          </group>
                        </group>
                      </group>
                      <group name="skeletonfoot_l_control" position={[0.113, 0.123, -0.335]}>
                        <group name="skeletonpole_l_control" position={[0.038, 0.884, 0.575]} />
                        <group name="skeletonikHandle3" />
                      </group>
                      <group name="skeletonfoot_r_control" position={[-0.08, 0.055, -0.153]}>
                        <group name="skeletonpole_r_control" position={[-0.227, 0.884, 0.55]} />
                        <group name="skeletonikHandle4" />
                      </group>
                    </group>
                    <skinnedMesh castShadow name="Object_8" geometry={nodes.Object_8.geometry} material={materials.skeletonskeleton_mat} skeleton={nodes.Object_8.skeleton} />
                    <skinnedMesh castShadow name="Object_9" geometry={nodes.Object_9.geometry} material={materials.skeletonskeleton_mat} skeleton={nodes.Object_9.skeleton} />
                  </group>
                </group>
                <group name="handarm">
                  <group name="Object_48">
                    <group name="handarm_root_control" position={[-0.3, 1.416, -0.298]} rotation={[0.34, 1.02, 2.197]}>
                      <group name="handarm_wrist_control" position={[0.033, 0.53, 0.043]} rotation={[0.211, -0.223, -Math.PI / 2]}>
                        <group name="handlittle_control_1" position={[-0.059, -0.045, 0.012]} rotation={[1.317, 0.256, 2.824]}>
                          <group name="handlittle_control_2" position={[0.121, 0.021, -0.011]} rotation={[-0.268, -0.067, -0.136]}>
                            <group name="handlittle_control_3" position={[0.053, -0.018, -0.008]} rotation={[-0.033, 0.14, -0.551]}>
                              <group name="handlittle_control_4" position={[0.045, -0.011, 0.001]} rotation={[0.005, -0.027, -0.36]} />
                            </group>
                          </group>
                        </group>
                        <group name="handring_control_1" position={[-0.066, -0.016, -0.005]} rotation={[1.312, 0.012, 2.827]}>
                          <group name="handring_control_2" position={[0.144, 0.001, 0.001]} rotation={[-0.135, -0.12, -0.018]}>
                            <group name="handring_control_3" position={[0.069, -0.009, 0.001]} rotation={[-0.026, 0.021, -0.451]}>
                              <group name="handring_control_4" position={[0.051, -0.016, 0]} rotation={[-0.004, -0.014, -0.455]} />
                            </group>
                          </group>
                        </group>
                        <group name="handmiddle_control_1" position={[-0.067, 0.014, -0.013]} rotation={[1.521, -0.104, 2.81]}>
                          <group name="handmiddle_control_2" position={[0.148, 0.009, -0.01]} rotation={[0.262, 0.057, 0.031]}>
                            <group name="handmiddle_control_3" position={[0.08, -0.002, 0.001]} rotation={[0.004, -0.003, -0.21]}>
                              <group name="handmiddle_control_4" position={[0.057, -0.008, 0.002]} rotation={[-0.007, 0.003, -0.409]} />
                            </group>
                          </group>
                        </group>
                        <group name="handindex_control_1" position={[-0.064, 0.046, -0.003]} rotation={[1.677, -0.31, 2.888]}>
                          <group name="handindex_control_2" position={[0.137, 0.009, -0.004]} rotation={[0.124, 0.065, 0.001]}>
                            <group name="handindex_control_3" position={[0.073, 0.002, -0.003]} rotation={[0.023, -0.027, -0.204]}>
                              <group name="handindex_control_4" position={[0.052, -0.008, -0.003]} rotation={[0.007, 0.032, -0.426]} />
                            </group>
                          </group>
                        </group>
                        <group name="handthumb_control_1" position={[-0.048, 0.063, 0.023]} rotation={[2.565, -0.971, -2.731]}>
                          <group name="handthumb_control_2" position={[0.075, 0, 0]} rotation={[-0.008, -0.101, -0.164]}>
                            <group name="handthumb_control_3" position={[0.067, -0.001, 0.002]} rotation={[0.023, -0.038, -0.169]} />
                          </group>
                        </group>
                      </group>
                    </group>
                    <primitive object={nodes._rootJoint_1} />
                    <group name="Object_50" />
                    <group name="handarm_mesh" />
                    <skinnedMesh castShadow name="Object_51" geometry={nodes.Object_51.geometry} material={materials.handarm_mat} skeleton={nodes.Object_51.skeleton} />
                  </group>
                </group>
                <group name="hand1arm">
                  <group name="Object_101">
                    <group name="hand1arm_root_control" position={[-0.3, 1.416, -0.298]} rotation={[0.34, 1.02, 2.197]}>
                      <group name="hand1arm_wrist_control" position={[0.033, 0.53, 0.043]} rotation={[0.211, -0.223, -Math.PI / 2]}>
                        <group name="hand1little_control_1" position={[-0.059, -0.045, 0.012]} rotation={[1.317, 0.256, 2.824]}>
                          <group name="hand1little_control_2" position={[0.121, 0.021, -0.011]} rotation={[-0.268, -0.067, -0.136]}>
                            <group name="hand1little_control_3" position={[0.053, -0.018, -0.008]} rotation={[-0.033, 0.14, -0.551]}>
                              <group name="hand1little_control_4" position={[0.045, -0.011, 0.001]} rotation={[0.005, -0.027, -0.36]} />
                            </group>
                          </group>
                        </group>
                        <group name="hand1ring_control_1" position={[-0.066, -0.016, -0.005]} rotation={[1.312, 0.012, 2.827]}>
                          <group name="hand1ring_control_2" position={[0.144, 0.001, 0.001]} rotation={[-0.135, -0.12, -0.018]}>
                            <group name="hand1ring_control_3" position={[0.069, -0.009, 0.001]} rotation={[-0.026, 0.021, -0.451]}>
                              <group name="hand1ring_control_4" position={[0.051, -0.016, 0]} rotation={[-0.004, -0.014, -0.455]} />
                            </group>
                          </group>
                        </group>
                        <group name="hand1middle_control_1" position={[-0.067, 0.014, -0.013]} rotation={[1.521, -0.104, 2.81]}>
                          <group name="hand1middle_control_2" position={[0.148, 0.009, -0.01]} rotation={[0.262, 0.057, 0.031]}>
                            <group name="hand1middle_control_3" position={[0.08, -0.002, 0.001]} rotation={[0.004, -0.003, -0.21]}>
                              <group name="hand1middle_control_4" position={[0.057, -0.008, 0.002]} rotation={[-0.007, 0.003, -0.409]} />
                            </group>
                          </group>
                        </group>
                        <group name="hand1index_control_1" position={[-0.064, 0.046, -0.003]} rotation={[1.677, -0.31, 2.888]}>
                          <group name="hand1index_control_2" position={[0.137, 0.009, -0.004]} rotation={[0.124, 0.065, 0.001]}>
                            <group name="hand1index_control_3" position={[0.073, 0.002, -0.003]} rotation={[0.023, -0.027, -0.204]}>
                              <group name="hand1index_control_4" position={[0.052, -0.008, -0.003]} rotation={[0.007, 0.032, -0.426]} />
                            </group>
                          </group>
                        </group>
                        <group name="hand1thumb_control_1" position={[-0.048, 0.063, 0.023]} rotation={[2.565, -0.971, -2.731]}>
                          <group name="hand1thumb_control_2" position={[0.075, 0, 0]} rotation={[-0.008, -0.101, -0.164]}>
                            <group name="hand1thumb_control_3" position={[0.067, -0.001, 0.002]} rotation={[0.023, -0.038, -0.169]} />
                          </group>
                        </group>
                      </group>
                    </group>
                    <primitive object={nodes._rootJoint_2} />
                    <group name="Object_103" />
                    <group name="hand1arm_mesh" />
                    <skinnedMesh castShadow name="Object_104" geometry={nodes.Object_104.geometry} material={materials.handarm_mat} skeleton={nodes.Object_104.skeleton} />
                  </group>
                </group>
                <group name="hand2arm">
                  <group name="Object_154">
                    <group name="hand2arm_root_control" position={[-0.3, 1.416, -0.298]} rotation={[0.34, 1.02, 2.197]}>
                      <group name="hand2arm_wrist_control" position={[0.033, 0.53, 0.043]} rotation={[0.211, -0.223, -Math.PI / 2]}>
                        <group name="hand2little_control_1" position={[-0.059, -0.045, 0.012]} rotation={[1.317, 0.256, 2.824]}>
                          <group name="hand2little_control_2" position={[0.121, 0.021, -0.011]} rotation={[-0.268, -0.067, -0.136]}>
                            <group name="hand2little_control_3" position={[0.053, -0.018, -0.008]} rotation={[-0.033, 0.14, -0.551]}>
                              <group name="hand2little_control_4" position={[0.045, -0.011, 0.001]} rotation={[0.005, -0.027, -0.36]} />
                            </group>
                          </group>
                        </group>
                        <group name="hand2ring_control_1" position={[-0.066, -0.016, -0.005]} rotation={[1.312, 0.012, 2.827]}>
                          <group name="hand2ring_control_2" position={[0.144, 0.001, 0.001]} rotation={[-0.135, -0.12, -0.018]}>
                            <group name="hand2ring_control_3" position={[0.069, -0.009, 0.001]} rotation={[-0.026, 0.021, -0.451]}>
                              <group name="hand2ring_control_4" position={[0.051, -0.016, 0]} rotation={[-0.004, -0.014, -0.455]} />
                            </group>
                          </group>
                        </group>
                        <group name="hand2middle_control_1" position={[-0.067, 0.014, -0.013]} rotation={[1.521, -0.104, 2.81]}>
                          <group name="hand2middle_control_2" position={[0.148, 0.009, -0.01]} rotation={[0.262, 0.057, 0.031]}>
                            <group name="hand2middle_control_3" position={[0.08, -0.002, 0.001]} rotation={[0.004, -0.003, -0.21]}>
                              <group name="hand2middle_control_4" position={[0.057, -0.008, 0.002]} rotation={[-0.007, 0.003, -0.409]} />
                            </group>
                          </group>
                        </group>
                        <group name="hand2index_control_1" position={[-0.064, 0.046, -0.003]} rotation={[1.677, -0.31, 2.888]}>
                          <group name="hand2index_control_2" position={[0.137, 0.009, -0.004]} rotation={[0.124, 0.065, 0.001]}>
                            <group name="hand2index_control_3" position={[0.073, 0.002, -0.003]} rotation={[0.023, -0.027, -0.204]}>
                              <group name="hand2index_control_4" position={[0.052, -0.008, -0.003]} rotation={[0.007, 0.032, -0.426]} />
                            </group>
                          </group>
                        </group>
                        <group name="hand2thumb_control_1" position={[-0.048, 0.063, 0.023]} rotation={[2.565, -0.971, -2.731]}>
                          <group name="hand2thumb_control_2" position={[0.075, 0, 0]} rotation={[-0.008, -0.101, -0.164]}>
                            <group name="hand2thumb_control_3" position={[0.067, -0.001, 0.002]} rotation={[0.023, -0.038, -0.169]} />
                          </group>
                        </group>
                      </group>
                    </group>
                    <primitive object={nodes._rootJoint_3} />
                    <group name="Object_156" />
                    <group name="hand2arm_mesh" />
                    <skinnedMesh castShadow name="Object_157" geometry={nodes.Object_157.geometry} material={materials.handarm_mat} skeleton={nodes.Object_157.skeleton} />
                  </group>
                </group>
                <group name="hand3arm">
                  <group name="Object_207">
                    <group name="hand3arm_root_control" position={[-0.3, 1.416, -0.298]} rotation={[0.34, 1.02, 2.197]}>
                      <group name="hand3arm_wrist_control" position={[0.033, 0.53, 0.043]} rotation={[0.211, -0.223, -Math.PI / 2]}>
                        <group name="hand3little_control_1" position={[-0.059, -0.045, 0.012]} rotation={[1.317, 0.256, 2.824]}>
                          <group name="hand3little_control_2" position={[0.121, 0.021, -0.011]} rotation={[-0.268, -0.067, -0.136]}>
                            <group name="hand3little_control_3" position={[0.053, -0.018, -0.008]} rotation={[-0.033, 0.14, -0.551]}>
                              <group name="hand3little_control_4" position={[0.045, -0.011, 0.001]} rotation={[0.005, -0.027, -0.36]} />
                            </group>
                          </group>
                        </group>
                        <group name="hand3ring_control_1" position={[-0.066, -0.016, -0.005]} rotation={[1.312, 0.012, 2.827]}>
                          <group name="hand3ring_control_2" position={[0.144, 0.001, 0.001]} rotation={[-0.135, -0.12, -0.018]}>
                            <group name="hand3ring_control_3" position={[0.069, -0.009, 0.001]} rotation={[-0.026, 0.021, -0.451]}>
                              <group name="hand3ring_control_4" position={[0.051, -0.016, 0]} rotation={[-0.004, -0.014, -0.455]} />
                            </group>
                          </group>
                        </group>
                        <group name="hand3middle_control_1" position={[-0.067, 0.014, -0.013]} rotation={[1.521, -0.104, 2.81]}>
                          <group name="hand3middle_control_2" position={[0.148, 0.009, -0.01]} rotation={[0.262, 0.057, 0.031]}>
                            <group name="hand3middle_control_3" position={[0.08, -0.002, 0.001]} rotation={[0.004, -0.003, -0.21]}>
                              <group name="hand3middle_control_4" position={[0.057, -0.008, 0.002]} rotation={[-0.007, 0.003, -0.409]} />
                            </group>
                          </group>
                        </group>
                        <group name="hand3index_control_1" position={[-0.064, 0.046, -0.003]} rotation={[1.677, -0.31, 2.888]}>
                          <group name="hand3index_control_2" position={[0.137, 0.009, -0.004]} rotation={[0.124, 0.065, 0.001]}>
                            <group name="hand3index_control_3" position={[0.073, 0.002, -0.003]} rotation={[0.023, -0.027, -0.204]}>
                              <group name="hand3index_control_4" position={[0.052, -0.008, -0.003]} rotation={[0.007, 0.032, -0.426]} />
                            </group>
                          </group>
                        </group>
                        <group name="hand3thumb_control_1" position={[-0.048, 0.063, 0.023]} rotation={[2.565, -0.971, -2.731]}>
                          <group name="hand3thumb_control_2" position={[0.075, 0, 0]} rotation={[-0.008, -0.101, -0.164]}>
                            <group name="hand3thumb_control_3" position={[0.067, -0.001, 0.002]} rotation={[0.023, -0.038, -0.169]} />
                          </group>
                        </group>
                      </group>
                    </group>
                    <primitive object={nodes._rootJoint_4} />
                    <group name="Object_209" />
                    <group name="hand3arm_mesh" />
                    <skinnedMesh castShadow name="Object_210" geometry={nodes.Object_210.geometry} material={materials.handarm_mat} skeleton={nodes.Object_210.skeleton} />
                  </group>
                </group>
                <group name="hand4arm">
                  <group name="Object_260">
                    <group name="hand4arm_root_control" position={[-0.3, 1.416, -0.298]} rotation={[0.34, 1.02, 2.197]}>
                      <group name="hand4arm_wrist_control" position={[0.033, 0.53, 0.043]} rotation={[0.211, -0.223, -Math.PI / 2]}>
                        <group name="hand4little_control_1" position={[-0.059, -0.045, 0.012]} rotation={[1.317, 0.256, 2.824]}>
                          <group name="hand4little_control_2" position={[0.121, 0.021, -0.011]} rotation={[-0.268, -0.067, -0.136]}>
                            <group name="hand4little_control_3" position={[0.053, -0.018, -0.008]} rotation={[-0.033, 0.14, -0.551]}>
                              <group name="hand4little_control_4" position={[0.045, -0.011, 0.001]} rotation={[0.005, -0.027, -0.36]} />
                            </group>
                          </group>
                        </group>
                        <group name="hand4ring_control_1" position={[-0.066, -0.016, -0.005]} rotation={[1.312, 0.012, 2.827]}>
                          <group name="hand4ring_control_2" position={[0.144, 0.001, 0.001]} rotation={[-0.135, -0.12, -0.018]}>
                            <group name="hand4ring_control_3" position={[0.069, -0.009, 0.001]} rotation={[-0.026, 0.021, -0.451]}>
                              <group name="hand4ring_control_4" position={[0.051, -0.016, 0]} rotation={[-0.004, -0.014, -0.455]} />
                            </group>
                          </group>
                        </group>
                        <group name="hand4middle_control_1" position={[-0.067, 0.014, -0.013]} rotation={[1.521, -0.104, 2.81]}>
                          <group name="hand4middle_control_2" position={[0.148, 0.009, -0.01]} rotation={[0.262, 0.057, 0.031]}>
                            <group name="hand4middle_control_3" position={[0.08, -0.002, 0.001]} rotation={[0.004, -0.003, -0.21]}>
                              <group name="hand4middle_control_4" position={[0.057, -0.008, 0.002]} rotation={[-0.007, 0.003, -0.409]} />
                            </group>
                          </group>
                        </group>
                        <group name="hand4index_control_1" position={[-0.064, 0.046, -0.003]} rotation={[1.677, -0.31, 2.888]}>
                          <group name="hand4index_control_2" position={[0.137, 0.009, -0.004]} rotation={[0.124, 0.065, 0.001]}>
                            <group name="hand4index_control_3" position={[0.073, 0.002, -0.003]} rotation={[0.023, -0.027, -0.204]}>
                              <group name="hand4index_control_4" position={[0.052, -0.008, -0.003]} rotation={[0.007, 0.032, -0.426]} />
                            </group>
                          </group>
                        </group>
                        <group name="hand4thumb_control_1" position={[-0.048, 0.063, 0.023]} rotation={[2.565, -0.971, -2.731]}>
                          <group name="hand4thumb_control_2" position={[0.075, 0, 0]} rotation={[-0.008, -0.101, -0.164]}>
                            <group name="hand4thumb_control_3" position={[0.067, -0.001, 0.002]} rotation={[0.023, -0.038, -0.169]} />
                          </group>
                        </group>
                      </group>
                    </group>
                    <primitive object={nodes._rootJoint_5} />
                    <group name="Object_262" />
                    <group name="hand4arm_mesh" />
                    <skinnedMesh castShadow name="Object_263" geometry={nodes.Object_263.geometry} material={materials.handarm_mat} skeleton={nodes.Object_263.skeleton} />
                  </group>
                </group>
                <group name="hand5arm">
                  <group name="hand5arm_mesh" />
                  <group name="group1" rotation={[-Math.PI, 0, 0]} scale={-1}>
                    <group name="Object_315">
                      <group name="hand5arm_root_control" position={[-0.214, 1.414, -0.327]} rotation={[0.554, 0.992, 2.012]}>
                        <group name="hand5arm_wrist_control" position={[0.033, 0.53, 0.043]} rotation={[0.211, -0.223, -Math.PI / 2]}>
                          <group name="hand5little_control_1" position={[-0.059, -0.045, 0.012]} rotation={[1.317, 0.256, 2.824]}>
                            <group name="hand5little_control_2" position={[0.121, 0.021, -0.011]} rotation={[-0.268, -0.067, -0.136]}>
                              <group name="hand5little_control_3" position={[0.053, -0.018, -0.008]} rotation={[-0.033, 0.14, -0.551]}>
                                <group name="hand5little_control_4" position={[0.045, -0.011, 0.001]} rotation={[0.005, -0.027, -0.36]} />
                              </group>
                            </group>
                          </group>
                          <group name="hand5ring_control_1" position={[-0.066, -0.016, -0.005]} rotation={[1.312, 0.012, 2.827]}>
                            <group name="hand5ring_control_2" position={[0.144, 0.001, 0.001]} rotation={[-0.135, -0.12, -0.018]}>
                              <group name="hand5ring_control_3" position={[0.069, -0.009, 0.001]} rotation={[-0.026, 0.021, -0.451]}>
                                <group name="hand5ring_control_4" position={[0.051, -0.016, 0]} rotation={[-0.004, -0.014, -0.455]} />
                              </group>
                            </group>
                          </group>
                          <group name="hand5middle_control_1" position={[-0.067, 0.014, -0.013]} rotation={[1.521, -0.104, 2.81]}>
                            <group name="hand5middle_control_2" position={[0.148, 0.009, -0.01]} rotation={[0.262, 0.057, 0.031]}>
                              <group name="hand5middle_control_3" position={[0.08, -0.002, 0.001]} rotation={[0.004, -0.003, -0.21]}>
                                <group name="hand5middle_control_4" position={[0.057, -0.008, 0.002]} rotation={[-0.007, 0.003, -0.409]} />
                              </group>
                            </group>
                          </group>
                          <group name="hand5index_control_1" position={[-0.064, 0.046, -0.003]} rotation={[1.677, -0.31, 2.888]}>
                            <group name="hand5index_control_2" position={[0.137, 0.009, -0.004]} rotation={[0.124, 0.065, 0.001]}>
                              <group name="hand5index_control_3" position={[0.073, 0.002, -0.003]} rotation={[0.023, -0.027, -0.204]}>
                                <group name="hand5index_control_4" position={[0.052, -0.008, -0.003]} rotation={[0.007, 0.032, -0.426]} />
                              </group>
                            </group>
                          </group>
                          <group name="hand5thumb_control_1" position={[-0.048, 0.063, 0.023]} rotation={[2.565, -0.971, -2.731]}>
                            <group name="hand5thumb_control_2" position={[0.075, 0, 0]} rotation={[-0.008, -0.101, -0.164]}>
                              <group name="hand5thumb_control_3" position={[0.067, -0.001, 0.002]} rotation={[0.023, -0.038, -0.169]} />
                            </group>
                          </group>
                        </group>
                      </group>
                      <primitive object={nodes._rootJoint_6} />
                      <group name="Object_317" />
                      <skinnedMesh castShadow name="Object_318" geometry={nodes.Object_318.geometry} material={materials.handarm_mat} skeleton={nodes.Object_318.skeleton} />
                    </group>
                  </group>
                </group>
                <group name="hand6arm">
                  <group name="hand6arm_mesh" />
                  <group name="group2" rotation={[-Math.PI, 0, 0]} scale={-1}>
                    <group name="Object_369">
                      <group name="hand6arm_root_control" position={[-0.214, 1.414, -0.327]} rotation={[0.554, 0.992, 2.012]}>
                        <group name="hand6arm_wrist_control" position={[0.033, 0.53, 0.043]} rotation={[0.211, -0.223, -Math.PI / 2]}>
                          <group name="hand6little_control_1" position={[-0.059, -0.045, 0.012]} rotation={[1.317, 0.256, 2.824]}>
                            <group name="hand6little_control_2" position={[0.121, 0.021, -0.011]} rotation={[-0.268, -0.067, -0.136]}>
                              <group name="hand6little_control_3" position={[0.053, -0.018, -0.008]} rotation={[-0.033, 0.14, -0.551]}>
                                <group name="hand6little_control_4" position={[0.045, -0.011, 0.001]} rotation={[0.005, -0.027, -0.36]} />
                              </group>
                            </group>
                          </group>
                          <group name="hand6ring_control_1" position={[-0.066, -0.016, -0.005]} rotation={[1.312, 0.012, 2.827]}>
                            <group name="hand6ring_control_2" position={[0.144, 0.001, 0.001]} rotation={[-0.135, -0.12, -0.018]}>
                              <group name="hand6ring_control_3" position={[0.069, -0.009, 0.001]} rotation={[-0.026, 0.021, -0.451]}>
                                <group name="hand6ring_control_4" position={[0.051, -0.016, 0]} rotation={[-0.004, -0.014, -0.455]} />
                              </group>
                            </group>
                          </group>
                          <group name="hand6middle_control_1" position={[-0.067, 0.014, -0.013]} rotation={[1.521, -0.104, 2.81]}>
                            <group name="hand6middle_control_2" position={[0.148, 0.009, -0.01]} rotation={[0.262, 0.057, 0.031]}>
                              <group name="hand6middle_control_3" position={[0.08, -0.002, 0.001]} rotation={[0.004, -0.003, -0.21]}>
                                <group name="hand6middle_control_4" position={[0.057, -0.008, 0.002]} rotation={[-0.007, 0.003, -0.409]} />
                              </group>
                            </group>
                          </group>
                          <group name="hand6index_control_1" position={[-0.064, 0.046, -0.003]} rotation={[1.677, -0.31, 2.888]}>
                            <group name="hand6index_control_2" position={[0.137, 0.009, -0.004]} rotation={[0.124, 0.065, 0.001]}>
                              <group name="hand6index_control_3" position={[0.073, 0.002, -0.003]} rotation={[0.023, -0.027, -0.204]}>
                                <group name="hand6index_control_4" position={[0.052, -0.008, -0.003]} rotation={[0.007, 0.032, -0.426]} />
                              </group>
                            </group>
                          </group>
                          <group name="hand6thumb_control_1" position={[-0.048, 0.063, 0.023]} rotation={[2.565, -0.971, -2.731]}>
                            <group name="hand6thumb_control_2" position={[0.075, 0, 0]} rotation={[-0.008, -0.101, -0.164]}>
                              <group name="hand6thumb_control_3" position={[0.067, -0.001, 0.002]} rotation={[0.023, -0.038, -0.169]} />
                            </group>
                          </group>
                        </group>
                      </group>
                      <primitive object={nodes._rootJoint_7} />
                      <group name="Object_371" />
                      <skinnedMesh castShadow name="Object_372" geometry={nodes.Object_372.geometry} material={materials.handarm_mat} skeleton={nodes.Object_372.skeleton} />
                    </group>
                  </group>
                </group>
                <group name="hand7arm">
                  <group name="hand7arm_mesh" />
                  <group name="group3" rotation={[-Math.PI, 0, 0]} scale={-1}>
                    <group name="Object_423">
                      <group name="hand7arm_root_control" position={[-0.214, 1.414, -0.327]} rotation={[0.554, 0.992, 2.012]}>
                        <group name="hand7arm_wrist_control" position={[0.033, 0.53, 0.043]} rotation={[0.211, -0.223, -Math.PI / 2]}>
                          <group name="hand7little_control_1" position={[-0.059, -0.045, 0.012]} rotation={[1.317, 0.256, 2.824]}>
                            <group name="hand7little_control_2" position={[0.121, 0.021, -0.011]} rotation={[-0.268, -0.067, -0.136]}>
                              <group name="hand7little_control_3" position={[0.053, -0.018, -0.008]} rotation={[-0.033, 0.14, -0.551]}>
                                <group name="hand7little_control_4" position={[0.045, -0.011, 0.001]} rotation={[0.005, -0.027, -0.36]} />
                              </group>
                            </group>
                          </group>
                          <group name="hand7ring_control_1" position={[-0.066, -0.016, -0.005]} rotation={[1.312, 0.012, 2.827]}>
                            <group name="hand7ring_control_2" position={[0.144, 0.001, 0.001]} rotation={[-0.135, -0.12, -0.018]}>
                              <group name="hand7ring_control_3" position={[0.069, -0.009, 0.001]} rotation={[-0.026, 0.021, -0.451]}>
                                <group name="hand7ring_control_4" position={[0.051, -0.016, 0]} rotation={[-0.004, -0.014, -0.455]} />
                              </group>
                            </group>
                          </group>
                          <group name="hand7middle_control_1" position={[-0.067, 0.014, -0.013]} rotation={[1.521, -0.104, 2.81]}>
                            <group name="hand7middle_control_2" position={[0.148, 0.009, -0.01]} rotation={[0.262, 0.057, 0.031]}>
                              <group name="hand7middle_control_3" position={[0.08, -0.002, 0.001]} rotation={[0.004, -0.003, -0.21]}>
                                <group name="hand7middle_control_4" position={[0.057, -0.008, 0.002]} rotation={[-0.007, 0.003, -0.409]} />
                              </group>
                            </group>
                          </group>
                          <group name="hand7index_control_1" position={[-0.064, 0.046, -0.003]} rotation={[1.677, -0.31, 2.888]}>
                            <group name="hand7index_control_2" position={[0.137, 0.009, -0.004]} rotation={[0.124, 0.065, 0.001]}>
                              <group name="hand7index_control_3" position={[0.073, 0.002, -0.003]} rotation={[0.023, -0.027, -0.204]}>
                                <group name="hand7index_control_4" position={[0.052, -0.008, -0.003]} rotation={[0.007, 0.032, -0.426]} />
                              </group>
                            </group>
                          </group>
                          <group name="hand7thumb_control_1" position={[-0.048, 0.063, 0.023]} rotation={[2.565, -0.971, -2.731]}>
                            <group name="hand7thumb_control_2" position={[0.075, 0, 0]} rotation={[-0.008, -0.101, -0.164]}>
                              <group name="hand7thumb_control_3" position={[0.067, -0.001, 0.002]} rotation={[0.023, -0.038, -0.169]} />
                            </group>
                          </group>
                        </group>
                      </group>
                      <primitive object={nodes._rootJoint_8} />
                      <group name="Object_425" />
                      <skinnedMesh castShadow name="Object_426" geometry={nodes.Object_426.geometry} material={materials.handarm_mat} skeleton={nodes.Object_426.skeleton} />
                    </group>
                  </group>
                </group>
                <group name="hand8arm">
                  <group name="hand8arm_mesh" />
                  <group name="group4" rotation={[-Math.PI, 0, 0]} scale={-1}>
                    <group name="Object_477">
                      <group name="hand8arm_root_control" position={[-0.214, 1.414, -0.327]} rotation={[0.554, 0.992, 2.012]}>
                        <group name="hand8arm_wrist_control" position={[0.033, 0.53, 0.043]} rotation={[0.211, -0.223, -Math.PI / 2]}>
                          <group name="hand8little_control_1" position={[-0.059, -0.045, 0.012]} rotation={[1.317, 0.256, 2.824]}>
                            <group name="hand8little_control_2" position={[0.121, 0.021, -0.011]} rotation={[-0.268, -0.067, -0.136]}>
                              <group name="hand8little_control_3" position={[0.053, -0.018, -0.008]} rotation={[-0.033, 0.14, -0.551]}>
                                <group name="hand8little_control_4" position={[0.045, -0.011, 0.001]} rotation={[0.005, -0.027, -0.36]} />
                              </group>
                            </group>
                          </group>
                          <group name="hand8ring_control_1" position={[-0.066, -0.016, -0.005]} rotation={[1.312, 0.012, 2.827]}>
                            <group name="hand8ring_control_2" position={[0.144, 0.001, 0.001]} rotation={[-0.135, -0.12, -0.018]}>
                              <group name="hand8ring_control_3" position={[0.069, -0.009, 0.001]} rotation={[-0.026, 0.021, -0.451]}>
                                <group name="hand8ring_control_4" position={[0.051, -0.016, 0]} rotation={[-0.004, -0.014, -0.455]} />
                              </group>
                            </group>
                          </group>
                          <group name="hand8middle_control_1" position={[-0.067, 0.014, -0.013]} rotation={[1.521, -0.104, 2.81]}>
                            <group name="hand8middle_control_2" position={[0.148, 0.009, -0.01]} rotation={[0.262, 0.057, 0.031]}>
                              <group name="hand8middle_control_3" position={[0.08, -0.002, 0.001]} rotation={[0.004, -0.003, -0.21]}>
                                <group name="hand8middle_control_4" position={[0.057, -0.008, 0.002]} rotation={[-0.007, 0.003, -0.409]} />
                              </group>
                            </group>
                          </group>
                          <group name="hand8index_control_1" position={[-0.064, 0.046, -0.003]} rotation={[1.677, -0.31, 2.888]}>
                            <group name="hand8index_control_2" position={[0.137, 0.009, -0.004]} rotation={[0.124, 0.065, 0.001]}>
                              <group name="hand8index_control_3" position={[0.073, 0.002, -0.003]} rotation={[0.023, -0.027, -0.204]}>
                                <group name="hand8index_control_4" position={[0.052, -0.008, -0.003]} rotation={[0.007, 0.032, -0.426]} />
                              </group>
                            </group>
                          </group>
                          <group name="hand8thumb_control_1" position={[-0.048, 0.063, 0.023]} rotation={[2.565, -0.971, -2.731]}>
                            <group name="hand8thumb_control_2" position={[0.075, 0, 0]} rotation={[-0.008, -0.101, -0.164]}>
                              <group name="hand8thumb_control_3" position={[0.067, -0.001, 0.002]} rotation={[0.023, -0.038, -0.169]} />
                            </group>
                          </group>
                        </group>
                      </group>
                      <primitive object={nodes._rootJoint_9} />
                      <group name="Object_479" />
                      <skinnedMesh castShadow name="Object_480" geometry={nodes.Object_480.geometry} material={materials.handarm_mat} skeleton={nodes.Object_480.skeleton} />
                    </group>
                  </group>
                </group>
                <group name="hand9arm">
                  <group name="hand9arm_mesh" />
                  <group name="group5" rotation={[-Math.PI, 0, 0]} scale={-1}>
                    <group name="Object_531">
                      <group name="hand9arm_root_control" position={[-0.214, 1.414, -0.327]} rotation={[0.554, 0.992, 2.012]}>
                        <group name="hand9arm_wrist_control" position={[0.033, 0.53, 0.043]} rotation={[0.211, -0.223, -Math.PI / 2]}>
                          <group name="hand9little_control_1" position={[-0.059, -0.045, 0.012]} rotation={[1.317, 0.256, 2.824]}>
                            <group name="hand9little_control_2" position={[0.121, 0.021, -0.011]} rotation={[-0.268, -0.067, -0.136]}>
                              <group name="hand9little_control_3" position={[0.053, -0.018, -0.008]} rotation={[-0.033, 0.14, -0.551]}>
                                <group name="hand9little_control_4" position={[0.045, -0.011, 0.001]} rotation={[0.005, -0.027, -0.36]} />
                              </group>
                            </group>
                          </group>
                          <group name="hand9ring_control_1" position={[-0.066, -0.016, -0.005]} rotation={[1.312, 0.012, 2.827]}>
                            <group name="hand9ring_control_2" position={[0.144, 0.001, 0.001]} rotation={[-0.135, -0.12, -0.018]}>
                              <group name="hand9ring_control_3" position={[0.069, -0.009, 0.001]} rotation={[-0.026, 0.021, -0.451]}>
                                <group name="hand9ring_control_4" position={[0.051, -0.016, 0]} rotation={[-0.004, -0.014, -0.455]} />
                              </group>
                            </group>
                          </group>
                          <group name="hand9middle_control_1" position={[-0.067, 0.014, -0.013]} rotation={[1.521, -0.104, 2.81]}>
                            <group name="hand9middle_control_2" position={[0.148, 0.009, -0.01]} rotation={[0.262, 0.057, 0.031]}>
                              <group name="hand9middle_control_3" position={[0.08, -0.002, 0.001]} rotation={[0.004, -0.003, -0.21]}>
                                <group name="hand9middle_control_4" position={[0.057, -0.008, 0.002]} rotation={[-0.007, 0.003, -0.409]} />
                              </group>
                            </group>
                          </group>
                          <group name="hand9index_control_1" position={[-0.064, 0.046, -0.003]} rotation={[1.677, -0.31, 2.888]}>
                            <group name="hand9index_control_2" position={[0.137, 0.009, -0.004]} rotation={[0.124, 0.065, 0.001]}>
                              <group name="hand9index_control_3" position={[0.073, 0.002, -0.003]} rotation={[0.023, -0.027, -0.204]}>
                                <group name="hand9index_control_4" position={[0.052, -0.008, -0.003]} rotation={[0.007, 0.032, -0.426]} />
                              </group>
                            </group>
                          </group>
                          <group name="hand9thumb_control_1" position={[-0.048, 0.063, 0.023]} rotation={[2.565, -0.971, -2.731]}>
                            <group name="hand9thumb_control_2" position={[0.075, 0, 0]} rotation={[-0.008, -0.101, -0.164]}>
                              <group name="hand9thumb_control_3" position={[0.067, -0.001, 0.002]} rotation={[0.023, -0.038, -0.169]} />
                            </group>
                          </group>
                        </group>
                      </group>
                      <primitive object={nodes._rootJoint_10} />
                      <group name="Object_533" />
                      <skinnedMesh castShadow name="Object_534" geometry={nodes.Object_534.geometry} material={materials.handarm_mat} skeleton={nodes.Object_534.skeleton} />
                    </group>
                  </group>
                </group>
                <group name="bg_plane" position={[1.213, 2.967, -10.273]} rotation={[Math.PI / 2, 0, 0]} scale={17.779} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}
export default Angel

useGLTF.preload('/angel.glb')