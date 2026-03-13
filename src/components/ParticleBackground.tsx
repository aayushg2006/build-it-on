import { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let mouse = { x: -1000, y: -1000 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    // Particle system
    const particles: {
      x: number; y: number; vx: number; vy: number;
      size: number; color: string; alpha: number; pulse: number; pulseSpeed: number;
    }[] = [];

    const colors = [
      "0, 220, 200",   // bright teal
      "50, 180, 255",   // electric blue
      "80, 255, 150",   // neon green
      "120, 200, 255",  // sky blue
      "0, 255, 200",    // cyan
      "100, 255, 180",  // mint
    ];

    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.6 + 0.2,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.03 + 0.01,
      });
    }

    // Floating orbs (large glowing circles)
    const orbs = Array.from({ length: 5 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 150 + 80,
      color: colors[Math.floor(Math.random() * colors.length)],
      phase: Math.random() * Math.PI * 2,
    }));

    // Shooting stars
    const shootingStars: { x: number; y: number; vx: number; vy: number; life: number; maxLife: number; color: string }[] = [];
    let shootTimer = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let time = 0;

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw floating orbs (ambient glow)
      orbs.forEach(orb => {
        orb.x += orb.vx;
        orb.y += orb.vy;
        orb.phase += 0.005;
        if (orb.x < -orb.radius) orb.x = canvas.width + orb.radius;
        if (orb.x > canvas.width + orb.radius) orb.x = -orb.radius;
        if (orb.y < -orb.radius) orb.y = canvas.height + orb.radius;
        if (orb.y > canvas.height + orb.radius) orb.y = -orb.radius;

        const pulseAlpha = 0.03 + Math.sin(orb.phase) * 0.02;
        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        gradient.addColorStop(0, `rgba(${orb.color}, ${pulseAlpha * 2})`);
        gradient.addColorStop(0.5, `rgba(${orb.color}, ${pulseAlpha})`);
        gradient.addColorStop(1, `rgba(${orb.color}, 0)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(orb.x - orb.radius, orb.y - orb.radius, orb.radius * 2, orb.radius * 2);
      });

      // Draw & update particles
      particles.forEach((p, i) => {
        // Mouse interaction - particles flee from cursor
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 120) {
          const force = (120 - mDist) / 120 * 0.5;
          p.vx += (mdx / mDist) * force;
          p.vy += (mdy / mDist) * force;
        }

        // Damping
        p.vx *= 0.99;
        p.vy *= 0.99;

        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const pulseAlpha = p.alpha * (0.6 + Math.sin(p.pulse) * 0.4);

        // Glow effect
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        glow.addColorStop(0, `rgba(${p.color}, ${pulseAlpha})`);
        glow.addColorStop(0.5, `rgba(${p.color}, ${pulseAlpha * 0.3})`);
        glow.addColorStop(1, `rgba(${p.color}, 0)`);
        ctx.fillStyle = glow;
        ctx.fillRect(p.x - p.size * 4, p.y - p.size * 4, p.size * 8, p.size * 8);

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${pulseAlpha})`;
        ctx.fill();

        // Connect nearby particles with glowing lines
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - p.x;
          const dy = particles[j].y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            const lineAlpha = 0.15 * (1 - dist / 180);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${p.color}, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      // Shooting stars
      shootTimer++;
      if (shootTimer > 120 + Math.random() * 180) {
        shootTimer = 0;
        const startX = Math.random() * canvas.width;
        shootingStars.push({
          x: startX,
          y: 0,
          vx: (Math.random() - 0.5) * 4,
          vy: Math.random() * 3 + 2,
          life: 0,
          maxLife: 60 + Math.random() * 40,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }

      for (let s = shootingStars.length - 1; s >= 0; s--) {
        const star = shootingStars[s];
        star.x += star.vx;
        star.y += star.vy;
        star.life++;
        const fade = 1 - star.life / star.maxLife;

        // Trail
        const trailLen = 20;
        for (let t = 0; t < trailLen; t++) {
          const tx = star.x - star.vx * t * 0.5;
          const ty = star.y - star.vy * t * 0.5;
          const ta = fade * (1 - t / trailLen) * 0.5;
          ctx.beginPath();
          ctx.arc(tx, ty, 2 - t * 0.08, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${star.color}, ${ta})`;
          ctx.fill();
        }

        if (star.life >= star.maxLife) shootingStars.splice(s, 1);
      }

      // Hexagonal grid overlay (very subtle)
      ctx.strokeStyle = `rgba(0, 200, 180, ${0.015 + Math.sin(time) * 0.005})`;
      ctx.lineWidth = 0.5;
      const hexSize = 60;
      const hexH = hexSize * Math.sqrt(3);
      for (let row = -1; row < canvas.height / hexH + 1; row++) {
        for (let col = -1; col < canvas.width / (hexSize * 1.5) + 1; col++) {
          const cx = col * hexSize * 1.5;
          const cy = row * hexH + (col % 2 ? hexH / 2 : 0);
          ctx.beginPath();
          for (let k = 0; k < 6; k++) {
            const angle = (Math.PI / 3) * k + Math.PI / 6;
            const hx = cx + hexSize * 0.4 * Math.cos(angle);
            const hy = cy + hexSize * 0.4 * Math.sin(angle);
            if (k === 0) ctx.moveTo(hx, hy);
            else ctx.lineTo(hx, hy);
          }
          ctx.closePath();
          ctx.stroke();
        }
      }

      animId = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ pointerEvents: "none" }}
    />
  );
};

export default ParticleBackground;
