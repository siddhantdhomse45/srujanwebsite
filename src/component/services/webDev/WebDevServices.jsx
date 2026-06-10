
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  MdOutlineWebAsset,
  MdOutlineLanguage,
  MdOutlineDashboardCustomize,
  MdOutlineStorage,
  MdOutlineDevices,
  MdOutlineShoppingCart,
} from "react-icons/md";

const services = [
  {
    Icon: MdOutlineWebAsset,
    title: "Web Application Development",
    desc: "Want to make online banking easier or launch a new social app? Our full-cycle web development services fit exactly what you need. We take care of every design detail — secure, scalable, and perfect across all devices — with integration and ongoing maintenance included.",
  },
  {
    Icon: MdOutlineLanguage,
    title: "Website Development",
    desc: "In today's competitive landscape, a high-performing, user-friendly website is a must. Think of your website as your digital business card. We offer customer-centric, intuitive website development with no limits on functionality — built to resonate with your clients and stakeholders.",
  },
  {
    Icon: MdOutlineDashboardCustomize,
    title: "Web Portal Development",
    desc: "With nearly two decades of engineering expertise, we create reliable and robust web portals that help companies manage workflows effortlessly. We'll help you plan a secure, user-friendly digital space for customers, partners, and employees to access services and information with ease.",
  },
  {
    Icon: MdOutlineStorage,
    title: "CMS Development",
    desc: "A CMS is essential if you want to update website content without third-party help. Your content teams can add anything planned to the website without hassle. CMS connects you with customers, allows easy communication, and is a relief for those frustrated by constantly updating content.",
  },
  {
    Icon: MdOutlineDevices,
    title: "Client-side Development",
    desc: "Our client-side development services focus on creating an exceptional user interface (UI) and user experience (UX). We use technologies such as HTML, CSS, and JavaScript, along with powerful frameworks like React, Angular, and Vue.js, to bring your vision to life.",
  },
  {
    Icon: MdOutlineShoppingCart,
    title: "Custom Ecommerce Development",
    desc: "We dive deep into understanding your target audience and planning the perfect customer experience to maximise your ROI. We stay up-to-date with the latest ecommerce trends to build custom solutions that are both distinctive and effective — helping you grow and expand your brand.",
  },
];

function ServiceCard({ service, index, inView }) {
  const [hovered, setHovered] = useState(false);
  const { Icon, title, desc } = service;

  return (
    <motion.div
      className="wds-card"
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderColor: hovered ? "rgba(59,130,246,0.35)" : "rgba(59,130,246,0.1)",
        background: hovered
          ? "linear-gradient(145deg, rgba(37,99,235,0.08), rgba(7,22,41,0.9))"
          : "rgba(7,22,41,0.6)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 24px 60px rgba(0,0,0,0.5), 0 0 40px rgba(37,99,235,0.12)"
          : "0 4px 24px rgba(0,0,0,0.3)",
      }}
    >
      {/* top accent line */}
      <div
        className="wds-card-topline"
        style={{ opacity: hovered ? 1 : 0 }}
      />

      {/* icon */}
      <div
        className="wds-card-icon"
        style={{
          background: hovered ? "rgba(59,130,246,0.18)" : "rgba(59,130,246,0.08)",
          borderColor: hovered ? "rgba(59,130,246,0.4)" : "rgba(59,130,246,0.15)",
          transform: hovered ? "scale(1.08) rotate(-4deg)" : "scale(1) rotate(0deg)",
        }}
      >
        <Icon size={22} color={hovered ? "#60a5fa" : "#3b82f6"} />
      </div>

      {/* number */}
      <div className="wds-card-num">0{index + 1}</div>

      <h3 className="wds-card-title">{title}</h3>
      <p className="wds-card-desc">{desc}</p>

      {/* bottom cta link */}
      <div
        className="wds-card-link"
        style={{ color: hovered ? "#60a5fa" : "rgba(59,130,246,0.5)" }}
      >
        Learn more
        <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </motion.div>
  );
}

