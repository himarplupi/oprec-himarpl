"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion } from "motion/react";

export function Loading({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  const [soundBg, setSoundBg] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isSoundPlaying) return;
    if (soundBg) {
      const playSequence = () => {
        soundBg.volume = 0.5;
        void soundBg.play();

        soundBg.onended = playSequence;
      };

      playSequence();
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsSoundPlaying(true);
    }
  }, [isSoundPlaying, soundBg]);

  const handlePlaySound = () => {
    const audio = new Audio("/assets/sound.mpeg");
    setSoundBg(audio);
  };

  // const viewBoxSize = 801;
  // const center = viewBoxSize / 2;

  return (
    <>
      {children}

      <AnimatePresence mode="wait">
        {(!isSoundPlaying || isLoading) && (
          <Motion.div key="loader" className="fixed inset-0 z-9999 flex h-screen flex-col items-center justify-center gap-y-4 bg-[#010030]" exit={{ opacity: 0 }} transition={{ duration: 0.5 }} onClick={handlePlaySound}>
            <Motion.svg width="200" height="200" viewBox="0 0 801 801" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8A2BE2" />
                  <stop offset="100%" stopColor="#00CFFF" />
                </linearGradient>
                <linearGradient id="paint5_linear" x1="400.824" y1="0.824707" x2="400.824" y2="800.825" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#9C27FF" />
                  <stop offset="1" stopColor="#00E5FF" />
                </linearGradient>
              </defs>
              {/* buletan tengah */}
              <Motion.circle cx="400.824" cy="400.825" r="50" fill="url(#grad)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} />
              {/* next buletan */}

              {/* kotak-kotak di buletan kedua */}
              <Motion.g
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: -360 }}
                transition={{ scale: { duration: 0.6, ease: "easeOut", delay: 0.3 }, rotate: { repeat: Infinity, duration: 20, ease: "linear" } }}
                style={{ transformOrigin: "400.5px 400.5px" }}
              >
                <circle cx="400.824" cy="400.825" r="156" stroke="url(#grad)" strokeWidth="10" />
                <path d="M396.824 270.825L393.324 247.825C486.124 238.625 536.658 312.991 550.324 351.325L530.824 358.325C496.324 273.825 424.991 265.991 396.824 270.825Z" fill="url(#grad)" />
                <path d="M406.324 530.325L409.824 553.325C317.024 562.525 266.491 488.158 252.824 449.825L272.324 442.825C306.824 527.325 378.158 535.158 406.324 530.325Z" fill="url(#grad)" />
              </Motion.g>

              {/* buletan ketiga */}
              <Motion.g
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ scale: { duration: 0.6, ease: "easeOut", delay: 0.5 }, rotate: { repeat: Infinity, duration: 20, ease: "linear" } }}
                style={{ transformOrigin: "400.5px 400.5px" }}
              >
                <path d="M303.016 169.013L312.324 187.825C275.324 199.325 244.646 230.637 229.824 244.825L214.435 230.123C240.997 199.57 283.253 176.079 303.016 169.013Z" fill="url(#grad)" stroke="url(#grad)" strokeWidth="2" />
                <circle cx="400.824" cy="400.825" r="230" stroke="url(#grad)" strokeWidth="2" />
              </Motion.g>
              {/* buletan keempat */}
              <Motion.g
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: -360 }}
                transition={{ scale: { duration: 0.6, ease: "easeOut", delay: 0.7 }, rotate: { repeat: Infinity, duration: 20, ease: "linear" } }}
                style={{ transformOrigin: "400.5px 400.5px" }}
              >
                <path d="M124.324 403.325C126.991 489.825 186.224 666.425 401.824 680.825" stroke="url(#grad)" strokeWidth="2" />
                <path d="M679.324 400.325C676.658 313.825 617.424 137.225 401.824 122.825" stroke="url(#grad)" strokeWidth="2" />
                <path d="M143.324 542.825L160.324 533.325C174.324 564.125 208.324 599.325 223.324 613.325L209.324 627.825C177.324 603.025 151.491 562.158 143.324 542.825Z" fill="url(#grad)" stroke="url(#grad)" strokeWidth="2" />
              </Motion.g>
              {/* buletan kelima */}
              <Motion.g
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ scale: { duration: 0.6, ease: "easeOut", delay: 0.9 }, rotate: { repeat: Infinity, duration: 20, ease: "linear" } }}
                style={{ transformOrigin: "400.5px 400.5px" }}
              >
                <path d="M668.847 604.728L654.824 593.325C684.824 556.825 696.106 524.032 703.324 504.825L722.237 511.29C711.522 550.332 683.602 589.803 668.847 604.728Z" fill="url(#grad)" stroke="url(#grad)" strokeWidth="2" />
                <Motion.circle cx="400.824" cy="400.825" r="319" stroke="url(#grad)" strokeWidth="5" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.7 }} />
              </Motion.g>

              {/* garis */}
              <Motion.g
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ scale: { duration: 0.6, ease: "easeOut", delay: 1 }, rotate: { repeat: Infinity, duration: 20, ease: "linear" } }}
                style={{ transformOrigin: "400.5px 400.5px" }}
              >
                <Motion.path
                  d="M400.824 0.824707V800.825"
                  stroke="url(#paint5_linear)"
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  style={{ transformOrigin: "400.5px 400.5px" }}
                />
                <Motion.path
                  d="M800.824 400.825H0.824232"
                  stroke="url(#paint5_linear)"
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  style={{ transformOrigin: "400.5px 400.5px" }}
                />
              </Motion.g>
            </Motion.svg>

            <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mb-4 font-montserrat text-lg text-white">
              Tekan dimana saja untuk memulai
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
