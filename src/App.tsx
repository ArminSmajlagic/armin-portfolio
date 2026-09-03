import {
  Smartphone,
  Database,
  Boxes,
  Globe,
  Atom,
  Server,
  Code2,
  Table2,
  BrainCircuit,
  Mail,
} from "lucide-react";
import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
};

function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: RevealProps) {
  const ref = React.useRef<HTMLElement>(null);
  const [visible, setVisible] = React.useState(false);
  const lastScrollY = React.useRef(typeof window !== "undefined" ? window.scrollY : 0);
  const scrollDir = React.useRef<"up" | "down">("down");

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      scrollDir.current = y < lastScrollY.current ? "up" : "down";
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
          } else if (scrollDir.current === "up") {
            setVisible(false);
          }
        },
        { threshold: 0.2, rootMargin: "0px 0px -25% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return React.createElement(
      Tag,
      {
        ref,
        className: `bio-reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`,
        style: { transitionDelay: `${delay}ms` },
      },
      children
  );
}

const tokens = {
  voidCanvas: "#1f232e",
  abyss: "#0c0f19",
  singularity: "#060913",
  carbon: "#17191e",
  lunarWhite: "#f2f6fa",
  platinum: "#e5e7eb",
  mist: "#bfc1c9",
  steel: "#858b98",
  gunmetal: "#545864",
  nebula: "linear-gradient(83.21deg, rgb(50, 69, 255), rgb(184, 69, 237))",
  auroraMint: "#4bf3c8",
  plasmaBlue: "#54b9ff",
  ultraviolet: "#acafff",
  amber: "#ffd493",
  yellow: "#fddf3e",
  signalBlue: "#61dafb",
};

const displayFont = "'Space Grotesk', 'Obviously', ui-sans-serif, system-ui, sans-serif";
const bodyFont = "'Inter', ui-sans-serif, system-ui, sans-serif";
const monoFont = "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace";

const skills = [
  {
    name: "Angular",
    icon: Globe,
    ring: tokens.auroraMint,
  },
  {
    name: "React",
    icon: Atom,
    ring: tokens.signalBlue,
  },
  {
    name: "React Native",
    icon: Smartphone,
    ring: tokens.ultraviolet,
  },
  {
    name: "Java & Spring Boot",
    icon: Server,
    ring: tokens.amber,
  },
  {
    name: ".NET & ASP.NET Core",
    icon: Code2,
    ring: tokens.plasmaBlue,
  },
  {
    name: "IIS & Docker",
    icon: Boxes,
    ring: tokens.plasmaBlue,
  },
  {
    name: "SQL - MS SQL & PostgreSQL",
    icon: Table2,
    ring: tokens.yellow,
  },
  {
    name: "NoSQL - MongoDB & Redis",
    icon: Database,
    ring: tokens.yellow,
  },
];

const experience = [
  {
    role: "Full-stack developer with focus on front-end",
    org: "Evio Solution",
    period: "04.2025 - 12.2025",
    detail:
        "Software architecture and GUI development, deployment via IIS.",
  },
  {
    role: "Software Engineer — SW Architecture",
    org: "ArtiAnalytics",
    period: "04.2024 — 12.2024",
    detail:
        "Software architecture, database and API design, GUI development, and ML data collection with model training and benchmarking.",
  },
  {
    role: "Full-Stack Developer with focus on back-end",
    org: "Evona",
    period: "04.2023 — 04.2024",
    detail:
        "Web APIs, GUIs, and worker services shipped through CI/CD pipelines, working in SCRUM teams end to end.",
  },
  {
    role: "Front-end Developer - Internship",
    org: "Evona",
    period: "10.2023 - 12.2023",
    detail:
        "GUIs and working in SCRUM teams.",
  },
  {
    role: "Software Engineer — Consultant",
    org: "ArtiAnalytics",
    period: "06.2022 - 03.2024",
    detail:
        "Software architecture, database and API design, GUI development, and ML data collection with model training and benchmarking.",
  },
];

