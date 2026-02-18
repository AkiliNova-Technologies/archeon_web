"use client";

import Link from "next/link";
import { C, R, projects } from "@/lib/data";
import {
  Reveal,
  Tag,
  ArrowRight,
  PageHeader,
  CTABanner,
} from "@/components/ui";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        label="Selected Work"
        title="Concept Studies"
        description="We lead with process and rationale. Decision-makers care more about how you think than how pretty the renders are. Each study demonstrates integrated thinking across our disciplines."
      />

      <section
        style={{
          background: C.cream,
          padding:
            "clamp(60px, 8vh, 80px) clamp(16px, 5vw, 28px) clamp(80px, 12vh, 120px)",
        }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
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
                  {/* Left visual section */}
                  <div
                    className="flex items-center justify-center relative min-h-[200px] max-h-[350px] md:min-h-[320px] overflow-hidden"
                    style={{
                      background:
                        i % 2 === 0
                          ? `linear-gradient(145deg, ${C.ink}, #3A3631)`
                          : `linear-gradient(145deg, #2A2722, ${C.ink})`,
                      borderRadius: `${R.xl}px ${R.xl}px 0 0`,
                    }}
                  >
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.title}
                        width={400}
                        height={300}
                        className="w-full max-h-[350px] object-cover object-center"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(18px, 3vw, 22px)",
                          fontWeight: 500,
                          color: C.noir,
                          padding: "20px",
                        }}
                      >
                        {p.title}
                      </div>
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

                  {/* Right content section */}
                  <div className="p-6 md:p-8 lg:p-11">
                    <div className="flex gap-2 flex-wrap mb-4">
                      {p.tags.map((t, j) => (
                        <Tag key={j}>{t}</Tag>
                      ))}
                    </div>

                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(22px, 4vw, 28px)",
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
                      className="flex flex-wrap gap-3 md:gap-5 mb-5"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "clamp(12px, 1.6vw, 13px)",
                        color: C.warmGray,
                      }}
                    >
                      <span>{p.location}</span>
                      <span>{p.year}</span>
                      <span>{p.area}</span>
                    </div>

                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "clamp(14px, 2vw, 15px)",
                        lineHeight: 1.7,
                        color: C.graphite,
                        margin: "0 0 clamp(20px, 3vw, 24px)",
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
                      View Full Study <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
