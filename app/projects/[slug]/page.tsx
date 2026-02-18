"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { C, R, projects, services as servicesData } from "@/lib/data";
import { Reveal, Tag, Btn, SectionLabel, ArrowRight, CTABanner } from "@/components/ui";
import { ArrowLeft } from "lucide-react";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  const otherProjects = projects.filter((p) => p.slug !== slug);

  if (!project) {
    return (
      <section className="text-center" style={{ background: C.parchment, padding: "clamp(120px, 20vh, 180px) clamp(16px, 5vw, 28px) clamp(80px, 12vh, 120px)" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 6vw, 36px)", color: C.noir }}>Project not found</h1>
        <Btn href="/projects" variant="outline" style={{ marginTop: "clamp(20px, 3vw, 24px)" }}>Back to Projects</Btn>
      </section>
    );
  }

  const relatedServices = servicesData.filter((s) => project.services.includes(s.slug));

  return (
    <>
      <section style={{ background: C.parchment, padding: "clamp(100px, 15vh, 140px) clamp(16px, 5vw, 28px) clamp(40px, 6vh, 60px)" }}>
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-1.5 mb-7 no-underline" 
            style={{ fontFamily: "var(--font-body)", fontSize: "clamp(12px, 1.6vw, 13px)", color: C.bronze }}
          >
            <ArrowLeft size={14} strokeWidth={1.5} /> All Projects
          </Link>
          
          <div className="flex gap-2 flex-wrap mb-4">
            {project.tags.map((t, j) => <Tag key={j}>{t}</Tag>)}
          </div>
          
          <h1 
            style={{ 
              fontFamily: "var(--font-display)", 
              fontSize: "clamp(32px, 8vw, 48px)", 
              fontWeight: 400, 
              color: C.noir, 
              lineHeight: 1.15, 
              margin: "0 0 8px" 
            }}
          >
            {project.title}
          </h1>
          
          <p 
            style={{ 
              fontFamily: "var(--font-body)", 
              fontSize: "clamp(16px, 2.5vw, 18px)", 
              color: C.bronze, 
              margin: "0 0 24px" 
            }}
          >
            {project.type}
          </p>
          
          <div 
            className="flex flex-wrap gap-4 sm:gap-8" 
            style={{ fontFamily: "var(--font-body)", fontSize: "clamp(13px, 1.8vw, 14px)", color: C.stone }}
          >
            {[{ l: "Location", v: project.location }, { l: "Year", v: project.year }, { l: "Area", v: project.area }].map((d, i) => (
              <div key={i}>
                <span className="block uppercase mb-0.5" style={{ fontSize: "clamp(10px, 1.5vw, 11px)", letterSpacing: "0.1em", color: C.warmGray }}>
                  {d.l}
                </span>
                {d.v}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 clamp(16px, 5vw, 28px) clamp(40px, 6vh, 60px)", background: C.parchment }}>
        <div className="max-w-[1100px] mx-auto">
          <div 
            className="flex items-center justify-center relative overflow-hidden" 
            style={{ 
              background: `linear-gradient(145deg, ${C.ink}, #3A3631)`, 
              borderRadius: R.xl, 
              height: "clamp(240px, 40vh, 420px)" 
            }}
          >
            <svg viewBox="0 0 500 300" fill="none" style={{ width: "clamp(40%, 50%, 60%)", opacity: 0.4 }}>
              <rect x="50" y="50" width="160" height="220" rx="8" stroke={C.bronze} strokeWidth="0.6" />
              <rect x="240" y="30" width="200" height="240" rx="8" stroke={C.bronze} strokeWidth="0.6" />
              <line x1="20" y1="270" x2="480" y2="270" stroke={C.bronze} strokeWidth="0.4" />
            </svg>
            <div 
              className="absolute bottom-4 sm:bottom-6 left-4 sm:left-7 uppercase" 
              style={{ 
                fontFamily: "var(--font-body)", 
                fontSize: "clamp(10px, 1.5vw, 11px)", 
                letterSpacing: "0.15em", 
                color: "rgba(154,123,79,0.45)" 
              }}
            >
              Concept Visualisation
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: C.cream, padding: "clamp(60px, 8vh, 80px) clamp(8px, 2vw, 14px)" }}>
        <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 px-4 sm:px-6">
          {[{ label: "The Challenge", text: project.challenge }, { label: "The Outcome", text: project.outcome }].map((block, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div style={{ background: C.white, borderRadius: R.xl, padding: "clamp(24px, 4vw, 36px) clamp(20px, 3.5vw, 32px)" }}>
                <h3 
                  className="uppercase mb-3.5" 
                  style={{ 
                    fontFamily: "var(--font-body)", 
                    fontSize: "clamp(11px, 1.8vw, 12px)", 
                    fontWeight: 500, 
                    letterSpacing: "0.12em", 
                    color: C.bronze 
                  }}
                >
                  {block.label}
                </h3>
                <p 
                  style={{ 
                    fontFamily: "var(--font-body)", 
                    fontSize: "clamp(14px, 2.2vw, 16px)", 
                    lineHeight: 1.75, 
                    color: C.graphite, 
                    margin: 0 
                  }}
                >
                  {block.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section style={{ background: C.parchment, padding: "clamp(60px, 8vh, 80px) clamp(8px, 2vw, 14px)" }}>
        <div className="max-w-[720px] mx-auto px-4 sm:px-6">
          <Reveal>
            <SectionLabel>Project Narrative</SectionLabel>
            <div 
              className="prose-content" 
              style={{ 
                fontFamily: "var(--font-body)", 
                fontSize: "clamp(15px, 2.2vw, 16px)", 
                lineHeight: 1.8, 
                color: C.graphite 
              }}
            >
              {project.longDesc.split("\n\n").map((para, i) => (
                <p key={i} style={{ marginBottom: "1.5rem" }}>{para}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ background: C.cream, padding: "clamp(60px, 8vh, 80px) clamp(8px, 2vw, 14px)" }}>
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <Reveal>
            <SectionLabel>Services Engaged</SectionLabel>
            <div 
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5`}
            >
              {relatedServices.map((s, i) => (
                <Link key={i} href={`/services#${s.slug}`} className="no-underline block">
                  <div
                    className="transition-all duration-300 h-full"
                    style={{ 
                      background: C.white, 
                      borderRadius: R.xl, 
                      padding: "clamp(20px, 3vw, 28px) clamp(16px, 2.5vw, 24px)", 
                      boxShadow: "0 2px 12px rgba(30,30,30,0.03)" 
                    }}
                    onMouseEnter={(e) => { 
                      e.currentTarget.style.transform = "translateY(-3px)"; 
                      e.currentTarget.style.boxShadow = "0 8px 24px rgba(30,30,30,0.06)"; 
                    }}
                    onMouseLeave={(e) => { 
                      e.currentTarget.style.transform = "translateY(0)"; 
                      e.currentTarget.style.boxShadow = "0 2px 12px rgba(30,30,30,0.03)"; 
                    }}
                  >
                    <span 
                      style={{ 
                        fontFamily: "var(--font-display)", 
                        fontSize: "clamp(24px, 4vw, 28px)", 
                        fontWeight: 300, 
                        color: C.bronzeMuted, 
                        display: "block", 
                        marginBottom: 8 
                      }}
                    >
                      {s.num}
                    </span>
                    <h4 
                      style={{ 
                        fontFamily: "var(--font-display)", 
                        fontSize: "clamp(16px, 2.2vw, 17px)", 
                        fontWeight: 500, 
                        color: C.noir, 
                        margin: "0 0 6px" 
                      }}
                    >
                      {s.title}
                    </h4>
                    <p 
                      style={{ 
                        fontFamily: "var(--font-body)", 
                        fontSize: "clamp(12px, 1.8vw, 13px)", 
                        color: C.stone, 
                        margin: 0, 
                        fontStyle: "italic" 
                      }}
                    >
                      {s.tagline}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ background: C.parchment, padding: "clamp(60px, 8vh, 80px) clamp(8px, 2vw, 14px)" }}>
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <Reveal>
            <SectionLabel>Other Studies</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
              {otherProjects.slice(0, 4).map((op, i) => (
                <Link key={i} href={`/projects/${op.slug}`} className="no-underline block">
                  <div
                    className="transition-all duration-300 h-full"
                    style={{ 
                      background: C.white, 
                      borderRadius: R.xl, 
                      padding: "clamp(24px, 3.5vw, 32px) clamp(20px, 3vw, 28px)", 
                      boxShadow: "0 2px 12px rgba(30,30,30,0.03)" 
                    }}
                    onMouseEnter={(e) => { 
                      e.currentTarget.style.transform = "translateY(-3px)"; 
                      e.currentTarget.style.boxShadow = "0 8px 24px rgba(30,30,30,0.06)"; 
                    }}
                    onMouseLeave={(e) => { 
                      e.currentTarget.style.transform = "translateY(0)"; 
                      e.currentTarget.style.boxShadow = "0 2px 12px rgba(30,30,30,0.03)"; 
                    }}
                  >
                    <div className="flex gap-2 flex-wrap mb-3">
                      {op.tags.slice(0,2).map((t, j) => <Tag key={j}>{t}</Tag>)}
                    </div>
                    <h4 
                      style={{ 
                        fontFamily: "var(--font-display)", 
                        fontSize: "clamp(18px, 2.5vw, 20px)", 
                        fontWeight: 500, 
                        color: C.noir, 
                        margin: "0 0 4px" 
                      }}
                    >
                      {op.title}
                    </h4>
                    <p 
                      style={{ 
                        fontFamily: "var(--font-body)", 
                        fontSize: "clamp(12px, 1.6vw, 13px)", 
                        color: C.stone, 
                        margin: 0 
                      }}
                    >
                      {op.type} — {op.location}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}