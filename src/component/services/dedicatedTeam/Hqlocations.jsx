import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowRight, FiMapPin } from "react-icons/fi";

const locations = [
  { city:"Mumbai",    country:"India",      top:"46%", left:"62%", accent:"#38bdf8", isHQ:true  },
  { city:"Delhi",     country:"India",      top:"38%", left:"61%", accent:"#38bdf8", isHQ:false },
  { city:"Pune",      country:"India",      top:"50%", left:"62%", accent:"#38bdf8", isHQ:false },
  { city:"London",    country:"UK",         top:"28%", left:"47%", accent:"#818cf8", isHQ:false },
  { city:"New York",  country:"USA",        top:"34%", left:"22%", accent:"#34d399", isHQ:false },
  { city:"Dubai",     country:"UAE",        top:"44%", left:"58%", accent:"#fb923c", isHQ:false },
  { city:"Singapore", country:"Singapore",  top:"58%", left:"73%", accent:"#c084fc", isHQ:false },
  { city:"Sydney",    country:"Australia",  top:"68%", left:"79%", accent:"#fbbf24", isHQ:false },
];

const stats = [
  { value:"76%",  label:"Engineers with 5+ years IT experience", accent:"#38bdf8", grad:"linear-gradient(135deg,#1d4ed8,#38bdf8)" },
  { value:"~14%", label:"Total attrition rate",                  accent:"#818cf8", grad:"linear-gradient(135deg,#6366f1,#818cf8)" },
  { value:"81%",  label:"Master's degree or higher",             accent:"#34d399", grad:"linear-gradient(135deg,#059669,#34d399)" },
  { value:"~12%", label:"Target attrition for 2025",             accent:"#fb923c", grad:"linear-gradient(135deg,#ea580c,#fb923c)" },
];

function LocationPin({ loc, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity:0,scale:0 }}
      animate={{ opacity:1,scale:1 }}
      transition={{ delay:0.4+index*0.08,duration:0.5,type:"spring",stiffness:260,damping:18 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position:"absolute",
        top:loc.top,left:loc.left,
        transform:"translate(-50%,-50%)",
        cursor:"default",zIndex: hovered ? 20 : 10,
      }}
    >
      {/* pulse rings */}
      <motion.div
        animate={{ scale:[1,2.2,1],opacity:[0.5,0,0.5] }}
        transition={{ duration:2.5,repeat:Infinity,ease:"easeInOut",delay:index*0.3 }}
        style={{
          position:"absolute",inset:-4,borderRadius:"50%",
          border:`1.5px solid ${loc.accent}`,pointerEvents:"none",
        }}
      />
      <motion.div
        animate={{ scale:[1,3,1],opacity:[0.3,0,0.3] }}
        transition={{ duration:2.5,repeat:Infinity,ease:"easeInOut",delay:index*0.3+0.4 }}
        style={{
          position:"absolute",inset:-4,borderRadius:"50%",
          border:`1px solid ${loc.accent}`,pointerEvents:"none",
        }}
      />

      {/* dot */}
      <motion.div
        animate={hovered ? { scale:1.4 } : { scale:1 }}
        style={{
          width: loc.isHQ ? 14 : 10,
          height: loc.isHQ ? 14 : 10,
          borderRadius:"50%",
          background: loc.accent,
          boxShadow:`0 0 ${loc.isHQ?16:10}px ${loc.accent}`,
          position:"relative",zIndex:1,
        }}
      />

      {/* tooltip */}
      <AnimatePresenceShim visible={hovered}>
        <motion.div
          initial={{ opacity:0,y:8,scale:0.9 }}
          animate={{ opacity:1,y:0,scale:1 }}
          exit={{ opacity:0,y:8,scale:0.9 }}
          transition={{ duration:0.25 }}
          style={{
            position:"absolute",bottom:"calc(100% + 10px)",left:"50%",transform:"translateX(-50%)",
            background:"rgba(5,15,45,0.96)",
            backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",
            border:`1px solid ${loc.accent}40`,
            borderRadius:10,padding:"8px 14px",
            whiteSpace:"nowrap",zIndex:30,
            boxShadow:`0 8px 24px rgba(0,0,0,0.4),0 0 16px ${loc.accent}20`,
          }}
        >
          <div style={{ display:"flex",alignItems:"center",gap:5 }}>
            <FiMapPin size={11} color={loc.accent}/>
            <span style={{ color:"white",fontSize:12,fontWeight:700,fontFamily:"'DM Sans',sans-serif" }}>{loc.city}</span>
            {loc.isHQ && (
              <span style={{ background:loc.accent,color:"white",fontSize:9,fontWeight:700,padding:"1px 5px",borderRadius:4,letterSpacing:1 }}>HQ</span>
            )}
          </div>
          <div style={{ color:"rgba(186,230,255,0.55)",fontSize:11,fontFamily:"'DM Sans',sans-serif",marginTop:1 }}>{loc.country}</div>
          {/* arrow */}
          <div style={{
            position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",
            width:0,height:0,
            borderLeft:"5px solid transparent",
            borderRight:"5px solid transparent",
            borderTop:`5px solid ${loc.accent}40`,
          }}/>
        </motion.div>
      </AnimatePresenceShim>
    </motion.div>
  );
}

