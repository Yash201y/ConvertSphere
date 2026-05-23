"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

function Cube() {
  return (
    <Float speed={3} rotationIntensity={2}>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#4f46e5" />
      </mesh>
    </Float>
  );
}

export default function Hero() {
  const router = useRouter();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-7xl font-black bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
        ConvertSphere
      </h1>

      <p className="mt-6 text-zinc-400 max-w-2xl text-xl">
        AI-powered futuristic document conversion platform.
      </p>

      <button
        onClick={() => router.push("/dashboard")}
        className="mt-10 px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 transition"
      >
        Start Converting
      </button>
    </section>
  );
}