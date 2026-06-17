// import { useState } from "react";

// const features = [
//   {
//     id: 1,
//     title: "Cloud Transition & Architecture Revamp",
//     description:
//       "Legacy IT systems can hinder progress. With our enterprise architecture specialists, the transition from cumbersome IT structures to agile, cloud-based solutions becomes seamless. We emphasize streamlined delivery and the integration of pioneering technologies, positioning you at the forefront of innovation.",
//     icon: (
//       <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.5" width="52" height="52">
//         <path d="M38 36H14a10 10 0 1 1 2-19.8A14 14 0 1 1 38 36z" />
//         <path d="M28 42v-12M22 34l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     ),
//     number: "01",
//     accent: "rgba(37,99,235,0.9)",
//     glow: "rgba(37,99,235,0.4)",
//   },
//   {
//     id: 2,
//     title: "Balanced Tech Integration & Delivery",
//     description:
//       "Consistency in delivering top-notch IT products and services is crucial for your enterprise and your clientele – but to truly stand out, integrating new technologies is essential. Our IT consulting bridges this gap, ensuring you deliver quality while embracing innovation without compromise.",
//     icon: (
//       <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.5" width="52" height="52">
//         <rect x="8" y="16" width="16" height="14" rx="3" />
//         <rect x="32" y="16" width="16" height="14" rx="3" />
//         <rect x="20" y="34" width="16" height="14" rx="3" />
//         <path d="M16 30v4h12M40 30v4H28" strokeLinecap="round" />
//       </svg>
//     ),
//     number: "02",
//     accent: "rgba(99,102,241,0.9)",
//     glow: "rgba(99,102,241,0.4)",
//   },
//   {
//     id: 3,
//     title: "Optimized Software Portfolio",
//     description:
//       "Our IT consultants meticulously analyze your business operations and the software tools in use. After evaluating your enterprise software and mobile strategies, we provide insights on necessary alterations, potential developments, and third-party integrations to clear the path for efficiency.",
//     icon: (
//       <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.5" width="52" height="52">
//         <rect x="10" y="8" width="36" height="30" rx="4" />
//         <path d="M10 18h36" />
//         <path d="M18 28l5 5 10-10" strokeLinecap="round" strokeLinejoin="round" />
//         <path d="M16 38l-4 10M40 38l4 10M10 48h36" strokeLinecap="round" />
//       </svg>
//     ),
//     number: "03",
//     accent: "rgba(14,165,233,0.9)",
//     glow: "rgba(14,165,233,0.4)",
//   },
// ];

// export default function FeaturesWithCTA() {
//   const [hovered, setHovered] = useState(null);
//   const [hovCTA, setHovCTA] = useState(false);

//   return (
//     <div
//       style={{
//         background: "linear-gradient(160deg,#020b18 0%,#041530 45%,#061d42 75%,#020e24 100%)",
//         fontFamily: "'DM Sans','Segoe UI',sans-serif",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Ambient bg */}
//       <div style={{ position:"absolute", inset:0, pointerEvents:"none" }}>
//         <div style={{ position:"absolute", top:"-60px", left:"20%", width:"560px", height:"360px", borderRadius:"50%", background:"radial-gradient(ellipse,rgba(37,99,235,0.15),transparent 70%)" }} />
//         <div style={{ position:"absolute", bottom:"0", right:"15%", width:"420px", height:"320px", borderRadius:"50%", background:"radial-gradient(circle,rgba(99,102,241,0.12),transparent 70%)" }} />
//         <div style={{
//           position:"absolute", inset:0,
//           backgroundImage:"linear-gradient(rgba(59,130,246,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.035) 1px,transparent 1px)",
//           backgroundSize:"60px 60px",
//         }} />
//       </div>

