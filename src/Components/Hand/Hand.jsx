import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { PoissonDenoiseShader } from 'three/examples/jsm/shaders/PoissonDenoiseShader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

const Hand = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let composer;

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha : true });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const clock = new THREE.Clock();

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0x25262a, 1);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();

    const hdrEquirect = new RGBELoader()
      .setPath('https://miroleon.github.io/daily-assets/')
      .load('GRADIENT_01_01_comp.hdr', function () {
        hdrEquirect.mapping = THREE.EquirectangularReflectionMapping;
      });

    scene.environment = hdrEquirect;

     scene.fog = new THREE.Fog(0x11151c, 1, 100);
     scene.fog = new THREE.FogExp2(0x11151c, 0.45);

    let theta = 0;
    let objectpos = 0;

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 10);

    const textureLoader = new THREE.TextureLoader();

    const surf_imp2 = textureLoader.load('https://miroleon.github.io/daily-assets/surf_imp_02.jpg');
    surf_imp2.wrapT = THREE.RepeatWrapping;
    surf_imp2.wrapS = THREE.RepeatWrapping;

    const wall_mat = new THREE.MeshPhysicalMaterial({
      color: 0x25262a,
      roughness: 0.2,
      metalness: 1,
      roughnessMap: surf_imp2,
      envMap: hdrEquirect,
      envMapIntensity: 1.5,
      transparent: true,
      opacity: 1 // Adjust the opacity as needed (0 is fully transparent, 1 is fully opaque)
    });
    const loader = new FBXLoader();
    loader.load('https://miroleon.github.io/daily-assets/two_hands_01.fbx', function (object) {
      object.traverse(function (child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          child.material = wall_mat;
        }
      });

      object.position.set(0, 0, 0);
      object.scale.setScalar(0.05);

      scene.add(object);
    });

    const renderScene = new RenderPass(scene, camera);

    const afterimagePass = new AfterimagePass();
    afterimagePass.uniforms['damp'].value = 0.9;

    const bloomparams = {
      exposure: 1,
      bloomStrength: 1.75,
      bloomThreshold: 0.1,
      bloomRadius: 1
    };

    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
    bloomPass.threshold = bloomparams.bloomThreshold;
    bloomPass.strength = bloomparams.bloomStrength;
    bloomPass.radius = bloomparams.bloomRadius;

   const pixelPass = new ShaderPass(PoissonDenoiseShader);
     pixelPass.uniforms['resolution'].value = new THREE.Vector2(window.innerWidth, window.innerHeight);
     pixelPass.uniforms['resolution'].value.multiplyScalar(window.devicePixelRatio);

    composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(afterimagePass);
    composer.addPass(bloomPass);

    window.addEventListener('resize', onWindowResize);

    const update = () => {
      theta += 0.005;

      camera.position.x = Math.sin(theta) * 3;
      camera.position.z = Math.cos(theta) * 3;
      camera.position.y = Math.sin(theta);

      camera.lookAt(0, 0, 0);
    };

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      update();
      composer.render();
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return (
  <canvas ref={canvasRef} />
  );
};

export default Hand;