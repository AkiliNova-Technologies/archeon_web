"use client";

import { C, R, services } from "@/lib/data";
import { Reveal, PageHeader, CTABanner } from "@/components/ui";
import { Layers, LayoutGrid, Building2, Home } from "lucide-react";

const icons = [
  <Layers key={0} size={32} color={C.bronze} strokeWidth={1.2} />,
  <LayoutGrid key={1} size={32} color={C.bronze} strokeWidth={1.2} />,
  <Building2 key={2} size={32} color={C.bronze} strokeWidth={1.2} />,
  <Home key={3} size={32} color={C.bronze} strokeWidth={1.2} />,
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Service Architecture"
        title="Four disciplines. One accountable team."
        description="Every service strengthens the next. Our integrated model means property intelligence informs architecture, architecture shapes exterior identity, and exterior logic extends into interior experience."
      />
      {services.map((s, idx) => (
        <section key={s.slug} id={s.slug} style={{ background: idx % 2 === 0 ? C.cream : C.parchment, padding: "100px 28px" }}>
          <div className="max-w-[1100px] mx-auto">
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center" style={{ width: 56, height: 56, borderRadius: R.lg, background: C.bronzeMuted }}>{icons[idx]}</div>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 48, fontWeight: 300, color: C.bronzeMuted, lineHeight: 1 }}>{s.num}</span>
                  </div>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: 34, fontWeight: 400, color: C.noir, lineHeight: 1.2, margin: "0 0 10px" }}>{s.title}</h2>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: C.bronze, fontStyle: "italic", margin: "0 0 24px" }}>{s.tagline}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.75, color: C.graphite, margin: 0 }}>{s.shortDesc}</p>
                </div>
                <div>
                  <div style={{ background: C.white, borderRadius: R.xl, padding: "32px 28px", marginBottom: 16 }}>
                    <h4 className="uppercase mb-5" style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 500, letterSpacing: "0.12em", color: C.bronze }}>What We Deliver</h4>
                    <div className="flex flex-wrap gap-2.5">
                      {s.items.map((item, j) => (
                        <span key={j} style={{ fontFamily: "var(--font-body)", fontSize: 14, color: C.graphite, background: C.cream, padding: "8px 18px", borderRadius: R.pill }}>{item}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ background: C.white, borderRadius: R.xl, padding: "32px 28px" }}>
                    <h4 className="uppercase mb-5" style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 500, letterSpacing: "0.12em", color: C.bronze }}>Our Approach</h4>
                    <div className="flex flex-col gap-3">
                      {s.approach.map((step, j) => (
                        <div key={j} className="flex items-center gap-3.5">
                          <div className="flex items-center justify-center shrink-0" style={{ width: 28, height: 28, borderRadius: R.sm, background: C.bronzeMuted }}>
                            <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, color: C.bronze }}>{String(j+1).padStart(2,"0")}</span>
                          </div>
                          <span style={{ fontFamily: "var(--font-body)", fontSize: 15, color: C.graphite }}>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ))}
      <CTABanner />
    </>
  );
}