const projects = [
  {
    name: "Questionnaire - Risk Assessment",
    stack: "Angular · .NET · Excel",
    detail:
        "A full-stack risk assessment platform built with Angular and .NET, where one type of user creates questionnaires and another answers them. Responses are fused with empirical data to generate a risk assessment Excel report.",
    ring: tokens.plasmaBlue,
  },
  {
    name: "US Grant Aggregator",
    stack: "LLM  · Weaviate · Selenium · Python · .NET",
    detail:
        "A full-stack grant aggregation platform that scrapes government grant data using Python, C#, and Selenium, with a background worker for vectorizing the results into vector database and LLM for reporting. ",
    ring: tokens.plasmaBlue,
  },
  {
    name: "Betting games and payment integration",
    stack: ".NET · XUnit",
    detail:
        "A .NET integration layer connecting betting games and payment providers, built to handle provider-specific APIs behind a unified interface. Coverage is validated through XUnit tests to ensure reliable, consistent behavior across integrated providers.",
    ring: tokens.plasmaBlue,
  },
  {
    name: "Betting CRM, Admin and Reporting",
    stack: "Angular · TypeScript · Angular.JS · .NET",
    detail:
        "A CRM, admin, and reporting suite for a betting platform, giving staff tools to manage customer accounts, oversee platform operations, and track key business metrics.",
    ring: tokens.plasmaBlue,
  },
  {
    name: "E-Commerce CRM, CMS and front-facing website",
    stack: "React · TypeScript · Spring Boot",
    detail:
        "An e-commerce platform with a React and TypeScript frontend, built with CSS Modules, talking to a Spring Boot backend.",
    ring: tokens.plasmaBlue,
  },
  {
    name: "Habit Tracker",
    stack: "React Native · Expo · Drizzle",
    detail:
        "A dark, glassmorphic productivity app for building habits, built with Expo, Zustand, and Drizzle ORM over SQLite.",
    ring: tokens.auroraMint,
  },
  {
    name: "Challenge Alarm Clock",
    stack: "React Native · Expo",
    detail:
        "An alarm clock that challenges you to wake up at a specific time, built with Expo and React Native.",
    ring: tokens.auroraMint,
  },
  {
    name: "Notes App",
    stack: "React Native · Expo",
    detail:
        "A dark, glassmorphic advanced note-taking app, built with Expo, Zustand, and Drizzle ORM over SQLite.",
    ring: tokens.auroraMint,
  },
  {
    name: "AI Training Studio",
    stack: "React · Flask · TensorFlow · Scikit-learn",
    detail:
        "A Socratic-style learning tool for training ML & deep learning models on data, with a multi-step wizard flow for transforming and preparing data; selecting model and training it which is managed through Redux Toolkit.",
    ring: tokens.amber,
  },
];

