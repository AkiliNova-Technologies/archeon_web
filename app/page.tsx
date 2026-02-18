"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { C, R, services, projects, articles } from "@/lib/data";
import {
  Reveal,
  Tag,
  Btn,
  SectionLabel,
  ArrowRight,
  CTABanner,
} from "@/components/ui";
import { Building2, Layers, Home as HomeIcon, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

/* ═══ HERO ═══ */
function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 150);
  }, []);

  return (
    <section
      className="relative overflow-hidden flex items-center min-h-screen"
      style={{
        background: C.parchment,
        padding:
          "clamp(80px, 15vh, 120px) clamp(16px, 5vw, 28px) clamp(60px, 10vh, 80px)",
      }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-20%",
          right: "-10%",
          width: "min(60vw, 800px)",
          height: "min(60vw, 800px)",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${C.bronzeMuted}, transparent 70%)`,
        }}
      />
      <div className="max-w-[1200px] mx-auto w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.85 }}
            >
              <Tag>Property Intelligence · Architecture · Design</Tag>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.85 }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 8vw, 58px)",
                fontWeight: 400,
                lineHeight: 1.12,
                color: C.noir,
                margin: "clamp(16px, 4vw, 28px) 0 0",
                letterSpacing: "-0.01em",
              }}
            >
              We shape property
              <br />
              into{" "}
              <span style={{ color: C.bronze, fontStyle: "italic" }}>
                enduring
              </span>{" "}
              value
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.85 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(15px, 2vw, 17px)",
                lineHeight: 1.72,
                color: C.graphite,
                maxWidth: 480,
                margin: "clamp(16px, 3vw, 24px) 0 clamp(24px, 4vw, 36px)",
              }}
            >
              An integrated consultancy guiding you from land and investment
              decisions, through architectural vision, to complete design
              execution. One team. One vision. One partner.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.85 }}
              className="flex flex-1 gap-3 sm:gap-3.5 flex-wrap"
            >
              <Btn href="/services">
                {" "}
                Our Approach <ArrowRight />
              </Btn>
              <Btn href="/projects" variant="outline">
                View Projects
              </Btn>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.85 }}
              className="flex flex-wrap gap-3 mt-8 sm:mt-14"
            >
              {[
                { n: "150+", l: "Projects" },
                { n: "12yr", l: "Experience" },
                { n: "4", l: "Integrated Services" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="text-center flex-1 min-w-[100px] sm:flex-none"
                  style={{
                    background: C.white,
                    borderRadius: R.lg,
                    padding: "clamp(12px, 3vw, 16px) clamp(12px, 3vw, 22px)",
                    boxShadow: "0 2px 12px rgba(30,30,30,0.04)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(20px, 4vw, 24px)",
                      fontWeight: 500,
                      color: C.noir,
                      lineHeight: 1,
                    }}
                  >
                    {s.n}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "clamp(10px, 2vw, 11px)",
                      color: C.stone,
                      marginTop: 4,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1.2 }}
            className="relative hidden lg:block"
          >
            <div
              style={{
                borderRadius: R.xl,
                overflow: "hidden",
                background: `linear-gradient(160deg, ${C.ink}, #3A3631)`,
                aspectRatio: "3/4",
                position: "relative",
                boxShadow: "0 20px 60px rgba(30,30,30,0.15)",
              }}
            >
              <Image
                src={"/image1.jpeg"}
                width={400}
                height={530}
                alt="Visual representation of Archeon's work"
                className="w-full h-full object-bottom"
                loading="lazy"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-4 sm:p-7"
                style={{
                  background:
                    "linear-gradient(transparent, rgba(30,30,30,0.7))",
                }}
              >
                <p
                  className="text-right"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(14px, 2vw, 16px)",
                    fontStyle: "italic",
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                ></p>
              </div>
            </div>
            <div
              className="absolute -bottom-5 -left-9 z-10 hidden lg:flex items-center gap-3.5"
              style={{
                background: C.white,
                borderRadius: R.lg,
                padding: "clamp(14px, 2vw, 18px) clamp(16px, 2.5vw, 22px)",
                boxShadow: "0 8px 32px rgba(30,30,30,0.08)",
              }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: "clamp(36px, 4vw, 44px)",
                  height: "clamp(36px, 4vw, 44px)",
                  borderRadius: R.md,
                  background: C.bronzeMuted,
                }}
              >
                <Building2 size={20} color={C.bronze} strokeWidth={1.5} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(12px, 1.5vw, 13px)",
                    fontWeight: 500,
                    color: C.noir,
                  }}
                >
                  Integrated Delivery
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(11px, 1.3vw, 12px)",
                    color: C.stone,
                  }}
                >
                  Advisory → Design → Execution
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══ SERVICES PREVIEW ═══ */
function ServicesPreview() {
  const icons = [
    <Layers key={0} size={28} color={C.bronze} strokeWidth={1.3} />,
    <LayoutGrid key={1} size={28} color={C.bronze} strokeWidth={1.3} />,
    <Building2 key={2} size={28} color={C.bronze} strokeWidth={1.3} />,
    <HomeIcon key={3} size={28} color={C.bronze} strokeWidth={1.3} />,
  ];

  return (
    <section
      style={{
        background: C.parchment,
        padding: "clamp(60px, 10vh, 110px) clamp(16px, 5vw, 28px)",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="text-center mb-12 sm:mb-16">
            <SectionLabel center>Service Architecture</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 6vw, 42px)",
                fontWeight: 400,
                color: C.noir,
                margin: "12px 0 12px",
                lineHeight: 1.2,
              }}
            >
              Integrated by Design
            </h2>
            <p
              className="max-w-lg mx-auto px-4"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(15px, 2vw, 16px)",
                color: C.stone,
              }}
            >
              Four disciplines. One accountable team. Every service strengthens
              the next.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <Link href={`/services#${s.slug}`} className="no-underline block">
                <div
                  className="transition-all duration-400 cursor-pointer"
                  style={{
                    background: C.white,
                    borderRadius: R.xl,
                    padding: "clamp(24px, 4vw, 36px) clamp(20px, 3vw, 32px)",
                    boxShadow: "0 2px 12px rgba(30,30,30,0.03)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 12px 40px rgba(30,30,30,0.08)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 2px 12px rgba(30,30,30,0.03)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div
                      className="flex items-center justify-center shrink-0"
                      style={{
                        width: "clamp(44px, 6vw, 52px)",
                        height: "clamp(44px, 6vw, 52px)",
                        borderRadius: R.md,
                        background: C.cream,
                      }}
                    >
                      {icons[i]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap justify-between items-center gap-2">
                        <h3
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "clamp(18px, 2.5vw, 20px)",
                            fontWeight: 500,
                            color: C.noir,
                            margin: 0,
                          }}
                          className="truncate"
                        >
                          {s.title}
                        </h3>
                        <span
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "clamp(12px, 1.5vw, 13px)",
                            color: C.warmGray,
                          }}
                        >
                          {s.num}
                        </span>
                      </div>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "clamp(13px, 1.8vw, 14px)",
                          color: C.bronze,
                          fontStyle: "italic",
                          margin: "8px 0 0",
                        }}
                      >
                        {s.tagline}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <div className="text-center mt-8 sm:mt-10">
            <Btn href="/services" variant="outline">
              Explore All Services <ArrowRight />
            </Btn>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══ PROCESS ═══ */