/* tiny helper — AnimatePresence equivalent without import conflict */
function AnimatePresenceShim({ visible, children }) {
  if (!visible) return null;
  return children;
}

function StatCard({ stat, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity:0,y:30 }}
      animate={inView ? { opacity:1,y:0 } : {}}
      transition={{ duration:0.55,delay:index*0.1,ease:[0.22,1,0.36,1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex:1,minWidth:"clamp(160px,20%,220px)",
        borderRadius:16,padding:"clamp(20px,2.5vw,28px) clamp(16px,2vw,24px)",
        textAlign:"center",
        background: hovered ? `${stat.accent}0e` : "rgba(255,255,255,0.04)",
        border: hovered ? `1px solid ${stat.accent}40` : "1px solid rgba(59,130,246,0.12)",
        backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",
        boxShadow: hovered ? `0 16px 40px rgba(0,0,0,0.3),0 0 28px ${stat.accent}16` : "none",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        transition:"all 0.35s cubic-bezier(0.22,1,0.36,1)",
        position:"relative",overflow:"hidden",
        fontFamily:"'DM Sans',sans-serif",
      }}
    >
      <div style={{
        fontSize:"clamp(26px,3.5vw,38px)",fontWeight:900,lineHeight:1,
        background:stat.grad,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",
        marginBottom:8,letterSpacing:"-1px",
      }}>{stat.value}</div>
      <div style={{ color:"rgba(186,230,255,0.50)",fontSize:"clamp(11px,1.3vw,13px)",fontWeight:500,lineHeight:1.45 }}>
        {stat.label}
      </div>
      <div style={{
        height:2,borderRadius:2,marginTop:14,
        background:stat.grad,
        width: hovered ? "70%" : "0%",
        margin:"14px auto 0",
        transition:"width 0.5s cubic-bezier(0.22,1,0.36,1)",
      }}/>
    </motion.div>
  );
}

