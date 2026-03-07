import { useState } from "react";
import { ExternalLink, MapPin, Calendar, BadgeCheck } from "lucide-react";

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
  },
];

const certifications = [
  {
    name: "Cloud Computing",
    issuer: "NPTEL",
    date: "Nov 2025",
    color: "from-orange-500/20 to-amber-500/10",
    accent: "#f97316",
    icon: "☁️",
  },
  {
    name: "Java Programming Course",
    issuer: "NeoColab",
    date: "Aug 2025",
    color: "from-blue-500/20 to-cyan-500/10",
    accent: "#3b82f6",
    icon: "☕",
  },
  {
    name: "Data Structures & Algorithms",
    issuer: "NeoColab",
    date: "Dec 2024",
    color: "from-violet-500/20 to-purple-500/10",
    accent: "#8b5cf6",
    icon: "🧩",
  },
];

const platforms = [
  {
    name: "LeetCode",
    handle: "@raghav-ri",
    url: "https://leetcode.com/raghav-ri",
    stat: "200+",
    statLabel: "Problems Solved",
    color: "#FFA116",
    bg: "from-yellow-500/10 to-orange-500/5",
    border: "hover:border-yellow-500/50",
    logo: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
  {
    name: "HackerRank",
    handle: "@raghav-ri",
    url: "https://www.hackerrank.com/raghav-ri",
    stat: "5★",
    statLabel: "Java & Python",
    color: "#00EA64",
    bg: "from-emerald-500/10 to-green-500/5",
    border: "hover:border-emerald-500/50",
    logo: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24C10.715 24 2.25 19.114 1.608 18 .963 16.885.963 7.115 1.608 6 2.25 4.886 10.715 0 12 0zm-1.692 7.123a.5.5 0 0 0-.5.5v3.564H6.366a.5.5 0 0 0-.5.5v.626a.5.5 0 0 0 .5.5h3.442v3.564a.5.5 0 0 0 .5.5h.626a.5.5 0 0 0 .5-.5v-3.564h3.442a.5.5 0 0 0 .5-.5v-.626a.5.5 0 0 0-.5-.5h-3.442V7.623a.5.5 0 0 0-.5-.5z" />
      </svg>
    ),
  },
  {
    name: "GeeksforGeeks",
    handle: "@raghav-ri",
    url: "https://www.geeksforgeeks.org/user/raghav-ri",
    stat: "500+",
    statLabel: "Problems Solved",
    color: "#2F8D46",
    bg: "from-green-600/10 to-teal-500/5",
    border: "hover:border-green-600/50",
    logo: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116.014 3.79 3.79 0 0 1-1.106-.695L15.56 15.07a.874.874 0 0 1-.235-.19.348.348 0 0 1-.074-.22.289.289 0 0 1 .08-.21.27.27 0 0 1 .2-.08h.25c.104 0 .21.05.31.07a3.01 3.01 0 0 0 1.47.172 2.8 2.8 0 0 0 1.3-.517 2.96 2.96 0 0 0 .89-1.063 3.06 3.06 0 0 0 .3-1.39 3.009 3.009 0 0 0-.3-1.403 2.93 2.93 0 0 0-.89-1.055 2.8 2.8 0 0 0-1.3-.517 3.01 3.01 0 0 0-1.47.172c-.1.02-.206.07-.31.07h-.25a.27.27 0 0 1-.2-.08.289.289 0 0 1-.08-.21c0-.08.026-.156.074-.22a.874.874 0 0 1 .235-.19l.004-.004a3.79 3.79 0 0 1 1.106-.695 4.51 4.51 0 0 1 3.116.014c.42.168.8.413 1.104.695.231.213.422.465.565.745.16.301.268.627.317.965A5.5 5.5 0 0 1 22 12a5.5 5.5 0 0 1-.55 2.315zM2 12a5.5 5.5 0 0 0 .55 2.315c.143.28.334.532.565.745a3.691 3.691 0 0 0 1.104.695 4.51 4.51 0 0 0 3.116.014 3.79 3.79 0 0 0 1.106-.695l.004-.004a.874.874 0 0 0 .235-.19.348.348 0 0 0 .074-.22.289.289 0 0 0-.08-.21.27.27 0 0 0-.2-.08h-.25c-.104 0-.21.05-.31.07a3.01 3.01 0 0 1-1.47.172 2.8 2.8 0 0 1-1.3-.517 2.96 2.96 0 0 1-.89-1.063A3.06 3.06 0 0 1 4 12a3.009 3.009 0 0 1 .3-1.403 2.93 2.93 0 0 1 .89-1.055 2.8 2.8 0 0 1 1.3-.517 3.01 3.01 0 0 1 1.47.172c.1.02.206.07.31.07h.25a.27.27 0 0 0 .2-.08.289.289 0 0 0 .08-.21c0-.08-.026-.156-.074-.22a.874.874 0 0 0-.235-.19 3.79 3.79 0 0 0-1.106-.695 4.51 4.51 0 0 0-3.116.014 3.691 3.691 0 0 0-1.104.695c-.231.213-.422.465-.565.745A5.5 5.5 0 0 0 2 12zm7.27 1.732h5.46a.27.27 0 0 0 .27-.27v-.924a.27.27 0 0 0-.27-.27H9.27a.27.27 0 0 0-.27.27v.924a.27.27 0 0 0 .27.27z" />
      </svg>
    ),
  },
  {
    name: "Codeforces",
    handle: "@raghav-ri",
    url: "https://codeforces.com/profile/raghav-ri",
    stat: "Pupil",
    statLabel: "Current Rank",
    color: "#1F8ACB",
    bg: "from-blue-500/10 to-sky-500/5",
    border: "hover:border-blue-500/50",
    logo: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5V19.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V4.5C9 3.672 9.672 3 10.5 3h3zm9 7.5c.828 0 1.5.672 1.5 1.5v9c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V11c0-.828.672-1.5 1.5-1.5h3z" />
      </svg>
    ),
  },
];

