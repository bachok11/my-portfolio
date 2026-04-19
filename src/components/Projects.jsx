import { useEffect, useRef, useState } from "react";
import {
  ExternalLink,
  GitFork,
  Smartphone,
  Globe,
  Cpu,
  Drone,
  Building2,
} from "lucide-react";

function useInView(ref, threshold = 0.1) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
}

const projects = [
  {
    title: "Workplace Safety App",
    type: "Mobile App",
    icon: Smartphone,
    color: "var(--neon-cyan)",
    tags: ["Flutter", "BLoC", "Firebase", "Dio"],
    desc: "Production Flutter app for workplace safety — covers incident reporting, real-time alerts, and field notifications. Integrated Firebase FCM for push notifications and Crashlytics for error monitoring. Shipped to Google Play Store and Apple App Store.",
    status: "Production",
    statusColor: "var(--neon-green)",
    github: null,
    demo: null,
  },
  {
    title: "BLE Credentialing App",
    type: "Mobile App",
    icon: Cpu,
    color: "var(--neon-purple)",
    tags: ["Flutter", "BLE", "Drift", "GetIt"],
    desc: "Flutter app enabling BLE beacon broadcasting for secure mobile credentialing — location-aware access control triggers and secure local credential caching via Drift for seamless session persistence.",
    status: "Production",
    statusColor: "var(--neon-green)",
    github: null,
    demo: null,
  },
  {
    title: "Field Resource Monitoring",
    type: "Mobile App",
    icon: Globe,
    color: "var(--neon-pink)",
    tags: ["Flutter", "BLoC", "REST API", "GetIt"],
    desc: "Production Flutter app for real-time field resource monitoring — track and manage field assets and personnel with clean architecture (BLoC + GetIt), RESTful API integration via Dio, and store-deployed builds.",
    status: "Production",
    statusColor: "var(--neon-green)",
    github: null,
    demo: null,
  },
  {
    title: "React Web Applications",
    type: "Web App",
    icon: Cpu,
    color: "var(--neon-green)",
    tags: ["React", "TypeScript", "Redux Toolkit", "Vite"],
    desc: "Scalable React + TypeScript web applications at Significs, applying Flutter/BLoC architectural patterns to the web stack. Centralized state with Redux Toolkit, async API integration, and component-driven development.",
    status: "Production",
    statusColor: "var(--neon-green)",
    github: null,
    demo: null,
  },
  {
    title: "Drone Control Platform",
    type: "Web App",
    icon: Drone,
    color: "var(--neon-cyan)",
    tags: ["React", "TypeScript", "WebRTC", "WebSocket"],
    desc: "Web platform for real-time drone operation — live camera feed via WebRTC, flight controls, telemetry status (battery, altitude, GPS), and mission monitoring. Built for browser-based remote piloting.",
    status: "In Progress",
    statusColor: "var(--neon-pink)",
    github: null,
    demo: null,
  },
  {
    title: "Apartment Rental System",
    type: "Web App",
    icon: Building2,
    color: "var(--neon-purple)",
    tags: ["React", "TypeScript", "Redux Toolkit", "REST API"],
    desc: "Full-featured property management web app — tenants can manage listings, pay monthly rent, handle tax submissions, and track payment history. Landlords get a dashboard for occupancy and financials.",
    status: "In Progress",
    statusColor: "var(--neon-pink)",
    github: null,
    demo: null,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        padding: "120px 24px",
        maxWidth: 1100,
        margin: "0 auto",
        position: "relative",
        zIndex: 2,
      }}
    >
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
            color: "var(--neon-pink)",
            marginBottom: 8,
          }}
        >
          // SECTION_03
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
          <span style={{ color: "#fff" }}>PROJECT</span>{" "}
          <span className="gradient-fire">ARCHIVE</span>
        </h2>
        <div
          style={{
            height: 2,
            width: 80,
            background:
              "linear-gradient(90deg, var(--neon-pink), var(--neon-purple), transparent)",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
        }}
      >
        {projects.map((proj, i) => {
          const Icon = proj.icon;
          const isHov = hovered === i;
          return (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: isHov ? `${proj.color}08` : "rgba(5,5,20,0.7)",
                border: `1px solid ${isHov ? proj.color : proj.color + "33"}`,
                boxShadow: isHov
                  ? `0 0 30px ${proj.color}25, 0 0 60px ${proj.color}10`
                  : "none",
                borderRadius: 4,
                padding: 28,
                cursor: "pointer",
                transition: "all 0.35s ease",
                transform: inView
                  ? isHov
                    ? "translateY(-6px)"
                    : "translateY(0)"
                  : "translateY(30px)",
                opacity: inView ? 1 : 0,
                transitionDelay: inView ? `${i * 0.1}s` : "0s",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Corner accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 40,
                  height: 40,
                  background: `linear-gradient(225deg, ${proj.color}30, transparent)`,
                }}
              />

              {/* Top row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    background: `${proj.color}15`,
                    border: `1px solid ${proj.color}44`,
                    borderRadius: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={20} style={{ color: proj.color }} />
                </div>
                <span
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: 2,
                    padding: "4px 10px",
                    borderRadius: 2,
                    background: `${proj.statusColor}15`,
                    border: `1px solid ${proj.statusColor}44`,
                    color: proj.statusColor,
                    textTransform: "uppercase",
                  }}
                >
                  {proj.status}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  color: "#dde",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  marginBottom: 4,
                  fontFamily: "Courier New",
                  letterSpacing: 0.5,
                }}
              >
                {proj.title}
              </h3>
              <div
                style={{
                  fontSize: "0.72rem",
                  color: proj.color,
                  letterSpacing: 2,
                  marginBottom: 14,
                  textTransform: "uppercase",
                }}
              >
                {proj.type}
              </div>

              <p
                style={{
                  color: "#7788aa",
                  fontSize: "0.85rem",
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}
              >
                {proj.desc}
              </p>

              {/* Tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  marginBottom: 20,
                }}
              >
                {proj.tags.map((t) => (
                  <span
                    key={t}
                    className="tag"
                    style={{
                      background: `${proj.color}0d`,
                      border: `1px solid ${proj.color}33`,
                      color: proj.color,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div style={{ display: "flex", gap: 12 }}>
                {proj.github ? (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      background: "none",
                      border: `1px solid ${proj.color}44`,
                      color: proj.color,
                      padding: "6px 14px",
                      borderRadius: 2,
                      fontSize: "0.72rem",
                      letterSpacing: 1,
                      cursor: "pointer",
                      fontFamily: "Courier New",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                  >
                    <GitFork size={13} /> Code
                  </a>
                ) : (
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      border: `1px solid ${proj.color}22`,
                      color: proj.color + "55",
                      padding: "6px 14px",
                      borderRadius: 2,
                      fontSize: "0.72rem",
                      letterSpacing: 1,
                      fontFamily: "Courier New",
                      textTransform: "uppercase",
                    }}
                  >
                    <GitFork size={13} /> Private
                  </span>
                )}
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      background: "none",
                      border: `1px solid ${proj.color}44`,
                      color: proj.color,
                      padding: "6px 14px",
                      borderRadius: 2,
                      fontSize: "0.72rem",
                      letterSpacing: 1,
                      cursor: "pointer",
                      fontFamily: "Courier New",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                  >
                    <ExternalLink size={13} /> View
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
