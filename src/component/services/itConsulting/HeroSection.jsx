// import { useState } from "react";
// import {
//   Calendar,
//   Play,
//   Star,
//   Shield,
//   Check,
//   ChevronRight,
// } from "lucide-react";

// export default function HeroSection() {
//   const [hovBtn1, setHovBtn1] = useState(false);
//   const [hovBtn2, setHovBtn2] = useState(false);
  
//   return (
//     <section
//       style={{
//         position: "relative",
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         overflow: "hidden",
//         fontFamily: "'DM Sans','Segoe UI',sans-serif",
//       }}
//     >
//       {/* ── Background ── */}
//       <div style={{
//         position: "absolute", inset: 0,
//         background: "linear-gradient(135deg,#020b18 0%,#041530 40%,#0a1f3d 70%,#061228 100%)",
//       }} />

//       {/* ── Decorative background elements ── */}
//       <div style={{ position:"absolute", inset:0, pointerEvents:"none", overflow:"hidden" }}>
//         {/* Right glow */}
//         <div style={{
//           position:"absolute", right:"-80px", top:0, bottom:0, width:"62%",
//           background:"linear-gradient(135deg,transparent 0%,rgba(15,40,80,0.6) 30%,rgba(10,30,60,0.85) 100%)",
//         }} />

//         {/* Glow orbs */}
//         <div style={{
//           position:"absolute", right:"8%", top:"10%",
//           width:"380px", height:"380px", borderRadius:"50%",
//           background:"radial-gradient(circle,rgba(37,99,235,0.12),transparent 70%)",
//         }} />
//         <div style={{
//           position:"absolute", right:"20%", bottom:"5%",
//           width:"280px", height:"280px", borderRadius:"50%",
//           background:"radial-gradient(circle,rgba(99,102,241,0.1),transparent 70%)",
//         }} />
//         <div style={{
//           position:"absolute", left:"35%", top:"20%",
//           width:"200px", height:"200px", borderRadius:"50%",
//           background:"radial-gradient(circle,rgba(59,130,246,0.08),transparent 70%)",
//         }} />

//         {/* Grid pattern */}
//         <div style={{
//           position:"absolute", inset:0,
//           backgroundImage:"linear-gradient(rgba(59,130,246,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.035) 1px,transparent 1px)",
//           backgroundSize:"60px 60px",
//         }} />

//         {/* Vignettes */}
//         <div style={{
//           position:"absolute", left:0, top:0, bottom:0, width:"50%",
//           background:"linear-gradient(to right,rgba(2,11,24,0.95) 0%,rgba(2,11,24,0.7) 60%,transparent 100%)",
//         }} />
//         <div style={{
//           position:"absolute", top:0, left:0, right:0, height:"200px",
//           background:"linear-gradient(to bottom,rgba(2,11,24,0.9),transparent)",
//         }} />
//         <div style={{
//           position:"absolute", bottom:0, left:0, right:0, height:"200px",
//           background:"linear-gradient(to top,rgba(2,11,24,0.9),transparent)",
//         }} />

//         {/* Floating particles */}
//         {[
//           {top:"18%",left:"48%",size:3,opacity:0.4},
//           {top:"32%",left:"62%",size:2,opacity:0.3},
//           {top:"55%",left:"55%",size:4,opacity:0.25},
//           {top:"70%",left:"70%",size:2,opacity:0.35},
//           {top:"25%",left:"75%",size:3,opacity:0.3},
//           {top:"80%",left:"45%",size:2,opacity:0.2},
//           {top:"10%",left:"55%",size:2,opacity:0.3},
//         ].map((dot, i) => (
//           <div key={i} style={{
//             position:"absolute",
//             top:dot.top, left:dot.left,
//             width:`${dot.size}px`, height:`${dot.size}px`,
//             borderRadius:"50%",
//             background:"#60a5fa",
//             opacity:dot.opacity,
//           }} />
//         ))}
//       </div>

//       {/* ── Main Content ── */}
//       <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 clamp(20px,5vw,48px)", position:"relative", zIndex:10, width:"100%" }}>
//         <div style={{ maxWidth:"680px" }}>

