import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const Desktop = () => {
  const loaderRef = useRef(null);
  const canvasRef = useRef(null);
  const loadingRef = useRef(null);
  const scene = new THREE.Scene();
  const textureLoader = new THREE.TextureLoader();
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const loading = loadingRef.current;

    const camera = new THREE.PerspectiveCamera(
      18,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.x = 8;
    camera.position.y = 4;
    camera.position.z = 15;
    scene.add(camera);

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.enablePan = true;
    controls.minDistance = 21;
    controls.maxDistance = 50;
    controls.minPolarAngle = Math.PI / 5;
    controls.maxPolarAngle = Math.PI / 2;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    });

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;

    const bakedTexture = textureLoader.load("./baked.jpg");
    bakedTexture.flipY = false;
    bakedTexture.encoding = THREE.sRGBEncoding;

    const bakedMaterial = new THREE.MeshBasicMaterial({ map: bakedTexture });

    const loader = new GLTFLoader();
    loader.load(
      "./model.glb",
      (gltf) => {
        const model = gltf.scene;
        model.traverse((child) => (child.material = bakedMaterial));
        scene.add(model);
        loading.style.display = "none";
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      }
    );

    const handleResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    const minPan = new THREE.Vector3(-2, -0.5, -2);
    const maxPan = new THREE.Vector3(2, 0.5, 2);

    const tick = () => {
      controls.update();
      controls.target.clamp(minPan, maxPan);
      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div ref={loadingRef} id="loaderr webgl three_wrapper">
      </div>
      <canvas ref={canvasRef} className="webgl" />
    </>
  );
};

export default Desktop;
