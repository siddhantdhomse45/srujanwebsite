import { useState, useEffect, useRef } from "react";

const solutions = [
  {
    id: "erp",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="24" height="24">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07" />
      </svg>
    ),
    title: "Enterprise Resource Planning (ERP)",
    desc: "Build a custom solution that integrates HR, accounting, project management, and more. Automate core processes, enable seamless collaboration, and boost profitability.",
    bullets: [
      "Uniform user experience across all software modules",
      "Standardized, converged infrastructure and data points",
      "Single access to accounting, payroll, asset management and end-to-end analytics",
      "Maximized asset utilization across multiple sites, predictive maintenance",
      "Fast compliance checks and status monitoring",
      "Drastically reduced paperwork and improved visibility",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
  },
  {
    id: "pm",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="24" height="24">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Project Management",
    desc: "End-to-end project lifecycle control from initial bid to final handover. Real-time Gantt charts, resource allocation, and milestone tracking across all your sites.",
    bullets: [
      "Real-time Gantt charts and milestone tracking",
      "Resource allocation and workload balancing",
      "Subcontractor and vendor coordination",
      "Budget vs actuals with change order management",
      "Mobile-first field updates and daily logs",
      "Risk register and issue escalation workflows",
    ],
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&q=80",
  },
  {
    id: "inspection",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="24" height="24">
        <path d="M9 11l3 3L22 4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: "Inspection Management",
    desc: "Digitize your quality control and safety inspection processes. Capture defects, assign remediation tasks, and close punch lists from the field on any device.",
    bullets: [
      "Configurable inspection templates per project type",
      "Photo and video evidence capture on mobile",
      "Automated defect assignment and tracking",
      "Third-party inspector access with limited permissions",
      "Audit-ready reports generated in one click",
      "Integration with BIM models for location tagging",
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80",
  },
  {
    id: "portal",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="24" height="24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Customer Portal & Partner Portal",
    desc: "Give clients and partners a branded self-service hub. Share progress reports, RFIs, submittals, and approvals without endless email threads.",
    bullets: [
      "Branded portal with role-based access controls",
      "Real-time project status and milestone visibility",
      "Document sharing, versioning, and sign-off",
      "RFI and submittal workflows with audit trail",
      "Invoice review and payment status tracking",
      "Notification preferences per user and project",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
  },
  {
    id: "integrations",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="24" height="24">
        <rect x="2" y="2" width="8" height="8" rx="1" />
        <rect x="14" y="2" width="8" height="8" rx="1" />
        <rect x="2" y="14" width="8" height="8" rx="1" />
        <path d="M18 14v1a2 2 0 0 1-2 2H6" />
        <path d="M22 18h-4" />
      </svg>
    ),
    title: "Construction Integrations",
    desc: "Connect your existing tools — Procore, AutoCAD, SAP, Oracle, and more — into a unified data layer so your teams stop switching tabs and start shipping projects.",
    bullets: [
      "Pre-built connectors for Procore, Revit, AutoCAD",
      "ERP bridges: SAP, Oracle, Microsoft Dynamics",
      "IoT sensor and equipment telemetry ingestion",
      "GIS and mapping platform integration",
      "Open REST API and webhook framework",
      "ETL pipelines for legacy system migration",
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
  },
  {
    id: "analytics",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="24" height="24">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Analytics & Reporting",
    desc: "Portfolio-level dashboards that surface cost overruns, schedule drift, and safety incidents — without manual report assembly.",
    bullets: [
      "Executive dashboards across all active projects",
      "Cost vs budget variance with drill-down capability",
      "Schedule performance index (SPI / CPI) tracking",
      "Safety KPIs: incident rates, near-miss trends",
      "Custom report builder with scheduled delivery",
      "Data export to Power BI, Tableau, or Excel",
    ],
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=900&q=80",
  },
  {
    id: "onboarding",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="24" height="24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" y1="8" x2="19" y2="14" />
        <line x1="22" y1="11" x2="16" y2="11" />
      </svg>
    ),
    title: "Project Onboarding and Training",
    desc: "Structured onboarding programs ensure every team member — from site workers to project directors — gets up to speed fast and stays certified.",
    bullets: [
      "Role-based onboarding workflows and checklists",
      "In-app guided tours and contextual tooltips",
      "Video training library with progress tracking",
      "Live virtual training sessions and workshops",
      "Certification tracking and renewal reminders",
      "Custom LMS integration for enterprise clients",
    ],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function SolutionRow({ solution, index }) {
  const isEven = index % 2 === 0;
  const [ref, inView] = useInView();
  const [imgHov, setImgHov] = useState(false);

  return (
    <div
      ref={ref}
      className="solution-row"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(32px, 6vw, 64px)",
        alignItems: "center",
        padding: "clamp(48px, 8vw, 80px) 0",
        borderBottom: "1px solid rgba(59,130,246,0.08)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(48px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        transitionDelay: "0.1s",
      }}
    >
      {/* Image side */}
      <div
        className="solution-image"
        style={{ order: isEven ? 1 : 2 }}
        onMouseEnter={() => setImgHov(true)}
        onMouseLeave={() => setImgHov(false)}
      >
        <div
          style={{
            position: "relative",
            borderRadius: "clamp(16px, 3vw, 20px)",
            overflow: "hidden",
            boxShadow: imgHov
              ? "0 32px 80px rgba(37,99,235,0.35), 0 0 0 1px rgba(59,130,246,0.4)"
              : "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(59,130,246,0.15)",
            transition: "box-shadow 0.4s ease, transform 0.4s ease",
            transform: imgHov ? "scale(1.02) translateY(-4px)" : "scale(1) translateY(0)",
          }}
        >
          <img
            src={solution.image}
            alt={solution.title}
            style={{
              width: "100%",
              height: "clamp(240px, 40vw, 340px)",
              objectFit: "cover",
              display: "block",
              filter: imgHov ? "brightness(0.75)" : "brightness(0.55)",
              transition: "filter 0.4s ease",
            }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: isEven
              ? "linear-gradient(135deg,rgba(4,21,48,0.5) 0%,transparent 60%)"
              : "linear-gradient(225deg,rgba(4,21,48,0.5) 0%,transparent 60%)",
          }} />
          <div style={{
            position: "absolute",
            top: "clamp(12px, 3vw, 20px)",
            left: isEven ? "clamp(12px, 3vw, 20px)" : "auto",
            right: isEven ? "auto" : "clamp(12px, 3vw, 20px)",
            width: "clamp(40px, 6vw, 48px)",
            height: "clamp(40px, 6vw, 48px)",
            borderRadius: "clamp(10px, 2vw, 12px)",
            background: "linear-gradient(135deg,#1d4ed8,#4f46e5)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "white",
            boxShadow: "0 8px 24px rgba(37,99,235,0.5)",
          }}>
            {solution.icon}
          </div>
          <div style={{
            position: "absolute",
            bottom: "clamp(12px, 3vw, 20px)",
            right: isEven ? "clamp(12px, 3vw, 20px)" : "auto",
            left: isEven ? "auto" : "clamp(12px, 3vw, 20px)",
            padding: "6px 14px",
            borderRadius: "20px",
            background: "rgba(4,21,48,0.85)",
            border: "1px solid rgba(59,130,246,0.3)",
            backdropFilter: "blur(10px)",
            fontSize: "clamp(10px, 2vw, 11px)",
            fontWeight: "800",
            color: "#60a5fa",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}>
            {String(index + 1).padStart(2, "0")} / {String(solutions.length).padStart(2, "0")}
          </div>
        </div>
      </div>

      {/* Text side */}
      <div
        className="solution-text"
        style={{
          order: isEven ? 2 : 1,
          opacity: inView ? 1 : 0,
          transform: inView
            ? "translateX(0)"
            : isEven ? "translateX(40px)" : "translateX(-40px)",
          transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
        }}
      >
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          padding: "6px 14px", borderRadius: "6px",
          background: "linear-gradient(135deg,#1d4ed8,#2563eb)",
          color: "white", fontSize: "clamp(9px, 2vw, 10px)", fontWeight: "800",
          letterSpacing: "0.2em", textTransform: "uppercase",
          boxShadow: "0 4px 16px rgba(37,99,235,0.4)",
          marginBottom: "20px",
        }}>
          <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "rgba(255,255,255,0.8)" }} />
          Solution {String(index + 1).padStart(2, "0")}
        </div>

        <h3 style={{
          fontSize: "clamp(20px, 3.5vw, 30px)",
          fontWeight: "900",
          color: "white",
          margin: "0 0 16px",
          lineHeight: 1.2,
        }}>
          {solution.title}
        </h3>

        <div style={{
          width: "48px", height: "3px", borderRadius: "2px",
          background: "linear-gradient(90deg,#2563eb,#6366f1)",
          marginBottom: "20px",
        }} />

        <p style={{
          fontSize: "clamp(14px, 2.5vw, 15px)",
          lineHeight: "1.85",
          color: "rgba(148,163,184,0.9)",
          margin: "0 0 28px",
        }}>
          {solution.desc}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "11px", marginBottom: "32px" }}>
          {solution.bullets.map((b, i) => (
            <div
              key={i}
              style={{
                display: "flex", alignItems: "flex-start", gap: "12px",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : "translateX(20px)",
                transition: `opacity 0.5s ease ${0.3 + i * 0.07}s, transform 0.5s ease ${0.3 + i * 0.07}s`,
              }}
            >
              <div style={{
                width: "20px", height: "20px", borderRadius: "50%",
                background: "linear-gradient(135deg,#1d4ed8,#4f46e5)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, marginTop: "1px",
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" width="10" height="10">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span style={{ fontSize: "clamp(12px, 2.2vw, 13px)", color: "rgba(203,213,225,0.85)", lineHeight: "1.65" }}>
                {b}
              </span>
            </div>
          ))}
        </div>

        <LearnMoreBtn />
      </div>

      {/* Responsive CSS override for small screens */}
      <style>{`
        @media (max-width: 900px) {
          .solution-row {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .solution-image {
            order: 1 !important;
          }
          .solution-text {
            order: 2 !important;
            transform: translateX(0) !important;
            text-align: center;
          }
          .solution-text > div:first-child {
            margin-left: auto;
            margin-right: auto;
          }
          .solution-text > .divider {
            margin-left: auto;
            margin-right: auto;
          }
          .solution-text .bullets-list {
            align-items: center;
          }
          .solution-text .bullets-list > div {
            justify-content: center;
            text-align: left;
          }
          .solution-text button {
            margin: 0 auto;
          }
        }
        @media (max-width: 600px) {
          .solution-text .bullets-list {
            gap: 8px;
          }
          .solution-text .bullets-list > div {
            gap: 8px;
          }
        }
      `}</style>
    </div>
  );
}