export default function HQLocations() {
  const headRef    = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });
  const mapRef     = useRef(null);
  const mapInView  = useInView(mapRef, { once: true, margin: "-60px" });

  return (
    <section style={{
      position:"relative",
      padding:"clamp(64px,10vw,110px) 0 clamp(64px,10vw,120px)",
      background:"linear-gradient(135deg,#040d1a 0%,#071428 40%,#091e3a 70%,#0a1f3d 100%)",
      overflow:"hidden",
      fontFamily:"'DM Sans',sans-serif",
      borderTop:"1px solid rgba(59,130,246,0.08)",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>

      <svg style={{ position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.05,pointerEvents:"none" }} xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="hqlgrid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/></pattern></defs>
        <rect width="100%" height="100%" fill="url(#hqlgrid)"/>
      </svg>
      <motion.div animate={{ scale:[1,1.1,1],opacity:[0.13,0.22,0.13] }} transition={{ duration:10,repeat:Infinity,ease:"easeInOut" }}
        style={{ position:"absolute",top:-100,left:-80,width:480,height:480,borderRadius:"50%",background:"radial-gradient(circle,#1e40af,#3b82f6,transparent 70%)",filter:"blur(90px)",pointerEvents:"none" }}/>
      <motion.div animate={{ scale:[1,1.08,1],opacity:[0.12,0.20,0.12] }} transition={{ duration:14,repeat:Infinity,ease:"easeInOut" }}
        style={{ position:"absolute",bottom:-80,right:-80,width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle,#4f46e5,#06b6d4,transparent 70%)",filter:"blur(100px)",pointerEvents:"none" }}/>

      <div style={{ maxWidth:1280,margin:"0 auto",padding:"0 clamp(16px,5vw,48px)",position:"relative",zIndex:10 }}>

        {/* header */}
        <motion.div ref={headRef} initial={{ opacity:0,y:30 }} animate={headInView ? { opacity:1,y:0 } : {}} transition={{ duration:0.7 }} style={{ textAlign:"center",marginBottom:"clamp(36px,5vw,60px)" }}>
          <div style={{ display:"inline-flex",alignItems:"center",gap:8,background:"rgba(59,130,246,0.10)",backdropFilter:"blur(20px)",border:"1px solid rgba(59,130,246,0.25)",borderRadius:100,padding:"6px 18px",marginBottom:20 }}>
            <motion.span animate={{ opacity:[1,0.3,1] }} transition={{ duration:1.8,repeat:Infinity }} style={{ width:6,height:6,borderRadius:"50%",background:"#38bdf8",boxShadow:"0 0 8px #38bdf8",display:"inline-block" }}/>
            <span style={{ color:"#93c5fd",fontSize:12,fontWeight:700,letterSpacing:2.5,textTransform:"uppercase" }}>Global Presence</span>
          </div>
          <h2 style={{ color:"white",fontSize:"clamp(24px,4.5vw,52px)",fontWeight:900,letterSpacing:"-1.5px",lineHeight:1.08,marginBottom:18 }}>
            HQ &{" "}
            <span style={{ background:"linear-gradient(90deg,#38bdf8,#60a5fa,#818cf8)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent" }}>Delivery Locations</span>
          </h2>
          <p style={{ color:"rgba(186,230,255,0.50)",fontSize:"clamp(14px,1.7vw,17px)",lineHeight:1.85,maxWidth:620,margin:"0 auto" }}>
            We scout and hire the best technical talent globally to ensure your team is staffed with top qualified engineers delivering excellence from day one.
          </p>
        </motion.div>

        {/* world map */}
        <motion.div
          ref={mapRef}
          initial={{ opacity:0,y:30 }}
          animate={mapInView ? { opacity:1,y:0 } : {}}
          transition={{ duration:0.8,ease:[0.22,1,0.36,1] }}
          style={{
            position:"relative",
            borderRadius:24,overflow:"hidden",
            border:"1px solid rgba(59,130,246,0.14)",
            background:"rgba(255,255,255,0.02)",
            backdropFilter:"blur(20px)",
            marginBottom:32,
            aspectRatio:"21/9",
            minHeight:300,
          }}
        >
          {/* SVG World Map (simplified continents outline) */}
          <svg
            viewBox="0 0 1000 430"
            style={{ position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.12 }}
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* dot grid world map pattern */}
            <defs>
              <pattern id="dots" width="12" height="12" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="rgba(96,165,250,0.7)"/>
              </pattern>
            </defs>
            {/* North America */}
            <ellipse cx="175" cy="165" rx="120" ry="90" fill="url(#dots)" opacity="0.9"/>
            {/* South America */}
            <ellipse cx="225" cy="300" rx="70" ry="95" fill="url(#dots)" opacity="0.9"/>
            {/* Europe */}
            <ellipse cx="490" cy="145" rx="70" ry="60" fill="url(#dots)" opacity="0.9"/>
            {/* Africa */}
            <ellipse cx="510" cy="270" rx="75" ry="100" fill="url(#dots)" opacity="0.9"/>
            {/* Asia */}
            <ellipse cx="680" cy="180" rx="190" ry="120" fill="url(#dots)" opacity="0.9"/>
            {/* Australia */}
            <ellipse cx="790" cy="320" rx="75" ry="55" fill="url(#dots)" opacity="0.9"/>
          </svg>

          {/* gradient overlay on map */}
          <div style={{
            position:"absolute",inset:0,
            background:"linear-gradient(135deg,rgba(4,13,26,0.3),transparent 50%,rgba(4,13,26,0.3))",
            pointerEvents:"none",
          }}/>

          {/* location pins */}
          {locations.map((loc,i) => (
            <LocationPin key={loc.city} loc={loc} index={i}/>
          ))}

          {/* SDLC watermark label */}
          <div style={{
            position:"absolute",bottom:16,left:"50%",transform:"translateX(-50%)",
            display:"flex",alignItems:"center",gap:8,
            background:"rgba(5,15,40,0.80)",
            backdropFilter:"blur(12px)",
            border:"1px solid rgba(59,130,246,0.15)",
            borderRadius:100,padding:"5px 16px",
          }}>
            <span style={{ width:5,height:5,borderRadius:"50%",background:"#38bdf8",boxShadow:"0 0 6px #38bdf8",display:"inline-block" }}/>
            <span style={{ color:"rgba(147,197,253,0.60)",fontSize:11,fontWeight:600,letterSpacing:2,textTransform:"uppercase",fontFamily:"'DM Sans',sans-serif" }}>
              {locations.length} Global Offices
            </span>
          </div>
        </motion.div>

        {/* location chips row */}
        <motion.div
          initial={{ opacity:0,y:16 }}
          animate={mapInView ? { opacity:1,y:0 } : {}}
          transition={{ duration:0.6,delay:0.3 }}
          style={{ display:"flex",flexWrap:"wrap",gap:10,justifyContent:"center",marginBottom:48 }}
        >
          {locations.map((loc,i) => (
            <motion.div
              key={loc.city}
              initial={{ opacity:0,scale:0.8 }}
              animate={mapInView ? { opacity:1,scale:1 } : {}}
              transition={{ delay:0.4+i*0.06,duration:0.4 }}
              style={{
                display:"inline-flex",alignItems:"center",gap:7,
                padding:"6px 14px",borderRadius:100,
                background:`${loc.accent}10`,border:`1px solid ${loc.accent}30`,
                fontFamily:"'DM Sans',sans-serif",
              }}
            >
              <span style={{ width:5,height:5,borderRadius:"50%",background:loc.accent,boxShadow:`0 0 5px ${loc.accent}`,flexShrink:0 }}/>
              <span style={{ color:"rgba(186,230,255,0.70)",fontSize:12,fontWeight:600 }}>{loc.city}</span>
              <span style={{ color:"rgba(147,197,253,0.40)",fontSize:11 }}>{loc.country}</span>
              {loc.isHQ && (
                <span style={{ background:loc.accent,color:"white",fontSize:8,fontWeight:800,padding:"1px 5px",borderRadius:4,letterSpacing:1 }}>HQ</span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* stats row */}
        <div style={{ display:"flex",gap:"clamp(12px,2vw,20px)",flexWrap:"wrap" }}>
          {stats.map((s,i) => <StatCard key={s.value+i} stat={s} index={i}/>)}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity:0,y:20 }}
          animate={mapInView ? { opacity:1,y:0 } : {}}
          transition={{ delay:0.5,duration:0.6 }}
          style={{ textAlign:"center",marginTop:"clamp(40px,5vw,60px)" }}
        >
          <motion.button
            whileHover={{ scale:1.05,boxShadow:"0 0 44px rgba(59,130,246,0.55)" }}
            whileTap={{ scale:0.97 }}
            style={{
              display:"inline-flex",alignItems:"center",gap:10,
              background:"linear-gradient(135deg,#1d4ed8,#3b82f6)",
              border:"none",borderRadius:12,
              color:"white",fontFamily:"'DM Sans',sans-serif",
              fontWeight:700,fontSize:"clamp(12px,1.4vw,14px)",
              letterSpacing:"0.16em",textTransform:"uppercase",
              padding:"clamp(14px,1.8vw,17px) clamp(28px,3.5vw,40px)",
              cursor:"pointer",
              boxShadow:"0 4px 24px rgba(59,130,246,0.40)",
            }}
          >
            Got a Project for Us?
            <FiArrowRight size={16}/>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}