//       {/* ── 3 Feature Panels ── */}
//       <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", position:"relative", zIndex:1 }}>
//         {features.map((f, i) => {
//           const isHov = hovered === i;
//           return (
//             <div
//               key={f.id}
//               onMouseEnter={() => setHovered(i)}
//               onMouseLeave={() => setHovered(null)}
//               style={{
//                 position:"relative",
//                 padding:"60px 48px 64px",
//                 borderRight: i < 2 ? "1px solid rgba(59,130,246,0.1)" : "none",
//                 background: isHov
//                   ? `linear-gradient(160deg,rgba(29,78,216,0.18),rgba(15,40,90,0.12))`
//                   : "transparent",
//                 transition:"background 0.4s ease",
//                 cursor:"pointer",
//                 overflow:"hidden",
//               }}
//             >
//               {/* Top gradient bar */}
//               <div style={{
//                 position:"absolute", top:0, left:0, right:0, height:"3px",
//                 background: isHov
//                   ? `linear-gradient(90deg,${f.accent},rgba(99,102,241,0.6),transparent)`
//                   : "linear-gradient(90deg,rgba(37,99,235,0.2),transparent)",
//                 transition:"all 0.4s ease",
//               }} />

//               {/* Number */}
//               <div style={{
//                 fontSize:"11px", fontWeight:"900", letterSpacing:"0.2em",
//                 color: isHov ? "rgba(96,165,250,0.8)" : "rgba(71,85,105,0.4)",
//                 marginBottom:"20px",
//                 transition:"color 0.3s",
//               }}>
//                 {f.number}
//               </div>

//               {/* Icon */}
//               <div style={{
//                 display:"inline-flex",
//                 alignItems:"center", justifyContent:"center",
//                 width:"68px", height:"68px",
//                 borderRadius:"18px",
//                 background: isHov ? "rgba(37,99,235,0.2)" : "rgba(255,255,255,0.04)",
//                 border: isHov ? "1.5px solid rgba(59,130,246,0.45)" : "1.5px solid rgba(255,255,255,0.07)",
//                 color: isHov ? "#60a5fa" : "rgba(148,163,184,0.4)",
//                 marginBottom:"28px",
//                 filter: isHov ? `drop-shadow(0 0 14px ${f.glow})` : "none",
//                 transform: isHov ? "scale(1.06) translateY(-3px)" : "scale(1) translateY(0)",
//                 transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
//               }}>
//                 {f.icon}
//               </div>

//               {/* Title */}
//               <h3 style={{
//                 fontSize:"20px",
//                 fontWeight:"900",
//                 letterSpacing:"0.04em",
//                 textTransform:"uppercase",
//                 color: isHov ? "#f1f5f9" : "rgba(226,232,240,0.8)",
//                 marginBottom:"20px",
//                 lineHeight:1.25,
//                 transition:"color 0.3s",
//               }}>
//                 {f.title}
//               </h3>

//               {/* Description */}
//               <p style={{
//                 fontSize:"14px",
//                 lineHeight:"1.9",
//                 color: isHov ? "rgba(148,163,184,0.9)" : "rgba(100,116,139,0.8)",
//                 margin:"0 0 28px",
//                 transition:"color 0.3s",
//               }}>
//                 {f.description}
//               </p>

//               {/* Learn more */}
//               <div style={{
//                 display:"flex", alignItems:"center", gap:"8px",
//                 opacity: isHov ? 1 : 0,
//                 transform: isHov ? "translateY(0)" : "translateY(8px)",
//                 transition:"all 0.35s ease",
//               }}>
//                 <div style={{
//                   width:"28px", height:"28px", borderRadius:"50%",
//                   border:"1.5px solid rgba(96,165,250,0.5)",
//                   background:"rgba(37,99,235,0.2)",
//                   display:"flex", alignItems:"center", justifyContent:"center",
//                 }}>
//                   <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2.5" width="12" height="12">
//                     <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                 </div>
//                 <span style={{ fontSize:"12px", fontWeight:"700", letterSpacing:"0.12em", textTransform:"uppercase", color:"#60a5fa" }}>
//                   Learn More
//                 </span>
//               </div>

//               {/* Corner radial glow */}
//               {isHov && (
//                 <div style={{
//                   position:"absolute", top:0, left:0, right:0, bottom:0, pointerEvents:"none",
//                   background:`radial-gradient(ellipse at top left,${f.glow.replace("0.4","0.1")},transparent 55%)`,
//                 }} />
//               )}

