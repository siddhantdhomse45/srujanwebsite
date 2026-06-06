import React, { useEffect, useRef, useState } from "react";
import {
  FaHeart,
  FaHammer,
  FaHandsHelping,
  FaLaughSquint,
  FaSeedling,
  FaUsers,
} from "react-icons/fa";

const values = [
  { icon: FaHeart,        label: "Empathy",        desc: "We listen before we speak, and feel before we build.",          accent: "#FF6B6B" },
  { icon: FaHammer,       label: "Craftsmanship",  desc: "Every pixel, every word, every decision — made with care.",     accent: "#FFD93D" },
  { icon: FaHandsHelping, label: "Courtesy",       desc: "Respect is the foundation of every interaction we have.",      accent: "#6BCB77" },
  { icon: FaLaughSquint,  label: "Playfulness",    desc: "Serious work doesn't require a serious face.",                  accent: "#4D96FF" },
  { icon: FaSeedling,     label: "Thriving",       desc: "We grow together — as people, as a team, as a product.",       accent: "#C77DFF" },
  { icon: FaUsers,        label: "Solidarity",     desc: "No one wins alone. We rise by lifting each other.",            accent: "#FF9F1C" },
];

const CoreValues = () => {
  const [visible, setVisible]           = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Fonts + keyframes that Tailwind can't express */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=DM+Sans:wght@300;400;500&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-dm       { font-family: 'DM Sans', sans-serif; }

        /* noise pseudo-element */
        .cv-noise::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        /* centre divider line */
        .cv-divider::after {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          width: 1px; height: 100%;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.06) 70%, transparent);
          z-index: 1;
        }

        /* ghost/outline italic */
        .cv-title-outline {
          font-style: italic;
          color: transparent;
          -webkit-text-stroke: 1px #f0ede8;
        }

        /* image Ken-Burns */
        .cv-img { transform: scale(1.04); opacity: 0; filter: grayscale(30%) brightness(0.6);
                  transition: opacity 1s ease 0.5s, transform 8s ease, filter 0.8s ease; }
        .cv-img.show { opacity: 1; transform: scale(1); filter: grayscale(20%) brightness(0.65); }
        .cv-img-wrap:hover .cv-img { transform: scale(1.03); filter: grayscale(0%) brightness(0.75); }
      `}</style>

      <section
        ref={sectionRef}
        className="cv-noise cv-divider font-dm relative grid grid-cols-2 min-h-screen
                   bg-[#0a0a0f] text-[#f0ede8] overflow-hidden
                   max-[900px]:grid-cols-1"
      >
        {/* ── LEFT COLUMN ──────────────────────────────── */}
        <div className="relative z-[2] flex flex-col">

          {/* Text block */}
          <div className="flex flex-col justify-center px-[60px] pl-[80px] py-[100px]
                          max-[900px]:px-8 max-[900px]:py-[60px]
                          max-[520px]:px-5 max-[520px]:py-12">

            {/* Eyebrow */}
            <p className={`flex items-center gap-3 mb-7 text-[11px] font-medium tracking-[0.3em] uppercase text-[#888]
                           transition-all duration-700
                           ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <span className="block w-8 h-px bg-[#666]" />
              Who we are
            </p>

            {/* Title */}
            <h2 className={`font-playfair font-black leading-none tracking-[-0.02em] mb-8
                            text-[clamp(48px,5vw,72px)]
                            transition-all duration-[800ms] delay-150
                            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              Our{" "}
              <span className="cv-title-outline">Core</span>
              <br />Values
            </h2>

            {/* Body */}
            <p className={`text-base leading-[1.75] text-[#888] font-light mb-[60px]
                           max-w-[380px] max-[900px]:max-w-full
                           transition-all duration-[800ms] delay-300
                           ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              These fundamental principles guide everything we do. We don't just preach them —
              we build them into our platform and products, creating real value by helping people
              work more effectively while bringing their authentic selves to everything they do.
            </p>
          </div>

          {/* Image block */}
          <div className="cv-img-wrap relative overflow-hidden flex-1 min-h-[280px]
                          max-[900px]:h-[340px] max-[900px]:order-first
                          max-[520px]:h-[260px]">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
              alt="Team collaborating"
              className={`cv-img w-full h-full object-cover block ${visible ? "show" : ""}`}
              loading="lazy"
            />
            {/* Gradient overlay + stat */}
            <div className="absolute inset-x-0 bottom-0 z-[3] px-12 pt-12 pb-10"
                 style={{ background: "linear-gradient(to top, rgba(10,10,15,0.95) 0%, transparent 100%)" }}>
              <div className="font-playfair text-[56px] font-black text-[#f0ede8] leading-none mb-1.5">6</div>
              <div className="text-[13px] tracking-[0.2em] uppercase text-[#f0ede8]/50 font-normal">
                Principles we live by
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN ─────────────────────────────── */}
        <div className="relative z-[2] flex flex-col justify-center gap-1
                        px-[80px] pl-[60px] py-20
                        max-[900px]:px-8 max-[900px]:py-5
                        max-[520px]:px-5 max-[520px]:py-4">
          {values.map((val, i) => {
            const Icon      = val.icon;
            const isHovered = hoveredIndex === i;

            return (
              <div
                key={i}
                className={`relative flex items-start gap-5 px-6 py-[22px] rounded-[4px] cursor-default
                            border-l-2 transition-all duration-[250ms]
                            max-[520px]:px-4 max-[520px]:py-[18px]
                            ${isHovered
                              ? "bg-white/[0.04]"
                              : "hover:bg-white/[0.04]"}
                            ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"}`}
                style={{
                  borderLeftColor: isHovered ? val.accent : "transparent",
                  transitionDelay: visible ? `${0.2 + i * 0.08}s` : "0s",
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Icon */}
                <div
                  className={`flex-shrink-0 flex items-center justify-center w-10 h-10 mt-0.5
                              rounded-lg text-base transition-all duration-300
                              ${isHovered
                                ? "scale-110 -rotate-[4deg] bg-white/10"
                                : "bg-white/[0.06] hover:scale-110"}
                             `}
                  style={{
                    border: `1px solid ${isHovered ? val.accent : "rgba(255,255,255,0.08)"}`,
                    color: isHovered ? val.accent : "#aaa",
                  }}
                >
                  <Icon />
                </div>

                {/* Text */}
                <div>
                  <div
                    className="font-playfair text-[20px] font-bold leading-[1.2] mb-1 transition-colors duration-[250ms]"
                    style={{ color: isHovered ? val.accent : "#f0ede8" }}
                  >
                    {val.label}
                  </div>
                  <div
                    className={`text-[13.5px] leading-[1.5] font-light max-w-[320px]
                                transition-colors duration-[250ms]
                                ${isHovered ? "text-[#888]" : "text-[#666]"}`}
                  >
                    {val.desc}
                  </div>
                </div>

                {/* Number badge */}
                <span className="absolute right-6 top-[22px] text-[11px] font-medium tracking-[0.1em] text-white/[0.12] font-dm">
                  0{i + 1}
                </span>
              </div>
            );
          })}
        </div>

        {/* ── BOTTOM DOTS ──────────────────────────────── */}
        <div className="absolute bottom-8 left-[60px] z-[2] flex items-center gap-6
                        max-[900px]:left-8 max-[520px]:left-5">
          {values.map((val, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer"
              style={{
                background: hoveredIndex === i ? val.accent : "#333",
                transform: hoveredIndex === i ? "scale(1.4)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default CoreValues;