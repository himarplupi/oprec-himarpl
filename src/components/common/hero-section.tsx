"use client";

import { FlashingText } from "@/components/ui/light-streaks";
import Image from "next/image";
import OrnamentPattern from "@/assets/ornaments/Pattern.svg";
import Bg from "@/assets/bg.svg";
import { BlurFade } from "../ui/blur-fade";

export function HeroSection() {
  return (
    <section className="bg-[radial-gradient(101.34%_99.57%_at_50.02%_0.43%,#010030_7%,#7226FF_55%,#3243A6_100%)] text-center flex min-h-250 h-screen w-full flex-col items-center justify-center gap-y-6 relative overflow-hidden px-4">
      <BlurFade delay={0.25} inView className="z-5">
        {/* Mobile Headline */}
        <div className=" sm:hidden z-5 -mt-60">
          <h1 className="font-ethno text-white text-[32px] [text-shadow:0_0_8px_#8166E3]">JOIN US AND BE PART OF</h1>
          <FlashingText text="A NEW STORY" flashesCount={10} flashLength={150} flashThickness={4} className="font-ethno text-white text-[32px] [text-shadow:0_0_8px_#8166E3]" />
        </div>
        {/* Desktop Headline */}
        <div className=" hidden sm:block z-5 -mt-40">
          <h1 className="font-ethno text-white sm:text-[46px] lg:text-[58px] [text-shadow:0_0_8px_#8166E3]">JOIN US AND BE PART OF</h1>
          <FlashingText text="A NEW STORY" flashesCount={10} flashLength={150} flashThickness={4} className="font-ethno text-white sm:text-[46px] lg:text-[58px] [text-shadow:0_0_8px_#8166E3]" />
        </div>
      </BlurFade>
      {/* Description */}
      <div className="w-full max-w-85.75 md:max-w-170  z-6">
        <BlurFade delay={0.25 * 2} inView className="flex flex-col gap-3">
          <h4 className="font-montserrat text-[16px] md:text-[20px] text-white font-semibold">HIMARPL 2026</h4>
          <p className="font-montserrat text-[14px]/[18px] md:text-[16px]/[22px] text-[#FFE5F1]">Bersama kabinet baru, mari melangkah dan membuat sebuah perubahan untuk masa depan.</p>
        </BlurFade>
      </div>
      {/* Backgrounds */}
      <Image src={Bg} alt="bg pattern" className="absolute left-20 top-5 opacity-8  inset-0  w-full h-full object-cover z-1 scale-[175%] bg-center" />{" "}
      <Image src={OrnamentPattern} alt="ornaments" className="absolute bottom-0 left-0  w-full h-fit z-1 scale-[320%] sm:hidden" />
      <div className="absolute bottom-0  bg-linear-to-b from-[#010030] to-[#030096] w-133.5 h-58.5 rounded-full blur-2xl sm:hidden"></div>
    </section>
  );
}