//               {/* Bottom left number watermark */}
//               <div style={{
//                 position:"absolute", bottom:"20px", right:"28px",
//                 fontSize:"72px", fontWeight:"900", lineHeight:1,
//                 color:"rgba(255,255,255,0.03)",
//                 userSelect:"none",
//               }}>
//                 {f.number}
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* ── CTA Banner ── */}
//       <div style={{
//         position:"relative", zIndex:1,
//         borderTop:"1px solid rgba(59,130,246,0.12)",
//         background:"linear-gradient(135deg,rgba(15,30,60,0.9),rgba(8,20,45,0.95))",
//         padding:"40px 80px",
//         display:"flex",
//         alignItems:"center",
//         justifyContent:"space-between",
//         gap:"40px",
//         flexWrap:"wrap",
//       }}>
//         {/* Left glow accent */}
//         <div style={{
//           position:"absolute", left:0, top:0, bottom:0, width:"4px",
//           background:"linear-gradient(to bottom,#1d4ed8,#6366f1,transparent)",
//           borderRadius:"0 2px 2px 0",
//         }} />

//         <div style={{ flex:1, minWidth:"280px" }}>
//           <p style={{
//             fontSize:"clamp(16px,2.2vw,22px)",
//             fontWeight:"900",
//             letterSpacing:"0.05em",
//             textTransform:"uppercase",
//             color:"white",
//             margin:0,
//             lineHeight:1.3,
//           }}>
//             Simplify Your Digital Journey With{" "}
//             <span style={{
//               background:"linear-gradient(90deg,#60a5fa,#a5b4fc)",
//               WebkitBackgroundClip:"text",
//               WebkitTextFillColor:"transparent",
//             }}>
//               Strategic Consulting.
//             </span>
//           </p>
//         </div>

//         <button
//           onMouseEnter={() => setHovCTA(true)}
//           onMouseLeave={() => setHovCTA(false)}
//           style={{
//             display:"inline-flex", alignItems:"center", gap:"12px",
//             padding:"16px 36px",
//             borderRadius:"12px",
//             border:"none",
//             background: hovCTA
//               ? "linear-gradient(135deg,#2563eb,#4f46e5)"
//               : "linear-gradient(135deg,#1d4ed8,#2563eb)",
//             color:"white",
//             fontSize:"13px",
//             fontWeight:"800",
//             letterSpacing:"0.12em",
//             textTransform:"uppercase",
//             cursor:"pointer",
//             whiteSpace:"nowrap",
//             boxShadow: hovCTA
//               ? "0 16px 48px -4px rgba(37,99,235,0.75)"
//               : "0 8px 28px -4px rgba(37,99,235,0.55)",
//             transform: hovCTA ? "translateY(-3px)" : "translateY(0)",
//             transition:"all 0.3s ease",
//             flexShrink:0,
//           }}
//         >
//           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
//             <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" strokeLinecap="round" />
//           </svg>
//           Request a Free Consultation
//         </button>
//       </div>
//     </div>
//   );
// }






// import { useState } from "react";
// import {
//   Cloud,
//   GitBranch,
//   Layers,
//   ArrowRight,
//   Calendar,
// } from "lucide-react";

// const features = [
//   {
//     id: 1,
//     title: "Cloud Transition & Architecture Revamp",
//     description:
//       "Legacy IT systems can hinder progress. With our enterprise architecture specialists, the transition from cumbersome IT structures to agile, cloud-based solutions becomes seamless. We emphasize streamlined delivery and the integration of pioneering technologies, positioning you at the forefront of innovation.",
//     icon: <Cloud size={32} strokeWidth={1.8} />,
//     number: "01",
//     accent: "rgba(37,99,235,0.9)",
//     glow: "rgba(37,99,235,0.4)",
//   },
//   {
//     id: 2,
//     title: "Balanced Tech Integration & Delivery",
//     description:
//       "Consistency in delivering top-notch IT products and services is crucial for your enterprise and your clientele – but to truly stand out, integrating new technologies is essential. Our IT consulting bridges this gap, ensuring you deliver quality while embracing innovation without compromise.",
//     icon: <GitBranch size={32} strokeWidth={1.8} />,
//     number: "02",
//     accent: "rgba(99,102,241,0.9)",
//     glow: "rgba(99,102,241,0.4)",
//   },
//   {
//     id: 3,
//     title: "Optimized Software Portfolio",
//     description:
//       "Our IT consultants meticulously analyze your business operations and the software tools in use. After evaluating your enterprise software and mobile strategies, we provide insights on necessary alterations, potential developments, and third-party integrations to clear the path for efficiency.",
//     icon: <Layers size={32} strokeWidth={1.8} />,
//     number: "03",
//     accent: "rgba(14,165,233,0.9)",
//     glow: "rgba(14,165,233,0.4)",
//   },
// ];

