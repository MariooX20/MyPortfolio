import { useEffect, useRef } from 'react';

export default function Hero() {
  const typingEl = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const titles = ['Software Engineer', 'Backend Developer', '.NET Specialist', 'Problem Solver'];
    let titleIndex = 0, charIndex = 0, isDeleting = false;
    let typingTimeout;

    const type = () => {
      if (!typingEl.current) return;
      const current = titles[titleIndex];
      if (isDeleting) {
        typingEl.current.textContent = current.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingEl.current.textContent = current.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === current.length) {
        typingTimeout = setTimeout(() => { isDeleting = true; type(); }, 1800);
        return;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
      }

      const speed = isDeleting ? 60 : 110;
      typingTimeout = setTimeout(type, speed);
    };

    typingTimeout = setTimeout(type, 1200);

    return () => clearTimeout(typingTimeout);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.5 + 0.1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = '#a78bfa';
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < 90; i++) particles.push(new Particle());

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });

      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach(q => {
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 100) {
            ctx.save();
            ctx.globalAlpha = (1 - dist / 100) * 0.15;
            ctx.strokeStyle = '#7c3aed';
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animateParticles);
    };
    animateParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero">
      <div className="hero-gradient"></div>
      <div className="hero-grid"></div>
      <canvas
        ref={canvasRef}
        id="hero-canvas"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      ></canvas>

      <div className="container hero-content">
        <span className="hero-badge">
          <span className="dot"></span>
          Available for opportunities
        </span>

        <h1 className="hero-name">Mario N. Kamel</h1>

        <div className="hero-title-wrap">
          <span ref={typingEl} id="typing-text"></span><span className="cursor"></span>
        </div>

        <p className="hero-desc">
          Passionate software engineering student building robust, scalable
          backend systems with .NET — turning complex ideas into clean,
          performant code.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary-custom" id="hero-cta-projects">
            <i className="bi bi-grid-1x2"></i> View Projects
          </a>
          <a href="#contact" className="btn-outline-custom" id="hero-cta-contact">
            <i className="bi bi-send"></i> Get in Touch
          </a>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <svg
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 1v18M1 13l7 7 7-7"
            stroke="#9ca3af"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
