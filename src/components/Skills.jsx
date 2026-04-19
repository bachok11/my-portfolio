import { useRef, useState } from "react";
import { Smartphone, Globe, Wrench } from "lucide-react";
import { useInView } from "../hooks/useInView";

const skillGroups = [
  {
    icon: Smartphone,
    label: "Mobile",
    color: "var(--neon-cyan)",
    skills: [
      { name: "Flutter / Dart", level: 90 },
      { name: "REST APIs (Dio)", level: 85 },
      { name: "Firebase (FCM, Crashlytics)", level: 55 },
    ],
  },
  {
    icon: Globe,
    label: "Web",
    color: "var(--neon-purple)",
    skills: [
      { name: "HTML / CSS", level: 85 },
      { name: "JavaScript / TypeScript", level: 78 },
      { name: "React.js", level: 75 },
    ],
  },
  {
    icon: Wrench,
    label: "Tools & Practices",
    color: "var(--neon-cyan)",
    skills: [
      { name: "Git / GitHub", level: 88 },
      { name: "Agile / Scrum", level: 80 },
      { name: "Debugging", level: 90 },
      { name: "OOP / Design Patterns", level: 82 },
    ],
  },
];

function SkillBar({ name, level, color, animate }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 6,
          fontSize: "0.8rem",
        }}
      >
        <span style={{ color: "#aabbcc", letterSpacing: 0.5 }}>{name}</span>
        <span style={{ color, fontWeight: 700 }}>{level}%</span>
      </div>
      <div
        style={{
          height: 8,
          background: "rgba(255,255,255,0.08)",
          border: `1px solid ${color}33`,
          borderRadius: 4,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "100%",
            width: animate ? `${level}%` : "0%",
            background: `linear-gradient(90deg, ${color}, ${color}aa)`,
            borderRadius: 4,
            boxShadow: `0 0 10px ${color}, 0 0 4px ${color} inset`,
            transition: animate
              ? "width 1.4s cubic-bezier(0.4,0,0.2,1)"
              : "none",
            transitionDelay: animate ? "0.3s" : "0s",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, 0.2);
  const [hoverIdx, setHoverIdx] = useState(null);

  const softSkills = [
    "Problem Solving",
    "Debugging",
    "Project Coordination",
    "Software Testing",
    "Object Oriented Programming",
    "Team Collaboration",
  ];

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: "120px 24px",
        position: "relative",
        background: "rgba(0,0,0,0.3)",
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            marginBottom: 64,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          <div
            style={{
              fontSize: "0.72rem",
              letterSpacing: 4,
              color: "var(--neon-purple)",
              marginBottom: 8,
            }}
          >
            // SECTION_02
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: -1,
              fontFamily: "Courier New",
              marginBottom: 12,
            }}
          >
            <span style={{ color: "#fff" }}>SKILL</span>{" "}
            <span className="gradient-cyber">MATRIX</span>
          </h2>
          <div className="section-line" style={{ width: 80 }} />
        </div>

        {/* Skill groups grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            marginBottom: 56,
          }}
        >
          {skillGroups.map((group, gi) => {
            const Icon = group.icon;
            const isHover = hoverIdx === gi;
            const baseTranslate = inView ? 0 : 30;
            return (
              <div
                key={group.label}
                className="hud"
                onMouseEnter={() => setHoverIdx(gi)}
                onMouseLeave={() => setHoverIdx(null)}
                style={{
                  background: "rgba(5,5,20,0.7)",
                  border: `1px solid ${
                    isHover ? `${group.color}aa` : `${group.color}33`
                  }`,
                  boxShadow: isHover
                    ? `0 0 40px ${group.color}55, 0 12px 32px rgba(0,0,0,0.5)`
                    : `0 0 20px ${group.color}10`,
                  padding: 24,
                  borderRadius: 4,
                  cursor: "pointer",
                  opacity: inView ? 1 : 0,
                  transform: `translateY(${
                    baseTranslate + (isHover ? -8 : 0)
                  }px) scale(${isHover ? 1.05 : 1})`,
                  transition: inView
                    ? `transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s ease, border-color 0.35s ease`
                    : `all 0.7s ease ${gi * 0.12}s`,
                  zIndex: isHover ? 3 : 1,
                }}
              >
                {/* Group header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 24,
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      background: `${group.color}15`,
                      border: `1px solid ${group.color}44`,
                      borderRadius: 4,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={16} style={{ color: group.color }} />
                  </div>
                  <span
                    style={{
                      fontWeight: 700,
                      color: group.color,
                      letterSpacing: 2,
                      fontSize: "0.85rem",
                      textTransform: "uppercase",
                    }}
                  >
                    {group.label}
                  </span>
                </div>

                {group.skills.map((s) => (
                  <SkillBar
                    key={s.name}
                    {...s}
                    color={group.color}
                    animate={inView}
                  />
                ))}
              </div>
            );
          })}
        </div>

        {/* Soft skills */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease 0.5s",
          }}
        >
          <div
            style={{
              fontSize: "0.72rem",
              letterSpacing: 3,
              color: "#556",
              marginBottom: 20,
            }}
          >
            // SOFT_SKILLS
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {softSkills.map((s) => (
              <span
                key={s}
                className="tag"
                style={{
                  background: "rgba(0,245,255,0.05)",
                  border: "1px solid rgba(0,245,255,0.2)",
                  color: "var(--neon-cyan)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