function Process() {
  const steps = [
    {
      title: "Evaluate",
      desc: "Assess the opportunity — location, feasibility, market conditions, and strategic fit.",
    },
    {
      title: "Envision",
      desc: "Develop architectural and spatial concepts aligned with investment goals.",
    },
    {
      title: "Execute",
      desc: "Coordinate design delivery across exterior and interior with precision.",
    },
    {
      title: "Endure",
      desc: "Ensure the result performs commercially and aesthetically for decades.",
    },
  ];
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: C.noir,
        padding: "clamp(60px, 10vh, 100px) clamp(16px, 5vw, 28px)",
        borderRadius: `${R.xl}px ${R.xl}px 0 0`,
      }}
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(154,123,79,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(154,123,79,0.05) 0%, transparent 50%)`,
        }}
      />
      <div className="max-w-[1200px] mx-auto relative">
        <Reveal>
          <div className="text-center mb-12 sm:mb-16">
            <SectionLabel center>Our Process</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(30px, 5vw, 40px)",
                fontWeight: 400,
                color: C.white,
                margin: 0,
              }}
            >
              Strategy Built Into Structure
            </h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <div
                className="h-full transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: R.xl,
                  padding: "clamp(24px, 4vw, 36px) clamp(20px, 3vw, 28px)",
                  border: "1px solid rgba(154,123,79,0.12)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(154,123,79,0.08)";
                  e.currentTarget.style.borderColor = "rgba(154,123,79,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.borderColor = "rgba(154,123,79,0.12)";
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(32px, 5vw, 40px)",
                    fontWeight: 300,
                    color: "rgba(154,123,79,0.25)",
                    lineHeight: 1,
                    marginBottom: 16,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(20px, 3vw, 22px)",
                    fontWeight: 500,
                    color: C.white,
                    margin: "0 0 12px",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(13px, 1.8vw, 14px)",
                    lineHeight: 1.65,
                    color: "rgba(255,255,255,0.55)",
                    margin: 0,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ PROJECTS PREVIEW ═══ */
function ProjectsPreview() {
  return (
    <section
      style={{
        background: C.cream,
        padding: "clamp(60px, 10vh, 110px) clamp(16px, 5vw, 28px)",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-14 gap-4">
            <div>
              <SectionLabel>Selected Work</SectionLabel>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(32px, 6vw, 42px)",
                  fontWeight: 400,
                  color: C.noir,
                  margin: "8px 0 0",
                }}
              >
                Concept Studies
              </h2>
            </div>
            <Btn
              href="/projects"
              variant="outline"
              style={{
                padding: "clamp(8px, 1.5vw, 10px) clamp(20px, 3vw, 24px)",
              }}
            >
              All Projects <ArrowRight />
            </Btn>
          </div>
        </Reveal>
        <div className="flex flex-col gap-5">
          {projects.map((p, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <Link href={`/projects/${p.slug}`} className="no-underline block">
                <div
                  className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] overflow-hidden transition-all duration-400 cursor-pointer"
                  style={{
                    background: C.white,
                    borderRadius: R.xl,
                    boxShadow: "0 2px 16px rgba(30,30,30,0.04)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 12px 40px rgba(30,30,30,0.08)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 2px 16px rgba(30,30,30,0.04)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    className="flex items-center justify-center relative min-h-[200px] md:min-h-[280px]"
                    style={{
                      background:
                        i % 2 === 0
                          ? `linear-gradient(145deg, ${C.ink}, #3A3631)`
                          : `linear-gradient(145deg, #2A2722, ${C.ink})`,
                      borderRadius: `${R.xl}px ${R.xl}px 0 0`,
                    }}
                  >
                    {p.image && (
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    )}
                    <div
                      className="absolute top-5 left-5 uppercase"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "clamp(9px, 1.5vw, 10px)",
                        letterSpacing: "0.15em",
                        color: "rgba(154,123,79,0.5)",
                      }}
                    >
                      Study {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="p-6 md:p-10">
                    <div className="flex gap-2 flex-wrap mb-4">
                      {p.tags.map((t, j) => (
                        <Tag key={j}>{t}</Tag>
                      ))}
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(22px, 3vw, 26px)",
                        fontWeight: 500,
                        color: C.noir,
                        margin: "0 0 4px",
                      }}
                    >
                      {p.title}
                    </h3>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "clamp(13px, 1.8vw, 14px)",
                        color: C.bronze,
                        marginBottom: 2,
                      }}
                    >
                      {p.type}
                    </div>
                    <div
                      className="mb-5"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "clamp(12px, 1.6vw, 13px)",
                        color: C.warmGray,
                      }}
                    >
                      {p.location}
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "clamp(14px, 1.8vw, 15px)",
                        lineHeight: 1.7,
                        color: C.graphite,
                        margin: "0 0 24px",
                      }}
                    >
                      {p.shortDesc}
                    </p>
                    <span
                      className="inline-flex items-center gap-1.5"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "clamp(12px, 1.6vw, 13px)",
                        fontWeight: 500,
                        color: C.bronze,
                      }}
                    >
                      View Study <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ JOURNAL PREVIEW ═══ */
