"use client";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import FooterSection from "@/components/FooterSection/FooterSection";
import HeroText from "@/components/HeroText/HeroText";
import SpaceBoiModel from "@/components/R3FModel/SpaceBoiModel";
import WorkSection from "@/components/WorkSection/WorkSection";
import { useScreenSize } from "@/utils/hooks/useScreenSize";
import { ReactLenis } from "@studio-freight/react-lenis";
import { SmileySVG } from "@/components/SmileySVG/SmileySVG";

export default function Home() {
  const laptopPlus = useScreenSize();
  return (
    <ReactLenis root>
      <main className="min-h-screen">
        <div className="h-screen w-full relative">
          <HeroText />

          {/* Space Model */}
          <SpaceBoiModel />
        </div>
        <WorkSection />
        <FooterSection />

        {/* Custom Cursor */}
        {laptopPlus ? (
          <>
            <CustomCursor />
          </>
        ) : null}

        {/* Smiley SVG */}
        <SmileySVG />
      </main>
    </ReactLenis>
  );
}