// export default function FeaturesWithCTA() {
//   const [hovered, setHovered] = useState(null);
//   const [hovCTA, setHovCTA] = useState(false);

//   return (
//     <div
//       style={{
//         background: "linear-gradient(160deg,#020b18 0%,#041530 45%,#061d42 75%,#020e24 100%)",
//         fontFamily: "'DM Sans','Segoe UI',sans-serif",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Ambient bg */}
//       <div style={{ position:"absolute", inset:0, pointerEvents:"none" }}>
//         <div style={{ position:"absolute", top:"-60px", left:"20%", width:"560px", height:"360px", borderRadius:"50%", background:"radial-gradient(ellipse,rgba(37,99,235,0.15),transparent 70%)" }} />
//         <div style={{ position:"absolute", bottom:"0", right:"15%", width:"420px", height:"320px", borderRadius:"50%", background:"radial-gradient(circle,rgba(99,102,241,0.12),transparent 70%)" }} />
//         <div style={{
//           position:"absolute", inset:0,
//           backgroundImage:"linear-gradient(rgba(59,130,246,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.035) 1px,transparent 1px)",
//           backgroundSize:"60px 60px",
//         }} />
//       </div>

//       {/* ── 3 Feature Panels (proper gap and padding) ── */}
//       <div style={{
//         display:"grid",
//         gridTemplateColumns:"repeat(3, 1fr)",
//         gap:"0",
//         position:"relative",
//         zIndex:1,
//       }}>
//         {features.map((f, i) => {
//           const isHov = hovered === i;
//           return (
//             <div
//               key={f.id}
//               onMouseEnter={() => setHovered(i)}
//               onMouseLeave={() => setHovered(null)}
//               style={{
//                 position:"relative",
//                 padding:"clamp(48px, 6vw, 64px) clamp(32px, 4vw, 48px)",
//                 borderRight: i < 2 ? "1px solid rgba(59,130,246,0.1)" : "none",
//                 borderBottom: "1px solid rgba(59,130,246,0.08)",
//                 background: isHov
//                   ? `linear-gradient(160deg,rgba(29,78,216,0.18),rgba(15,40,90,0.12))`
//                   : "transparent",
//                 transition:"background 0.4s ease",
//                 cursor:"pointer",
//                 overflow:"hidden",
//               }}
//             >
//               {/* Top gradient bar */}
//               <div style={{
//                 position:"absolute", top:0, left:0, right:0, height:"3px",
//                 background: isHov
//                   ? `linear-gradient(90deg,${f.accent},rgba(99,102,241,0.6),transparent)`
//                   : "linear-gradient(90deg,rgba(37,99,235,0.2),transparent)",
//                 transition:"all 0.4s ease",
//               }} />

//               {/* Number */}
//               <div style={{
//                 fontSize:"clamp(11px, 1.2vw, 13px)",
//                 fontWeight:"900",
//                 letterSpacing:"0.2em",
//                 color: isHov ? "rgba(96,165,250,0.8)" : "rgba(71,85,105,0.4)",
//                 marginBottom:"clamp(16px, 2vw, 20px)",
//                 transition:"color 0.3s",
//               }}>
//                 {f.number}
//               </div>

//               {/* Icon */}
//               <div style={{
//                 display:"inline-flex",
//                 alignItems:"center",
//                 justifyContent:"center",
//                 width:"clamp(60px, 8vw, 68px)",
//                 height:"clamp(60px, 8vw, 68px)",
//                 borderRadius:"18px",
//                 background: isHov ? "rgba(37,99,235,0.2)" : "rgba(255,255,255,0.04)",
//                 border: isHov ? "1.5px solid rgba(59,130,246,0.45)" : "1.5px solid rgba(255,255,255,0.07)",
//                 color: isHov ? "#60a5fa" : "rgba(148,163,184,0.4)",
//                 marginBottom:"clamp(24px, 3vw, 28px)",
//                 filter: isHov ? `drop-shadow(0 0 14px ${f.glow})` : "none",
//                 transform: isHov ? "scale(1.06) translateY(-3px)" : "scale(1) translateY(0)",
//                 transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
//               }}>
//                 {f.icon}
//               </div>

