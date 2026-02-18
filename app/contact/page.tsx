"use client";

import { C, R } from "@/lib/data";
import { Reveal, PageHeader } from "@/components/ui";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    { label: "Email", value: "studio@archeon.co", icon: <Mail size={20} color={C.bronze} strokeWidth={1.4} /> },
    { label: "Phone", value: "+256 700 000 000", icon: <Phone size={20} color={C.bronze} strokeWidth={1.4} /> },
    { label: "Studio", value: "Kampala, Uganda", icon: <MapPin size={20} color={C.bronze} strokeWidth={1.4} /> },
  ];

  return (
    <>
      <PageHeader
        label="Contact"
        title={<>Let&apos;s Build Something <span style={{ color: C.bronze, fontStyle: "italic" }}>Enduring</span></>}
        description="Whether you are evaluating a site, planning a development, or rethinking a space — we are ready to think with you."
      />

      <section style={{ background: C.cream, padding: "clamp(60px, 8vh, 80px) clamp(8px, 2vw, 14px) clamp(80px, 12vh, 120px)" }}>
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-16 px-4 sm:px-6">
          {/* Left column - Contact Info */}
          <Reveal>
            <div>
              <h2 
                style={{ 
                  fontFamily: "var(--font-display)", 
                  fontSize: "clamp(24px, 4vw, 28px)", 
                  fontWeight: 400, 
                  color: C.noir, 
                  margin: "0 0 clamp(20px, 3vw, 28px)" 
                }}
              >
                Get in Touch
              </h2>
              
              <div className="flex flex-col gap-6">
                {contactInfo.map((c, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div 
                      className="flex items-center justify-center shrink-0" 
                      style={{ 
                        width: "clamp(40px, 6vw, 48px)", 
                        height: "clamp(40px, 6vw, 48px)", 
                        borderRadius: R.md, 
                        background: C.bronzeMuted 
                      }}
                    >
                      {c.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div 
                        className="uppercase mb-0.5" 
                        style={{ 
                          fontFamily: "var(--font-body)", 
                          fontSize: "clamp(10px, 1.5vw, 11px)", 
                          letterSpacing: "0.1em", 
                          color: C.stone 
                        }}
                      >
                        {c.label}
                      </div>
                      <div 
                        style={{ 
                          fontFamily: "var(--font-body)", 
                          fontSize: "clamp(14px, 2.2vw, 16px)", 
                          color: C.noir, 
                          fontWeight: 500,
                          wordBreak: "break-word"
                        }}
                      >
                        {c.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Hours Card */}
              <div 
                className="mt-8 lg:mt-12" 
                style={{ 
                  background: C.white, 
                  borderRadius: R.xl, 
                  padding: "clamp(20px, 3vw, 28px) clamp(18px, 2.5vw, 24px)" 
                }}
              >
                <h4 
                  className="uppercase mb-4" 
                  style={{ 
                    fontFamily: "var(--font-body)", 
                    fontSize: "clamp(11px, 1.8vw, 12px)", 
                    fontWeight: 500, 
                    letterSpacing: "0.12em", 
                    color: C.bronze 
                  }}
                >
                  Office Hours
                </h4>
                <div className="flex flex-col gap-2">
                  {[
                    { day: "Monday \u2014 Friday", time: "9:00 AM \u2014 6:00 PM" }, 
                    { day: "Saturday", time: "10:00 AM \u2014 2:00 PM" }, 
                    { day: "Sunday", time: "Closed" }
                  ].map((h, i) => (
                    <div 
                      key={i} 
                      className="flex flex-wrap justify-between gap-2" 
                      style={{ fontFamily: "var(--font-body)", fontSize: "clamp(13px, 1.8vw, 14px)" }}
                    >
                      <span style={{ color: C.graphite }}>{h.day}</span>
                      <span style={{ color: C.stone }}>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right column - Contact Form */}
          <Reveal delay={0.15}>
            <div 
              style={{ 
                background: C.white, 
                borderRadius: R.xl, 
                padding: "clamp(28px, 5vw, 44px) clamp(24px, 4vw, 40px)", 
                boxShadow: "0 4px 24px rgba(30,30,30,0.04)" 
              }}
            >
              <h3 
                style={{ 
                  fontFamily: "var(--font-display)", 
                  fontSize: "clamp(20px, 3.5vw, 24px)", 
                  fontWeight: 500, 
                  color: C.noir, 
                  margin: "0 0 8px" 
                }}
              >
                Start a Conversation
              </h3>
              <p 
                style={{ 
                  fontFamily: "var(--font-body)", 
                  fontSize: "clamp(13px, 1.8vw, 14px)", 
                  color: C.stone, 
                  margin: "0 0 clamp(24px, 4vw, 32px)" 
                }}
              >
                Tell us about your project. We typically respond within 24 hours.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Full Name", "Email Address", "Phone Number", "Project Type"].map((label, i) => (
                  <div key={i} className={i === 0 || i === 1 ? "sm:col-span-1" : ""}>
                    <label 
                      className="block mb-1.5" 
                      style={{ 
                        fontFamily: "var(--font-body)", 
                        fontSize: "clamp(11px, 1.6vw, 12px)", 
                        fontWeight: 500, 
                        color: C.graphite 
                      }}
                    >
                      {label}
                    </label>
                    {label === "Project Type" ? (
                      <select
                        className="w-full cursor-pointer transition-colors duration-300"
                        style={{ 
                          padding: "clamp(10px, 1.8vw, 12px) clamp(12px, 2vw, 14px)", 
                          borderRadius: R.sm, 
                          border: `1.5px solid ${C.sand}`, 
                          background: C.parchment, 
                          fontFamily: "var(--font-body)", 
                          fontSize: "clamp(13px, 1.8vw, 14px)", 
                          color: C.noir, 
                          outline: "none",
                          appearance: "none" as const,
                          width: "100%"
                        }}
                        onFocus={(e) => (e.target.style.borderColor = C.bronze)}
                        onBlur={(e) => (e.target.style.borderColor = C.sand)}
                      >
                        <option>Select a service</option>
                        <option>Property Advisory</option>
                        <option>Architecture & Design</option>
                        <option>Exterior Design</option>
                        <option>Interior Design</option>
                        <option>Integrated Project</option>
                      </select>
                    ) : (
                      <input
                        type={label.includes("Email") ? "email" : "text"}
                        placeholder={label}
                        className="w-full transition-colors duration-300"
                        style={{ 
                          padding: "clamp(10px, 1.8vw, 12px) clamp(12px, 2vw, 14px)", 
                          borderRadius: R.sm, 
                          border: `1.5px solid ${C.sand}`, 
                          background: C.parchment, 
                          fontFamily: "var(--font-body)", 
                          fontSize: "clamp(13px, 1.8vw, 14px)", 
                          color: C.noir, 
                          outline: "none",
                          width: "100%"
                        }}
                        onFocus={(e) => (e.target.style.borderColor = C.bronze)}
                        onBlur={(e) => (e.target.style.borderColor = C.sand)}
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <label 
                  className="block mb-1.5" 
                  style={{ 
                    fontFamily: "var(--font-body)", 
                    fontSize: "clamp(11px, 1.6vw, 12px)", 
                    fontWeight: 500, 
                    color: C.graphite 
                  }}
                >
                  Project Brief
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project, timeline, and goals..."
                  className="w-full transition-colors duration-300"
                  style={{ 
                    padding: "clamp(10px, 1.8vw, 12px) clamp(12px, 2vw, 14px)", 
                    borderRadius: R.sm, 
                    border: `1.5px solid ${C.sand}`, 
                    background: C.parchment, 
                    fontFamily: "var(--font-body)", 
                    fontSize: "clamp(13px, 1.8vw, 14px)", 
                    color: C.noir, 
                    outline: "none", 
                    resize: "vertical",
                    width: "100%",
                    minHeight: "100px"
                  }}
                  onFocus={(e) => (e.target.style.borderColor = C.bronze)}
                  onBlur={(e) => (e.target.style.borderColor = C.sand)}
                />
              </div>

              <div className="mt-4">
                <label 
                  className="block mb-1.5" 
                  style={{ 
                    fontFamily: "var(--font-body)", 
                    fontSize: "clamp(11px, 1.6vw, 12px)", 
                    fontWeight: 500, 
                    color: C.graphite 
                  }}
                >
                  Estimated Budget Range
                </label>
                <select
                  className="w-full cursor-pointer transition-colors duration-300"
                  style={{ 
                    padding: "clamp(10px, 1.8vw, 12px) clamp(12px, 2vw, 14px)", 
                    borderRadius: R.sm, 
                    border: `1.5px solid ${C.sand}`, 
                    background: C.parchment, 
                    fontFamily: "var(--font-body)", 
                    fontSize: "clamp(13px, 1.8vw, 14px)", 
                    color: C.noir, 
                    outline: "none", 
                    appearance: "none" as const,
                    width: "100%"
                  }}
                  onFocus={(e) => (e.target.style.borderColor = C.bronze)}
                  onBlur={(e) => (e.target.style.borderColor = C.sand)}
                >
                  <option>Prefer not to say</option>
                  <option>Under $50,000</option>
                  <option>$50,000 — $150,000</option>
                  <option>$150,000 — $500,000</option>
                  <option>$500,000+</option>
                </select>
              </div>

              <button
                className="w-full mt-7 cursor-pointer transition-all duration-300"
                style={{ 
                  padding: "clamp(14px, 2.2vw, 16px)", 
                  borderRadius: R.pill, 
                  border: "none", 
                  background: C.noir, 
                  color: C.white, 
                  fontFamily: "var(--font-body)", 
                  fontSize: "clamp(13px, 1.8vw, 14px)", 
                  fontWeight: 500, 
                  letterSpacing: "0.03em"
                }}
                onMouseEnter={(e) => { (e.target as HTMLButtonElement).style.background = C.bronze; }}
                onMouseLeave={(e) => { (e.target as HTMLButtonElement).style.background = C.noir; }}
              >
                Submit Inquiry
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}