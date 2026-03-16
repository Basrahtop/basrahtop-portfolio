"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "About",   href: "#about" },
  { label: "Design",  href: "#design" },
  { label: "Dev",     href: "#dev" },
  { label: "Events",  href: "#events" },
  { label: "Volunteer", href: "#volunteer" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive]     = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const indicatorRef            = useRef<HTMLSpanElement>(null);
  const navRef                  = useRef<HTMLUListElement>(null);

  /* ── Scroll spy ─────────────────────────────────── */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* ── Move indicator ─────────────────────────────── */
  useEffect(() => {
    if (!navRef.current || !indicatorRef.current) return;
    const activeEl = navRef.current.querySelector(`[data-href="${active}"]`) as HTMLElement;
    if (!activeEl) return;
    indicatorRef.current.style.width  = `${activeEl.offsetWidth}px`;
    indicatorRef.current.style.left   = `${activeEl.offsetLeft}px`;
  }, [active]);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-xl bg-canvas/80 border-b border-white/5" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display font-bold text-xl tracking-tight text-accent hover:opacity-80 transition-opacity"
        >
          DevbasrahtopIT
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul ref={navRef} className="relative flex gap-1 items-center">
            {/* Sliding indicator */}
            <span
              ref={indicatorRef}
              className="absolute bottom-0 h-px bg-accent transition-all duration-300 ease-expo pointer-events-none"
            />
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <button
                  data-href={href}
                  onClick={() => scrollTo(href)}
                  className={`px-4 py-2 text-sm font-display tracking-wide transition-colors duration-200 ${
                    active === href ? "text-accent" : "text-text-2 hover:text-text-1"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={
                menuOpen
                  ? i === 0 ? { rotate: 45, y: 8 }
                  : i === 1 ? { opacity: 0 }
                  : { rotate: -45, y: -8 }
                  : { rotate: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 0.25 }}
              className="block w-6 h-px bg-text-1"
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden md:hidden border-t border-white/5 bg-canvas/95 backdrop-blur-xl"
          >
            <ul className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.li
                  key={href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => scrollTo(href)}
                    className={`text-2xl font-display font-semibold ${
                      active === href ? "text-accent" : "text-text-2"
                    }`}
                  >
                    {label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
