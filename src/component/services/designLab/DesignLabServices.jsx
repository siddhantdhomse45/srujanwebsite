import { useState } from "react";

const services = [
  {
    id: 1,
    title: "UI/UX Design",
    description:
      "We design intuitive interfaces and seamless user experiences that are visually engaging and highly functional. From wireframes to prototypes, we ensure every design element enhances the user journey.",
    color: "from-violet-500 to-indigo-600",
    glowColor: "rgba(139,92,246,0.4)",
    tag: "UX",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" width="60" height="60">
        <rect x="6" y="10" width="46" height="32" rx="4" />
        <path d="M6 18h46" />
        <circle cx="12" cy="14" r="1.5" fill="currentColor" />
        <circle cx="17" cy="14" r="1.5" fill="currentColor" />
        <circle cx="22" cy="14" r="1.5" fill="currentColor" />
        <rect x="12" y="23" width="14" height="12" rx="2" />
        <path d="M32 24h14M32 29h10M32 34h12" strokeLinecap="round" />
        <path d="M22 46l-4 8M42 46l4 8M18 54h28" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Product Strategy & UX Research",
    description:
      "We help you define product goals and align them with user needs through targeted UX research. Our insights validate ideas and guide smarter, more impactful decisions.",
    color: "from-sky-500 to-cyan-500",
    glowColor: "rgba(14,165,233,0.4)",
    tag: "STRAT",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" width="60" height="60">
        <circle cx="26" cy="26" r="14" />
        <path d="M37 37l10 10" strokeLinecap="round" />
        <circle cx="26" cy="22" r="5" />
        <path d="M19 34c0-3.9 3.1-7 7-7s7 3.1 7 7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Design Audit",
    description:
      "We evaluate your current design to uncover areas for improvement and provide actionable recommendations. Our audits help optimize user flow and enhance product performance.",
    color: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16,185,129,0.4)",
    tag: "AUDIT",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" width="60" height="60">
        <rect x="10" y="6" width="30" height="40" rx="3" />
        <path d="M16 16h18M16 22h18M16 28h10" strokeLinecap="round" />
        <circle cx="44" cy="46" r="12" />
        <path d="M40 46h8M44 42v8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Web Design",
    description:
      "We create responsive, user-friendly websites that deliver a consistent experience across all devices. From landing pages to e-commerce platforms, our designs are built to captivate and convert.",
    color: "from-orange-500 to-rose-500",
    glowColor: "rgba(249,115,22,0.4)",
    tag: "WEB",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" width="60" height="60">
        <rect x="4" y="12" width="36" height="26" rx="3" />
        <rect x="20" y="22" width="38" height="26" rx="3" />
        <path d="M4 18h36M20 28h38" />
        <circle cx="8" cy="15" r="1.2" fill="currentColor" />
        <circle cx="12" cy="15" r="1.2" fill="currentColor" />
        <circle cx="24" cy="25" r="1.2" fill="currentColor" />
        <circle cx="28" cy="25" r="1.2" fill="currentColor" />
        <path d="M26 34h20M26 39h14" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Mobile App Design",
    description:
      "Our mobile app designs are tailored for iOS, Android, and cross-platform applications. We focus on creating apps that are visually appealing, intuitive, and platform-optimized.",
    color: "from-fuchsia-500 to-pink-500",
    glowColor: "rgba(217,70,239,0.4)",
    tag: "APP",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" width="60" height="60">
        <rect x="16" y="4" width="32" height="56" rx="5" />
        <path d="M16 14h32M16 52h32" />
        <circle cx="32" cy="57" r="2.5" />
        <path d="M24 26h16M24 32h10" strokeLinecap="round" />
        <rect x="22" y="36" width="9" height="8" rx="2" />
        <rect x="33" y="36" width="9" height="8" rx="2" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Product Design",
    description:
      "From concept to completion, we design digital products that seamlessly blend UX, UI, and branding. Our solutions are crafted to deliver purpose and value at every stage.",
    color: "from-yellow-500 to-amber-500",
    glowColor: "rgba(234,179,8,0.4)",
    tag: "PROD",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" width="60" height="60">
        <circle cx="32" cy="32" r="14" />
        <path d="M32 18v-6M32 52v-6M18 32h-6M52 32h-6" strokeLinecap="round" />
        <path d="M41.9 22.1l3.5-3.5M18.6 45.4l3.5-3.5M41.9 41.9l3.5 3.5M18.6 18.6l3.5 3.5" strokeLinecap="round" />
        <circle cx="32" cy="32" r="5" />
      </svg>
    ),
  },
  {
    id: 7,
    title: "Software Product Design",
    description:
      "We specialize in designing interfaces and workflows for complex software and SaaS platforms. Our designs make even the most intricate systems easy to use and navigate.",
    color: "from-blue-500 to-indigo-500",
    glowColor: "rgba(59,130,246,0.4)",
    tag: "SAAS",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" width="60" height="60">
        <rect x="8" y="12" width="48" height="36" rx="4" />
        <path d="M8 22h48" />
        <path d="M18 32l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28 42h12" strokeLinecap="round" />
        <circle cx="12" cy="17" r="1.5" fill="currentColor" />
        <circle cx="17" cy="17" r="1.5" fill="currentColor" />
        <circle cx="22" cy="17" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 8,
    title: "Design Testing",
    description:
      "We use A/B and usability testing to ensure every design decision is backed by data. This approach guarantees optimal performance and higher engagement.",
    color: "from-red-500 to-rose-500",
    glowColor: "rgba(239,68,68,0.4)",
    tag: "TEST",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" width="60" height="60">
        <circle cx="32" cy="32" r="18" />
        <path d="M32 14v4M32 46v4M14 32h4M46 32h4" strokeLinecap="round" />
        <circle cx="32" cy="20" r="3" />
        <path d="M32 23v6" strokeLinecap="round" />
        <path d="M25 40c0-3.9 3.1-7 7-7s7 3.1 7 7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 9,
    title: "Branding & Visual Identity",
    description:
      "We craft logos, brand guidelines, and visual styles that define and elevate your brand. Our designs create a lasting impression and resonate with your audience.",
    color: "from-purple-500 to-violet-600",
    glowColor: "rgba(168,85,247,0.4)",
    tag: "BRAND",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" width="60" height="60">
        <polygon points="32,8 40,26 60,26 45,38 50,56 32,44 14,56 19,38 4,26 24,26" />
        <path d="M25 16l2 2M39 16l-2 2M32 6v4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 10,
    title: "Graphic Design",
    description:
      "From marketing materials to business collateral, we deliver compelling visuals that connect with your audience. Our designs are tailored to enhance your brand's impact and messaging.",
    color: "from-teal-500 to-emerald-600",
    glowColor: "rgba(20,184,166,0.4)",
    tag: "GFX",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" width="60" height="60">
        <rect x="8" y="12" width="32" height="24" rx="3" />
        <path d="M8 20h32" />
        <path d="M14 26h20M14 30h12" strokeLinecap="round" />
        <path d="M34 28l18 18" strokeLinecap="round" />
        <path d="M46 38l4 2-2 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 11,
    title: "Redesign",
    description:
      "We transform outdated designs into modern, user-friendly solutions that meet today's standards. Our redesigns improve both functionality and aesthetics to exceed user expectations.",
    color: "from-cyan-500 to-sky-600",
    glowColor: "rgba(6,182,212,0.4)",
    tag: "REDO",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" width="60" height="60">
        <rect x="10" y="12" width="44" height="32" rx="4" />
        <path d="M10 20h44" />
        <path d="M26 34a10 10 0 0 1 12 0" strokeLinecap="round" />
        <path d="M38 34l-3-4M38 34l4-3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 46l3 8M42 46l-3 8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 12,
    title: "Dedicated UI/UX Team",
    description:
      "Our expert designers seamlessly integrate with your team to deliver user-centered solutions. We bring high-quality, customized design expertise to support your goals.",
    color: "from-indigo-500 to-blue-600",
    glowColor: "rgba(99,102,241,0.4)",
    tag: "TEAM",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" width="60" height="60">
        <circle cx="32" cy="18" r="7" />
        <path d="M18 44c0-7.7 6.3-14 14-14s14 6.3 14 14" strokeLinecap="round" />
        <circle cx="14" cy="24" r="5" />
        <path d="M4 46c0-5.5 4.5-10 10-10" strokeLinecap="round" />
        <circle cx="50" cy="24" r="5" />
        <path d="M60 46c0-5.5-4.5-10-10-10" strokeLinecap="round" />
      </svg>
    ),
  },
];

