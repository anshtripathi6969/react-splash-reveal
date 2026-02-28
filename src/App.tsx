import { useState } from 'react';
import { SplashReveal } from './lib';
import type { SplashRevealProps } from './lib/types';

function App() {
  const [key, setKey] = useState(0);
  const [animation, setAnimation] = useState<SplashRevealProps['animation']>('slide-up');
  const [introAnimation, setIntroAnimation] = useState<SplashRevealProps['introAnimation']>('logo-scale-bounce');
  const [bgColor, setBgColor] = useState('#0f172a');
  const [duration, setDuration] = useState(1200);

  const triggerSplash = () => {
    setKey(prev => prev + 1);
  };

  const Logo = (
    <div style={{ textAlign: 'center', color: '#fff', userSelect: 'none' }}>
      <img src="https://vitejs.dev/logo.svg" alt="Logo" width={100} height={100} style={{ marginBottom: '1rem', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))' }} />
      <h1 style={{ fontSize: '2.5rem', margin: 0, fontWeight: 800, letterSpacing: '3px', fontFamily: 'system-ui, sans-serif' }}>V I T E</h1>
      <p style={{ opacity: 0.7, marginTop: '0.5rem', fontFamily: 'system-ui, sans-serif' }}>Splashing the web.</p>
    </div>
  );

  return (
    <div className="demo-wrapper">
      <SplashReveal
        key={key}
        logo={Logo}
        animation={animation}
        introAnimation={introAnimation}
        backgroundColor={bgColor}
        duration={duration}
        once={false}
      >
        <div className="app-content">
          <header className="app-header">
            <div className="header-brand">react-splash-reveal</div>
            <nav className="header-nav">
              <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
              <a href="#">Documentation</a>
            </nav>
          </header>

          <main className="app-main">
            <div className="hero-section">
              <h1>Cinematic Spash Screens for React</h1>
              <p>Add mobile-app style launch transitions with less than 2kb of CSS and zero runtime dependencies.</p>
            </div>

            <div className="dashboard-grid">
              <section className="controls-section panel">
                <h3>Interactive Playground</h3>

                <div className="control-group">
                  <label>Exit Animation</label>
                  <select value={animation} onChange={e => setAnimation(e.target.value as any)}>
                    <option value="slide-up">Slide Up</option>
                    <option value="slide-down">Slide Down</option>
                    <option value="fade">Fade</option>
                    <option value="scale">Scale</option>
                    <option value="curtain">Curtain</option>
                    <option value="clip-reveal">Clip Reveal</option>
                  </select>
                </div>

                <div className="control-group">
                  <label>Brand Intro Mode</label>
                  <select value={introAnimation} onChange={e => setIntroAnimation(e.target.value as any)}>
                    <option value="logo-scale-bounce">Logo Scale Bounce</option>
                    <option value="none">None</option>
                  </select>
                </div>

                <div className="control-group">
                  <label>Background Color</label>
                  <div className="color-picker-wrapper">
                    <input type="color" value={bgColor} onChange={e => setBgColor(e.target.value)} />
                    <span>{bgColor}</span>
                  </div>
                </div>

                <div className="control-group">
                  <label>Duration ({duration}ms)</label>
                  <input type="range" min="500" max="3000" step="100" value={duration} onChange={e => setDuration(Number(e.target.value))} />
                </div>

                <button className="primary-btn" onClick={triggerSplash}>
                  Replay Animation
                </button>
              </section>

              <section className="code-section panel">
                <h3>Usage Snippet</h3>
                <pre>
                  {`import { SplashReveal } from 'react-splash-reveal';
import 'react-splash-reveal/dist/style.css'; // Add CSS!

function MyApp() {
  return (
    <SplashReveal
      logo={<MyBrandLogo />}
      animation="${animation}"
      introAnimation="${introAnimation}"
      backgroundColor="${bgColor}"
      duration={${duration}}
      once={true}
    >
      <App />
    </SplashReveal>
  );
}`}
                </pre>
              </section>
            </div>
          </main>
        </div>
      </SplashReveal>
    </div>
  );
}

export default App;
