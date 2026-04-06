import { useEffect, useRef, useState } from 'react';
import { Smartphone, Globe, Brain, Wrench } from 'lucide-react';

function useInView(ref, threshold = 0.2) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
}

const skillGroups = [
  {
    icon: Smartphone,
    label: 'Mobile',
    color: 'var(--neon-cyan)',
    skills: [
      { name: 'Flutter / Dart', level: 90 },
      { name: 'React Native', level: 65 },
      { name: 'Firebase', level: 80 },
      { name: 'REST APIs', level: 85 },
    ],
  },
  {
    icon: Globe,
    label: 'Web',
    color: 'var(--neon-purple)',
    skills: [
      { name: 'React.js', level: 75 },
      { name: 'JavaScript / TypeScript', level: 78 },
      { name: 'HTML / CSS', level: 85 },
      { name: 'Node.js', level: 60 },
    ],
  },
  {
    icon: Brain,
    label: 'AI & Data',
    color: 'var(--neon-pink)',
    skills: [
      { name: 'Python', level: 72 },
      { name: 'Machine Learning', level: 60 },
      { name: 'AI Integration', level: 70 },
      { name: 'Data Analysis', level: 58 },
    ],
  },
  {
    icon: Wrench,
    label: 'Tools & Practices',
    color: 'var(--neon-green)',
    skills: [
      { name: 'Git / GitHub', level: 88 },
      { name: 'Agile / Scrum', level: 80 },
      { name: 'Debugging', level: 90 },
      { name: 'OOP / Design Patterns', level: 82 },
    ],
  },
];

function SkillBar({ name, level, color, animate }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: '0.8rem' }}>
        <span style={{ color: '#aabbcc', letterSpacing: 0.5 }}>{name}</span>
        <span style={{ color, fontWeight: 700 }}>{level}%</span>
      </div>
      <div style={{
        height: 4, background: 'rgba(255,255,255,0.06)',
        borderRadius: 2, overflow: 'hidden', position: 'relative',
      }}>
        <div style={{
          height: '100%',
          width: animate ? `${level}%` : '0%',
          background: `linear-gradient(90deg, ${color}, ${color}88)`,
          borderRadius: 2,
          boxShadow: `0 0 8px ${color}`,
          transition: animate ? 'width 1.4s cubic-bezier(0.4,0,0.2,1)' : 'none',
          transitionDelay: animate ? '0.3s' : '0s',
        }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref);

  const softSkills = [
    'Problem Solving', 'Debugging', 'Project Coordination',
    'Software Testing', 'Object Oriented Programming', 'Team Collaboration',
  ];

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: '120px 24px',
        position: 'relative',
        background: 'rgba(0,0,0,0.3)',
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 64, opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease' }}>
          <div style={{ fontSize: '0.72rem', letterSpacing: 4, color: 'var(--neon-purple)', marginBottom: 8 }}>// SECTION_02</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: -1, fontFamily: 'Courier New', marginBottom: 12 }}>
            <span style={{ color: '#fff' }}>SKILL</span>{' '}
            <span className="gradient-cyber">MATRIX</span>
          </h2>
          <div className="section-line" style={{ width: 80 }} />
        </div>

        {/* Skill groups grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 56 }}>
          {skillGroups.map((group, gi) => {
            const Icon = group.icon;
            return (
              <div
                key={group.label}
                className="hud card-hover"
                style={{
                  background: 'rgba(5,5,20,0.7)',
                  border: `1px solid ${group.color}33`,
                  boxShadow: `0 0 20px ${group.color}10`,
                  padding: 24,
                  borderRadius: 4,
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.7s ease ${gi * 0.12}s`,
                }}
              >
                {/* Group header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
                  <div style={{
                    width: 36, height: 36,
                    background: `${group.color}15`,
                    border: `1px solid ${group.color}44`,
                    borderRadius: 4,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={16} style={{ color: group.color }} />
                  </div>
                  <span style={{ fontWeight: 700, color: group.color, letterSpacing: 2, fontSize: '0.85rem', textTransform: 'uppercase' }}>
                    {group.label}
                  </span>
                </div>

                {group.skills.map(s => (
                  <SkillBar key={s.name} {...s} color={group.color} animate={inView} />
                ))}
              </div>
            );
          })}
        </div>

        {/* Soft skills */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.5s',
          }}
        >
          <div style={{ fontSize: '0.72rem', letterSpacing: 3, color: '#556', marginBottom: 20 }}>// SOFT_SKILLS</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {softSkills.map(s => (
              <span key={s} className="tag" style={{
                background: 'rgba(0,245,255,0.05)',
                border: '1px solid rgba(0,245,255,0.2)',
                color: 'var(--neon-cyan)',
              }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