//               {/* Title */}
//               <h3 style={{
//                 fontSize:"clamp(18px, 2.2vw, 22px)",
//                 fontWeight:"900",
//                 letterSpacing:"0.04em",
//                 textTransform:"uppercase",
//                 color: isHov ? "#f1f5f9" : "rgba(226,232,240,0.8)",
//                 marginBottom:"clamp(16px, 2vw, 20px)",
//                 lineHeight:1.25,
//                 transition:"color 0.3s",
//               }}>
//                 {f.title}
//               </h3>

//               {/* Description */}
//               <p style={{
//                 fontSize:"clamp(13px, 1.3vw, 14px)",
//                 lineHeight:"1.9",
//                 color: isHov ? "rgba(148,163,184,0.9)" : "rgba(100,116,139,0.8)",
//                 margin:"0 0 clamp(24px, 3vw, 28px)",
//                 transition:"color 0.3s",
//               }}>
//                 {f.description}
//               </p>

//               {/* Learn more */}
//               <div style={{
//                 display:"flex",
//                 alignItems:"center",
//                 gap:"8px",
//                 opacity: isHov ? 1 : 0,
//                 transform: isHov ? "translateY(0)" : "translateY(8px)",
//                 transition:"all 0.35s ease",
//               }}>
//                 <div style={{
//                   width:"28px", height:"28px", borderRadius:"50%",
//                   border:"1.5px solid rgba(96,165,250,0.5)",
//                   background:"rgba(37,99,235,0.2)",
//                   display:"flex", alignItems:"center", justifyContent:"center",
//                 }}>
//                   <ArrowRight size={12} strokeWidth={2.5} color="#60a5fa" />
//                 </div>
//                 <span style={{
//                   fontSize:"clamp(11px, 1.1vw, 12px)",
//                   fontWeight:"700",
//                   letterSpacing:"0.12em",
//                   textTransform:"uppercase",
//                   color:"#60a5fa",
//                 }}>
//                   Learn More
//                 </span>
//               </div>

//               {/* Corner radial glow */}
//               {isHov && (
//                 <div style={{
//                   position:"absolute", top:0, left:0, right:0, bottom:0, pointerEvents:"none",
//                   background:`radial-gradient(ellipse at top left,${f.glow.replace("0.4","0.1")},transparent 55%)`,
//                 }} />
//               )}

//               {/* Bottom right number watermark */}
//               <div style={{
//                 position:"absolute", bottom:"clamp(12px, 2vw, 20px)", right:"clamp(16px, 2vw, 28px)",
//                 fontSize:"clamp(56px, 8vw, 72px)",
//                 fontWeight:"900", lineHeight:1,
//                 color:"rgba(255,255,255,0.03)",
//                 userSelect:"none",
//                 pointerEvents:"none",
//               }}>
//                 {f.number}
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* ── CTA Banner (proper spacing) ── */}
//       <div style={{
//         position:"relative", zIndex:1,
//         borderTop:"1px solid rgba(59,130,246,0.12)",
//         background:"linear-gradient(135deg,rgba(15,30,60,0.9),rgba(8,20,45,0.95))",
//         padding:"clamp(32px, 5vw, 48px) clamp(32px, 6vw, 80px)",
//         display:"flex",
//         alignItems:"center",
//         justifyContent:"space-between",
//         gap:"clamp(24px, 4vw, 40px)",
//         flexWrap:"wrap",
//       }}>
//         {/* Left glow accent */}
//         <div style={{
//           position:"absolute", left:0, top:0, bottom:0, width:"4px",
//           background:"linear-gradient(to bottom,#1d4ed8,#6366f1,transparent)",
//           borderRadius:"0 2px 2px 0",
//         }} />

