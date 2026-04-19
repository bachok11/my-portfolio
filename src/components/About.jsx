import { useEffect, useRef, useState } from "react";
import { User, MapPin, GraduationCap, Briefcase, Code2 } from "lucide-react";

function useInView(ref, threshold = 0.2) {
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

const timeline = [
  {
    icon: GraduationCap,
    title: "Bachelor of Computer Science",
    place: "Universiti Teknologi Malaysia",
    period: "2018 – 2022",
    color: "var(--neon-cyan)",
    desc: "Specialized in software engineering with focus on mobile and web application development.",
  },
  {
    icon: Briefcase,
    title: "Mobile App Developer",
    place: "Significs Sdn Bhd",
    period: "June 2022 – Present",
    color: "var(--neon-green)",
    desc: "Building cutting-edge Flutter applications, leading mobile development initiatives, and collaborating on full-stack solutions.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "120px 24px",
        maxWidth: 1100,
        margin: "0 auto",
        position: "relative",
        zIndex: 2,
      }}
    >
      {/* Section header */}
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
            color: "var(--neon-cyan)",
            marginBottom: 8,
          }}
        >
          // SECTION_01
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
          <span style={{ color: "#fff" }}>ABOUT</span>{" "}
          <span className="gradient-cyber">ME</span>
        </h2>
        <div className="section-line" style={{ width: 80 }} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 48,
        }}
      >
        {/* Left: Bio card */}
        <div
          className="hud border-cyan"
          style={{
            background: "rgba(0,245,255,0.03)",
            padding: 32,
            borderRadius: 4,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-30px)",
            transition: "all 0.8s ease 0.1s",
          }}
        >
          {/* Avatar placeholder */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 24,
            }}
          >
            <div
              className="hex"
              style={{
                width: 64,
                height: 64,
                flexShrink: 0,
                background:
                  "linear-gradient(135deg, var(--neon-cyan), var(--neon-purple))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <User size={28} style={{ color: "#05050f" }} />
            </div>
            <div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "#fff",
                  letterSpacing: 1,
                }}
              >
                Muhammad Amin
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--neon-cyan)",
                  letterSpacing: 2,
                }}
              >
                FLUTTER DEVELOPER
              </div>
            </div>
          </div>

          <p
            style={{
              color: "#8899bb",
              lineHeight: 1.8,
              fontSize: "0.9rem",
              marginBottom: 24,
            }}
          >
            I'm a passionate developer who thrives at the intersection of
            <span className="neon-cyan"> mobile technology</span> and{" "}
            <span className="neon-purple"> elegant design</span>. With over 3
            years of professional experience, I craft apps that feel as good as
            they work.
          </p>
          <p style={{ color: "#8899bb", lineHeight: 1.8, fontSize: "0.9rem" }}>
            When I'm not writing code, I'm exploring how to improve my{" "}
            <span className="neon-green">mobile apps</span> and diving deeper
            into <span className="neon-cyan">React</span> to level up my skills.
          </p>

          {/* Info rows */}
          <div
            style={{
              marginTop: 28,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {[
              { icon: MapPin, text: "Malaysia", color: "var(--neon-pink)" },
              {
                icon: GraduationCap,
                text: "B.Sc Computer Science — UTM",
                color: "var(--neon-cyan)",
              },
              {
                icon: Code2,
                text: "Flutter • Dart • React • Kotlin • Jetpack Compose",
                color: "var(--neon-purple)",
              },
            ].map(({ icon: Icon, text, color }) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: "0.83rem",
                  color: "#778",
                }}
              >
                <Icon size={14} style={{ color, flexShrink: 0 }} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Timeline */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(30px)",
            transition: "all 0.8s ease 0.2s",
          }}
        >
          <div
            style={{
              fontSize: "0.72rem",
              letterSpacing: 3,
              color: "#556",
              marginBottom: 24,
            }}
          >
            // EXPERIENCE &amp; EDUCATION
          </div>
          <div style={{ position: "relative", paddingLeft: 32 }}>
            {/* Vertical line */}
            <div
              className="timeline-line"
              style={{
                position: "absolute",
                left: 7,
                top: 8,
                bottom: 8,
                width: 2,
                borderRadius: 1,
              }}
            />

            {timeline.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} style={{ marginBottom: 40, position: "relative" }}>
                  {/* Dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: -28,
                      top: 4,
                      width: 16,
                      height: 16,
                      borderRadius: "50%",
                      background: item.color,
                      boxShadow: `0 0 12px ${item.color}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "#05050f",
                      }}
                    />
                  </div>

                  <div
                    className="border-cyan card-hover"
                    style={{
                      background: "rgba(0,245,255,0.02)",
                      padding: 20,
                      borderRadius: 4,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        marginBottom: 8,
                      }}
                    >
                      <Icon size={16} style={{ color: item.color }} />
                      <span
                        style={{
                          fontWeight: 700,
                          color: "#dde",
                          fontSize: "0.95rem",
                        }}
                      >
                        {item.title}
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: item.color,
                        letterSpacing: 1,
                        marginBottom: 4,
                      }}
                    >
                      {item.place}
                    </div>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        color: "#556",
                        letterSpacing: 2,
                        marginBottom: 10,
                      }}
                    >
                      {item.period}
                    </div>
                    <p
                      style={{
                        fontSize: "0.83rem",
                        color: "#778",
                        lineHeight: 1.7,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
