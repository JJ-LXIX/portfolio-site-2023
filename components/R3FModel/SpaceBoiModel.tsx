import { SpaceModel } from "@/components/Space_boi";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

type Props = {};

export default function SpaceBoiModel({}: Props) {
  return (
    <>
      <Canvas>
        <Suspense fallback={<LoadingScreen />}>
          <ambientLight />
          <SpaceModel />
        </Suspense>
      </Canvas>
    </>
  );
}
