import { Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 2,
        borderTop: "1px solid rgba(0,245,255,0.08)",
        padding: "32px 24px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          marginBottom: 12,
        }}
      >
        <Terminal size={14} style={{ color: "var(--neon-cyan)" }} />
        <span
          style={{
            fontFamily: "Courier New",
            fontSize: "0.8rem",
            letterSpacing: 3,
          }}
        >
          <span className="neon-cyan">AMIN</span>
          <span style={{ color: "#333" }}>://</span>
          <span className="neon-purple">DEV</span>
        </span>
      </div>
      <p
        style={{
          fontSize: "0.72rem",
          color: "#445",
          letterSpacing: 2,
          textTransform: "uppercase",
        }}
      >
        Built with React · Designed with ❤️ · &copy; {new Date().getFullYear()}{" "}
        Muhammad Amin
      </p>
      <p
        style={{
          fontSize: "0.65rem",
          color: "#333",
          marginTop: 8,
          fontFamily: "Courier New",
        }}
      >
        {">"} System online · All systems nominal
      </p>
    </footer>
  );
}