//         <div style={{ flex:1, minWidth:"280px" }}>
//           <p style={{
//             fontSize:"clamp(16px, 2.2vw, 22px)",
//             fontWeight:"900",
//             letterSpacing:"0.05em",
//             textTransform:"uppercase",
//             color:"white",
//             margin:0,
//             lineHeight:1.3,
//           }}>
//             Simplify Your Digital Journey With{" "}
//             <span style={{
//               background:"linear-gradient(90deg,#60a5fa,#a5b4fc)",
//               WebkitBackgroundClip:"text",
//               WebkitTextFillColor:"transparent",
//             }}>
//               Strategic Consulting.
//             </span>
//           </p>
//         </div>

//         <button
//           onMouseEnter={() => setHovCTA(true)}
//           onMouseLeave={() => setHovCTA(false)}
//           style={{
//             display:"inline-flex",
//             alignItems:"center",
//             gap:"10px",
//             padding:"clamp(14px, 2vw, 16px) clamp(28px, 4vw, 36px)",
//             borderRadius:"12px",
//             border:"none",
//             background: hovCTA
//               ? "linear-gradient(135deg,#2563eb,#4f46e5)"
//               : "linear-gradient(135deg,#1d4ed8,#2563eb)",
//             color:"white",
//             fontSize:"clamp(12px, 1.3vw, 13px)",
//             fontWeight:"800",
//             letterSpacing:"0.12em",
//             textTransform:"uppercase",
//             cursor:"pointer",
//             whiteSpace:"nowrap",
//             boxShadow: hovCTA
//               ? "0 16px 48px -4px rgba(37,99,235,0.75)"
//               : "0 8px 28px -4px rgba(37,99,235,0.55)",
//             transform: hovCTA ? "translateY(-3px)" : "translateY(0)",
//             transition:"all 0.3s ease",
//             flexShrink:0,
//           }}
//         >
//           <Calendar size={16} strokeWidth={2.5} />
//           Request a Free Consultation
//         </button>
//       </div>
//     </div>
//   );
// }






import React, { useState } from "react";
import {
  Cloud,
  GitBranch,
  Layers,
  ArrowRight,
  Calendar,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Cloud Transition & Architecture Revamp",
    description:
      "Legacy IT systems can hinder progress. With our enterprise architecture specialists, the transition from cumbersome IT structures to agile, cloud-based solutions becomes seamless. We emphasize streamlined delivery and the integration of pioneering technologies, positioning you at the forefront of innovation.",
    icon: Cloud,
    number: "01",
    accent: "rgba(37,99,235,0.9)",
    glow: "rgba(37,99,235,0.4)",
  },
  {
    id: 2,
    title: "Balanced Tech Integration & Delivery",
    description:
      "Consistency in delivering top-notch IT products and services is crucial for your enterprise and your clientele – but to truly stand out, integrating new technologies is essential. Our IT consulting bridges this gap, ensuring you deliver quality while embracing innovation without compromise.",
    icon: GitBranch,
    number: "02",
    accent: "rgba(99,102,241,0.9)",
    glow: "rgba(99,102,241,0.4)",
  },
  {
    id: 3,
    title: "Optimized Software Portfolio",
    description:
      "Our IT consultants meticulously analyze your business operations and the software tools in use. After evaluating your enterprise software and mobile strategies, we provide insights on necessary alterations, potential developments, and third-party integrations to clear the path for efficiency.",
    icon: Layers,
    number: "03",
    accent: "rgba(14,165,233,0.9)",
    glow: "rgba(14,165,233,0.4)",
  },
];