function JournalPreview() {
  return (
    <section
      style={{
        background: C.parchment,
        padding: "clamp(60px, 10vh, 110px) clamp(16px, 5vw, 28px)",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="flex flex-wrap justify-between items-end mb-8 sm:mb-12 gap-4">
            <div>
              <SectionLabel>Insights</SectionLabel>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(32px, 6vw, 42px)",
                  fontWeight: 400,
                  color: C.noir,
                  margin: "8px 0 0",
                }}
              >
                Journal
              </h2>
            </div>
            <Link
              href="/journal"
              className="inline-flex items-center gap-1.5"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(12px, 1.6vw, 13px)",
                fontWeight: 500,
                color: C.bronze,
                textDecoration: "none",
              }}
            >
              All Articles <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {articles.slice(0, 3).map((a, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <Link
                href={`/journal/${a.slug}`}
                className="no-underline block h-full"
              >
                <div
                  className="h-full flex flex-col transition-all duration-300 cursor-pointer"
                  style={{
                    background: C.white,
                    borderRadius: R.xl,
                    padding: "clamp(24px, 4vw, 32px) clamp(20px, 3vw, 28px)",
                    boxShadow: "0 2px 12px rgba(30,30,30,0.03)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 32px rgba(30,30,30,0.07)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 12px rgba(30,30,30,0.03)";
                  }}
                >
                  <div className="flex flex-wrap justify-between items-center gap-2 mb-5">
                    <Tag>{a.category}</Tag>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "clamp(11px, 1.5vw, 12px)",
                        color: C.warmGray,
                      }}
                    >
                      {a.readTime}
                    </span>
                  </div>
                  <h3
                    className="flex-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(17px, 2.5vw, 19px)",
                      fontWeight: 500,
                      color: C.noir,
                      lineHeight: 1.35,
                      margin: "0 0 14px",
                    }}
                  >
                    {a.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "clamp(13px, 1.8vw, 14px)",
                      lineHeight: 1.6,
                      color: C.stone,
                      margin: "0 0 20px",
                    }}
                  >
                    {a.excerpt}
                  </p>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "clamp(12px, 1.6vw, 13px)",
                      fontWeight: 500,
                      color: C.bronze,
                    }}
                  >
                    Read Article
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ PAGE ═══ */
export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <Process />
      <ProjectsPreview />
      <JournalPreview />
      <CTABanner />
    </>
  );
}