// Inline gradient map so icons render correctly (Tailwind JIT can't build dynamic class names)
const gradientMap = {
  "from-violet-500 to-indigo-600":  "linear-gradient(135deg,#8b5cf6,#4f46e5)",
  "from-sky-500 to-cyan-500":       "linear-gradient(135deg,#0ea5e9,#06b6d4)",
  "from-emerald-500 to-teal-500":   "linear-gradient(135deg,#10b981,#14b8a6)",
  "from-orange-500 to-rose-500":    "linear-gradient(135deg,#f97316,#f43f5e)",
  "from-fuchsia-500 to-pink-500":   "linear-gradient(135deg,#d946ef,#ec4899)",
  "from-yellow-500 to-amber-500":   "linear-gradient(135deg,#eab308,#f59e0b)",
  "from-blue-500 to-indigo-500":    "linear-gradient(135deg,#3b82f6,#6366f1)",
  "from-red-500 to-rose-500":       "linear-gradient(135deg,#ef4444,#f43f5e)",
  "from-purple-500 to-violet-600":  "linear-gradient(135deg,#a855f7,#7c3aed)",
  "from-teal-500 to-emerald-600":   "linear-gradient(135deg,#14b8a6,#059669)",
  "from-cyan-500 to-sky-600":       "linear-gradient(135deg,#06b6d4,#0284c7)",
  "from-indigo-500 to-blue-600":    "linear-gradient(135deg,#6366f1,#2563eb)",
};

