"use client";

import Link from "next/link";
import { C, R, articles } from "@/lib/data";
import {
  Reveal,
  Tag,
  ArrowRight,
  PageHeader,
  CTABanner,
} from "@/components/ui";
import Image from "next/image";

export default function JournalPage() {
  const categories = [...new Set(articles.map((a) => a.category))];

  return (
    <>
      <PageHeader
        label="Insights"
        title="Journal"
        description="Property trends, design thinking, and development insights. We share what we learn because informed clients make better decisions — and better decisions produce better buildings."
      />

      <section
        style={{
          background: C.cream,
          padding:
            "clamp(60px, 8vh, 80px) clamp(8px, 2vw, 14px) clamp(80px, 12vh, 120px)",
        }}
      >
        <div className="max-w-[1100px] mx-auto gap-8 lg:gap-16 px-4 sm:px-6">
          <Reveal>
            <div className="flex gap-2.5 mb-12 flex-wrap">
              <span
                className="cursor-pointer"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  fontWeight: 500,
                  color: C.white,
                  background: C.noir,
                  padding: "8px 20px",
                  borderRadius: R.pill,
                }}
              >
                All
              </span>
              {categories.map((cat, i) => (
                <span
                  key={i}
                  className="cursor-pointer transition-all duration-300"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    color: C.graphite,
                    background: C.white,
                    padding: "8px 20px",
                    borderRadius: R.pill,
                    border: `1px solid ${C.sand}`,
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Featured */}
          <Reveal>
            <Link
              href={`/journal/${articles[0].slug}`}
              className="no-underline block mb-6"
            >
              <div
                className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] overflow-hidden transition-all duration-400 cursor-pointer"
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
                  className="flex items-center justify-center relative min-h-[300px]"
                  style={{
                    background: `linear-gradient(145deg, ${C.ink}, #3A3631)`,
                  }}
                >
                  <Image
                    src={"/image5.jpeg"}
                    width={400}
                    height={200}
                    alt="Feature Blog Image"
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute bottom-5 left-6 uppercase"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 11,
                      letterSpacing: "0.12em",
                      color: "rgba(154,123,79,0.5)",
                    }}
                  >
                    Featured Article
                  </div>
                </div>
                <div className="p-6 sm:p-8 md:p-10 lg:p-11 flex flex-col justify-center">
                  <div className="flex gap-3 items-center mb-5">
                    <Tag>{articles[0].category}</Tag>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 12,
                        color: C.warmGray,
                      }}
                    >
                      {articles[0].readTime}
                    </span>
                  </div>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 26,
                      fontWeight: 500,
                      color: C.noir,
                      lineHeight: 1.3,
                      margin: "0 0 14px",
                    }}
                  >
                    {articles[0].title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: C.graphite,
                      margin: "0 0 20px",
                    }}
                  >
                    {articles[0].excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 13,
                        color: C.warmGray,
                      }}
                    >
                      {articles[0].date}
                    </span>
                    <span
                      className="inline-flex items-center gap-1.5"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 13,
                        fontWeight: 500,
                        color: C.bronze,
                      }}
                    >
                      Read Article <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {articles.slice(1).map((a, i) => (
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
                      padding: "32px 24px",
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
                    <div className="flex justify-between items-center mb-5">
                      <Tag>{a.category}</Tag>
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 12,
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
                        fontSize: 19,
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
                        fontSize: 14,
                        lineHeight: 1.6,
                        color: C.stone,
                        margin: "0 0 20px",
                      }}
                    >
                      {a.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 12,
                          color: C.warmGray,
                        }}
                      >
                        {a.date}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 13,
                          fontWeight: 500,
                          color: C.bronze,
                        }}
                      >
                        Read
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
