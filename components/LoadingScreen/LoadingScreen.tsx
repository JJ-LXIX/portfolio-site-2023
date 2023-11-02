import { Html, useProgress } from "@react-three/drei";
import React from "react";

type Props = {};

export default function LoadingScreen({}: Props) {
  const { progress } = useProgress();
  return (
    <Html className=" bg-white flex text-white items-center justify-center text-6xl fixed inset-0 z-50">
      {progress}%
    </Html>
  );
}