export default function FeaturesWithCTA() {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hovCTA, setHovCTA] = useState(false);

  return (
    <div
      style={{
        background:
          "linear-gradient(160deg,#020b18 0%,#041530 45%,#061d42 75%,#020e24 100%)",
        fontFamily: "'DM Sans','Segoe UI',sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient background */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            top: "-60px",
            left: "20%",
            width: "560px",
            height: "360px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse,rgba(37,99,235,0.15),transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0",
            right: "15%",
            width: "420px",
            height: "320px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(99,102,241,0.12),transparent 70%)",
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
      </div>

      {/* ─── Feature Panels ────────────────────────────────── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "0",
          position: "relative",
          zIndex: 1,
        }}
      >
        {features.map((f, i) => {
          const isHov = hoveredFeature === i;
          const Icon = f.icon;
          return (
            <div
              key={f.id}
              onMouseEnter={() => setHoveredFeature(i)}
              onMouseLeave={() => setHoveredFeature(null)}
              style={{
                position: "relative",
                padding: "clamp(48px, 6vw, 64px) clamp(32px, 4vw, 48px)",
                borderRight: i < 2 ? "1px solid rgba(59,130,246,0.1)" : "none",
                borderBottom: "1px solid rgba(59,130,246,0.08)",
                background: isHov
                  ? `linear-gradient(160deg,rgba(29,78,216,0.18),rgba(15,40,90,0.12))`
                  : "transparent",
                transition: "background 0.4s ease",
                cursor: "pointer",
                overflow: "hidden",
              }}
            >
              {/* Top gradient bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: isHov
                    ? `linear-gradient(90deg,${f.accent},rgba(99,102,241,0.6),transparent)`
                    : "linear-gradient(90deg,rgba(37,99,235,0.2),transparent)",
                  transition: "all 0.4s ease",
                }}
              />

              {/* Number */}
              <div
                style={{
                  fontSize: "clamp(11px, 1.2vw, 13px)",
                  fontWeight: "900",
                  letterSpacing: "0.2em",
                  color: isHov ? "rgba(96,165,250,0.8)" : "rgba(71,85,105,0.4)",
                  marginBottom: "clamp(16px, 2vw, 20px)",
                  transition: "color 0.3s",
                }}
              >
                {f.number}
              </div>

              {/* Icon */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "clamp(60px, 8vw, 68px)",
                  height: "clamp(60px, 8vw, 68px)",
                  borderRadius: "18px",
                  background: isHov
                    ? "rgba(37,99,235,0.2)"
                    : "rgba(255,255,255,0.04)",
                  border: isHov
                    ? "1.5px solid rgba(59,130,246,0.45)"
                    : "1.5px solid rgba(255,255,255,0.07)",
                  color: isHov ? "#60a5fa" : "rgba(148,163,184,0.4)",
                  marginBottom: "clamp(24px, 3vw, 28px)",
                  filter: isHov ? `drop-shadow(0 0 14px ${f.glow})` : "none",
                  transform: isHov
                    ? "scale(1.06) translateY(-3px)"
                    : "scale(1) translateY(0)",
                  transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                }}
              >
                <Icon size={32} strokeWidth={1.8} />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "clamp(18px, 2.2vw, 22px)",
                  fontWeight: "900",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: isHov ? "#f1f5f9" : "rgba(226,232,240,0.8)",
                  marginBottom: "clamp(16px, 2vw, 20px)",
                  lineHeight: 1.25,
                  transition: "color 0.3s",
                }}
              >
                {f.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "clamp(13px, 1.3vw, 14px)",
                  lineHeight: "1.9",
                  color: isHov
                    ? "rgba(148,163,184,0.9)"
                    : "rgba(100,116,139,0.8)",
                  margin: "0 0 clamp(24px, 3vw, 28px)",
                  transition: "color 0.3s",
                }}
              >
                {f.description}
              </p>

              {/* Learn more */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  opacity: isHov ? 1 : 0,
                  transform: isHov ? "translateY(0)" : "translateY(8px)",
                  transition: "all 0.35s ease",
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    border: "1.5px solid rgba(96,165,250,0.5)",
                    background: "rgba(37,99,235,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ArrowRight size={12} strokeWidth={2.5} color="#60a5fa" />
                </div>
                <span
                  style={{
                    fontSize: "clamp(11px, 1.1vw, 12px)",
                    fontWeight: "700",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#60a5fa",
                  }}
                >
                  Learn More
                </span>
              </div>

              {/* Corner glow */}
              {isHov && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    pointerEvents: "none",
                    background: `radial-gradient(ellipse at top left,${f.glow.replace(
                      "0.4",
                      "0.1"
                    )},transparent 55%)`,
                  }}
                />
              )}

              {/* Watermark number */}
              <div
                style={{
                  position: "absolute",
                  bottom: "clamp(12px, 2vw, 20px)",
                  right: "clamp(16px, 2vw, 28px)",
                  fontSize: "clamp(56px, 8vw, 72px)",
                  fontWeight: "900",
                  lineHeight: 1,
                  color: "rgba(255,255,255,0.03)",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                {f.number}
              </div>
            </div>
          );
        })}
      </div>

      {/* ─── CTA Banner ────────────────────────────────────── */}
     
    </div>
  );
}