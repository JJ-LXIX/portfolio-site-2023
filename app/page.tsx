import FooterSection from "@/components/FooterSection/FooterSection";
import WorkSection from "@/components/WorkSection/WorkSection";

export default function Home() {
  return (
    <main className="min-h-screen">
          <HeroText />

          {/* Space Model */}
          {laptopPlus ? <SpaceBoiModel /> : null}
      <WorkSection />
      <FooterSection />
    </main>
  );
}
