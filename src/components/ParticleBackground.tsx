import { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const mouse = { x: -1000, y: -1000 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    // Neural network nodes
    const nodes: {
      x: number; y: number; vx: number; vy: number;
      baseX: number; baseY: number;
      size: number; color: string; alpha: number;
      pulse: number; pulseSpeed: number;
    }[] = [];

    const colors = [
      "0, 150, 255",    // deep blue
      "30, 120, 255",   // electric blue
      "0, 200, 180",    // teal
      "50, 255, 150",   // green accent
      "80, 180, 255",   // sky blue
      "0, 100, 255",    // bold blue
    ];

    const nodeCount = Math.min(150, Math.floor((canvas.width * canvas.height) / 8000));

    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      nodes.push({
        x, y,
        baseX: x, baseY: y,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 2.5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.7 + 0.3,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.03 + 0.01,
      });
    }

    // Floating energy orbs
    const orbs = Array.from({ length: 4 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      radius: Math.random() * 200 + 100,
      color: colors[Math.floor(Math.random() * 3)], // mostly blues
      phase: Math.random() * Math.PI * 2,
    }));

    // Ripple effects on touch/click
    const ripples: { x: number; y: number; radius: number; maxRadius: number; alpha: number }[] = [];

    const addRipple = (x: number, y: number) => {
      ripples.push({ x, y, radius: 0, maxRadius: 200, alpha: 0.6 });
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) {
        mouse.x = touch.clientX;
        mouse.y = touch.clientY;
      }
    };

    const handleMouseClick = (e: MouseEvent) => {
      addRipple(e.clientX, e.clientY);
    };

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) addRipple(touch.clientX, touch.clientY);
    };

    // Listen on window so page overlays do not block cursor interaction.
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("click", handleMouseClick);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });

    let time = 0;

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw ambient orbs
      orbs.forEach(orb => {
        orb.x += orb.vx;
        orb.y += orb.vy;
        orb.phase += 0.004;
        if (orb.x < -orb.radius) orb.x = canvas.width + orb.radius;
        if (orb.x > canvas.width + orb.radius) orb.x = -orb.radius;
        if (orb.y < -orb.radius) orb.y = canvas.height + orb.radius;
        if (orb.y > canvas.height + orb.radius) orb.y = -orb.radius;

        const pulseAlpha = 0.04 + Math.sin(orb.phase) * 0.02;
        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        gradient.addColorStop(0, `rgba(${orb.color}, ${pulseAlpha * 2})`);
        gradient.addColorStop(0.5, `rgba(${orb.color}, ${pulseAlpha})`);
        gradient.addColorStop(1, `rgba(${orb.color}, 0)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(orb.x - orb.radius, orb.y - orb.radius, orb.radius * 2, orb.radius * 2);
      });

      // Draw ripples
      for (let r = ripples.length - 1; r >= 0; r--) {
        const ripple = ripples[r];
        ripple.radius += 3;
        ripple.alpha -= 0.01;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 150, 255, ${ripple.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        if (ripple.alpha <= 0 || ripple.radius >= ripple.maxRadius) ripples.splice(r, 1);
      }

      // Draw neural network connections first (behind nodes)
      for (let i = 0; i < nodes.length; i++) {
        const p = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const q = nodes[j];
          const dx = q.x - p.x;
          const dy = q.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            const lineAlpha = 0.2 * (1 - dist / 160);
            // Pulse the connection
            const connectionPulse = Math.sin(time * 2 + i * 0.1) * 0.5 + 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(0, 150, 255, ${lineAlpha * (0.5 + connectionPulse * 0.5)})`;
            ctx.lineWidth = 0.6 + connectionPulse * 0.4;
            ctx.stroke();

            // Draw data packet traveling along connection occasionally
            if (Math.sin(time * 3 + i + j) > 0.95) {
              const t = (Math.sin(time * 5 + i) + 1) / 2;
              const px = p.x + dx * t;
              const py = p.y + dy * t;
              ctx.beginPath();
              ctx.arc(px, py, 1.5, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(50, 255, 150, 0.8)`;
              ctx.fill();
            }
          }
        }
      }

      // Draw & update nodes
      nodes.forEach((p) => {
        // Mouse/touch interaction - attract and repel
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        
        if (mDist > 0 && mDist < 150) {
          // Nodes get attracted slightly then repelled
          const force = (150 - mDist) / 150;
          if (mDist < 60) {
            // Repel when very close
            p.vx += (mdx / mDist) * force * 0.8;
            p.vy += (mdy / mDist) * force * 0.8;
          } else {
            // Attract slightly when medium distance
            p.vx -= (mdx / mDist) * force * 0.15;
            p.vy -= (mdy / mDist) * force * 0.15;
          }
        }

        // Slight drift back to base position
        p.vx += (p.baseX - p.x) * 0.0005;
        p.vy += (p.baseY - p.y) * 0.0005;

        // Damping
        p.vx *= 0.985;
        p.vy *= 0.985;

        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        if (p.x < 0) { p.x = canvas.width; p.baseX = canvas.width; }
        if (p.x > canvas.width) { p.x = 0; p.baseX = 0; }
        if (p.y < 0) { p.y = canvas.height; p.baseY = canvas.height; }
        if (p.y > canvas.height) { p.y = 0; p.baseY = 0; }

        const pulseAlpha = p.alpha * (0.6 + Math.sin(p.pulse) * 0.4);

        // Outer glow
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 6);
        glow.addColorStop(0, `rgba(${p.color}, ${pulseAlpha * 0.6})`);
        glow.addColorStop(0.4, `rgba(${p.color}, ${pulseAlpha * 0.15})`);
        glow.addColorStop(1, `rgba(${p.color}, 0)`);
        ctx.fillStyle = glow;
        ctx.fillRect(p.x - p.size * 6, p.y - p.size * 6, p.size * 12, p.size * 12);

        // Core node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${pulseAlpha})`;
        ctx.fill();
      });

      // Mouse cursor glow
      if (mouse.x > 0 && mouse.y > 0) {
        const cursorGlow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 100);
        cursorGlow.addColorStop(0, `rgba(0, 150, 255, 0.08)`);
        cursorGlow.addColorStop(0.5, `rgba(0, 150, 255, 0.03)`);
        cursorGlow.addColorStop(1, `rgba(0, 150, 255, 0)`);
        ctx.fillStyle = cursorGlow;
        ctx.fillRect(mouse.x - 100, mouse.y - 100, 200, 200);
      }

      animId = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("click", handleMouseClick);
      window.removeEventListener("touchstart", handleTouchStart);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ touchAction: "none" }}
    />
  );
};

export default ParticleBackground;
