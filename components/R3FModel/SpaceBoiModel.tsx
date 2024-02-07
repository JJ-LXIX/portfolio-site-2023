import { SpaceModel } from "@/components/Space_boi";
import { Canvas } from "@react-three/fiber";

type Props = {};

export default function SpaceBoiModel({}: Props) {
  return (
    <>
      <Canvas>
        <ambientLight />
        <SpaceModel />
      </Canvas>
    </>
  );
}
