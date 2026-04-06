import { useEffect, useRef, useState } from 'react';
import { Mail, GitFork, Link, Send, Terminal, MessageSquare } from 'lucide-react';

function useInView(ref, threshold = 0.15) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref);

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    // Simulate send
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  const inputStyle = (field) => ({
    width: '100%',
    background: focused === field ? 'rgba(0,245,255,0.04)' : 'rgba(5,5,20,0.8)',
    border: `1px solid ${focused === field ? 'var(--neon-cyan)' : 'rgba(0,245,255,0.15)'}`,
    boxShadow: focused === field ? '0 0 12px rgba(0,245,255,0.1)' : 'none',
    borderRadius: 4,
    padding: '12px 16px',
    color: '#dde',
    fontFamily: 'Courier New',
    fontSize: '0.88rem',
    outline: 'none',
    transition: 'all 0.3s ease',
    letterSpacing: 0.5,
  });

  const labelStyle = {
    display: 'block',
    fontSize: '0.72rem',
    letterSpacing: 3,
    color: 'var(--neon-cyan)',
    textTransform: 'uppercase',
    marginBottom: 8,
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: '120px 24px 80px',
        maxWidth: 1100,
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 64, textAlign: 'center', opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease' }}>
        <div style={{ fontSize: '0.72rem', letterSpacing: 4, color: 'var(--neon-cyan)', marginBottom: 8 }}>// SECTION_05</div>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: -1, fontFamily: 'Courier New', marginBottom: 12 }}>
          <span style={{ color: '#fff' }}>ESTABLISH</span>{' '}
          <span className="gradient-cyber">CONNECTION</span>
        </h2>
        <div className="section-line" style={{ width: 80, margin: '0 auto 16px' }} />
        <p style={{ color: '#7788aa', fontSize: '0.9rem', maxWidth: 480, margin: '0 auto' }}>
          Have a project in mind, an opportunity to share, or just want to say hello?
          Open a channel — I respond quickly.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48 }}>
        {/* Left: Contact info */}
        <div style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateX(0)' : 'translateX(-30px)',
          transition: 'all 0.8s ease 0.1s',
        }}>
          <div style={{ fontSize: '0.72rem', letterSpacing: 3, color: '#556', marginBottom: 28 }}>// CHANNELS</div>

          {[
            { icon: Mail, label: 'Email', value: 'muhammadamin@email.com', color: 'var(--neon-cyan)' },
            { icon: GitFork, label: 'GitHub', value: 'github.com/muhammadamin', color: 'var(--neon-purple)' },
            { icon: Link, label: 'LinkedIn', value: 'linkedin.com/in/muhammadamin', color: 'var(--neon-green)' },
          ].map(({ icon: Icon, label, value, color }, i) => (
            <div
              key={label}
              className="card-hover"
              style={{
                display: 'flex', alignItems: 'center', gap: 16,
                padding: '16px 20px', marginBottom: 16,
                background: 'rgba(5,5,20,0.7)',
                border: `1px solid ${color}25`,
                borderLeft: `2px solid ${color}`,
                borderRadius: 4,
                cursor: 'pointer',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateX(0)' : 'translateX(-20px)',
                transition: `all 0.6s ease ${i * 0.12}s`,
              }}
            >
              <div style={{
                width: 38, height: 38, borderRadius: 4,
                background: `${color}15`, border: `1px solid ${color}33`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Icon size={16} style={{ color }} />
              </div>
              <div>
                <div style={{ fontSize: '0.68rem', letterSpacing: 2, color, textTransform: 'uppercase', marginBottom: 3 }}>{label}</div>
                <div style={{ fontSize: '0.83rem', color: '#aabbcc' }}>{value}</div>
              </div>
            </div>
          ))}

          {/* Status */}
          <div className="hud" style={{
            marginTop: 28, padding: '16px 20px',
            background: 'rgba(57,255,20,0.04)',
            border: '1px solid rgba(57,255,20,0.2)',
            borderRadius: 4,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <Terminal size={14} style={{ color: 'var(--neon-green)' }} />
              <span style={{ fontSize: '0.72rem', letterSpacing: 2, color: 'var(--neon-green)', textTransform: 'uppercase' }}>Status</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <span className="status-dot" style={{
                width: 8, height: 8, borderRadius: '50%',
                background: 'var(--neon-green)', display: 'inline-block',
              }} />
              <span style={{ fontSize: '0.83rem', color: '#aabbcc' }}>Open to new opportunities</span>
            </div>
            <div style={{ fontSize: '0.78rem', color: '#556', marginTop: 6 }}>
              Response time: ~24 hours
            </div>
          </div>
        </div>

        {/* Right: Contact form */}
        <div style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateX(0)' : 'translateX(30px)',
          transition: 'all 0.8s ease 0.2s',
        }}>
          <div style={{ fontSize: '0.72rem', letterSpacing: 3, color: '#556', marginBottom: 28 }}>// SEND_MESSAGE</div>

          <div className="hud border-cyan" style={{
            background: 'rgba(5,5,20,0.7)',
            padding: 28, borderRadius: 4,
          }}>
            {sent ? (
              <div style={{
                textAlign: 'center', padding: '40px 0',
                animation: 'float 2s ease-in-out infinite',
              }}>
                <div style={{ fontSize: '3rem', marginBottom: 16 }}>⚡</div>
                <div className="neon-green" style={{ fontSize: '1.1rem', fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>
                  MESSAGE TRANSMITTED
                </div>
                <div style={{ color: '#7788aa', fontSize: '0.83rem' }}>
                  Signal received. I'll respond soon.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div>
                  <label style={labelStyle}>
                    <MessageSquare size={11} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
                    Name
                  </label>
                  <input
                    name="name" value={form.name} onChange={handleChange}
                    onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                    required placeholder="Your name..."
                    style={inputStyle('name')}
                  />
                </div>
                <div>
                  <label style={labelStyle}>
                    <Mail size={11} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
                    Email
                  </label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange}
                    onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                    required placeholder="your@email.com"
                    style={inputStyle('email')}
                  />
                </div>
                <div>
                  <label style={labelStyle}>
                    <Terminal size={11} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
                    Message
                  </label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                    required placeholder="Type your message..."
                    rows={5}
                    style={{ ...inputStyle('message'), resize: 'vertical', minHeight: 120 }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-cyber"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, border: '1px solid var(--neon-cyan)' }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Send size={14} />
                    TRANSMIT
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