//           {/* Category badge - Blue/cyan theme */}
//           <div style={{ marginBottom:"24px" }}>
//             <span style={{
//               display:"inline-flex", alignItems:"center", gap:"8px",
//               padding:"7px 18px",
//               borderRadius:"6px",
//               background:"linear-gradient(135deg,#1d4ed8,#2563eb)",
//               color:"white",
//               fontSize:"11px",
//               fontWeight:"800",
//               letterSpacing:"0.2em",
//               textTransform:"uppercase",
//               boxShadow:"0 4px 16px rgba(37,99,235,0.5)",
//             }}>
//               <span style={{
//                 width:"6px", height:"6px", borderRadius:"50%",
//                 background:"rgba(255,255,255,0.8)", display:"inline-block",
//               }} />
//               IT Consulting
//             </span>
//           </div>

//           {/* Main heading */}
//           <h1 style={{
//             fontSize:"clamp(32px,5vw,62px)",
//             fontWeight:"900",
//             letterSpacing:"0.04em",
//             textTransform:"uppercase",
//             lineHeight:1.1,
//             margin:"0 0 28px",
//             color:"white",
//           }}>
//             IT Consulting Services{" "}
//             <br />
//             <span style={{
//               background:"linear-gradient(90deg,#60a5fa,#a5b4fc,#7dd3fc)",
//               WebkitBackgroundClip:"text",
//               WebkitTextFillColor:"transparent",
//             }}>
//               Trusted By
//             </span>
//             <br />
//             Fortune 500 Brands
//           </h1>

//           {/* Description */}
//           <p style={{
//             fontSize:"clamp(14px,1.5vw,16px)",
//             lineHeight:"1.85",
//             color:"rgba(148,163,184,0.9)",
//             maxWidth:"560px",
//             margin:"0 0 44px",
//           }}>
//             We offer IT consulting services tailored to help your business evolve and thrive. Let's partner to design innovative solutions your customers will love, driving your company forward with technology that meets your unique needs.
//           </p>

//           {/* CTA Buttons */}
//           <div style={{ display:"flex", alignItems:"center", gap:"16px", flexWrap:"wrap" }}>
//             {/* Primary button */}
//             <button
//               onMouseEnter={() => setHovBtn1(true)}
//               onMouseLeave={() => setHovBtn1(false)}
//               style={{
//                 display:"inline-flex", alignItems:"center", gap:"10px",
//                 padding:"16px 32px",
//                 borderRadius:"10px",
//                 border:"none",
//                 background: hovBtn1
//                   ? "linear-gradient(135deg,#2563eb,#4f46e5)"
//                   : "linear-gradient(135deg,#1d4ed8,#2563eb)",
//                 color:"white",
//                 fontSize:"clamp(12px,1.2vw,13px)",
//                 fontWeight:"800",
//                 letterSpacing:"0.12em",
//                 textTransform:"uppercase",
//                 cursor:"pointer",
//                 boxShadow: hovBtn1
//                   ? "0 16px 48px -4px rgba(37,99,235,0.75)"
//                   : "0 8px 28px -4px rgba(37,99,235,0.55)",
//                 transform: hovBtn1 ? "translateY(-3px)" : "translateY(0)",
//                 transition:"all 0.3s ease",
//               }}
//             >
//               <Calendar size={16} strokeWidth={2.5} />
//               Book a Free Consultation
//             </button>

//             {/* Secondary button */}
//             <button
//               onMouseEnter={() => setHovBtn2(true)}
//               onMouseLeave={() => setHovBtn2(false)}
//               style={{
//                 display:"inline-flex", alignItems:"center", gap:"10px",
//                 padding:"15px 32px",
//                 borderRadius:"10px",
//                 border: hovBtn2 ? "1.5px solid rgba(96,165,250,0.7)" : "1.5px solid rgba(255,255,255,0.2)",
//                 background: hovBtn2
//                   ? "rgba(37,99,235,0.15)"
//                   : "rgba(255,255,255,0.04)",
//                 color: hovBtn2 ? "#93c5fd" : "rgba(255,255,255,0.8)",
//                 fontSize:"clamp(12px,1.2vw,13px)",
//                 fontWeight:"800",
//                 letterSpacing:"0.12em",
//                 textTransform:"uppercase",
//                 cursor:"pointer",
//                 boxShadow: hovBtn2 ? "0 0 24px rgba(37,99,235,0.2)" : "none",
//                 transform: hovBtn2 ? "translateY(-3px)" : "translateY(0)",
//                 transition:"all 0.3s ease",
//                 backdropFilter:"blur(8px)",
//               }}
//             >
//               <Play size={16} strokeWidth={2.5} />
//               View Portfolio
//             </button>
//           </div>

