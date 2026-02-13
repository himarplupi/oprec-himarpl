import { Footer } from "@/components/common/footer";
import { GlobalFooter } from "@/components/common/global-footer";
import { HeroSection } from "@/components/common/hero-section";
import { KelompokSection } from "@/components/common/kelompok-section";

import React from "react";

export const dynamic = "force-static";

export default function Home() {
  return (
    <main id="main" className="relative min-h-screen overflow-hidden">
      <HeroSection />

      <KelompokSection />

      <Footer />

      <GlobalFooter />
    </main>
  );
}