export default function WebDevServices() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        .wds { font-family: 'Inter', sans-serif; }
        .wds *, .wds *::before, .wds *::after { box-sizing: border-box; }

        .wds {
          background: #020b18;
          padding: 110px 0 130px;
          overflow: hidden;
          position: relative;
        }

        /* bg layers */
        .wds-grid {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(59,130,246,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.035) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .wds-orb1 {
          position: absolute; top: -200px; left: -200px;
          width: 700px; height: 700px; border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.28), transparent 70%);
          filter: blur(90px); pointer-events: none; z-index: 0;
        }
        .wds-orb2 {
          position: absolute; bottom: -150px; right: -150px;
          width: 600px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle, rgba(59,130,246,0.18), transparent 70%);
          filter: blur(100px); pointer-events: none; z-index: 0;
        }
        .wds-orb3 {
          position: absolute; top: 40%; left: 50%; transform: translate(-50%,-50%);
          width: 800px; height: 400px; border-radius: 50%;
          background: radial-gradient(ellipse, rgba(29,78,216,0.08), transparent 70%);
          filter: blur(60px); pointer-events: none; z-index: 0;
        }

        .wds-inner {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 56px;
          position: relative;
          z-index: 2;
        }

        /* header */
        .wds-head { text-align: center; margin-bottom: 72px; }

        .wds-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(59,130,246,0.08);
          border: 1px solid rgba(59,130,246,0.25);
          border-radius: 999px; padding: 6px 16px; margin-bottom: 24px;
        }
        .wds-eyebrow-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #3b82f6;
          box-shadow: 0 0 8px rgba(59,130,246,0.9);
          animation: wds-pulse 2.4s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes wds-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.5); }
          50%      { box-shadow: 0 0 0 6px rgba(59,130,246,0); }
        }
        .wds-eyebrow span {
          font-size: 11px; font-weight: 600; letter-spacing: 0.2em;
          text-transform: uppercase; color: #60a5fa;
          margin: 0; padding: 0;
        }

        .wds-title {
          font-size: clamp(32px, 4vw, 54px);
          font-weight: 800; color: #f0f8ff;
          line-height: 1.08; letter-spacing: -1.4px;
          margin: 0 0 20px; padding: 0;
        }
        .wds-title-blue {
          background: linear-gradient(90deg, #93c5fd, #3b82f6, #1d4ed8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .wds-subtitle {
          font-size: 17px; color: rgba(186,210,255,0.5);
          line-height: 1.85; max-width: 680px;
          margin: 0 auto; padding: 0; font-weight: 400;
        }

        /* divider */
        .wds-divider {
          width: 80px; height: 2px; margin: 28px auto 0;
          background: linear-gradient(90deg, transparent, #3b82f6, transparent);
          border-radius: 2px;
        }

        /* grid */
        .wds-grid-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        /* card */
        .wds-card {
          border-radius: 18px;
          border: 1px solid rgba(59,130,246,0.1);
          padding: 32px 28px 28px;
          display: flex; flex-direction: column;
          position: relative; overflow: hidden;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.4s ease,
                      border-color 0.3s ease,
                      background 0.3s ease;
          cursor: default;
        }

        .wds-card-topline {
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, #3b82f6, #60a5fa, transparent);
          transition: opacity 0.3s ease;
        }

        .wds-card-icon {
          width: 48px; height: 48px; border-radius: 13px;
          border: 1px solid rgba(59,130,246,0.15);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px; flex-shrink: 0;
          transition: transform 0.3s ease, background 0.3s ease, border-color 0.3s ease;
        }

        .wds-card-num {
          position: absolute; top: 28px; right: 28px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
          color: rgba(59,130,246,0.25);
          font-variant-numeric: tabular-nums;
          margin: 0; padding: 0;
        }

        .wds-card-title {
          font-size: 17px; font-weight: 700; color: #dbeafe;
          line-height: 1.25; letter-spacing: -0.2px;
          margin: 0 0 14px; padding: 0;
        }

        .wds-card-desc {
          font-size: 14px; color: rgba(147,197,253,0.45);
          line-height: 1.75; font-weight: 400;
          margin: 0 0 auto; padding: 0; flex: 1;
        }

        .wds-card-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 600; letter-spacing: 0.04em;
          margin-top: 22px; padding: 0;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        /* stats row */
        .wds-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 72px;
          padding: 36px 40px;
          border-radius: 20px;
          background: rgba(7,22,41,0.6);
          border: 1px solid rgba(59,130,246,0.12);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          position: relative; overflow: hidden;
        }
        .wds-stats::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent);
        }
        .wds-stat { text-align: center; }
        .wds-stat-val {
          font-size: 36px; font-weight: 800; letter-spacing: -1px; line-height: 1;
          background: linear-gradient(135deg, #93c5fd, #3b82f6);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 6px; padding: 0;
        }
        .wds-stat-label {
          font-size: 12px; color: rgba(147,197,253,0.45);
          font-weight: 500; letter-spacing: 0.06em;
          text-transform: uppercase; margin: 0; padding: 0;
        }
        .wds-stat-divider {
          width: 1px;
          background: rgba(59,130,246,0.12);
          align-self: stretch;
        }

        /* responsive */
        @media (max-width: 1023px) {
          .wds { padding: 88px 0 100px; }
          .wds-inner { padding: 0 36px; }
          .wds-grid-cards { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .wds-stats { grid-template-columns: repeat(2, 1fr); }
          .wds-stat-divider { display: none; }
        }
        @media (max-width: 767px) {
          .wds { padding: 64px 0 80px; }
          .wds-inner { padding: 0 20px; }
          .wds-head { margin-bottom: 48px; }
          .wds-title { font-size: 28px; letter-spacing: -1px; }
          .wds-subtitle { font-size: 15px; }
          .wds-grid-cards { grid-template-columns: 1fr; gap: 16px; }
          .wds-card { padding: 26px 22px 22px; }
          .wds-stats { grid-template-columns: repeat(2, 1fr); padding: 28px 24px; margin-top: 48px; }
          .wds-stat-val { font-size: 28px; }
        }
        @media (max-width: 479px) {
          .wds-inner { padding: 0 16px; }
          .wds-title { font-size: 24px; }
          .wds-stats { grid-template-columns: 1fr 1fr; gap: 12px; }
        }
      `}</style>

      <section className="wds" ref={ref}>
        <div className="wds-grid" />
        <div className="wds-orb1" />
        <div className="wds-orb2" />
        <div className="wds-orb3" />

        <div className="wds-inner">

          {/* Header */}
          <motion.div
            className="wds-head"
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="wds-eyebrow">
              <div className="wds-eyebrow-dot" />
              <span>What We Build</span>
            </div>
            <h2 className="wds-title">
              Web Development{" "}
              <span className="wds-title-blue">Services We Offer</span>
            </h2>
            <p className="wds-subtitle">
              We employ engineers with 20+ years of experience alongside talented mid-level developers
              to blend deep expertise with fresh ideas — ensuring your software meets the latest standards.
            </p>
            <div className="wds-divider" />
          </motion.div>

          {/* Cards */}
          <div className="wds-grid-cards">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} inView={inView} />
            ))}
          </div>

          {/* Stats bar */}
         

        </div>
      </section>
    </>
  );
}