//           {/* Trust indicators */}
//           <div style={{
//             display:"flex", alignItems:"center", gap:"clamp(20px,4vw,32px)",
//             marginTop:"56px",
//             paddingTop:"32px",
//             borderTop:"1px solid rgba(59,130,246,0.15)",
//             flexWrap:"wrap",
//           }}>
//             {[
//               { value:"500+", label:"Fortune Clients" },
//               { value:"15+", label:"Years Experience" },
//               { value:"98%", label:"Satisfaction Rate" },
//             ].map((stat, i) => (
//               <div key={i} style={{ display:"flex", flexDirection:"column", gap:"4px" }}>
//                 <span style={{
//                   fontSize:"clamp(22px,3vw,26px)",
//                   fontWeight:"900",
//                   background:"linear-gradient(135deg,#ffffff,#60a5fa)",
//                   WebkitBackgroundClip:"text",
//                   WebkitTextFillColor:"transparent",
//                   lineHeight:1,
//                 }}>
//                   {stat.value}
//                 </span>
//                 <span style={{
//                   fontSize:"clamp(10px,2vw,12px)",
//                   fontWeight:"600",
//                   letterSpacing:"0.08em",
//                   textTransform:"uppercase",
//                   color:"rgba(100,116,139,0.8)",
//                 }}>
//                   {stat.label}
//                 </span>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>

//       {/* ── Right side decorative elements ── */}
//       <div style={{
//         position:"absolute", right:0, top:"50%", transform:"translateY(-50%)",
//         width:"40%", height:"80%", pointerEvents:"none", zIndex:5,
//         display:"flex", flexDirection:"column", justifyContent:"center",
//         padding:"0 clamp(20px,4vw,60px)",
//         gap:"18px",
//       }}>
//         {/* Decorative lines */}
//         {[70, 100, 55, 85, 40, 90, 65].map((w, i) => (
//           <div key={i} style={{
//             height:"1px",
//             width:`${w}%`,
//             background:"linear-gradient(to right,rgba(59,130,246,0.35),rgba(99,102,241,0.15),transparent)",
//             alignSelf: i % 2 === 0 ? "flex-start" : "flex-end",
//             opacity:0.6,
//           }} />
//         ))}

//         {/* Floating badge 1 - Fortune 500 */}
//         <div style={{
//           position:"absolute",
//           top:"18%", right:"clamp(20px,5vw,60px)",
//           padding:"14px 20px",
//           borderRadius:"14px",
//           background:"rgba(4,21,48,0.85)",
//           border:"1px solid rgba(59,130,246,0.25)",
//           backdropFilter:"blur(12px)",
//           display:"flex", alignItems:"center", gap:"12px",
//           boxShadow:"0 8px 32px rgba(0,0,0,0.4)",
//         }}>
//           <div style={{
//             width:"36px", height:"36px", borderRadius:"50%",
//             background:"linear-gradient(135deg,#1d4ed8,#4f46e5)",
//             display:"flex", alignItems:"center", justifyContent:"center",
//           }}>
//             <Star size={18} strokeWidth={2} color="white" />
//           </div>
//           <div>
//             <div style={{ fontSize:"13px", fontWeight:"800", color:"white" }}>Fortune 500</div>
//             <div style={{ fontSize:"11px", color:"rgba(148,163,184,0.7)", letterSpacing:"0.05em" }}>Trusted Partner</div>
//           </div>
//         </div>

//         {/* Floating badge 2 - ISO Certified */}
//         <div style={{
//           position:"absolute",
//           bottom:"22%", right:"clamp(30px,6vw,80px)",
//           padding:"12px 18px",
//           borderRadius:"12px",
//           background:"rgba(4,21,48,0.85)",
//           border:"1px solid rgba(59,130,246,0.2)",
//           backdropFilter:"blur(12px)",
//           display:"flex", alignItems:"center", gap:"10px",
//           boxShadow:"0 8px 32px rgba(0,0,0,0.4)",
//         }}>
//           <div style={{
//             width:"32px", height:"32px", borderRadius:"50%",
//             background:"linear-gradient(135deg,#059669,#0d9488)",
//             display:"flex", alignItems:"center", justifyContent:"center",
//           }}>
//             <Shield size={16} strokeWidth={2.5} color="white" />
//           </div>
//           <div>
//             <div style={{ fontSize:"13px", fontWeight:"800", color:"white" }}>ISO Certified</div>
//             <div style={{ fontSize:"11px", color:"rgba(148,163,184,0.7)" }}>Quality Assured</div>
//           </div>
//         </div>
//       </div>