export const EducationSection = () => {
  const [activeEdu, setActiveEdu] = useState(0);

  return (
    <section id="education" className="py-24 px-4 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <p className="text-primary text-xs font-bold tracking-[0.25em] uppercase mb-3">
            Background & Credentials
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Education &{" "}
            <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            My academic journey, certifications earned, and competitive programming presence across top coding platforms.
          </p>
        </div>

        {/* ══════════════════════════════
            BLOCK 1 — EDUCATION
        ══════════════════════════════ */}
        <div className="mb-20">
          <SectionDivider label="Academic Timeline" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mt-8">
            {/* Selector tabs */}
            <div className="lg:col-span-2 flex lg:flex-col gap-3">
              {education.map((edu, i) => (
                <button
                  key={edu.id}
                  onClick={() => setActiveEdu(i)}
                  className={`
                    relative text-left p-4 rounded-xl border transition-all duration-300 w-full
                    ${activeEdu === i
                      ? "border-primary bg-primary/10 shadow-lg shadow-primary/10"
                      : "border-border bg-card hover:border-primary/40 hover:bg-primary/5"
                    }
                  `}
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

            {/* Detail card */}
            <div className="lg:col-span-3">
              {education.map((edu, i) => (
                <div
                  key={edu.id}
                  style={{ display: activeEdu === i ? "block" : "none" }}
                >
                  <div className="border border-border rounded-2xl p-8 bg-card relative overflow-hidden h-full">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/3 rounded-tr-full pointer-events-none" />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-5 flex-wrap gap-4">
                        <div>
                          <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <MapPin size={11} /> {edu.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar size={11} /> {edu.duration}
                            </span>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-3xl font-black text-primary">{edu.grade}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">Score</p>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                        {edu.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((h) => (
                          <span
                            key={h}
                            className="px-3 py-1 text-xs font-medium rounded-full border border-primary/30 bg-primary/10 text-primary"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════
            BLOCK 2 — CERTIFICATIONS
        ══════════════════════════════ */}
        <div className="mb-20">
          <SectionDivider label="Certifications" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className={`
                  group relative rounded-2xl border border-border
                  bg-gradient-to-br ${cert.color}
                  p-6 overflow-hidden
                  transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-primary/30
                `}
              >
                <div
                  className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-40"
                  style={{ backgroundColor: cert.accent }}
                />
                <div className="relative z-10">
                  <span className="text-4xl mb-5 block">{cert.icon}</span>

                  <div
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold mb-3"
                    style={{ backgroundColor: cert.accent + "25", color: cert.accent }}
                  >
                    <BadgeCheck size={11} /> Verified
                  </div>

                  <h4 className="font-bold text-base leading-snug mb-1">{cert.name}</h4>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>

                  <div className="mt-4 pt-4 border-t border-border/40">
                    <p className="text-xs text-muted-foreground font-mono tracking-wide">{cert.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════
            BLOCK 3 — CODING PLATFORMS
        ══════════════════════════════ */}
        <div>
          <SectionDivider label="Practice Platforms" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {platforms.map((p, i) => (
              <a
                key={i}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className={`
                  group relative flex flex-col gap-5 p-5 rounded-2xl
                  border border-border bg-gradient-to-br ${p.bg} ${p.border}
                  transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
                  overflow-hidden no-underline cursor-pointer
                `}
              >
                {/* Hover glow overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{ boxShadow: `inset 0 0 60px ${p.color}18` }}
                />

                {/* Top row */}
                <div className="flex items-center justify-between relative z-10">
                  <div
                    className="p-2.5 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    style={{ backgroundColor: p.color + "22", color: p.color }}
                  >
                    {p.logo}
                  </div>
                  <ExternalLink
                    size={13}
                    className="text-muted-foreground/30 group-hover:text-primary transition-colors duration-300"
                  />
                </div>

                {/* Name */}
                <div className="relative z-10">
                  <h4 className="font-bold text-base">{p.name}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5 font-mono">{p.handle}</p>
                </div>

                {/* Stat */}
                <div className="mt-auto pt-4 border-t border-border/40 relative z-10">
                  <p className="text-2xl font-black" style={{ color: p.color }}>
                    {p.stat}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">{p.statLabel}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

// ── Reusable divider ──
const SectionDivider = ({ label }) => (
  <div className="flex items-center gap-4">
    <div className="h-px flex-1 bg-border" />
    <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground whitespace-nowrap px-2">
      {label}
    </span>
    <div className="h-px flex-1 bg-border" />
  </div>
);