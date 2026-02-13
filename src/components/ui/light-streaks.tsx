"use client";
import { type CSSProperties, type ReactElement, useEffect, useState } from "react";
import { motion as Motion } from "motion/react";

import { cn } from "@/lib/utils";

interface Flash {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  width: number;
  height: number;
  rotation: number;
  lifespan: number;
  opacity: number;
}

interface FlashingTextProps {
  as?: ReactElement;
  className?: string;
  text: string;
  flashesCount?: number;
  colors?: {
    first: string;
    second: string;
  };
  flashLength?: number; // Panjang kilatan (default: 50-150px)
  flashThickness?: number; // Ketebalan kilatan (default: 2-8px)
}

export const FlashingText: React.FC<FlashingTextProps> = ({ text, colors = { first: "rgb(129, 102, 227, 0.7)", second: "rgb(7, 35, 89, 0.7)" }, className, flashesCount = 8, flashLength = 100, flashThickness = 5, ...props }) => {
  const [flashes, setFlashes] = useState<Flash[]>([]);

  useEffect(() => {
    const generateFlash = (): Flash => {
      const flashX = `${Math.random() * 100}%`;
      const flashY = `${Math.random() * 100}%`;
      const color = Math.random() > 0.5 ? colors.first : colors.second;
      const delay = Math.random() * 3;
      const width = Math.random() * flashLength + 50;
      const height = Math.random() * flashThickness + 2;
      const rotation = Math.random() * 180;
      const lifespan = Math.random() * 15 + 10;
      const opacity = Math.random() * 0.5 + 0.3;
      const id = `${flashX}-${flashY}-${Date.now()}`;
      return { id, x: flashX, y: flashY, color, delay, width, height, rotation, lifespan, opacity };
    };

    const initializeFlashes = () => {
      const newFlashes = Array.from({ length: flashesCount }, generateFlash);
      setFlashes(newFlashes);
    };

    const updateFlashes = () => {
      setFlashes((currentFlashes) =>
        currentFlashes.map((flash) => {
          if (flash.lifespan <= 0) {
            return generateFlash();
          } else {
            return { ...flash, lifespan: flash.lifespan - 0.1 };
          }
        })
      );
    };

    initializeFlashes();
    const interval = setInterval(updateFlashes, 100);

    return () => clearInterval(interval);
  }, [colors.first, colors.second, flashesCount, flashLength, flashThickness]);

  return (
    <div
      className={cn("text-6xl font-bold relative", className)}
      {...props}
      style={
        {
          "--flashes-first-color": `${colors.first}`,
          "--flashes-second-color": `${colors.second}`,
        } as CSSProperties
      }
    >
      <span className="relative inline-block">
        {flashes.map((flash) => (
          <LightFlash key={flash.id} {...flash} />
        ))}
        {text}
      </span>
    </div>
  );
};

const LightFlash: React.FC<Flash> = ({ id, x, y, color, delay, width, height, rotation, opacity }) => {
  return (
    <Motion.div
      key={id}
      className="pointer-events-none absolute z-20 rounded-full"
      initial={{
        opacity: 0,
        left: x,
        top: y,
        rotate: rotation,
      }}
      animate={{
        opacity: [0, opacity, 0],
        scaleX: [0.5, 1.2, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        transformOrigin: "center",
      }}
    />
  );
};
