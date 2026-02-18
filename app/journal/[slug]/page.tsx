"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { C, R, articles, projects } from "@/lib/data";
import { Reveal, Tag, Btn, SectionLabel, ArrowRight, CTABanner } from "@/components/ui";
import { ArrowLeft } from "lucide-react";

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);
  const otherArticles = articles.filter((a) => a.slug !== slug).slice(0, 2);

  if (!article) {
    return (
      <section className="text-center" style={{ background: C.parchment, padding: "clamp(120px, 20vh, 180px) clamp(16px, 5vw, 28px) clamp(80px, 12vh, 120px)" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 6vw, 36px)", color: C.noir }}>Article not found</h1>
        <Btn href="/journal" variant="outline" style={{ marginTop: "clamp(20px, 3vw, 24px)" }}>Back to Journal</Btn>
      </section>
    );
  }

  const relatedProjects = projects.filter((p) => article.relatedProjects?.includes(p.slug));

  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) return <h2 key={i}>{block.replace("## ", "")}</h2>;
      return <p key={i}>{block}</p>;
    });
  };

  return (
    <>
      {/* Header Section */}
      <section style={{ background: C.parchment, padding: "clamp(100px, 15vh, 140px) clamp(8px, 2vw, 14px) clamp(40px, 6vh, 60px)" }}>
        <div className="max-w-[720px] mx-auto px-4 sm:px-6">
          <Link 
            href="/journal" 
            className="inline-flex items-center gap-1.5 mb-6 md:mb-8 no-underline" 
            style={{ fontFamily: "var(--font-body)", fontSize: "clamp(12px, 1.6vw, 13px)", color: C.bronze }}
          >
            <ArrowLeft size={14} strokeWidth={1.5} /> All Articles
          </Link>
          
          <div className="flex flex-wrap gap-3 items-center mb-5">
            <Tag>{article.category}</Tag>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "clamp(12px, 1.6vw, 13px)", color: C.warmGray }}>
              {article.readTime}
            </span>
          </div>
          
          <h1 
            style={{ 
              fontFamily: "var(--font-display)", 
              fontSize: "clamp(32px, 6vw, 42px)", 
              fontWeight: 400, 
              color: C.noir, 
              lineHeight: 1.2, 
              margin: "0 0 20px" 
            }}
          >
            {article.title}
          </h1>
          
          <div className="flex flex-wrap gap-5 items-center pb-8 md:pb-10" style={{ borderBottom: `1px solid ${C.sand}` }}>
            <div 
              className="flex items-center justify-center shrink-0" 
              style={{ 
                width: "clamp(36px, 5vw, 40px)", 
                height: "clamp(36px, 5vw, 40px)", 
                borderRadius: R.sm, 
                background: `linear-gradient(135deg, ${C.noir}, ${C.ink})` 
              }}
            >
              <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(14px, 2.2vw, 16px)", color: C.bronze }}>A</span>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "clamp(13px, 1.8vw, 14px)", fontWeight: 500, color: C.noir }}>
                Archeon Editorial
              </div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "clamp(12px, 1.6vw, 13px)", color: C.warmGray }}>
                {article.date}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section style={{ background: C.parchment, padding: "clamp(32px, 5vh, 48px) clamp(8px, 2vw, 14px) clamp(60px, 8vh, 80px)" }}>
        <div className="max-w-[720px] mx-auto px-4 sm:px-6">
          <Reveal>
            <div 
              className="prose-content" 
              style={{ 
                fontFamily: "var(--font-body)", 
                fontSize: "clamp(16px, 2.2vw, 17px)", 
                lineHeight: 1.8, 
                color: C.graphite 
              }}
            >
              {renderContent(article.content)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section style={{ background: C.cream, padding: "clamp(60px, 8vh, 80px) clamp(8px, 2vw, 14px)" }}>
          <div className="max-w-[720px] mx-auto px-4 sm:px-6">
            <Reveal>
              <SectionLabel>Related Projects</SectionLabel>
              <div 
                className={`grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5`}
              >
                {relatedProjects.map((p, i) => (
                  <Link key={i} href={`/projects/${p.slug}`} className="no-underline block">
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
                      <div className="flex gap-2 flex-wrap mb-3">
                        {p.tags.slice(0, 2).map((t, j) => <Tag key={j}>{t}</Tag>)}
                      </div>
                      <h4 
                        style={{ 
                          fontFamily: "var(--font-display)", 
                          fontSize: "clamp(16px, 2.5vw, 18px)", 
                          fontWeight: 500, 
                          color: C.noir, 
                          margin: "0 0 4px" 
                        }}
                      >
                        {p.title}
                      </h4>
                      <p 
                        style={{ 
                          fontFamily: "var(--font-body)", 
                          fontSize: "clamp(12px, 1.8vw, 13px)", 
                          color: C.stone, 
                          margin: 0 
                        }}
                      >
                        {p.type}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Continue Reading */}
      <section style={{ background: C.parchment, padding: "clamp(60px, 8vh, 80px) clamp(8px, 2vw, 14px)" }}>
        <div className="max-w-[720px] mx-auto px-4 sm:px-6">
          <Reveal>
            <SectionLabel>Continue Reading</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
              {otherArticles.map((a, i) => (
                <Link key={i} href={`/journal/${a.slug}`} className="no-underline block h-full">
                  <div 
                    className="h-full flex flex-col transition-all duration-300" 
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
                    <div className="flex gap-2 flex-wrap mb-3.5">
                      <Tag>{a.category}</Tag>
                    </div>
                    <h4 
                      className="flex-1" 
                      style={{ 
                        fontFamily: "var(--font-display)", 
                        fontSize: "clamp(15px, 2.2vw, 17px)", 
                        fontWeight: 500, 
                        color: C.noir, 
                        lineHeight: 1.35, 
                        margin: "0 0 10px" 
                      }}
                    >
                      {a.title}
                    </h4>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "clamp(11px, 1.5vw, 12px)", color: C.warmGray }}>
                      {a.date}
                    </span>
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