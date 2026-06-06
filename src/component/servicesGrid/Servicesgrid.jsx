


// import {
//   Code2,
//   Globe,
//   Smartphone,
//   PenTool,
//   Star,
//   Search,
//   Cloud,
//   Megaphone,
// } from "lucide-react";
// import { motion } from "framer-motion";
// import Tilt from "react-parallax-tilt";

// const services = [
//   {
//     title: "Software Development",
//     description:
//       "Custom software solutions tailored to streamline business operations and improve productivity.",
//     icon: Code2,
//   },
//   {
//     title: "Web Designing",
//     description:
//       "Responsive and modern websites optimized for desktop, tablet, and mobile devices.",
//     icon: Globe,
//   },
//   {
//     title: "App Development",
//     description:
//       "High-performance Android and iOS applications with seamless user experiences.",
//     icon: Smartphone,
//   },
//   {
//     title: "Logo Designing",
//     description:
//       "Creative and unique logo designs that establish a strong brand identity.",
//     icon: PenTool,
//   },
//   {
//     title: "Smart Branding",
//     description:
//       "Build a memorable brand presence that connects with your target audience.",
//     icon: Star,
//   },
//   {
//     title: "SEO Optimization",
//     description:
//       "Improve search rankings and increase organic traffic with proven SEO strategies.",
//     icon: Search,
//   },
//   {
//     title: "Web Hosting",
//     description:
//       "Secure, reliable, and scalable hosting solutions for businesses of all sizes.",
//     icon: Cloud,
//   },
//   {
//     title: "Digital Marketing",
//     description:
//       "Drive growth through social media, PPC advertising, content marketing, and more.",
//     icon: Megaphone,
//   },
// ];

// const ServicesSection = () => {
//   return (
//     <section className="relative overflow-hidden py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100">
//       {/* Floating Background */}

//       <motion.div
//         animate={{
//           y: [0, -60, 0],
//           x: [0, 30, 0],
//         }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="absolute top-20 left-0 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-3xl"
//       />

//       <motion.div
//         animate={{
//           y: [0, 60, 0],
//           x: [0, -30, 0],
//         }}
//         transition={{
//           duration: 12,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"
//       />

//       <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
//         {/* Heading */}

//         <motion.div
//           initial={{ opacity: 0, y: 70 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-20"
//         >
//           <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm mb-5">
//             OUR SERVICES
//           </span>

//           <h2 className="text-4xl md:text-6xl font-bold text-slate-900">
//             Solutions We Provide
//           </h2>

//           <p className="text-slate-600 text-lg max-w-3xl mx-auto mt-5">
//             We deliver innovative digital solutions that help businesses grow,
//             improve efficiency, and achieve remarkable success.
//           </p>
//         </motion.div>

