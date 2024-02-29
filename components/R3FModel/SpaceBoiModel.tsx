import { SpaceModel } from "@/components/R3FModel/Space_boi";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion-3d";

type Props = {};

export default function SpaceBoiModel({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
      className="h-screen w-full relative"
    >
      <Canvas>
        <ambientLight />
        <SpaceModel />
      </Canvas>
    </motion.div>
  );
}
