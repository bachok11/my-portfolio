import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";

const links = ["Home", "About", "Skills", "Projects", "Passions", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.toLowerCase()))
      .filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const id = visible.target.id;
          setActive(id.charAt(0).toUpperCase() + id.slice(1));
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(5,5,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,245,255,0.15)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            cursor: "pointer",
          }}
          onClick={() => scrollTo("Home")}
        >
          <Terminal size={20} style={{ color: "var(--neon-cyan)" }} />
          <span
            style={{
              fontFamily: "Courier New",
              fontWeight: 700,
              fontSize: "1rem",
              letterSpacing: 3,
            }}
          >
            <span className="neon-cyan">AMIN</span>
            <span style={{ color: "#555" }}>://</span>
            <span className="neon-purple">DEV</span>
          </span>
        </div>

        {/* Desktop links */}
        <div
          style={{ display: "flex", gap: 32, alignItems: "center" }}
          className="desktop-nav"
        >
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="nav-link"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "Courier New",
                fontSize: "0.78rem",
                letterSpacing: 2,
                textTransform: "uppercase",
                color: active === l ? "var(--neon-cyan)" : "#8899bb",
                padding: "4px 0",
              }}
            >
              {active === l && (
                <span style={{ color: "var(--neon-cyan)", marginRight: 4 }}>
                  &gt;
                </span>
              )}
              {l}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--neon-cyan)",
            display: "none",
          }}
          className="mobile-menu-btn"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          style={{
            background: "rgba(5,5,15,0.97)",
            borderBottom: "1px solid rgba(0,245,255,0.2)",
            padding: "16px 24px",
          }}
        >
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "Courier New",
                fontSize: "0.85rem",
                letterSpacing: 2,
                textTransform: "uppercase",
                color: active === l ? "var(--neon-cyan)" : "#8899bb",
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <span style={{ color: "var(--neon-cyan)", marginRight: 8 }}>
                {">>"}
              </span>
              {l}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
