"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorFollower() {
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitionComplete, setIsTransitionComplete] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const positionRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      if (!hasMoved && (e.clientX !== 0 || e.clientY !== 0)) {
        setHasMoved(true);
      }
      const x = e.clientX - (isHovered ? 48 : 4);
      const y = e.clientY - (isHovered ? 48 : 4);
      positionRef.current = { x, y };
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    window.addEventListener("mousemove", updateCursorPosition, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, [hasMoved, isHovered]);

  useEffect(() => {
    const handleProjectHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHovering = target.closest("[data-cursor-hover]") !== null;
      setIsHovered(isHovering);
      if (!isHovering) {
        setIsTransitionComplete(false);
      }
    };

    window.addEventListener("mouseover", handleProjectHover);
    window.addEventListener("mouseout", handleProjectHover);

    return () => {
      window.removeEventListener("mouseover", handleProjectHover);
      window.removeEventListener("mouseout", handleProjectHover);
    };
  }, []);

  useEffect(() => {
    if (isHovered) {
      const timer = setTimeout(() => {
        setIsTransitionComplete(true);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isHovered]);

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed left-0 top-0 z-50 flex items-center justify-center rounded-full transition-[width,height,background-color,backdrop-filter] will-change-transform duration-700 ease-out ${
        isHovered
          ? "h-24 w-24 bg-white/10 backdrop-blur-[5px] border border-white/10"
          : "h-2.5 w-2.5 bg-white"
      } ${!hasMoved || isMobile ? "opacity-0" : "opacity-100"}`}
      style={{
        transform: `translate3d(${positionRef.current.x - (isHovered ? 48 : 4)}px, ${
          positionRef.current.y - (isHovered ? 48 : 4)
        }px, 0)`,
      }}
    >
      {isHovered && (
        <span
          className={`text-white text-sm font-medium transition-opacity duration-300 ${
            isTransitionComplete ? "opacity-100" : "opacity-0"
          }`}
        >
          Meer Info
        </span>
      )}
    </div>
  );
}
