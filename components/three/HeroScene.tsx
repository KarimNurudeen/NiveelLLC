"use client";

import { useEffect, useRef, memo } from "react";
import * as THREE from "three";

function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const isMobile = window.innerWidth < 768;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    // Reduce count — rotation is GPU-driven, no per-frame CPU loop needed
    const count = isMobile ? 600 : 1500;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.5 + Math.random() * 2;
      positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      size: 0.013,
      color: 0xffffff,
      transparent: true,
      opacity: 0.45,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Throttled mouse tracking
    const mouse = { x: 0, y: 0 };
    let mouseRaf = 0;
    function onMouseMove(e: MouseEvent) {
      cancelAnimationFrame(mouseRaf);
      mouseRaf = requestAnimationFrame(() => {
        mouse.x =  (e.clientX / window.innerWidth  - 0.5) * 0.25;
        mouse.y = -(e.clientY / window.innerHeight - 0.5) * 0.25;
      });
    }
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    function onResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", onResize, { passive: true });

    let rafId: number;
    const clock = new THREE.Clock();

    function animate() {
      rafId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Pure GPU rotation — no per-frame CPU buffer writes
      particles.rotation.y = elapsed * 0.04;
      particles.rotation.x = elapsed * 0.012;

      camera.position.x += (mouse.x - camera.position.x) * 0.025;
      camera.position.y += (mouse.y - camera.position.y) * 0.025;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(mouseRaf);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

export default memo(HeroScene);
