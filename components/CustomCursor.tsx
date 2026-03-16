"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorRef  = useRef<HTMLDivElement>(null);
  const [hovered, setHovered]   = useState(false);
  const [clicked, setClicked]   = useState(false);
  const [hidden,  setHidden]    = useState(true);
  const [label,   setLabel]     = useState("");

  /* spring-based smooth position */
  const x = useSpring(0, { stiffness: 500, damping: 40, mass: 0.3 });
  const y = useSpring(0, { stiffness: 500, damping: 40, mass: 0.3 });

  /* dot trails separate spring — slower for parallax feel */
  const dx = useSpring(0, { stiffness: 180, damping: 28, mass: 0.5 });
  const dy = useSpring(0, { stiffness: 180, damping: 28, mass: 0.5 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      dx.set(e.clientX);
      dy.set(e.clientY);
      setHidden(false);
    };

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [data-cursor]");
      if (interactive) {
        setHovered(true);
        setLabel(interactive.getAttribute("data-cursor") ?? "");
      }
    };
    const onLeave = () => { setHovered(false); setLabel(""); };
    const onDown  = () => setClicked(true);
    const onUp    = () => setClicked(false);
    const onOut   = () => setHidden(true);

    window.addEventListener("mousemove",  move,    { passive: true });
    window.addEventListener("mouseover",  onEnter, { passive: true });
    window.addEventListener("mouseout",   onLeave, { passive: true });
    window.addEventListener("mousedown",  onDown,  { passive: true });
    window.addEventListener("mouseup",    onUp,    { passive: true });
    document.documentElement.addEventListener("mouseleave", onOut);

    return () => {
      window.removeEventListener("mousemove",  move);
      window.removeEventListener("mouseover",  onEnter);
      window.removeEventListener("mouseout",   onLeave);
      window.removeEventListener("mousedown",  onDown);
      window.removeEventListener("mouseup",    onUp);
      document.documentElement.removeEventListener("mouseleave", onOut);
    };
  }, [x, y, dx, dy]);

  if (typeof window === "undefined") return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-accent"
        style={{
          x: dx,
          y: dy,
          translateX: "-50%",
          translateY: "-50%",
          opacity: hidden ? 0 : 1,
        }}
        animate={{
          width:  hovered ? 64  : clicked ? 24 : 40,
          height: hovered ? 64  : clicked ? 24 : 40,
          borderColor: hovered ? "#d4ff00" : "rgba(212,255,0,0.5)",
          backgroundColor: hovered ? "rgba(212,255,0,0.08)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
      >
        {label && (
          <span className="absolute inset-0 flex items-center justify-center text-[9px] font-display font-semibold text-accent tracking-widest uppercase">
            {label}
          </span>
        )}
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-accent"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          opacity: hidden ? 0 : 1,
        }}
        animate={{
          width:  clicked ? 3 : 6,
          height: clicked ? 3 : 6,
          opacity: hovered ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 600, damping: 35 }}
      />
    </>
  );
}
