import { useState } from "react";
import { ExternalLink, MapPin, Calendar, BadgeCheck, Award, ShieldCheck } from "lucide-react";

const education = [
  {
    id: 1,
    degree: "B.Tech — Computer Science & Engineering",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    duration: "Aug 2023 – Present",
    grade: "8.4 CGPA",
    status: "ongoing",
    description:
      "Focused on full-stack development, cloud infrastructure, and data science. Active in hackathons and competitive coding.",
    highlights: ["MERN Stack", "Cloud & DevOps", "Machine Learning", "DSA"],
    image: "/projects/college.png",
    imageFallback: "LPU",
    accentColor: "#f97316",
  },
  {
    id: 2,
    degree: "Intermediate — Science (12th)",
    institution: "Mother Teresa Academy",
    location: "Benipur, Bihar",
    duration: "Mar 2021 – Apr 2023",
    grade: "75%",
    status: "completed",
    description:
      "Completed senior secondary education with a science stream, building a strong foundation in mathematics and physics.",
    highlights: ["Mathematics", "Physics", "Chemistry"],
    image: "/projects/school.png",
    imageFallback: "MTA",
    accentColor: "#3b82f6",
  },
  {
    id: 3,
    degree: "Matriculation (10th)",
    institution: "Mother Teresa Academy",
    location: "Benipur, Bihar",
    duration: "Aug 2019 – Mar 2021",
    grade: "92%",
    status: "completed",
    description:
      "Achieved academic excellence with strong performance across all subjects.",
    highlights: ["Top Scorer", "Science & Math"],
    image: "/projects/school.png",
    imageFallback: "MTA",
    accentColor: "#8b5cf6",
  },
];

const certifications = [
  {
    name: "Cloud Computing",
    issuer: "NPTEL",
    date: "Nov 2025",
    icon: "☁️",
    accentColor: "#f97316",
    gradientFrom: "#f97316",
    gradientTo: "#ef4444",
    link: "https://drive.google.com/file/d/1XJV5hSxsGnYKWxx6eKawNdhs_nJ7GQv9/view?usp=sharing",
    skills: ["AWS", "GCP", "DevOps"],
  },
  {
    name: "Java Programming",
    issuer: "NeoColab",
    date: "Aug 2025",
    icon: "☕",
    accentColor: "#3b82f6",
    gradientFrom: "#3b82f6",
    gradientTo: "#6366f1",
    link: "https://drive.google.com/file/d/16rDefaqDXkv_0M7JTgy1Cmv30iR_wMNN/view",
    skills: ["OOP", "Spring", "JDBC"],
  },
  {
    name: "Data Structures & Algorithms",
    issuer: "NeoColab",
    date: "Dec 2024",
    icon: "🧩",
    accentColor: "#8b5cf6",
    gradientFrom: "#8b5cf6",
    gradientTo: "#ec4899",
    link: "https://drive.google.com/file/d/1Ejf992UCxaSEh9pNCtmgjSlwo7kjjstg/view?usp=sharing",
    skills: ["Trees", "Graphs", "DP"],
  },
  {
    name: "Git and GitHub",
    issuer: "Google",
    date: "March 2026",
    icon: "⚙️",
    accentColor: "#10b981",
    gradientFrom: "#10b981",
    gradientTo: "#0ea5e9",
    link: "https://drive.google.com/file/d/17oi429IEUwxysVDg--FL6NsdHyHxnPv7/view?usp=sharing",
    skills: ["Version Control", "CI/CD", "Collaboration"],
  },
];

// ── Decorative SVG background per card ───────────────────────────────────────
const CardDecor = ({ color }) => (
  <svg
    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    viewBox="0 0 320 180"
    preserveAspectRatio="xMidYMid slice"
  >
    <circle cx="280" cy="-20" r="100" fill={color} fillOpacity="0.07" />
    <circle cx="20" cy="200" r="70" fill={color} fillOpacity="0.05" />
    <line x1="0" y1="180" x2="180" y2="0" stroke={color} strokeOpacity="0.06" strokeWidth="1" />
    <line x1="40" y1="180" x2="220" y2="0" stroke={color} strokeOpacity="0.04" strokeWidth="1" />
    <line x1="80" y1="180" x2="260" y2="0" stroke={color} strokeOpacity="0.04" strokeWidth="1" />
    {[0, 1, 2, 3].map((row) =>
      [0, 1, 2, 3].map((col) => (
        <circle
          key={`${row}-${col}`}
          cx={220 + col * 16}
          cy={20 + row * 16}
          r="1.2"
          fill={color}
          fillOpacity="0.2"
        />
      ))
    )}
  </svg>
);