function LearnMoreBtn() {
  const [hov, setHov] = useState(false);
  return (
    <button
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: "10px",
        padding: "clamp(12px, 2vw, 14px) clamp(24px, 4vw, 28px)",
        borderRadius: "10px", border: "none",
        background: hov
          ? "linear-gradient(135deg,#2563eb,#4f46e5)"
          : "linear-gradient(135deg,#1d4ed8,#2563eb)",
        color: "white", fontSize: "clamp(11px, 2vw, 12px)", fontWeight: "800",
        letterSpacing: "0.12em", textTransform: "uppercase",
        cursor: "pointer",
        boxShadow: hov
          ? "0 16px 40px rgba(37,99,235,0.65)"
          : "0 8px 24px rgba(37,99,235,0.4)",
        transform: hov ? "translateY(-3px)" : "translateY(0)",
        transition: "all 0.3s ease",
      }}
    >
      Learn More
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14"
        style={{ transform: hov ? "translateX(4px)" : "translateX(0)", transition: "transform 0.3s ease" }}>
        <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" />
      </svg>
    </button>
  );
}

export default function ConstructionSolutions() {
  const [headerRef, headerInView] = useInView(0.2);

  return (
    <section
      style={{
        background: "linear-gradient(180deg,#020b18 0%,#041530 50%,#020b18 100%)",
        fontFamily: "'DM Sans','Segoe UI',sans-serif",
        padding: "clamp(60px, 10vw, 100px) 0 clamp(60px, 10vw, 80px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Blueprint grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(59,130,246,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.03) 1px,transparent 1px)",
        backgroundSize: "60px 60px",
        pointerEvents: "none",
      }} />

      {/* Ambient glows */}
      <div style={{ position: "absolute", top: "5%", left: "5%", width: "min(500px, 70vw)", height: "min(500px, 70vw)", borderRadius: "50%", background: "radial-gradient(circle,rgba(37,99,235,0.06),transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "5%", right: "5%", width: "min(400px, 60vw)", height: "min(400px, 60vw)", borderRadius: "50%", background: "radial-gradient(circle,rgba(99,102,241,0.06),transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 48px)", position: "relative", zIndex: 10 }}>

        {/* Header */}
        <div
          ref={headerRef}
          style={{
            textAlign: "center",
            marginBottom: "clamp(48px, 8vw, 80px)",
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "7px 18px", borderRadius: "6px",
            background: "linear-gradient(135deg,#1d4ed8,#2563eb)",
            color: "white", fontSize: "clamp(10px, 2.5vw, 11px)", fontWeight: "800",
            letterSpacing: "0.2em", textTransform: "uppercase",
            boxShadow: "0 4px 16px rgba(37,99,235,0.5)",
            marginBottom: "24px",
          }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "rgba(255,255,255,0.8)", display: "inline-block" }} />
            Platform Capabilities
          </div>

          <h2 style={{
            fontSize: "clamp(28px, 4.5vw, 48px)",
            fontWeight: "900",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "white",
            margin: "0 0 20px",
            lineHeight: 1.1,
          }}>
            Our Construction{" "}
            <span style={{
              background: "linear-gradient(90deg,#60a5fa,#a5b4fc,#7dd3fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Software Solutions
            </span>
          </h2>

          <p style={{
            fontSize: "clamp(14px, 2.5vw, 16px)",
            lineHeight: "1.8",
            color: "rgba(148,163,184,0.85)",
            maxWidth: "620px",
            margin: "0 auto",
            padding: "0 16px",
          }}>
            We develop full-scale software for construction companies to help you digitalize your green building business processes, achieve operational efficiency, and drive innovation.
          </p>
        </div>

        {/* Alternating rows */}
        {solutions.map((solution, index) => (
          <SolutionRow key={solution.id} solution={solution} index={index} />
        ))}

      </div>
    </section>
  );
}