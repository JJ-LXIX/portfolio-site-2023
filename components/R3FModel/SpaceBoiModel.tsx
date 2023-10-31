import { SpaceModel } from "@/components/Space_boi";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

type Props = {};

export default function SpaceBoiModel({}: Props) {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight />
        <SpaceModel />
      </Suspense>
    </Canvas>
  );
}