// ── Single Cert Card ──────────────────────────────────────────────────────────
const CertCard = ({ cert, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={cert.link}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="no-underline block"
    >
      <div
        style={{
          position: "relative",
          borderRadius: 20,
          overflow: "hidden",
          border: `1px solid ${hovered ? cert.accentColor + "55" : cert.accentColor + "22"}`,
          background: "var(--card, hsl(var(--card)))",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), border-color 0.3s ease, box-shadow 0.35s ease",
          boxShadow: hovered
            ? `0 20px 60px ${cert.accentColor}25, 0 0 0 1px ${cert.accentColor}33`
            : "0 2px 16px rgba(0,0,0,0.12)",
          cursor: "pointer",
          height: "100%",
        }}
      >
        <CardDecor color={cert.accentColor} />

        {/* Coloured top bar */}
        <div
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: 3,
            background: `linear-gradient(90deg, ${cert.gradientFrom}, ${cert.gradientTo})`,
            opacity: hovered ? 1 : 0.6,
            transition: "opacity 0.3s",
          }}
        />

        <div style={{ position: "relative", zIndex: 1, padding: "22px 20px 18px", display: "flex", flexDirection: "column", height: "100%" }}>

          {/* Top row */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
            {/* Icon */}
            <div
              style={{
                width: 52, height: 52,
                borderRadius: 14,
                background: `linear-gradient(135deg, ${cert.gradientFrom}22, ${cert.gradientTo}33)`,
                border: `1.5px solid ${cert.accentColor}33`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22,
                transform: hovered ? "scale(1.1) rotate(-4deg)" : "scale(1) rotate(0deg)",
                transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                flexShrink: 0,
              }}
            >
              {cert.icon}
            </div>

            {/* Issuer + external link */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
              <div
                style={{
                  display: "inline-flex", alignItems: "center", gap: 4,
                  padding: "3px 10px", borderRadius: 999,
                  background: `${cert.accentColor}15`,
                  border: `1px solid ${cert.accentColor}30`,
                  fontSize: 10, fontWeight: 700,
                  color: cert.accentColor,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                <ShieldCheck size={10} />
                {cert.issuer}
              </div>
              <ExternalLink
                size={13}
                style={{
                  color: hovered ? cert.accentColor : "rgba(128,128,128,0.35)",
                  transition: "color 0.2s",
                }}
              />
            </div>
          </div>

          {/* Name */}
          <h4
            style={{
              fontSize: 15, fontWeight: 800, lineHeight: 1.3,
              marginBottom: 10, letterSpacing: "-0.01em",
              color: "var(--foreground)",
            }}
          >
            {cert.name}
          </h4>

          {/* Skill chips */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 16 }}>
            {cert.skills.map((s) => (
              <span
                key={s}
                style={{
                  fontSize: 10, fontWeight: 600,
                  padding: "2px 8px", borderRadius: 999,
                  background: `${cert.accentColor}12`,
                  color: cert.accentColor,
                  border: `1px solid ${cert.accentColor}25`,
                }}
              >
                {s}
              </span>
            ))}
          </div>

          {/* Bottom row */}
          <div
            style={{
              marginTop: "auto",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              paddingTop: 14,
              borderTop: "1px solid rgba(128,128,128,0.12)",
            }}
          >
            <span
              style={{
                fontSize: 11, fontWeight: 600,
                color: "rgba(128,128,128,0.55)",
                fontFamily: "monospace",
                letterSpacing: "0.04em",
              }}
            >
              {cert.date}
            </span>

            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: 5,
                padding: "4px 10px", borderRadius: 999,
                background: hovered ? `${cert.accentColor}20` : "rgba(128,128,128,0.07)",
                border: `1px solid ${hovered ? cert.accentColor + "40" : "rgba(128,128,128,0.15)"}`,
                fontSize: 10, fontWeight: 700,
                color: hovered ? cert.accentColor : "rgba(128,128,128,0.45)",
                transition: "all 0.3s ease",
                letterSpacing: "0.04em",
                whiteSpace: "nowrap",
              }}
            >
              <BadgeCheck size={11} />
              View Cert
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

// ── Institute Image Banner ────────────────────────────────────────────────────
const InstituteBanner = ({ edu }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      style={{
        position: "relative", width: "100%", height: "160px",
        borderRadius: "12px 12px 0 0", overflow: "hidden",
        background: `linear-gradient(135deg, ${edu.accentColor}22, ${edu.accentColor}44)`,
        flexShrink: 0,
      }}
    >
      {!imgError ? (
        <img
          src={edu.image}
          alt={edu.institution}
          onError={() => setImgError(true)}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
        />
      ) : (
        <div
          style={{
            width: "100%", height: "100%",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8,
            background: `linear-gradient(135deg, ${edu.accentColor}18, ${edu.accentColor}35)`,
          }}
        >
          <svg style={{ position: "absolute", inset: 0, opacity: 0.06 }} width="100%" height="100%">
            <defs>
              <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          <div
            style={{
              width: 56, height: 56, borderRadius: "14px",
              background: edu.accentColor + "33", border: `2px solid ${edu.accentColor}55`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.25rem", fontWeight: 800, color: edu.accentColor, letterSpacing: "0.05em",
            }}
          >
            {edu.imageFallback}
          </div>
          <p style={{ fontSize: "0.7rem", color: edu.accentColor, opacity: 0.7, margin: 0 }}>{edu.institution}</p>
        </div>
      )}
      <div
        style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.28) 55%, transparent 100%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "10px 20px 12px" }}>
        <div
          style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: edu.accentColor + "22", border: `1px solid ${edu.accentColor}44`,
            backdropFilter: "blur(8px)", borderRadius: 999, padding: "3px 10px",
          }}
        >
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: edu.accentColor, flexShrink: 0 }} />
          <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#fff", letterSpacing: "0.04em" }}>
            {edu.institution}
          </span>
        </div>
      </div>
    </div>
  );
};

