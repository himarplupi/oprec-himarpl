"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlitchText } from "@/components/ui/glitch-effects";

export default function NotFound() {
  return (
    <div className="bg-[#680000]  border border-[#FF0000]  shadow-[inset_0_0_37px_0_#FF0000] backdrop-blur-[56px] text-center flex  h-screen w-full flex-col items-center justify-center gap-y-6 relative overflow-hidden px-4">
      <GlitchText text="404" className="text-5xl font-jumbo text-white " />
      <p className="font-mono text-2xl text-white">Maaf, halaman yang Anda cari tidak ditemukan.</p>
      <Link href="/">
        <Button title="Kembali ke Beranda" classN="md:w-[180px] md:h-[50px]" />
      </Link>
    </div>
  );
}
