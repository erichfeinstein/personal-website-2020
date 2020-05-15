import React, { useEffect, useState } from 'react';
import * as THREE from 'three';

const SidebarThree = () => {
  useEffect(() => {
    var scene = new THREE.Scene();
    let balls = [];

    var renderer = new THREE.WebGLRenderer();
    const container = document.getElementById('canvas');
    var camera = new THREE.PerspectiveCamera();

    renderer.setSize($(container).width(), $(container).height());
    container.appendChild(renderer.domElement);

    function createBall() {
      var geometry = new THREE.OctahedronGeometry();
      var material = new THREE.MeshBasicMaterial({
        wireframe: true,
        color: 0x331177,
      });
      var ball = new THREE.Mesh(geometry, material);
      balls.push(ball);
      scene.add(ball);
      ball.position.x = Math.random() * 2 - 1;
    }

    createBall();
    setInterval(function () {
      createBall();
    }, 2500);

    window.addEventListener('resize', onWindowResize, false);

    function onWindowResize() {
      camera.updateProjectionMatrix();
      renderer.setSize($(container).width(), $(container).height());
    }

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      balls.forEach((ball) => {
        ball.position.z -= 0.02;
        ball.rotateZ(0.01);
        ball.rotateY(0.01);
        if (ball.position.z < -10) {
          ball.geometry.dispose();
          ball.material.dispose();
          scene.remove(ball);
        }
      });
    }
    animate();
  });
  return <div id="canvas" />;
};

export default SidebarThree;