// ── Main Section ─────────────────────────────────────────────────────────────
export const EducationSection = () => {
  const [activeEdu, setActiveEdu] = useState(0);

  return (
    <section id="education" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-xs font-bold tracking-[0.25em] uppercase mb-3">
            Background & Credentials
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Education & <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            My academic journey, certifications earned, and competitive programming presence across top coding platforms.
          </p>
        </div>

        {/* ══ BLOCK 1 — EDUCATION ══ */}
        <div className="mb-20">
          <SectionDivider label="Academic Timeline" />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mt-8">
            <div className="lg:col-span-2 flex lg:flex-col gap-3">
              {education.map((edu, i) => (
                <button
                  key={edu.id}
                  onClick={() => setActiveEdu(i)}
                  className={`relative text-left p-4 rounded-xl border transition-all duration-300 w-full ${
                    activeEdu === i
                      ? "border-primary bg-primary/10 shadow-lg shadow-primary/10"
                      : "border-border bg-card hover:border-primary/40 hover:bg-primary/5"
                  }`}
                >
                  {activeEdu === i && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-8 bg-primary rounded-r-full" />
                  )}
                  <p className={`text-xs font-semibold mb-1.5 ${activeEdu === i ? "text-primary" : "text-muted-foreground"}`}>
                    {edu.duration}
                  </p>
                  <p className="font-semibold text-sm leading-snug">{edu.institution}</p>
                  <div className="mt-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                      edu.status === "ongoing"
                        ? "bg-emerald-500/15 text-emerald-500"
                        : "bg-secondary text-muted-foreground"
                    }`}>
                      {edu.status === "ongoing" ? "● Ongoing" : `✓ ${edu.grade}`}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="lg:col-span-3">
              {education.map((edu, i) => (
                <div key={edu.id} style={{ display: activeEdu === i ? "block" : "none" }}>
                  <div
                    className="border border-border rounded-2xl bg-card overflow-hidden"
                    style={{ transition: "box-shadow 0.3s ease", boxShadow: `0 0 0 1px ${edu.accentColor}22, 0 8px 32px rgba(0,0,0,0.12)` }}
                  >
                    <InstituteBanner edu={edu} />
                    <div className="p-6 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-full pointer-events-none" />
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                          <div>
                            <h3 className="text-lg font-bold mb-2 leading-snug">{edu.degree}</h3>
                            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1"><MapPin size={11} /> {edu.location}</span>
                              <span className="flex items-center gap-1"><Calendar size={11} /> {edu.duration}</span>
                            </div>
                          </div>
                          <div className="text-right shrink-0">
                            <p className="text-3xl font-black" style={{ color: edu.accentColor }}>{edu.grade}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">Score</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{edu.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((h) => (
                            <span
                              key={h}
                              className="px-3 py-1 text-xs font-medium rounded-full"
                              style={{ border: `1px solid ${edu.accentColor}44`, background: edu.accentColor + "14", color: edu.accentColor }}
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ BLOCK 2 — CERTIFICATIONS ══ */}
        <div className="mb-20">
          <SectionDivider label="Certifications" />

          <div className="flex justify-center mt-3 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/8 text-xs font-semibold text-primary">
              <Award size={12} />
              {certifications.length} Certificates Earned
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <CertCard key={i} cert={cert} index={i} />
            ))}
          </div>
        </div>

        {/* ══ BLOCK 3 — CODOLIO PROFILE ══ */}
        <div>
          <SectionDivider label="Coding Profile" />
          <div className="mt-8 flex flex-col items-center gap-5">
            <div className="w-full rounded-2xl overflow-hidden border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5">
              <img
                src="/projects/codilio.png"
                alt="Codolio Profile – Raghav Issar"
                className="w-full h-auto block"
              />
            </div>
            <a
              href="https://codolio.com/profile/raghav701"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/30 bg-primary/10 text-primary text-sm font-semibold transition-all duration-300 hover:bg-primary/20 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 no-underline"
            >
              <ExternalLink size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              Visit Codolio for live data
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

// ── Reusable divider ──────────────────────────────────────────────────────────
const SectionDivider = ({ label }) => (
  <div className="flex items-center gap-4">
    <div className="h-px flex-1 bg-border" />
    <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground whitespace-nowrap px-2">
      {label}
    </span>
    <div className="h-px flex-1 bg-border" />
  </div>
);