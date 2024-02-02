import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

const Buddha = () => {
  const canvasRef = useRef(null);
  const [theta1, setTheta1] = useState(0);
  const mouse = useRef({ x: 0, y: 0 });


  const scene = new THREE.Scene();

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    scene.fog = new THREE.FogExp2(0x11151c, 0.015);

    const group = new THREE.Group();
    scene.add(group);

     const pointlight = new THREE.PointLight(0x85ccb8, 300);
     pointlight.position.set(-10, 10, 10);
     scene.add(pointlight);
     
     const pointlight2 = new THREE.PointLight(0x9f85cc, 295);
     pointlight2.position.set(10, -10, 10);
     scene.add(pointlight2);

     const pointlight1 = new THREE.PointLight(0x9f85cc, 300);
     scene.add(pointlight1); // Add pointlight1 directly to the scene
 
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 10;

    const material1 = new THREE.MeshStandardMaterial({
      color: 0xfffffff,
      roughness: 0,
      metalness: 0.5,
      envMapIntensity: 10,
    });

    const objloader = new OBJLoader();
    objloader.load(
      "https://raw.githubusercontent.com/miroleon/peace-of-mind/main/assets/buddha.obj",
      (object) => {
        object.children[0].material = material1;
        object.scale.setScalar(20);
        object.position.set(0, -0.25, 0);
        group.add(object);

        // Set the rotation point for the group
        const rotationPoint = new THREE.Object3D();
        rotationPoint.add(group);
        scene.add(rotationPoint);

        window.addEventListener("resize", onWindowResize);
        window.addEventListener("mousemove", onMouseMove);

        function updatePointlight1() {
          const mouseXNormalized =
            (mouse.current.x / window.innerWidth) * 2 - 1;
          const mouseYNormalized =
            -(mouse.current.y / window.innerHeight) * 2 + 1;

          const vector = new THREE.Vector3(
            mouseXNormalized,
            mouseYNormalized,
            0.5
          );
          vector.unproject(camera);

          const dir = vector.sub(camera.position).normalize();

          const distance = 15; // Set a distance for the light from the camera
          const newPosition = camera.position
            .clone()
            .add(dir.multiplyScalar(distance));

          pointlight1.position.copy(newPosition);
        }

        function onMouseMove(event) {
          mouse.current.x = event.clientX;
          mouse.current.y = event.clientY;
        }

        function update() {
          setTheta1((theta1) => theta1 + 0.0025);

          rotationPoint.rotation.y += 0.01;

          camera.position.x = Math.sin(theta1) * 10;
          camera.position.z = Math.cos(theta1) * 10;
          camera.position.y = Math.cos(theta1);

          updatePointlight1();

          camera.lookAt(0, 0, 0);
        }

        function onWindowResize() {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        }

        function animate() {
          update();
          renderer.render(scene, camera);
          requestAnimationFrame(animate);
        }

        animate();

        return () => {
          window.removeEventListener("resize", onWindowResize);
          window.removeEventListener("mousemove", onMouseMove);
        };
      }
    );
  }, []); // Empty dependency array to run only on mount

  return (
    <div className="canvas-container">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default React.memo(Buddha);