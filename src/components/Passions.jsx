import { useEffect, useRef, useState } from 'react';
import { Brain, Gamepad2, Rocket, Sparkles, Code2, Zap } from 'lucide-react';

function useInView(ref, threshold = 0.15) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
}

const passions = [
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    color: 'var(--neon-cyan)',
    desc: 'Fascinated by machine learning, LLMs, and how AI is reshaping the way we interact with technology. I love integrating AI capabilities into everyday apps.',
    tags: ['LLMs', 'ML', 'Computer Vision', 'NLP'],
  },
  {
    icon: Gamepad2,
    title: 'Gaming & Game Dev',
    color: 'var(--neon-purple)',
    desc: 'Gaming has always inspired my love for interactive experiences and great UX. I enjoy exploring game development concepts and applying gamification to apps.',
    tags: ['UX Design', 'Gamification', 'Interactive UI'],
  },
  {
    icon: Sparkles,
    title: 'Beautiful UI/UX',
    color: 'var(--neon-pink)',
    desc: "Deeply passionate about crafting interfaces that don't just work — they feel alive. The intersection of art and engineering is where I love to live.",
    tags: ['Design Systems', 'Motion', 'Accessibility'],
  },
  {
    icon: Code2,
    title: 'Open Source & Learning',
    color: 'var(--neon-green)',
    desc: 'Continuous learning is the only cheat code. I follow open-source projects, contribute where I can, and believe in sharing knowledge with the community.',
    tags: ['GitHub', 'Community', 'Dev Blogs'],
  },
];

const futureProjects = [
  {
    icon: Rocket,
    title: 'AI-Powered Dev Assistant',
    color: 'var(--neon-cyan)',
    timeline: 'Q3 2025',
    desc: 'A Flutter app that integrates with AI models to assist developers — code suggestions, debugging help, and documentation generation on mobile.',
    status: 'Planning',
  },
  {
    icon: Zap,
    title: 'Personal Finance Tracker',
    color: 'var(--neon-purple)',
    timeline: 'Q4 2025',
    desc: 'Smart finance tracking app with ML-based spending pattern analysis, predictive budgeting, and beautiful data visualizations.',
    status: 'Ideation',
  },
  {
    icon: Brain,
    title: 'Interactive Learning Platform',
    color: 'var(--neon-green)',
    timeline: '2026',
    desc: 'Gamified coding education platform for beginners in Southeast Asia — think Duolingo but for programming, with Flutter & AI at its core.',
    status: 'Research',
  },
];

export default function Passions() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section
      id="passions"
      ref={ref}
      style={{
        padding: '120px 24px',
        position: 'relative',
        background: 'rgba(0,0,0,0.2)',
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 64, opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease' }}>
          <div style={{ fontSize: '0.72rem', letterSpacing: 4, color: 'var(--neon-green)', marginBottom: 8 }}>// SECTION_04</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: -1, fontFamily: 'Courier New', marginBottom: 12 }}>
            <span style={{ color: '#fff' }}>PASSIONS</span>{' '}
            <span className="neon-green">&amp;</span>{' '}
            <span className="gradient-cyber">FUTURE</span>
          </h2>
          <div style={{ height: 2, width: 80, background: 'linear-gradient(90deg, var(--neon-green), var(--neon-cyan), transparent)' }} />
        </div>

        {/* Passions grid */}
        <div style={{ fontSize: '0.72rem', letterSpacing: 3, color: '#556', marginBottom: 24 }}>// WHAT_DRIVES_ME</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20, marginBottom: 72 }}>
          {passions.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="card-hover hud"
                style={{
                  background: `${p.color}05`,
                  border: `1px solid ${p.color}25`,
                  padding: 24, borderRadius: 4,
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.7s ease ${i * 0.1}s`,
                }}
              >
                <div style={{
                  width: 44, height: 44,
                  background: `${p.color}15`,
                  border: `1px solid ${p.color}44`,
                  borderRadius: 4,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 16,
                }}>
                  <Icon size={20} style={{ color: p.color }} />
                </div>
                <h3 style={{ color: '#dde', fontWeight: 700, fontSize: '0.95rem', marginBottom: 10, fontFamily: 'Courier New' }}>
                  {p.title}
                </h3>
                <p style={{ color: '#7788aa', fontSize: '0.83rem', lineHeight: 1.7, marginBottom: 16 }}>
                  {p.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {p.tags.map(t => (
                    <span key={t} className="tag" style={{
                      background: `${p.color}0d`,
                      border: `1px solid ${p.color}33`,
                      color: p.color,
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Future projects */}
        <div style={{ fontSize: '0.72rem', letterSpacing: 3, color: '#556', marginBottom: 24 }}>// FUTURE_PROJECTS</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {futureProjects.map((fp, i) => {
            const Icon = fp.icon;
            return (
              <div
                key={i}
                className="card-hover"
                style={{
                  background: 'rgba(5,5,20,0.7)',
                  border: `1px solid ${fp.color}33`,
                  borderLeft: `3px solid ${fp.color}`,
                  padding: '20px 28px',
                  borderRadius: 4,
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr auto',
                  gap: 20, alignItems: 'center',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateX(0)' : 'translateX(-20px)',
                  transition: `all 0.7s ease ${i * 0.12 + 0.4}s`,
                }}
              >
                <div style={{
                  width: 40, height: 40,
                  background: `${fp.color}15`,
                  border: `1px solid ${fp.color}44`,
                  borderRadius: 4,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={18} style={{ color: fp.color }} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                    <span style={{ color: '#dde', fontWeight: 700, fontSize: '0.95rem', fontFamily: 'Courier New' }}>{fp.title}</span>
                  </div>
                  <p style={{ color: '#7788aa', fontSize: '0.82rem', lineHeight: 1.6 }}>{fp.desc}</p>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontSize: '0.65rem', letterSpacing: 2, color: fp.color, textTransform: 'uppercase', marginBottom: 4 }}>{fp.status}</div>
                  <div style={{ fontSize: '0.72rem', color: '#556' }}>{fp.timeline}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
