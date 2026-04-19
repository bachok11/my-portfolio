import { useEffect, useState } from "react";
import { ChevronDown, Download, Zap } from "lucide-react";

const TITLES = [
  "Flutter Developer",
  "Mobile App Engineer",
  "Full-Stack Developer",
  "Problem Solver",
];

function useTyping(words) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let timeout;
    if (!deleting && charIdx <= word.length) {
      timeout = setTimeout(() => {
        setDisplay(word.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, 90);
    } else if (!deleting && charIdx > word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplay(word.slice(0, charIdx));
        setCharIdx((c) => c - 1);
      }, 45);
    } else {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % words.length);
        setCharIdx(0);
      }, 0);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words]);

  return display;
}

export default function Hero() {
  const title = useTyping(TITLES);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="grid-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "80px 24px 40px",
      }}
    >
      {/* Radial glow blobs */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "15%",
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(0,245,255,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "15%",
          width: 350,
          height: 350,
          background:
            "radial-gradient(circle, rgba(191,0,255,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Spinning ring */}
      <div
        className="spin-slow float"
        style={{
          position: "absolute",
          top: "10%",
          right: "8%",
          width: 120,
          height: 120,
          border: "1px solid rgba(0,245,255,0.2)",
          borderRadius: "50%",
          borderTopColor: "var(--neon-cyan)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "8%",
          width: 120,
          height: 120,
          border: "1px solid rgba(191,0,255,0.15)",
          borderRadius: "50%",
          transform: "scale(1.3)",
          animation: "spin-slow 30s linear infinite reverse",
          pointerEvents: "none",
        }}
      />

      {/* Main content */}
      <div
        style={{
          textAlign: "center",
          maxWidth: 780,
          position: "relative",
          zIndex: 2,
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease",
        }}
      >
        {/* Status badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(57,255,20,0.07)",
            border: "1px solid rgba(57,255,20,0.3)",
            borderRadius: 2,
            padding: "6px 16px",
            marginBottom: 32,
            fontSize: "0.72rem",
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          <span
            className="status-dot"
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "var(--neon-green)",
              display: "inline-block",
            }}
          />
          <span className="neon-green">Available for opportunities</span>
        </div>

        {/* Greeting line */}
        <div
          style={{
            fontSize: "0.85rem",
            letterSpacing: 4,
            color: "#556",
            marginBottom: 12,
          }}
        >
          <span style={{ color: "var(--neon-cyan)" }}>&gt;&gt;</span>{" "}
          INITIALIZING PROFILE...
        </div>

        {/* Name */}
        <h1
          className="glitch"
          style={{
            fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
            fontWeight: 900,
            letterSpacing: -2,
            lineHeight: 1.05,
            marginBottom: 16,
            fontFamily: "'Courier New', monospace",
          }}
        >
          <span className="gradient-cyber">MUHAMMAD</span>
          <br />
          <span
            style={{
              color: "#fff",
              WebkitTextStroke: "1px rgba(0,245,255,0.3)",
            }}
          >
            AMIN
          </span>
        </h1>

        {/* Typing title */}
        <div
          style={{
            fontSize: "clamp(1rem, 3vw, 1.5rem)",
            letterSpacing: 4,
            marginBottom: 24,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <Zap size={18} style={{ color: "var(--neon-purple)" }} />
          <span className="neon-purple cursor">{title}</span>
        </div>

        {/* Bio */}
        <p
          style={{
            color: "#7788aa",
            fontSize: "0.95rem",
            lineHeight: 1.8,
            maxWidth: 560,
            margin: "0 auto 40px",
            letterSpacing: 0.5,
          }}
        >
          Crafting high-performance mobile & web experiences at{" "}
          <span className="neon-cyan">Significs Sdn Bhd</span>. Computer Science
          graduate from{" "}
          <span className="neon-purple">Universiti Teknologi Malaysia</span>,
          passionate about <span className="neon-cyan">Flutter</span>,{" "}
          <span className="neon-purple">React</span>, and writing code that
          scales.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            className="btn-cyber"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span>View Projects</span>
          </button>
          <button
            className="btn-cyber btn-cyber-purple"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span>Contact Me</span>
          </button>
          <a
            className="btn-link"
            href="/Muhammad_Amin_Resume.pdf"
            download="Muhammad_Amin_Resume.pdf"
          >
            <Download size={14} /> Download CV
          </a>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: 40,
            justifyContent: "center",
            marginTop: 60,
            flexWrap: "wrap",
          }}
        >
          {[
            { val: "3+", label: "Years Experience" },
            { val: "UTM", label: "Education" },
            { val: "∞", label: "Lines of Code" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "var(--neon-cyan)",
                  fontFamily: "Courier New",
                }}
              >
                {s.val}
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: 2,
                  color: "#556",
                  textTransform: "uppercase",
                  marginTop: 4,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        aria-label="Scroll to About section"
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
          animation: "float 2.5s ease-in-out infinite",
          color: "rgba(0,245,255,0.5)",
        }}
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