export default function DesignLabServices() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      className="min-h-screen py-24 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg,#0f0c29,#1a1a2e,#16213e)" }}
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full"
          style={{ background: "radial-gradient(circle,rgba(124,58,237,0.2),transparent 70%)" }} />
        <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full"
          style={{ background: "radial-gradient(circle,rgba(14,165,233,0.15),transparent 70%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle,rgba(99,102,241,0.08),transparent 70%)" }} />
        {/* grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6"
            style={{ background:"rgba(255,255,255,0.06)", color:"#94a3b8", border:"1px solid rgba(255,255,255,0.1)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse inline-block" />
            What We Create
          </span>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-5 tracking-tight text-white">
            Our Design{" "}
            <span style={{
              background: "linear-gradient(90deg,#a78bfa,#38bdf8,#34d399)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Lab Services
            </span>
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            End-to-end design expertise — from research and strategy to pixel-perfect interfaces that delight users and drive results.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const isHovered = hovered === i;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="relative rounded-2xl p-6 flex flex-col cursor-pointer"
                style={{
                  background: isHovered
                    ? "linear-gradient(145deg,rgba(255,255,255,0.09),rgba(255,255,255,0.04))"
                    : "linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))",
                  border: isHovered
                    ? "1px solid rgba(255,255,255,0.18)"
                    : "1px solid rgba(255,255,255,0.07)",
                  boxShadow: isHovered
                    ? `0 24px 64px -12px ${service.glowColor}`
                    : "0 4px 24px -4px rgba(0,0,0,0.3)",
                  transform: isHovered ? "translateY(-7px)" : "translateY(0)",
                  transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
              >
                {/* Top row: icon + tag */}
                <div className="flex items-start justify-between mb-5">
                  {/* Icon box */}
                  <div
                    className="relative w-14 h-14 rounded-2xl flex items-center justify-center text-white flex-shrink-0"
                    style={{ background: gradientMap[service.color] }}
                  >
                    {isHovered && (
                      <div className="absolute inset-0 rounded-2xl blur-md"
                        style={{ background: service.glowColor, transform:"scale(1.4)", zIndex:0 }} />
                    )}
                    <div className="relative z-10">{service.icon}</div>
                  </div>

                  {/* Tag */}
                  <span className="text-[10px] font-black tracking-widest px-2.5 py-1 rounded-lg"
                    style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)", color:"#64748b" }}>
                    {service.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-[17px] mb-2 leading-snug tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Learn more */}
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold">
                  <span style={{
                    background: isHovered ? gradientMap[service.color] : "none",
                    WebkitBackgroundClip: isHovered ? "text" : "none",
                    WebkitTextFillColor: isHovered ? "transparent" : "#475569",
                    transition: "all 0.3s",
                  }}>
                    Learn more
                  </span>
                  <svg viewBox="0 0 24 24" fill="none" stroke={isHovered ? "white" : "#475569"}
                    strokeWidth="2" className="w-4 h-4"
                    style={{ transform: isHovered ? "translateX(4px)" : "translateX(0)", transition:"transform 0.3s ease" }}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full"
                  style={{
                    background: gradientMap[service.color],
                    opacity: isHovered ? 1 : 0,
                    transition: "opacity 0.4s ease",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* ── CTA ── */}
        <div className="text-center mt-16">
          <button
            className="group inline-flex items-center gap-3 px-9 py-4 rounded-2xl font-bold text-base text-white"
            style={{
              background: "linear-gradient(135deg,#7c3aed,#4f46e5)",
              boxShadow: "0 8px 32px -4px rgba(124,58,237,0.5)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow="0 16px 48px -4px rgba(124,58,237,0.7)"; e.currentTarget.style.transform="translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow="0 8px 32px -4px rgba(124,58,237,0.5)"; e.currentTarget.style.transform="translateY(0)"; }}
          >
            <span>View All Services</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}