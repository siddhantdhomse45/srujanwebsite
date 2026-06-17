import { useState, useEffect, useRef } from "react";

const stories = [
  {
    id: 1,
    tag: "Enterprise Portal",
    title: "Enterprise Portal for American Provider",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80",
    challenge:
      "The client needed to modernize legacy processes, interlink a variety of data sets, improve communication between responsible parties and eliminate data duplicates across multiple locations in the corresponding systems. This warranted a unified software solution that would serve as a single source of the important and updated data that employees can easily access and organize, avoiding data duplication.",
    solution:
      "Waves Techno-Vision LLP created an enterprise portal that eliminates significant manual efforts and builds a knowledge base collecting information from across all business units, compiling data from previous findings during customer outages. This solution increases visibility and provides employees with operational and technical information and instruction manuals to effectively operate across the units.",
    tags: ["ERP", "Portal", "Data Unification"],
  },
  {
    id: 2,
    tag: "Construction ERP",
    title: "Custom ERP System for Global Contractor",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80",
    challenge:
      "A multinational construction firm was running disconnected systems for HR, accounting, and project management across 14 countries. Manual reconciliation consumed hundreds of person-hours per month, and financial reporting was delayed by up to three weeks at quarter close.",
    solution:
      "We designed and deployed a unified ERP platform with a single data model spanning all regions. Automated payroll, real-time cost tracking, and a centralized reporting engine reduced quarter-close time from three weeks to two days and cut reconciliation overhead by 78%.",
    tags: ["ERP", "Finance", "Multi-Region"],
  },
  {
    id: 3,
    tag: "Mobile Inspection",
    title: "Mobile Inspection App for Infrastructure Client",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80",
    challenge:
      "Field inspectors were using paper-based checklists and uploading photos manually at the end of each shift. Defect data arrived too late to prevent rework, and audit preparation required weeks of document collation.",
    solution:
      "A cross-platform mobile inspection app with offline capability enabled real-time defect capture, photo annotation, and instant assignment to remediation teams. Audit-ready PDF reports are now generated in one click, reducing rework costs by 34% in the first year.",
    tags: ["Mobile", "Inspection", "Field Ops"],
  },
  {
    id: 4,
    tag: "Analytics Dashboard",
    title: "Portfolio Analytics Platform for REIT",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
    challenge:
      "A real estate investment trust managing 60+ active construction projects had no consolidated view of budget burn, schedule adherence, or safety performance. Executives relied on weekly spreadsheet summaries that were always out of date.",
    solution:
      "We built a live portfolio analytics dashboard pulling data from all project management tools via API. Executives now see real-time SPI, CPI, and safety KPIs across every site, with drill-down to individual line items — eliminating the weekly report cycle entirely.",
    tags: ["Analytics", "BI", "Executive"],
  },
  {
    id: 5,
    tag: "Partner Portal",
    title: "Subcontractor Portal for National Builder",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
    challenge:
      "Managing 200+ active subcontractors through email and phone created constant delays in RFI responses, submittal approvals, and invoice processing. Project managers spent up to 40% of their time on coordination overhead alone.",
    solution:
      "A branded subcontractor portal with role-based access streamlined RFI and submittal workflows, gave subs real-time visibility into approval status, and integrated with the client's accounting system for automated invoice matching — reducing coordination overhead by over half.",
    tags: ["Portal", "Workflow", "Finance"],
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

export default function ClientSuccessStories() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(1);
  const [headerRef, headerInView] = useInView(0.2);
  const [cardRef, cardInView] = useInView(0.1);

  const goTo = (idx, dir = 1) => {
    if (animating) return;
    setAnimating(true);
    setDirection(dir);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 380);
  };

  const prev = () => goTo((current - 1 + stories.length) % stories.length, -1);
  const next = () => goTo((current + 1) % stories.length, 1);

  const story = stories[current];

  return (
    <section
      style={{
        background: "linear-gradient(180deg,#020b18 0%,#041530 60%,#020b18 100%)",
        fontFamily: "'DM Sans','Segoe UI',sans-serif",
        padding: "clamp(60px, 10vw, 100px) 0 clamp(60px, 10vw, 80px)",
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <style>{`
        /* Responsive styles */
        @media (max-width: 900px) {
          .stories-card-grid {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          .stories-image-side {
            height: 280px !important;
          }
          .stories-text-side {
            padding: 32px 28px !important;
          }
          .stories-arrows {
            position: static !important;
            display: flex !important;
            justify-content: center !important;
            gap: 20px !important;
            margin-top: 32px !important;
          }
          .stories-arrow-btn {
            position: static !important;
            transform: none !important;
            width: 44px !important;
            height: 44px !important;
          }
        }
        @media (max-width: 640px) {
          .stories-text-side {
            padding: 24px 20px !important;
          }
          .stories-text-side h3 {
            font-size: 20px !important;
            margin-bottom: 20px !important;
          }
          .stories-text-side .divider {
            margin-bottom: 20px !important;
          }
          .stories-text-side p {
            font-size: 12px !important;
            line-height: 1.7 !important;
          }
          .stories-image-side .top-tag {
            top: 16px !important;
            left: 16px !important;
            font-size: 10px !important;
            padding: 4px 10px !important;
          }
          .stories-image-side .bottom-tags {
            bottom: 16px !important;
            left: 16px !important;
            gap: 6px !important;
          }
          .stories-image-side .bottom-tags span {
            padding: 3px 8px !important;
            font-size: 8px !important;
          }
          .stories-dots {
            margin-top: 28px !important;
          }
        }
        @media (max-width: 480px) {
          .stories-text-side {
            padding: 20px 16px !important;
          }
          .stories-image-side {
            height: 220px !important;
          }
        }
      `}</style>

      {/* Blueprint grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(59,130,246,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.03) 1px,transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Ambient glows */}
      <div style={{ position: "absolute", top: "15%", left: "0%", width: "min(500px, 70vw)", height: "min(500px, 70vw)", borderRadius: "50%", background: "radial-gradient(circle,rgba(37,99,235,0.08),transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "0%", width: "min(400px, 60vw)", height: "min(400px, 60vw)", borderRadius: "50%", background: "radial-gradient(circle,rgba(99,102,241,0.07),transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(16px, 5vw, 80px)", position: "relative", zIndex: 10, width: "100%" }}>

        {/* Header */}
        <div
          ref={headerRef}
          style={{
            textAlign: "center",
            marginBottom: "clamp(48px, 8vw, 64px)",
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(28px)",
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
            marginBottom: "22px",
          }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "rgba(255,255,255,0.8)", display: "inline-block" }} />
            Case Studies
          </div>
          <h2 style={{
            fontSize: "clamp(28px, 4.5vw, 50px)",
            fontWeight: "900",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "white",
            margin: "0 0 18px",
            lineHeight: 1.1,
          }}>
            Client{" "}
            <span style={{
              background: "linear-gradient(90deg,#60a5fa,#a5b4fc,#7dd3fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Success Stories
            </span>
          </h2>
          <p style={{
            fontSize: "clamp(14px, 2.5vw, 16px)",
            lineHeight: "1.8",
            color: "rgba(148,163,184,0.85)",
            maxWidth: "580px",
            margin: "0 auto",
            padding: "0 16px",
          }}>
            Discover how leading construction companies effectively addressed critical business challenges through digital innovation.
          </p>
        </div>

        {/* Card */}
        <div
          ref={cardRef}
          className="stories-card-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0",
            borderRadius: "24px",
            overflow: "hidden",
            border: "1px solid rgba(59,130,246,0.2)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(59,130,246,0.1)",
            opacity: cardInView ? 1 : 0,
            transform: cardInView ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            minHeight: "520px",
          }}
        >
          {/* Image side */}
          <div
            className="stories-image-side"
            style={{
              position: "relative",
              overflow: "hidden",
              opacity: animating ? 0 : 1,
              transform: animating
                ? `translateX(${direction * -40}px)`
                : "translateX(0)",
              transition: "opacity 0.35s ease, transform 0.35s ease",
            }}
          >
            <img
              src={story.image}
              alt={story.title}
              style={{
                width: "100%", height: "100%",
                objectFit: "cover", objectPosition: "center",
                display: "block",
                filter: "brightness(0.55)",
              }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(135deg,rgba(4,21,48,0.4) 0%,transparent 60%)",
            }} />

            <div className="top-tag" style={{
              position: "absolute", top: "24px", left: "24px",
              padding: "6px 14px", borderRadius: "20px",
              background: "rgba(4,21,48,0.85)",
              border: "1px solid rgba(59,130,246,0.35)",
              backdropFilter: "blur(10px)",
              fontSize: "clamp(10px, 2vw, 11px)", fontWeight: "800",
              color: "#60a5fa", letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}>
              {story.tag}
            </div>

            <div className="bottom-tags" style={{
              position: "absolute", bottom: "24px", left: "24px",
              display: "flex", gap: "8px", flexWrap: "wrap",
            }}>
              {story.tags.map((t) => (
                <span key={t} style={{
                  padding: "5px 12px", borderRadius: "6px",
                  background: "linear-gradient(135deg,rgba(37,99,235,0.5),rgba(99,102,241,0.4))",
                  border: "1px solid rgba(99,102,241,0.3)",
                  backdropFilter: "blur(8px)",
                  fontSize: "clamp(8px, 2vw, 10px)", fontWeight: "800",
                  color: "rgba(255,255,255,0.85)",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                }}>
                  {t}
                </span>
              ))}
            </div>

            <div style={{
              position: "absolute", bottom: "24px", right: "24px",
              fontSize: "clamp(10px, 2vw, 11px)", fontWeight: "800",
              color: "rgba(96,165,250,0.6)", letterSpacing: "0.1em",
            }}>
              {String(current + 1).padStart(2, "0")} / {String(stories.length).padStart(2, "0")}
            </div>
          </div>

          {/* Text side */}
          <div
            className="stories-text-side"
            style={{
              background: "rgba(4,21,48,0.92)",
              backdropFilter: "blur(16px)",
              padding: "48px 44px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              opacity: animating ? 0 : 1,
              transform: animating
                ? `translateX(${direction * 40}px)`
                : "translateX(0)",
              transition: "opacity 0.35s ease, transform 0.35s ease",
            }}
          >
            <h3 style={{
              fontSize: "clamp(16px, 2.5vw, 22px)",
              fontWeight: "900",
              color: "white",
              margin: "0 0 28px",
              lineHeight: 1.3,
            }}>
              {story.title}
            </h3>

            <div className="divider" style={{
              width: "40px", height: "3px", borderRadius: "2px",
              background: "linear-gradient(90deg,#2563eb,#6366f1)",
              marginBottom: "28px",
            }} />

            <div style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div style={{
                  width: "28px", height: "28px", borderRadius: "8px",
                  background: "linear-gradient(135deg,rgba(239,68,68,0.2),rgba(239,68,68,0.1))",
                  border: "1px solid rgba(239,68,68,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2.2" width="14" height="14">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" strokeLinecap="round" />
                  </svg>
                </div>
                <span style={{ fontSize: "13px", fontWeight: "800", color: "white", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  Challenge
                </span>
              </div>
              <p style={{ fontSize: "clamp(12px, 2.2vw, 13px)", lineHeight: "1.8", color: "rgba(148,163,184,0.85)", margin: 0 }}>
                {story.challenge}
              </p>
            </div>

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div style={{
                  width: "28px", height: "28px", borderRadius: "8px",
                  background: "linear-gradient(135deg,rgba(37,99,235,0.25),rgba(99,102,241,0.15))",
                  border: "1px solid rgba(59,130,246,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2.5" width="14" height="14">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span style={{ fontSize: "13px", fontWeight: "800", color: "white", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  Solution
                </span>
              </div>
              <p style={{ fontSize: "clamp(12px, 2.2vw, 13px)", lineHeight: "1.8", color: "rgba(148,163,184,0.85)", margin: 0 }}>
                {story.solution}
              </p>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="stories-dots" style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "36px" }}>
          {stories.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              style={{
                width: i === current ? "28px" : "10px",
                height: "10px",
                borderRadius: "5px",
                border: "none",
                background: i === current
                  ? "linear-gradient(90deg,#2563eb,#6366f1)"
                  : "rgba(59,130,246,0.25)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
                boxShadow: i === current ? "0 0 12px rgba(37,99,235,0.5)" : "none",
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation arrows - responsive wrapper */}
      <div className="stories-arrows" style={{
        position: "absolute",
        top: "50%",
        left: 0,
        right: 0,
        transform: "translateY(-50%)",
        display: "flex",
        justifyContent: "space-between",
        pointerEvents: "none",
        padding: "0 16px",
      }}>
        <NavArrow dir="left" onClick={prev} />
        <NavArrow dir="right" onClick={next} />
      </div>
    </section>
  );
}

function NavArrow({ dir, onClick }) {
  const [hov, setHov] = useState(false);
  const isLeft = dir === "left";
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="stories-arrow-btn"
      style={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        left: isLeft ? "16px" : "auto",
        right: isLeft ? "auto" : "16px",
        zIndex: 20,
        width: "clamp(40px, 6vw, 48px)",
        height: "clamp(40px, 6vw, 48px)",
        borderRadius: "50%",
        border: hov ? "1.5px solid rgba(96,165,250,0.6)" : "1.5px solid rgba(255,255,255,0.12)",
        background: hov ? "rgba(37,99,235,0.2)" : "rgba(4,21,48,0.7)",
        backdropFilter: "blur(10px)",
        color: hov ? "#93c5fd" : "rgba(255,255,255,0.6)",
        cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: hov ? "0 0 20px rgba(37,99,235,0.3)" : "none",
        transform: `translateY(-50%) ${hov ? (isLeft ? "translateX(-2px)" : "translateX(2px)") : ""}`,
        transition: "all 0.3s ease",
        pointerEvents: "auto",
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="18" height="18">
        {isLeft
          ? <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          : <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />}
      </svg>
    </button>
  );
}