"use client";

import { useState, useEffect, useRef, type ReactNode, type CSSProperties } from "react";
import Link from "next/link";
import { C, R } from "@/lib/data";
import { motion } from "framer-motion";
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  ArrowRight as ArrowRightIcon,
  ArrowLeft,
  Menu,
  X,
} from "lucide-react";

/* ─── Scroll reveal hook ─── */
export function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, visible] as const;
}

/* ─── Reveal wrapper ─── */
interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  style?: CSSProperties;
  className?: string;
}

export function Reveal({ children, delay = 0, y = 36, style = {}, className = "" }: RevealProps) {
  const [ref, vis] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 0.75s cubic-bezier(.4,.0,.2,1) ${delay}s, transform 0.75s cubic-bezier(.4,.0,.2,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Pill Tag ─── */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-block whitespace-nowrap"
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "clamp(10px, 2vw, 11px)",
        letterSpacing: "0.06em",
        color: C.bronze,
        background: C.bronzeMuted,
        padding: "clamp(4px, 1vw, 5px) clamp(10px, 2vw, 14px)",
        borderRadius: R.pill,
      }}
    >
      {children}
    </span>
  );
}

/* ─── Button ─── */
interface BtnProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "dark";
  href?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

export function Btn({ children, variant = "primary", href = "#", style: sx = {} }: BtnProps) {
  const base: CSSProperties = {
    fontFamily: "var(--font-body)",
    fontSize: "clamp(12px, 1.8vw, 13px)",
    fontWeight: 500,
    letterSpacing: "0.04em",
    textDecoration: "none",
    borderRadius: R.pill,
    padding: "clamp(10px, 2vw, 14px) clamp(20px, 4vw, 32px)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    cursor: "pointer",
    transition: "all 0.35s ease",
    border: "none",
    whiteSpace: "nowrap",
  };
  const variants: Record<string, CSSProperties> = {
    primary: { background: C.bronze, color: C.white },
    outline: { background: "transparent", color: C.noir, boxShadow: `inset 0 0 0 1.5px ${C.warmGray}` },
    dark: { background: C.noir, color: C.white },
  };
  return (
    <Link
      href={href}
      style={{ ...base, ...variants[variant], ...sx }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow =
          variant === "outline"
            ? `inset 0 0 0 1.5px ${C.bronze}`
            : `0 8px 24px rgba(154,123,79,0.25)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          variant === "outline" ? `inset 0 0 0 1.5px ${C.warmGray}` : "none";
      }}
    >
      {children}
    </Link>
  );
}

/* ─── Section Label ─── */
export function SectionLabel({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 mb-4" style={{ justifyContent: center ? "center" : "flex-start" }}>
      <div className="h-0.5 rounded-sm" style={{ width: "clamp(20px, 3vw, 28px)", background: C.bronze }} />
      <span
        className="uppercase whitespace-nowrap"
        style={{ fontFamily: "var(--font-body)", fontSize: "clamp(11px, 1.8vw, 12px)", fontWeight: 500, letterSpacing: "0.14em", color: C.bronze }}
      >
        {children}
      </span>
      {center && <div className="h-0.5 rounded-sm" style={{ width: "clamp(20px, 3vw, 28px)", background: C.bronze }} />}
    </div>
  );
}

/* ─── Arrow Icon ─── */
export function ArrowRight({ size = 16 }: { size?: number }) {
  return <ArrowRightIcon size={size} strokeWidth={1.5} />;
}

export function ArrowLeftIcon({ size = 14 }: { size?: number }) {
  return <ArrowLeft size={size} strokeWidth={1.5} />;
}

/* ─── Page Header ─── */
interface PageHeaderProps {
  label: string;
  title: ReactNode;
  description?: string;
}

export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <section style={{ background: C.parchment, padding: "clamp(100px, 15vh, 140px) clamp(16px, 5vw, 28px) clamp(60px, 8vh, 80px)" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-0">
        <SectionLabel>{label}</SectionLabel>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 8vw, 48px)",
            fontWeight: 400,
            color: C.noir,
            lineHeight: 1.15,
            margin: "8px 0 0",
          }}
        >
          {title}
        </h1>
        {description && (
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(15px, 2.5vw, 17px)",
              lineHeight: 1.72,
              color: C.graphite,
              marginTop: "clamp(16px, 3vw, 20px)",
              maxWidth: "min(600px, 90%)",
            }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   NAV
   ═══════════════════════════════════════════ */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Journal", href: "/journal" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className="fixed flex flex-col justify-center items-center flex-1 top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{ padding: scrolled ? "clamp(8px, 1.5vh, 12px) 0" : "clamp(12px, 2vh, 20px) 0" }}
    >
      <div
        className="max-w-[1200px] mx-auto w-full flex flex-1 items-center justify-between transition-all duration-500 mx-4 sm:mx-6"
        style={{
          background: scrolled ? "rgba(250,248,244,0.92)" : "rgba(250,248,244,0.6)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderRadius: R.xl,
          padding: "clamp(10px, 2vw, 14px) clamp(16px, 3vw, 28px)",
          boxShadow: scrolled ? "0 4px 30px rgba(30,30,30,0.06)" : "0 2px 16px rgba(30,30,30,0.03)",
        }}
      >
        {/* Logo */}
        <Link href="/" className="no-underline flex items-center gap-2 sm:gap-2.5">
          <div
            className="flex items-center justify-center"
            style={{
              width: "clamp(32px, 5vw, 36px)",
              height: "clamp(32px, 5vw, 36px)",
              borderRadius: R.sm,
              background: `linear-gradient(135deg, ${C.noir}, ${C.ink})`,
            }}
          >
            <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(16px, 2.5vw, 18px)", fontWeight: 500, color: C.bronze, lineHeight: 1 }}>
              A
            </span>
          </div>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(16px, 2.5vw, 18px)", fontWeight: 500, letterSpacing: "0.08em", color: C.noir }}>
            Archeon
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="transition-colors duration-300 hover:text-[#9A7B4F]"
              style={{ fontFamily: "var(--font-body)", fontSize: "clamp(13px, 1.5vw, 14px)", fontWeight: 400, color: C.graphite, textDecoration: "none" }}
            >
              {l.label}
            </Link>
          ))}
          <Btn href="/contact" style={{ padding: "clamp(8px, 1.2vw, 10px) clamp(18px, 2.5vw, 24px)", fontSize: "clamp(12px, 1.5vw, 13px)" }}>
            Start a Project
          </Btn>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", color: C.noir }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden  flex flex-col flex-1 w-[90vw] mt-2 p-6 mx-4 sm:mx-6"
          style={{ background: C.white, borderRadius: R.xl, boxShadow: "0 8px 32px rgba(30,30,30,0.1)" }}
        >
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 transition-colors duration-300"
              style={{ fontFamily: "var(--font-body)", fontSize: "clamp(15px, 4vw, 16px)", color: C.graphite, textDecoration: "none", borderBottom: `1px solid ${C.sand}` }}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-4">
            <Btn href="/contact" style={{ width: "100%", justifyContent: "center" }}>Start a Project</Btn>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

/* ═══════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════ */
export function Footer() {
  return (
    <footer style={{ background: C.noir, padding: "clamp(40px, 6vh, 56px) clamp(16px, 5vw, 28px) clamp(28px, 4vh, 36px)", borderRadius: `${R.xl}px ${R.xl}px 0 0` }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10 lg:mb-12">
          <div>
            <Link href="/" className="no-underline flex items-center gap-2.5 mb-4">
              <div
                className="flex items-center justify-center"
                style={{ width: "clamp(28px, 4vw, 32px)", height: "clamp(28px, 4vw, 32px)", borderRadius: R.sm, background: "rgba(154,123,79,0.15)" }}
              >
                <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(14px, 2vw, 16px)", color: C.bronze }}>A</span>
              </div>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(15px, 2.2vw, 17px)", fontWeight: 500, letterSpacing: "0.08em", color: C.white }}>
                Archeon
              </span>
            </Link>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(13px, 1.8vw, 14px)", lineHeight: 1.6, color: "rgba(255,255,255,0.45)", maxWidth: "min(260px, 100%)" }}>
              Property Intelligence.<br />Designed for Endurance.
            </p>
          </div>
          {[
            {
              title: "Services",
              items: [
                { label: "Property Advisory", href: "/services#property-advisory" },
                { label: "Architecture", href: "/services#architecture" },
                { label: "Exterior Design", href: "/services#exterior-design" },
                { label: "Interior Design", href: "/services#interior-design" },
              ],
            },
            {
              title: "Company",
              items: [
                { label: "About", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Journal", href: "/journal" },
                { label: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Connect",
              items: [
                { label: "studio@archeon.co", href: "mailto:studio@archeon.co" },
                { label: "+256 712 345 678", href: "tel:+256712345678" },
                { label: "Kampala, Uganda", href: "#" },
              ],
            },
          ].map((col, i) => (
            <div key={i} className={i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <h4
                className="uppercase mb-4 sm:mb-5"
                style={{ fontFamily: "var(--font-body)", fontSize: "clamp(11px, 1.8vw, 12px)", fontWeight: 500, letterSpacing: "0.12em", color: C.bronze }}
              >
                {col.title}
              </h4>
              {col.items.map((item, j) => (
                <Link
                  key={j}
                  href={item.href}
                  className="block mb-2 transition-colors duration-300 hover:text-white/85"
                  style={{ fontFamily: "var(--font-body)", fontSize: "clamp(13px, 1.8vw, 14px)", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "clamp(11px, 1.5vw, 12px)", color: "rgba(255,255,255,0.3)", textAlign: "center" }}>
            &copy; 2026 Archeon Property &amp; Design. All rights reserved by AkiliNova Technologies.
          </span>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "clamp(11px, 1.5vw, 12px)", color: "rgba(255,255,255,0.2)", fontStyle: "italic", textAlign: "center" }}>
            Designing Assets. Defining Value.
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════
   CTA BANNER (reusable)
   ═══════════════════════════════════════════ */
export function CTABanner() {
  return (
    <section style={{ padding: "clamp(60px, 8vh, 80px) clamp(16px, 5vw, 28px) clamp(60px, 8vh, 80px)", background: C.parchment }}>
      <div
        className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${C.noir}, #332F2A)`,
          borderRadius: R.xl,
          padding: "clamp(40px, 6vw, 72px) clamp(24px, 5vw, 60px)",
        }}
      >
        <div
          className="absolute pointer-events-none"
          style={{ top: "-50%", right: "-20%", width: "50%", height: "200%", borderRadius: "50%", background: "radial-gradient(circle, rgba(154,123,79,0.1), transparent 70%)" }}
        />
        <div className="relative z-10 text-center md:text-left">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 5vw, 36px)", fontWeight: 400, color: C.white, margin: "0 0 10px", lineHeight: 1.25 }}>
            From Land to Legacy
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(14px, 2vw, 16px)", color: "rgba(255,255,255,0.6)", margin: 0, maxWidth: "min(400px, 100%)" }}>
            Let&apos;s discuss how integrated thinking can transform your next project.
          </p>
        </div>
        <Btn href="/contact" style={{ background: C.bronze, color: C.white, padding: "clamp(12px, 2vw, 16px) clamp(30px, 5vw, 40px)", flexShrink: 0 }}>
          Start a Conversation <ArrowRight />
        </Btn>
      </div>
    </section>
  );
}