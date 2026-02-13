"use client";

import { ReactLenis as RL } from "lenis/react";

export function ReactLenis({ children }: { children: React.ReactNode }) {
  return (
    <RL
      options={{
        prevent: (node) => {
          return node.classList.contains("lenis-prevent");
        },
      }}
      className="max-h-screen overflow-y-auto"
      root
    >
      {children}
    </RL>
  );
}