export default function BioSite() {
  return (
      <div style={{ background: tokens.voidCanvas, color: tokens.lunarWhite, fontFamily: bodyFont }}>
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        .bio-root {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: #1f232e;
        }
        
        .bio-root::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        
          background:
            /* HERO - blue/purple, slightly right */
            radial-gradient(
              ellipse 75% 22% at 65% 8%,
              rgba(50, 69, 255, 0.30) 0%,
              rgba(184, 69, 237, 0.16) 35%,
              transparent 75%
            ),
        
            /* ABOUT - blue, left */
            radial-gradient(
              ellipse 70% 20% at 15% 24%,
              rgba(84, 185, 255, 0.18) 0%,
              rgba(84, 185, 255, 0.08) 35%,
              transparent 75%
            ),
        
            /* SKILLS - mint, right */
            radial-gradient(
              ellipse 70% 20% at 85% 40%,
              rgba(75, 243, 200, 0.16) 0%,
              rgba(75, 243, 200, 0.06) 35%,
              transparent 75%
            ),
        
            /* EXPERIENCE - purple, left */
            radial-gradient(
              ellipse 70% 20% at 15% 57%,
              rgba(184, 69, 237, 0.18) 0%,
              rgba(172, 175, 255, 0.07) 35%,
              transparent 75%
            ),
        
            /* WORK - blue, right */
            radial-gradient(
              ellipse 70% 20% at 85% 73%,
              rgba(50, 69, 255, 0.18) 0%,
              rgba(84, 185, 255, 0.07) 35%,
              transparent 75%
            ),
        
            /* CONTACT - ultraviolet, left */
            radial-gradient(
              ellipse 70% 20% at 20% 92%,
              rgba(172, 175, 255, 0.18) 0%,
              rgba(184, 69, 237, 0.07) 35%,
              transparent 75%
            );
        }
        * { box-sizing: border-box; }
 
        @keyframes bioFadeInUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bioFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes bioNavDrop {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bioPulseDot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.35); opacity: 0.55; }
        }
        @keyframes bioGlowBreathe {
          0%, 100% { opacity: 0.85; transform: translateX(-50%) scale(1); }
          50% { opacity: 1; transform: translateX(-50%) scale(1.06); }
        }
        @keyframes bioTypeCmd {
          from { width: 0; }
          to { width: 6ch; }
        }
        @keyframes bioBlinkCaret {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
 
        /* Scroll-triggered reveal (paired with the Reveal component) */
        .bio-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s cubic-bezier(0.16, 0.84, 0.44, 1),
            transform 0.7s cubic-bezier(0.16, 0.84, 0.44, 1);
        }
        .bio-reveal.is-visible { opacity: 1; transform: translateY(0); }
 
        /* On-load entrance animations for above-the-fold hero content */
        .bio-anim-in {
          opacity: 0;
          animation: bioFadeInUp 0.8s cubic-bezier(0.16, 0.84, 0.44, 1) forwards;
        }
        .bio-anim-delay-1 { animation-delay: 0.05s; }
        .bio-anim-delay-2 { animation-delay: 0.2s; }
        .bio-anim-delay-3 { animation-delay: 0.35s; }
        .bio-anim-delay-4 { animation-delay: 0.5s; }
        .bio-anim-delay-5 { animation-delay: 0.65s; }
 
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
            scroll-behavior: auto !important;
          }
        }
 
        .bio-shell { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
 
        .bio-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 28px 0;
        }
        .bio-nav-logo { opacity: 0; animation: bioFadeIn 0.6s ease forwards; }
        .bio-nav-links { display: flex; gap: 32px; align-items: center; }
        .bio-nav-links a {
          position: relative;
          color: ${tokens.lunarWhite};
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          font-family: ${bodyFont};
          transition: color 0.15s ease;
          opacity: 0;
          animation: bioNavDrop 0.5s ease forwards;
        }
        .bio-nav-links a::after {
          content: "";
          position: absolute;
          left: 0; bottom: -4px;
          width: 100%; height: 1px;
          background: ${tokens.ultraviolet};
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.2s ease;
        }
        .bio-nav-links a:hover { color: ${tokens.ultraviolet}; }
        .bio-nav-links a:hover::after { transform: scaleX(1); }
        .bio-nav-links a:nth-child(1) { animation-delay: 0.05s; }
        .bio-nav-links a:nth-child(2) { animation-delay: 0.15s; }
        .bio-nav-links a:nth-child(3) { animation-delay: 0.25s; }
        .bio-nav-links a:nth-child(4) { animation-delay: 0.35s; }
 
        .bio-hero,
        .bio-section,
        .bio-footer {
          position: relative;
          z-index: 1;
        }
        .bio-hero {
          position: relative;
          min-height: calc(100vh - 72px); /* navbar height */
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 0;
          text-align: center;
          overflow: hidden;
        }
        .bio-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 4px 12px;
          border-radius: 9999px;
          background: ${tokens.carbon};
          border: 1px solid #2c303b;
          font-family: ${monoFont};
          font-size: 12px;
          letter-spacing: 0.025em;
          color: ${tokens.lunarWhite};
        }
        .bio-dot {
          width: 8px; height: 8px; border-radius: 9999px; background: ${tokens.signalBlue};
          animation: bioPulseDot 1.8s ease-in-out infinite;
        }
        .bio-headline {
          font-family: ${displayFont};
          font-weight: 300;
          font-size: 48px;
          line-height: 1.1;
          margin: 24px auto 16px;
          max-width: 720px;
          position: relative;
        }
        .bio-sub {
          color: ${tokens.steel};
          font-size: 16px;
          line-height: 1.65;
          max-width: 480px;
          margin: 0 auto 32px;
          position: relative;
        }
        .bio-cta-row { display: flex; gap: 16px; justify-content: center; align-items: center; position: relative; margin-bottom: 40px; }
        .bio-pill-primary {
          background: #ffffff;
          color: ${tokens.voidCanvas};
          font-weight: 600;
          font-size: 16px;
          padding: 12px 24px;
          border-radius: 9999px;
          border: none;
          text-decoration: none;
          font-family: ${bodyFont};
          display: inline-block;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .bio-pill-primary:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 8px 24px -8px rgba(184, 69, 237, 0.55), 0 4px 16px -6px rgba(50, 69, 255, 0.45);
        }
        .bio-link-secondary {
          position: relative;
          color: ${tokens.platinum};
          font-size: 16px;
          font-weight: 500;
          text-decoration: none;
        }
        .bio-link-secondary::after {
          content: "";
          position: absolute;
          left: 0; bottom: -2px;
          width: 100%; height: 1px;
          background: ${tokens.ultraviolet};
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.2s ease;
        }
        .bio-link-secondary:hover { color: ${tokens.ultraviolet}; }
        .bio-link-secondary:hover::after { transform: scaleX(1); }
 
        .bio-terminal {
          max-width: 560px;
          margin: 0 auto;
          background: ${tokens.singularity};
          border: 1px solid ${tokens.voidCanvas};
          border-radius: 8px;
          padding: 16px 20px;
          text-align: left;
          position: relative;
        }
        .bio-terminal code {
          font-family: ${monoFont};
          font-size: 14px;
          line-height: 1.65;
          color: ${tokens.lunarWhite};
        }
        .bio-terminal-line { display: block; }
        .bio-terminal .prompt { color: ${tokens.auroraMint}; }
        .bio-terminal .comment { color: ${tokens.steel}; }
        .bio-typing-cmd {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          vertical-align: bottom;
          width: 0;
          animation: bioTypeCmd 0.7s steps(6, end) 1.1s forwards;
        }
        .bio-cursor {
          display: inline-block;
          margin-left: 2px;
          animation: bioBlinkCaret 0.9s step-end infinite;
        }
        .bio-typing-out {
          display: block;
          opacity: 0;
          margin-top: 6px;
          animation: bioFadeIn 0.5s ease 1.85s forwards;
        }
 
        .bio-section {
          position: relative;
          display: flex;
          align-items: center;
          padding: 80px 0;
          overflow: hidden;
        }
        
        .bio-section > * {
          position: relative;
          z-index: 1;
        }
        .bio-eyebrow {
          font-size: 14px;
          font-weight: 600;
          color: ${tokens.ultraviolet};
          margin-bottom: 12px;
        }
        .bio-h2 {
          font-family: ${displayFont};
          font-weight: 400;
          font-size: 36px;
          line-height: 1.11;
          margin: 0 0 16px;
          max-width: 560px;
        }
        .bio-desc { color: ${tokens.steel}; font-size: 16px; line-height: 1.5; max-width: 560px; }
 
        .bio-about-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 64px;
          align-items: start;
          margin-top: 40px;
        }
        .bio-about-copy p { color: ${tokens.platinum}; font-size: 16px; line-height: 1.65; margin: 0 0 16px; }
        .bio-facts {
          background: ${tokens.abyss};
          border: 1px solid #1f232e;
          border-radius: 16px;
          padding: 24px;
        }
        .bio-fact-row {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          font-size: 14px;
        }
        .bio-fact-row:last-child { border-bottom: none; }
        .bio-fact-label { color: ${tokens.steel}; }
        .bio-fact-value { color: ${tokens.lunarWhite}; font-weight: 500; text-align: right; }
 
        .bio-skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 40px;
        }
        .bio-skill { display: flex; flex-direction: column; gap: 16px; }
        .bio-skill-icon {
          width: 48px; height: 48px; border-radius: 9999px;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid;
          transition: transform 0.25s ease;
        }
        .bio-skill:hover .bio-skill-icon { transform: scale(1.1) rotate(-6deg); }
        .bio-skill-name { font-family: ${displayFont}; font-weight: 400; font-size: 20px; }
 
        .bio-exp-list { margin-top: 40px; }
        .bio-exp-row {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 24px;
          padding: 32px 0;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .bio-exp-row:last-child { border-bottom: 1px solid rgba(255,255,255,0.08); }
        .bio-exp-period { color: ${tokens.steel}; font-family: ${monoFont}; font-size: 14px; }
        .bio-exp-role { font-family: ${displayFont}; font-size: 20px; font-weight: 400; margin: 0 0 4px; }
        .bio-exp-org { color: ${tokens.ultraviolet}; font-size: 14px; font-weight: 600; margin-bottom: 12px; }
        .bio-exp-detail { color: ${tokens.steel}; font-size: 16px; line-height: 1.65; max-width: 560px; }
 
        .bio-projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 40px;
        }
        .bio-project-card {
          background: ${tokens.carbon};
          border: 1px solid ${tokens.voidCanvas};
          border-radius: 16px;
          overflow: hidden;
          transition: transform 0.25s ease, border-color 0.25s ease, opacity 0.4s ease;
        }
        .bio-project-card:hover {
          transform: translateY(-6px);
          border-color: ${tokens.ultraviolet};
        }
        .bio-project-visual {
          height: 140px;
          border-radius: 12px 12px 0 0;
        }
        .bio-project-body { padding: 20px; }
        .bio-project-name { font-family: ${displayFont}; font-size: 20px; font-weight: 400; margin: 0 0 4px; }
        .bio-project-stack { font-family: ${monoFont}; font-size: 12px; color: ${tokens.mist}; margin-bottom: 12px; }
        .bio-project-detail { color: ${tokens.steel}; font-size: 14px; line-height: 1.65; }
 
        .bio-contact { text-align: center; padding: 96px 0 64px; }
        .bio-contact-icons { display: flex; gap: 20px; justify-content: center; margin-top: 32px; }
        .bio-icon-link {
          width: 44px; height: 44px; border-radius: 9999px;
          border: 1px solid ${tokens.gunmetal};
          display: flex; align-items: center; justify-content: center;
          color: ${tokens.lunarWhite};
          text-decoration: none;
          transition: border-color 0.15s ease, color 0.15s ease, transform 0.15s ease;
        }
        .bio-icon-link:hover {
          border-color: ${tokens.ultraviolet};
          color: ${tokens.ultraviolet};
          transform: translateY(-3px) scale(1.06);
        }
 
        .bio-footer {
          padding: 24px 0 40px;
          text-align: center;
          color: ${tokens.steel};
          font-size: 14px;
        }
 
        @media (max-width: 860px) {
          .bio-about-grid, .bio-skills-grid, .bio-projects-grid { grid-template-columns: 1fr; }
          .bio-exp-row { grid-template-columns: 1fr; gap: 8px; }
          .bio-headline { font-size: 36px; }
          .bio-h2 { font-size: 28px; }
        }
        @media (max-width: 640px) {
        .bio-nav {
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          padding: 20px 0;
        }
        .bio-nav-links {
          gap: 16px;
          flex-wrap: wrap;
          width: 100%;
        }
        .bio-nav-links a {
          font-size: 13px;
        }
      }
      
      @media (max-width: 380px) {
        .bio-nav-links {
          gap: 10px;
        }
        .bio-nav-links a {
          font-size: 12px;
        }
      }
      `}</style>

        <div className="bio-root">
          <div className="bio-shell">
            <nav className="bio-nav">
              <div className="bio-nav-logo" style={{ fontFamily: displayFont, fontWeight: 500, fontSize: 20 }}>Armin</div>
              <div className="bio-nav-links">
                <a href="#about">About</a>
                <a href="#work">Work</a>
                <a href="#experience">Experience</a>
                <a href="#contact">Contact</a>
              </div>
            </nav>
          </div>

          <section className="bio-hero">
            <div className="bio-shell">
            <span className="bio-badge bio-anim-in bio-anim-delay-1">
              <span className="bio-dot" />
              Open to full-stack roles
            </span>
              <h1 className="bio-headline bio-anim-in bio-anim-delay-2">
                Software, built from database to interface.
              </h1>
              <p className="bio-sub bio-anim-in bio-anim-delay-3">
                Full-stack developer working across React, Angular, Spring Boot, and .NET —
                from data model to shipped product.
              </p>
              <div className="bio-cta-row bio-anim-in bio-anim-delay-4">
                <a className="bio-pill-primary" href="#work">See my work</a>
                <a className="bio-link-secondary" href="#contact">Get in touch</a>
              </div>
              <div className="bio-terminal bio-anim-in bio-anim-delay-5">
                <code>
                <span className="bio-terminal-line">
                  <span className="prompt">$</span> <span className="bio-typing-cmd">whoami</span>
                  <span className="bio-cursor">▌</span>
                </span>
                  <span className="comment bio-typing-out">
                  Full-stack developer - React · Angular · Spring Boot · .NET
                </span>
                </code>
              </div>
            </div>
          </section>

          <section className="bio-section about-section" id="about">
            <div className="bio-shell">
              <Reveal delay={300}>
                <div className="bio-eyebrow">About</div>
                <h2 className="bio-h2">End to end, by choice.</h2>
                <p className="bio-desc">
                  I like owning a product from the database up to the screen someone actually taps.
                </p>
              </Reveal>
              <div className="bio-about-grid">
                <Reveal className="bio-about-copy" delay={300}>
                  <p>
                    I'm a full-stack developer with a background spanning Java and Spring Boot,
                    .NET and ASP.NET Core, React, React Native, and Angular. I've built Web APIs,
                    GUIs, and worker services shipped through CI/CD pipelines, and worked on
                    software architecture, database and API design, and ML data collection with
                    model training and benchmarking.
                  </p>
                  <p>
                    I developed a strong foundation in Software
                    Engineering through four years of software engineering study, delivering
                    projects in full-stack, AI, and applied mathematics—leading to two job offers
                    from professors directly from college. I have nearly four years of hands-on
                    experience across end-to-end software research, development, testing,
                    deployment, monitoring and documenting. I gained solid practical experience
                    by combining internship and parallel part-time & full-time employment.
                  </p>
                </Reveal>
                <Reveal className="bio-facts" delay={300}>
                  <div className="bio-fact-row">
                    <span className="bio-fact-label">Based in</span>
                    <span className="bio-fact-value">Bosnia and Herzegovina</span>
                  </div>
                  <div className="bio-fact-row">
                    <span className="bio-fact-label">Degree</span>
                    <span className="bio-fact-value">Software Engineering, FIT Mostar</span>
                  </div>
                  <div className="bio-fact-row">
                    <span className="bio-fact-label">Core stack</span>
                    <span className="bio-fact-value">.NET · Angular · SQL/NoSQL</span>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          <section className="bio-section skills-section">
            <div className="bio-shell">
              <Reveal delay={300}>
                <div className="bio-eyebrow">Skills</div>
                <h2 className="bio-h2">Tools I reach for.</h2>
              </Reveal>
              <div className="bio-skills-grid">
                {skills.map((s, i) => {
                  const Icon = s.icon;
                  return (
                      <Reveal as="div" className="bio-skill" delay={i * 80} key={s.name}>
                        <div className="bio-skill-icon" style={{ borderColor: s.ring }}>
                          <Icon size={20} color={s.ring} strokeWidth={1.5} />
                        </div>
                        <div className="bio-skill-name">{s.name}</div>
                      </Reveal>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="bio-section experience-section" id="experience">
            <div className="bio-shell">
              <Reveal delay={300}>
                <div className="bio-eyebrow">Experience</div>
                <h2 className="bio-h2">Where I've worked.</h2>
              </Reveal>
              <div className="bio-exp-list">
                {experience.map((e, i) => (
                    <Reveal as="div" className="bio-exp-row" delay={i * 120} key={e.role + e.org}>
                      <div className="bio-exp-period">{e.period}</div>
                      <div>
                        <div className="bio-exp-role">{e.role}</div>
                        <div className="bio-exp-org">{e.org}</div>
                        <div className="bio-exp-detail">{e.detail}</div>
                      </div>
                    </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section className="bio-section work-section" id="work">
            <div className="bio-shell">
              <Reveal delay={300}>
                <div className="bio-eyebrow">Selected work</div>
                <h2 className="bio-h2">A few things I've built.</h2>
              </Reveal>
              <div className="bio-projects-grid">
                {projects.map((p, i) => (
                    <Reveal as="div" className="bio-project-card" delay={i * 100} key={p.name}>
                      <div
                          className="bio-project-visual"
                          style={{
                            background: `linear-gradient(135deg, ${p.ring}22, ${tokens.abyss})`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                      >
                        <BrainCircuit size={32} color={p.ring} strokeWidth={1.5} />
                      </div>
                      <div className="bio-project-body">
                        <div className="bio-project-name">{p.name}</div>
                        <div className="bio-project-stack">{p.stack}</div>
                        <div className="bio-project-detail">{p.detail}</div>
                      </div>
                    </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section className="bio-contact bio-section contact-section" id="contact">
            <div className="bio-shell">
              <Reveal>
                <div className="bio-eyebrow" style={{ display: "flex", justifyContent: "center" }}>
                  Contact
                </div>
                <h2 className="bio-h2" style={{ margin: "0 auto 16px", textAlign: "center" }}>
                  Let's build something.
                </h2>
                <p className="bio-desc" style={{ margin: "0 auto" }}>
                  Open to full-stack, full-time/part-time roles, and freelance work.
                </p>
                <div className="bio-cta-row" style={{ marginTop: 32 }}>
                  <a className="bio-pill-primary" href="mailto:smajlagicarmin@gmail.com">Email me</a>
                </div>
                <div className="bio-contact-icons">
                  <a className="bio-icon-link" href="mailto:smajlagicarmin@gmail.com" aria-label="Email">
                    <Mail size={18} strokeWidth={1.5} />
                  </a>
                  <a className="bio-icon-link" target="_blank" href="https://github.com/ArminSmajlagic" aria-label="GitHub">
                    <FaGithub size={18} />
                  </a>
                  <a className="bio-icon-link" target="_blank" href="https://www.linkedin.com/in/armin-smajlagic/" aria-label="LinkedIn">
                    <FaLinkedin size={18} />
                  </a>
                </div>
              </Reveal>
            </div>
          </section>

          <footer className="bio-footer">
            <div className="bio-shell">© {new Date().getFullYear()} Armin. Built with React.</div>
          </footer>
        </div>
      </div>
  );
}