//     </section>
//   );
// }






import React, { useState } from "react";
import {
  Calendar,
  Play,
  Star,
  Shield,
  Briefcase,
  Award,
  BarChart,
} from "lucide-react";

export default function HeroSection() {
  const [hovHero1, setHovHero1] = useState(false);
  const [hovHero2, setHovHero2] = useState(false);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        padding: "clamp(40px, 6vw, 80px) 0",
        fontFamily: "'DM Sans','Segoe UI',sans-serif",
      }}
    >
      {/* ─── Background layers ─────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg,#020b18 0%,#041530 40%,#0a1f3d 70%,#061228 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-80px",
            top: 0,
            bottom: 0,
            width: "62%",
            background:
              "linear-gradient(135deg,transparent 0%,rgba(15,40,80,0.6) 30%,rgba(10,30,60,0.85) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "8%",
            top: "10%",
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(37,99,235,0.12),transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "20%",
            bottom: "5%",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(99,102,241,0.1),transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "35%",
            top: "20%",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(59,130,246,0.08),transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.035) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "50%",
            background:
              "linear-gradient(to right,rgba(2,11,24,0.95) 0%,rgba(2,11,24,0.7) 60%,transparent 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "200px",
            background: "linear-gradient(to bottom,rgba(2,11,24,0.9),transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "200px",
            background: "linear-gradient(to top,rgba(2,11,24,0.9),transparent)",
          }}
        />
        {[
          { top: "18%", left: "48%", size: 3, opacity: 0.4 },
          { top: "32%", left: "62%", size: 2, opacity: 0.3 },
          { top: "55%", left: "55%", size: 4, opacity: 0.25 },
          { top: "70%", left: "70%", size: 2, opacity: 0.35 },
          { top: "25%", left: "75%", size: 3, opacity: 0.3 },
          { top: "80%", left: "45%", size: 2, opacity: 0.2 },
          { top: "10%", left: "55%", size: 2, opacity: 0.3 },
        ].map((dot, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: dot.top,
              left: dot.left,
              width: dot.size + "px",
              height: dot.size + "px",
              borderRadius: "50%",
              background: "#60a5fa",
              opacity: dot.opacity,
            }}
          />
        ))}
      </div>

      {/* ─── Main content ────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 clamp(20px,5vw,48px)",
          position: "relative",
          zIndex: 10,
          width: "100%",
        }}
      >
        <div style={{ maxWidth: "680px" }}>
          {/* Badge */}
          <div style={{ marginBottom: "24px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "7px 18px",
                borderRadius: "6px",
                background: "linear-gradient(135deg,#1d4ed8,#2563eb)",
                color: "white",
                fontSize: "11px",
                fontWeight: "800",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                boxShadow: "0 4px 16px rgba(37,99,235,0.5)",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.8)",
                  display: "inline-block",
                }}
              />
              IT Consulting
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontSize: "clamp(32px,5vw,62px)",
              fontWeight: "900",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              lineHeight: 1.1,
              margin: "0 0 28px",
              color: "white",
            }}
          >
            IT Consulting Services <br />
            <span
              style={{
                background: "linear-gradient(90deg,#60a5fa,#a5b4fc,#7dd3fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Trusted By
            </span>
            <br />
            Fortune 500 Brands
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: "clamp(14px,1.5vw,16px)",
              lineHeight: "1.85",
              color: "rgba(148,163,184,0.9)",
              maxWidth: "560px",
              margin: "0 0 44px",
            }}
          >
            We offer IT consulting services tailored to help your business evolve
            and thrive. Let's partner to design innovative solutions your
            customers will love, driving your company forward with technology
            that meets your unique needs.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <button
              onMouseEnter={() => setHovHero1(true)}
              onMouseLeave={() => setHovHero1(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "16px 32px",
                borderRadius: "10px",
                border: "none",
                background: hovHero1
                  ? "linear-gradient(135deg,#2563eb,#4f46e5)"
                  : "linear-gradient(135deg,#1d4ed8,#2563eb)",
                color: "white",
                fontSize: "clamp(12px,1.2vw,13px)",
                fontWeight: "800",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: "pointer",
                boxShadow: hovHero1
                  ? "0 16px 48px -4px rgba(37,99,235,0.75)"
                  : "0 8px 28px -4px rgba(37,99,235,0.55)",
                transform: hovHero1 ? "translateY(-3px)" : "translateY(0)",
                transition: "all 0.3s ease",
              }}
            >
              <Calendar size={16} strokeWidth={2.5} />
              Book a Free Consultation
            </button>
            <button
              onMouseEnter={() => setHovHero2(true)}
              onMouseLeave={() => setHovHero2(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "15px 32px",
                borderRadius: "10px",
                border: hovHero2
                  ? "1.5px solid rgba(96,165,250,0.7)"
                  : "1.5px solid rgba(255,255,255,0.2)",
                background: hovHero2
                  ? "rgba(37,99,235,0.15)"
                  : "rgba(255,255,255,0.04)",
                color: hovHero2 ? "#93c5fd" : "rgba(255,255,255,0.8)",
                fontSize: "clamp(12px,1.2vw,13px)",
                fontWeight: "800",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: "pointer",
                boxShadow: hovHero2 ? "0 0 24px rgba(37,99,235,0.2)" : "none",
                transform: hovHero2 ? "translateY(-3px)" : "translateY(0)",
                transition: "all 0.3s ease",
                backdropFilter: "blur(8px)",
              }}
            >
              <Play size={16} strokeWidth={2.5} />
              View Portfolio
            </button>
          </div>

          {/* ─── Stats (overlap-ready) ───────────────────────── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(20px,4vw,32px)",
              marginTop: "56px",
              paddingTop: "32px",
              borderTop: "1px solid rgba(59,130,246,0.15)",
              flexWrap: "wrap",
            }}
          >
            {[
              { value: "500+", label: "Fortune Clients", icon: Briefcase },
              { value: "15+", label: "Years Experience", icon: Award },
              { value: "98%", label: "Satisfaction Rate", icon: BarChart },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                <span
                  style={{
                    fontSize: "clamp(22px,3vw,26px)",
                    fontWeight: "900",
                    background: "linear-gradient(135deg,#ffffff,#60a5fa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: "clamp(10px,2vw,12px)",
                    fontWeight: "600",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(100,116,139,0.8)",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Floating decorative badges (overlap) ───────────── */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          width: "40%",
          height: "80%",
          pointerEvents: "none",
          zIndex: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 clamp(20px,4vw,60px)",
          gap: "18px",
        }}
      >
        {[70, 100, 55, 85, 40, 90, 65].map((w, i) => (
          <div
            key={i}
            style={{
              height: "1px",
              width: `${w}%`,
              background:
                "linear-gradient(to right,rgba(59,130,246,0.35),rgba(99,102,241,0.15),transparent)",
              alignSelf: i % 2 === 0 ? "flex-start" : "flex-end",
              opacity: 0.6,
            }}
          />
        ))}

        <div
          style={{
            position: "absolute",
            top: "18%",
            right: "clamp(20px,5vw,60px)",
            padding: "14px 20px",
            borderRadius: "14px",
            background: "rgba(4,21,48,0.85)",
            border: "1px solid rgba(59,130,246,0.25)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "linear-gradient(135deg,#1d4ed8,#4f46e5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Star size={18} strokeWidth={2} color="white" />
          </div>
          <div>
            <div style={{ fontSize: "13px", fontWeight: "800", color: "white" }}>
              Fortune 500
            </div>
            <div
              style={{
                fontSize: "11px",
                color: "rgba(148,163,184,0.7)",
                letterSpacing: "0.05em",
              }}
            >
              Trusted Partner
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "22%",
            right: "clamp(30px,6vw,80px)",
            padding: "12px 18px",
            borderRadius: "12px",
            background: "rgba(4,21,48,0.85)",
            border: "1px solid rgba(59,130,246,0.2)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background: "linear-gradient(135deg,#059669,#0d9488)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Shield size={16} strokeWidth={2.5} color="white" />
          </div>
          <div>
            <div style={{ fontSize: "13px", fontWeight: "800", color: "white" }}>
              ISO Certified
            </div>
            <div
              style={{
                fontSize: "11px",
                color: "rgba(148,163,184,0.7)",
              }}
            >
              Quality Assured
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}