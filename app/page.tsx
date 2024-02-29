"use client";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import FooterSection from "@/components/FooterSection/FooterSection";
import HeroText from "@/components/HeroText/HeroText";
import WorkSection from "@/components/WorkSection/WorkSection";
import { useScreenSize } from "@/utils/hooks/useScreenSize";
import { ReactLenis } from "@studio-freight/react-lenis";
import { SmileySVG } from "@/components/SmileySVG/SmileySVG";
import SpaceBoiModel from "@/components/R3FModel/SpaceBoiModel";

export default function Home() {
  const laptopPlus = useScreenSize();

  return (
    <>
      <ReactLenis root>
        <main>
          <div className="h-screen w-full relative">
            <HeroText />
            <SpaceBoiModel />
          </div>

          <WorkSection />
          <FooterSection />

          {/* Custom Cursor */}
          {laptopPlus ? <CustomCursor /> : null}

          <SmileySVG />
        </main>
      </ReactLenis>
    </>
  );
}
