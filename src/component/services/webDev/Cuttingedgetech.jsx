import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const tabs = [
  {
    title: "Augmented Reality",
    accent: "#38bdf8",
    grad: "linear-gradient(135deg,#1d6ff0,#38bdf8)",
    desc: "Let your users try on your clothing products using their smartphones, see what makeup looks like on their faces, and see furniture in their homes. These are just examples of the applications of augmented reality (AR).",
    icon: (
      <svg width="52" height="52" fill="none" viewBox="0 0 64 64" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="22" width="44" height="24" rx="6"/>
        <circle cx="22" cy="34" r="6"/>
        <circle cx="42" cy="34" r="6"/>
        <line x1="28" y1="34" x2="36" y2="34"/>
        <line x1="10" y1="28" x2="4" y2="26"/>
        <line x1="54" y1="28" x2="60" y2="26"/>
        <line x1="22" y1="22" x2="22" y2="16"/>
        <line x1="42" y1="22" x2="42" y2="16"/>
      </svg>
    ),
  },
  {
    title: "Cloud Computing",
    accent: "#818cf8",
    grad: "linear-gradient(135deg,#6366f1,#818cf8)",
    desc: "Transfer your solution to scalable cloud storage on Amazon, Google, or Microsoft. Benefit from features like top-level security, automated updates and backups, and streamlined resource allocation.",
    icon: (
      <svg width="52" height="52" fill="none" viewBox="0 0 64 64" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M44 38a10 10 0 10-6.5-17.5A14 14 0 1020 38"/>
        <rect x="22" y="38" width="20" height="6" rx="3"/>
        <rect x="25" y="44" width="14" height="5" rx="2.5"/>
        <line x1="32" y1="38" x2="32" y2="28"/>
      </svg>
    ),
  },
  {
    title: "Virtual Reality",
    accent: "#34d399",
    grad: "linear-gradient(135deg,#059669,#34d399)",
    desc: "Immerse your customers in fully interactive virtual environments. From product demos to virtual tours and training simulations, VR lets you deliver experiences that are impossible in the physical world.",
    icon: (
      <svg width="52" height="52" fill="none" viewBox="0 0 64 64" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="32" r="14"/>
        <circle cx="20" cy="28" r="3"/>
        <circle cx="44" cy="28" r="3"/>
        <path d="M20 31c0 4 2 8 5 10M44 31c0 4-2 8-5 10"/>
        <path d="M14 20c-2 3-3 7-3 12s1 9 3 12M50 20c2 3 3 7 3 12s-1 9-3 12"/>
        <line x1="18" y1="32" x2="26" y2="32"/>
        <line x1="38" y1="32" x2="46" y2="32"/>
      </svg>
    ),
  },
  {
    title: "Internet of Things",
    accent: "#fb923c",
    grad: "linear-gradient(135deg,#ea580c,#fb923c)",
    desc: "Connect your devices and systems into a seamless IoT ecosystem. We build intelligent solutions that collect, transmit, and act on real-time data to automate workflows and enhance user experiences.",
    icon: (
      <svg width="52" height="52" fill="none" viewBox="0 0 64 64" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="32" r="5"/>
        <circle cx="10" cy="20" r="4"/>
        <circle cx="54" cy="20" r="4"/>
        <circle cx="10" cy="44" r="4"/>
        <circle cx="54" cy="44" r="4"/>
        <circle cx="32" cy="8"  r="4"/>
        <circle cx="32" cy="56" r="4"/>
        <line x1="32" y1="27" x2="32" y2="12"/>
        <line x1="32" y1="37" x2="32" y2="52"/>
        <line x1="27" y1="32" x2="14" y2="22"/>
        <line x1="37" y1="32" x2="50" y2="22"/>
        <line x1="27" y1="34" x2="14" y2="42"/>
        <line x1="37" y1="34" x2="50" y2="42"/>
      </svg>
    ),
  },
];