//         {/* Services */}

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => {
//             const Icon = service.icon;

//             return (
//               <motion.div
//                 key={index}
//                 initial={{
//                   opacity: 0,
//                   y: 100,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.6,
//                   delay: index * 0.1,
//                 }}
//               >
//                 <Tilt
//                   tiltMaxAngleX={12}
//                   tiltMaxAngleY={12}
//                   perspective={1200}
//                   transitionSpeed={1500}
//                   scale={1.03}
//                   glareEnable={true}
//                   glareMaxOpacity={0.15}
//                 >
//                   <div className="group relative overflow-hidden h-full rounded-3xl bg-white/90 backdrop-blur-xl p-8 border border-white shadow-lg hover:shadow-2xl transition-all duration-500">
//                     {/* Hover Gradient */}

//                     <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50"></div>

//                     {/* Animated Border */}

//                     <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition duration-500">
//                       <div className="w-full h-full rounded-3xl bg-white"></div>
//                     </div>

//                     <div className="relative z-10">
//                       {/* Icon */}

//                       <motion.div
//                         whileHover={{
//                           rotate: 360,
//                           scale: 1.15,
//                         }}
//                         transition={{
//                           duration: 0.8,
//                         }}
//                         className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg"
//                       >
//                         <Icon size={38} className="text-white" />
//                       </motion.div>

//                       {/* Title */}

//                       <h3 className="text-xl font-bold text-center text-slate-900 mb-4">
//                         {service.title}
//                       </h3>

//                       {/* Description */}

//                       <p className="text-slate-600 text-center leading-relaxed">
//                         {service.description}
//                       </p>

//                       {/* Animated Line */}

//                       <div className="w-0 group-hover:w-full h-1 mt-6 mx-auto bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transition-all duration-500"></div>
//                     </div>
//                   </div>
//                 </Tilt>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;











import React, { useState } from "react";
import {
  Code2,
  Globe,
  Smartphone,
  PenTool,
  Star,
  Search,
  Cloud,
  Megaphone,
} from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const services = [
  {
    title: "Software Development",
    description:
      "Custom software solutions tailored to streamline business operations and improve productivity.",
    icon: Code2,
    accent: "#38bdf8",
    grad: "linear-gradient(135deg, #1d6ff0, #38bdf8)",
  },
  {
    title: "Web Designing",
    description:
      "Responsive and modern websites optimized for desktop, tablet, and mobile devices.",
    icon: Globe,
    accent: "#818cf8",
    grad: "linear-gradient(135deg, #6366f1, #818cf8)",
  },
  {
    title: "App Development",
    description:
      "High-performance Android and iOS applications with seamless user experiences.",
    icon: Smartphone,
    accent: "#22d3ee",
    grad: "linear-gradient(135deg, #0e7490, #22d3ee)",
  },
  {
    title: "Logo Designing",
    description:
      "Creative and unique logo designs that establish a strong brand identity.",
    icon: PenTool,
    accent: "#c084fc",
    grad: "linear-gradient(135deg, #9333ea, #c084fc)",
  },
  {
    title: "Smart Branding",
    description:
      "Build a memorable brand presence that connects with your target audience.",
    icon: Star,
    accent: "#fb923c",
    grad: "linear-gradient(135deg, #ea580c, #fb923c)",
  },
  {
    title: "SEO Optimization",
    description:
      "Improve search rankings and increase organic traffic with proven SEO strategies.",
    icon: Search,
    accent: "#34d399",
    grad: "linear-gradient(135deg, #059669, #34d399)",
  },
  {
    title: "Web Hosting",
    description:
      "Secure, reliable, and scalable hosting solutions for businesses of all sizes.",
    icon: Cloud,
    accent: "#38bdf8",
    grad: "linear-gradient(135deg, #0369a1, #38bdf8)",
  },
  {
    title: "Digital Marketing",
    description:
      "Drive growth through social media, PPC advertising, content marketing, and more.",
    icon: Megaphone,
    accent: "#f472b6",
    grad: "linear-gradient(135deg, #db2777, #f472b6)",
  },
];

const GLASS = {
  background: "rgba(255,255,255,0.04)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.09)",
};

const ServicesSection = () => {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #040d1a 0%, #071428 40%, #091e3a 70%, #0a1f3d 100%)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

        .services-wrapper {
          padding: 100px 0 120px;
        }
        .services-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 48px;
          position: relative;
          z-index: 10;
        }
        .services-heading {
          text-align: center;
          margin-bottom: 72px;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        @media (max-width: 1100px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .services-wrapper {
            padding: 64px 0 80px;
          }
          .services-inner {
            padding: 0 16px;
          }
          .services-heading {
            margin-bottom: 48px;
          }
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
        }

        @media (max-width: 420px) {
          .services-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
        }
      `}</style>

      {/* Grid pattern */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.05, pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="sgrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sgrid)" />
      </svg>

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -60, 0], x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: -80, left: -80,
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, #1d4ed8, #0ea5e9, transparent 70%)",
          filter: "blur(90px)", opacity: 0.2, pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ y: [0, 60, 0], x: [0, -30, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", bottom: -100, right: -80,
          width: 550, height: 550, borderRadius: "50%",
          background: "radial-gradient(circle, #7c3aed, #0ea5e9, transparent 70%)",
          filter: "blur(100px)", opacity: 0.18, pointerEvents: "none",
        }}
      />

      <div className="services-wrapper">
        <div className="services-inner">

          {/* Heading */}
          <motion.div
            className="services-heading"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              ...GLASS, borderRadius: 100, padding: "6px 18px", marginBottom: 22,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22d3ee", boxShadow: "0 0 8px #22d3ee", display: "inline-block" }} />
              <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 12, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase" }}>
                Our Services
              </span>
            </div>

            <h2 style={{
              color: "white",
              fontSize: "clamp(26px, 4vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-1.2px",
              lineHeight: 1.1,
              marginBottom: 16,
              margin: "0 0 16px",
            }}>
              Solutions We{" "}
              <span style={{
                background: "linear-gradient(90deg, #38bdf8, #818cf8, #c084fc)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                Provide
              </span>
            </h2>

            <p style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "clamp(13px, 2vw, 16px)",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.75,
            }}>
              We deliver innovative digital solutions that help businesses grow,
              improve efficiency, and achieve remarkable success.
            </p>
          </motion.div>

          {/* Cards grid */}
          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  style={{ height: "100%" }}
                >
                  <Tilt
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    perspective={1200}
                    transitionSpeed={1500}
                    scale={1.03}
                    glareEnable={true}
                    glareMaxOpacity={0.1}
                    style={{ height: "100%" }}
                  >
                    <ServiceCard service={service} Icon={Icon} />
                  </Tilt>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

function ServiceCard({ service, Icon }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 20,
        padding: "clamp(18px, 3vw, 32px) clamp(14px, 2.5vw, 26px) clamp(16px, 2.5vw, 28px)",
        height: "100%",
        overflow: "hidden",
        cursor: "default",
        background: hovered
          ? `linear-gradient(145deg, ${service.accent}12, rgba(255,255,255,0.06))`
          : "rgba(255,255,255,0.03)",
        border: hovered
          ? `1px solid ${service.accent}45`
          : "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: hovered
          ? `0 24px 60px rgba(0,0,0,0.35), 0 0 40px ${service.accent}15`
          : "0 4px 24px rgba(0,0,0,0.2)",
        transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "'DM Sans', sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* Glow blob */}
      <div style={{
        position: "absolute", top: -40, left: "50%", transform: "translateX(-50%)",
        width: 160, height: 160, borderRadius: "50%",
        background: `radial-gradient(circle, ${service.accent}25, transparent 70%)`,
        filter: "blur(30px)", opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s",
        pointerEvents: "none",
      }} />

      {/* Icon */}
      <motion.div
        whileHover={{ rotate: 360, scale: 1.15 }}
        transition={{ duration: 0.7 }}
        style={{
          width: "clamp(48px, 7vw, 72px)",
          height: "clamp(48px, 7vw, 72px)",
          borderRadius: 16,
          background: service.grad,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 8px 24px ${service.accent}40`,
          marginBottom: 16,
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Icon size={28} color="white" />
      </motion.div>

      {/* Title */}
      <h3 style={{
        color: "white",
        fontSize: "clamp(12px, 1.6vw, 16px)",
        fontWeight: 700,
        textAlign: "center",
        marginBottom: 10,
        letterSpacing: "-0.2px",
        position: "relative",
        zIndex: 1,
        margin: "0 0 10px",
      }}>
        {service.title}
      </h3>

      {/* Description — hidden on smallest screens, visible from 480px+ */}
      <p style={{
        color: "rgba(255,255,255,0.45)",
        fontSize: "clamp(11px, 1.3vw, 13.5px)",
        textAlign: "center",
        lineHeight: 1.65,
        margin: 0,
        position: "relative",
        zIndex: 1,
      }}>
        {service.description}
      </p>

      {/* Animated bottom line */}
      <div style={{
        height: 2,
        marginTop: 18,
        borderRadius: 2,
        background: service.grad,
        width: hovered ? "80%" : "0%",
        transition: "width 0.5s cubic-bezier(0.22,1,0.36,1)",
      }} />
    </div>
  );
}

export default ServicesSection;