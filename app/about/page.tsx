"use client";

import { C, R } from "@/lib/data";
import { Reveal, SectionLabel, PageHeader, CTABanner } from "@/components/ui";
import { Layers, Building2, Home, FileText } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About Archeon"
        title={<>Real estate, architecture, and design are stages of <span style={{ color: C.bronze, fontStyle: "italic" }}>one outcome</span></>}
        description="A space that performs — financially, functionally, and aesthetically. We built a consultancy that integrates property intelligence, architectural thinking, and design execution into a single, accountable process."
      />

      <section style={{ background: C.cream, padding: "clamp(60px, 10vh, 100px) clamp(16px, 5vw, 28px)" }}>
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          {[
            { label: "The Problem", text: "Property decisions are fragmented. Clients deal with agents, architects, designers, and contractors — often misaligned, costly, and inefficient. Poor early decisions ripple into wasted capital, compromised design, and underperforming assets." },
            { label: "The Insight", text: "Real estate, architecture, and design are not separate disciplines. They are stages of one outcome: a space that performs — financially, functionally, and aesthetically. When these disciplines operate in silos, the result is compromise." },
            { label: "The Solution", text: "We built a consultancy that integrates property intelligence, architectural thinking, and exterior and interior design. One team. One vision. One accountable partner. The result is spaces that are strategically located, intelligently designed, beautifully executed, and commercially sound." },
          ].map((block, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <div 
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-10" 
                style={{ 
                  padding: "clamp(32px, 5vw, 48px) 0", 
                  borderBottom: i < 2 ? `1px solid ${C.sand}` : "none" 
                }}
              >
                <span 
                  style={{ 
                    fontFamily: "var(--font-display)", 
                    fontSize: "clamp(13px, 2vw, 14px)", 
                    fontWeight: 500, 
                    color: C.bronze, 
                    letterSpacing: "0.06em" 
                  }}
                >
                  {block.label}
                </span>
                <p 
                  style={{ 
                    fontFamily: "var(--font-body)", 
                    fontSize: "clamp(15px, 2.2vw, 17px)", 
                    lineHeight: 1.78, 
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

      <section style={{ background: C.parchment, padding: "clamp(60px, 10vh, 100px) clamp(16px, 5vw, 28px)" }}>
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="text-center mb-12 sm:mb-16 px-4">
              <SectionLabel center>What This Brand Communicates</SectionLabel>
              <h2 
                style={{ 
                  fontFamily: "var(--font-display)", 
                  fontSize: "clamp(28px, 6vw, 38px)", 
                  fontWeight: 400, 
                  color: C.noir, 
                  margin: "12px 0 0" 
                }}
              >
                Built for Every Stakeholder
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "To Investors", text: "This team understands capital. Every design decision is evaluated as an investment decision.", icon: <Layers size={24} color={C.bronze} strokeWidth={1.4} /> },
              { title: "To Developers", text: "This team thinks long-term. We optimise for enduring value, not trend cycles.", icon: <Building2 size={24} color={C.bronze} strokeWidth={1.4} /> },
              { title: "To Homeowners", text: "This team builds permanence. Your space should outlast fashion cycles.", icon: <Home size={24} color={C.bronze} strokeWidth={1.4} /> },
              { title: "To Corporates", text: "This team is strategic. Your built environment is a business asset, not an expense.", icon: <FileText size={24} color={C.bronze} strokeWidth={1.4} /> },
            ].map((v, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div
                  className="h-full transition-all duration-300"
                  style={{ 
                    background: C.white, 
                    borderRadius: R.xl, 
                    padding: "clamp(24px, 4vw, 36px) clamp(20px, 3vw, 28px)", 
                    boxShadow: "0 2px 12px rgba(30,30,30,0.03)" 
                  }}
                  onMouseEnter={(e) => { 
                    e.currentTarget.style.transform = "translateY(-4px)"; 
                    e.currentTarget.style.boxShadow = "0 8px 28px rgba(30,30,30,0.07)"; 
                  }}
                  onMouseLeave={(e) => { 
                    e.currentTarget.style.transform = "translateY(0)"; 
                    e.currentTarget.style.boxShadow = "0 2px 12px rgba(30,30,30,0.03)"; 
                  }}
                >
                  <div 
                    className="flex items-center justify-center mb-5" 
                    style={{ 
                      width: "clamp(40px, 6vw, 48px)", 
                      height: "clamp(40px, 6vw, 48px)", 
                      borderRadius: R.md, 
                      background: C.bronzeMuted 
                    }}
                  >
                    {v.icon}
                  </div>
                  <h3 
                    style={{ 
                      fontFamily: "var(--font-display)", 
                      fontSize: "clamp(18px, 2.5vw, 20px)", 
                      fontWeight: 500, 
                      color: C.noir, 
                      margin: "0 0 10px" 
                    }}
                  >
                    {v.title}
                  </h3>
                  <p 
                    style={{ 
                      fontFamily: "var(--font-body)", 
                      fontSize: "clamp(13px, 1.8vw, 14px)", 
                      lineHeight: 1.65, 
                      color: C.stone, 
                      margin: 0 
                    }}
                  >
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section 
        style={{ 
          background: C.noir, 
          padding: "clamp(60px, 8vh, 80px) clamp(16px, 5vw, 28px)", 
          borderRadius: `${R.xl}px ${R.xl}px 0 0` 
        }}
      >
        <div className="max-w-[800px] mx-auto text-center px-4">
          <Reveal>
            <h2 
              style={{ 
                fontFamily: "var(--font-display)", 
                fontSize: "clamp(26px, 5vw, 32px)", 
                fontWeight: 400, 
                color: C.white, 
                margin: "0 0 clamp(32px, 5vw, 48px)" 
              }}
            >
              How We Think
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "\u201CWe evaluate before we design.\u201D",
              "\u201CEvery decision must justify its existence.\u201D",
              "\u201CForm follows value.\u201D",
              "\u201CStrategy built into structure.\u201D",
            ].map((q, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div 
                  style={{ 
                    background: "rgba(255,255,255,0.04)", 
                    borderRadius: R.lg, 
                    padding: "clamp(20px, 3vw, 28px) clamp(16px, 2.5vw, 24px)", 
                    border: "1px solid rgba(154,123,79,0.12)" 
                  }}
                >
                  <p 
                    style={{ 
                      fontFamily: "var(--font-display)", 
                      fontSize: "clamp(15px, 2.2vw, 17px)", 
                      fontStyle: "italic", 
                      color: "rgba(255,255,255,0.75)", 
                      margin: 0, 
                      lineHeight: 1.5 
                    }}
                  >
                    {q}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}