export default function CuttingEdgeTech() {
  const [active, setActive] = useState(0);
  const headRef    = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });
  const tabsRef    = useRef(null);
  const tabsInView = useInView(tabsRef, { once: true, margin: "-40px" });

  const current = tabs[active];

  return (
    <section style={{
      position: "relative",
      padding: "clamp(64px,10vw,110px) 0 clamp(64px,10vw,120px)",
      background: "linear-gradient(135deg,#040d1a 0%,#071428 40%,#091e3a 70%,#0a1f3d 100%)",
      overflow: "hidden",
      fontFamily: "'DM Sans',sans-serif",
      borderTop: "1px solid rgba(255,255,255,0.04)",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>

      <style>{`
        /* Force horizontal scroll on mobile for tabs */
        @media (max-width: 768px) {
          .tab-bar {
            display: flex !important;
            flex-wrap: nowrap !important;
            overflow-x: auto !important;
            overflow-y: hidden !important;
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.07);
            border-radius: 20px;
            margin-bottom: 0;
            scrollbar-width: thin;
          }
          .tab-bar::-webkit-scrollbar {
            height: 3px;
          }
          .tab-bar::-webkit-scrollbar-track {
            background: rgba(255,255,255,0.05);
            border-radius: 4px;
          }
          .tab-bar::-webkit-scrollbar-thumb {
            background: rgba(59,130,246,0.5);
            border-radius: 4px;
          }
          .tab-item {
            flex: 0 0 auto;
            scroll-snap-align: start;
            min-width: 140px;
            border-right: 1px solid rgba(255,255,255,0.06);
            border-bottom: none !important;
          }
          .tab-item:last-child {
            border-right: none;
          }
          .tab-item svg {
            width: 36px !important;
            height: 36px !important;
          }
          .tab-item span {
            white-space: normal !important;
            word-break: keep-all;
            font-size: 12px !important;
            line-height: 1.3;
          }
          .tab-item {
            padding: 16px 12px !important;
            gap: 8px !important;
          }
        }

        /* Content panel stacking on mobile */
        @media (max-width: 640px) {
          .content-panel {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 24px !important;
            padding: 28px 20px !important;
          }
          .content-left {
            width: 100%;
            min-width: auto !important;
          }
          .content-desc {
            width: 100%;
            font-size: 14px !important;
            line-height: 1.7 !important;
          }
        }

        /* Extra small devices */
        @media (max-width: 480px) {
          .tab-item {
            min-width: 120px;
            padding: 12px 10px !important;
          }
          .tab-item svg {
            width: 32px !important;
            height: 32px !important;
          }
          .content-panel {
            padding: 24px 16px !important;
          }
          .content-left h3 {
            font-size: 18px !important;
          }
        }
      `}</style>

      {/* grid background */}
      <svg style={{ position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.05,pointerEvents:"none" }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="cetgrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cetgrid)"/>
      </svg>

      {/* orbs */}
      <motion.div animate={{ scale:[1,1.1,1],opacity:[0.13,0.22,0.13] }} transition={{ duration:10,repeat:Infinity,ease:"easeInOut" }}
        style={{ position:"absolute",top:-100,left:-80,width:460,height:460,borderRadius:"50%",
          background:"radial-gradient(circle,#1d4ed8,#0ea5e9,transparent 70%)",filter:"blur(90px)",pointerEvents:"none" }}/>
      <motion.div animate={{ scale:[1,1.08,1],opacity:[0.12,0.2,0.12] }} transition={{ duration:13,repeat:Infinity,ease:"easeInOut" }}
        style={{ position:"absolute",bottom:-80,right:-80,width:480,height:480,borderRadius:"50%",
          background:"radial-gradient(circle,#7c3aed,#0ea5e9,transparent 70%)",filter:"blur(100px)",pointerEvents:"none" }}/>

      <div style={{ maxWidth:1200,margin:"0 auto",padding:"0 clamp(16px,5vw,48px)",position:"relative",zIndex:10 }}>

        {/* header */}
        <motion.div
          ref={headRef}
          initial={{ opacity:0,y:30 }}
          animate={headInView ? { opacity:1,y:0 } : {}}
          transition={{ duration:0.7 }}
          style={{ textAlign:"center",marginBottom:"clamp(40px,7vw,64px)" }}
        >
          <div style={{
            display:"inline-flex",alignItems:"center",gap:8,
            background:"rgba(255,255,255,0.04)",backdropFilter:"blur(20px)",
            border:"1px solid rgba(255,255,255,0.08)",
            borderRadius:100,padding:"6px 18px",marginBottom:20,
          }}>
            <span style={{ width:6,height:6,borderRadius:"50%",background:"#22d3ee",boxShadow:"0 0 8px #22d3ee",display:"inline-block" }}/>
            <span style={{ color:"rgba(255,255,255,0.65)",fontSize:12,fontWeight:600,letterSpacing:2.5,textTransform:"uppercase" }}>
              Innovation First
            </span>
          </div>

          <h2 style={{
            color:"white",fontSize:"clamp(24px,4.5vw,52px)",
            fontWeight:800,letterSpacing:"-1.5px",lineHeight:1.08,marginBottom:24,
          }}>
            Use the Most{" "}
            <span style={{ background:"linear-gradient(90deg,#38bdf8,#818cf8,#c084fc)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent" }}>
              Cutting-Edge Web Tech
            </span>
          </h2>

          <p style={{
            color:"rgba(255,255,255,0.45)",
            fontSize:"clamp(14px,1.8vw,17px)",
            lineHeight:1.85,maxWidth:740,margin:"0 auto",
          }}>
            When you work with us, your team will draw on expertise at the cutting edge of
            development innovation. We specialize in digital transformation — that means we can
            enhance your web solution with the latest tech in a meaningful and measurable way.
          </p>
        </motion.div>

        {/* tab bar - responsive (grid by default, flex scroll on mobile) */}
        <motion.div
          ref={tabsRef}
          initial={{ opacity:0,y:24 }}
          animate={tabsInView ? { opacity:1,y:0 } : {}}
          transition={{ duration:0.65,delay:0.1 }}
          className="tab-bar"
          style={{
            display:"grid",
            gridTemplateColumns:`repeat(${tabs.length},1fr)`,
            gap:0,
            background:"rgba(255,255,255,0.03)",
            border:"1px solid rgba(255,255,255,0.07)",
            borderRadius:20,
            overflow:"hidden",
          }}
        >
          {tabs.map((tab, i) => {
            const isActive = active === i;
            return (
              <motion.button
                key={tab.title}
                className="tab-item"
                onClick={() => setActive(i)}
                whileHover={{ background: isActive ? undefined : "rgba(255,255,255,0.05)" }}
                style={{
                  display:"flex",flexDirection:"column",alignItems:"center",
                  gap:14,padding:"clamp(20px,3vw,32px) clamp(10px,2vw,20px)",
                  background: isActive
                    ? `linear-gradient(145deg,${tab.accent}12,rgba(255,255,255,0.05))`
                    : "transparent",
                  border:"none",
                  borderRight: i < tabs.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  borderBottom: isActive ? `2px solid ${tab.accent}` : "2px solid transparent",
                  cursor:"pointer",
                  transition:"all 0.35s cubic-bezier(0.22,1,0.36,1)",
                  position:"relative",
                  outline:"none",
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeGlow"
                    style={{
                      position:"absolute",top:0,left:0,right:0,bottom:0,
                      background:`radial-gradient(ellipse 80% 60% at 50% 0%,${tab.accent}15,transparent)`,
                      pointerEvents:"none",
                    }}
                    transition={{ duration:0.4 }}
                  />
                )}

                <div style={{
                  color: isActive ? tab.accent : "rgba(255,255,255,0.3)",
                  transition:"color 0.35s",
                  filter: isActive ? `drop-shadow(0 0 8px ${tab.accent}60)` : "none",
                  position:"relative",zIndex:1,
                  display:"flex",
                  justifyContent:"center",
                }}>
                  {tab.icon}
                </div>

                <span style={{
                  fontSize:"clamp(11px,1.4vw,14px)",fontWeight:isActive ? 700 : 500,
                  color: isActive ? "white" : "rgba(255,255,255,0.45)",
                  transition:"color 0.35s,font-weight 0.2s",
                  textAlign:"center",lineHeight:1.3,
                  position:"relative",zIndex:1,
                  whiteSpace:"nowrap",
                }}>
                  {tab.title}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity:0,y:16 }}
            animate={{ opacity:1,y:0 }}
            exit={{ opacity:0,y:-10 }}
            transition={{ duration:0.45,ease:[0.22,1,0.36,1] }}
            className="content-panel"
            style={{
              marginTop:2,
              background:`linear-gradient(145deg,${current.accent}0a,rgba(255,255,255,0.03))`,
              border:`1px solid ${current.accent}25`,
              borderTop:"none",
              borderRadius:"0 0 20px 20px",
              backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",
              padding:"clamp(28px,4vw,44px) clamp(20px,4vw,48px)",
              display:"flex",gap:"clamp(24px,4vw,56px)",alignItems:"flex-start",
              flexWrap:"wrap",
              position:"relative",overflow:"hidden",
            }}
          >
            {/* side glow */}
            <div style={{
              position:"absolute",left:0,top:0,bottom:0,width:3,
              background:current.grad,borderRadius:"0 0 0 20px",
            }}/>

            {/* left column */}
            <div className="content-left" style={{ minWidth:"clamp(140px,20%,220px)", paddingTop:4 }}>
              <div style={{
                display:"inline-flex",alignItems:"center",gap:8,
                background:`${current.accent}15`,border:`1px solid ${current.accent}35`,
                borderRadius:8,padding:"5px 12px",marginBottom:14,
              }}>
                <span style={{ width:5,height:5,borderRadius:"50%",background:current.accent,boxShadow:`0 0 6px ${current.accent}`,flexShrink:0 }}/>
                <span style={{ color:current.accent,fontSize:10,fontWeight:700,letterSpacing:2,textTransform:"uppercase" }}>
                  Featured
                </span>
              </div>
              <h3 style={{
                margin:0,
                fontSize:"clamp(16px,2vw,22px)",fontWeight:800,
                background:current.grad,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",
                letterSpacing:"-0.5px",lineHeight:1.2,textTransform:"uppercase",
              }}>
                {current.title}
              </h3>
            </div>

            {/* description */}
            <p className="content-desc" style={{
              margin:0,flex:1,
              color:"rgba(255,255,255,0.6)",
              fontSize:"clamp(14px,1.6vw,17px)",
              lineHeight:1.85,
              minWidth:"clamp(200px,40%,400px)",
            }}>
              {current.desc}
            </p>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}