import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  orbitRadius: number;
  angle: number;
  speed: number;
  color: string;
  opacity: number;
}

const OrbitingParticles = ({ count = 20, className = "" }: { count?: number; className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: Math.random() * 2 + 1,
      orbitRadius: Math.random() * Math.min(canvas.width, canvas.height) * 0.4 + 50,
      angle: Math.random() * Math.PI * 2,
      speed: (Math.random() * 0.003 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
      color: Math.random() > 0.4 ? "176, 88%, 41%" : "17, 100%, 62%",
      opacity: Math.random() * 0.5 + 0.2,
    }));

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      particles.forEach((p) => {
        p.angle += p.speed;
        const x = cx + Math.cos(p.angle) * p.orbitRadius;
        const y = cy + Math.sin(p.angle) * p.orbitRadius * 0.4;

        ctx.beginPath();
        ctx.arc(x, y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.color}, ${p.opacity})`;
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(x, y, p.radius * 3, 0, Math.PI * 2);
        const grad = ctx.createRadialGradient(x, y, 0, x, y, p.radius * 3);
        grad.addColorStop(0, `hsla(${p.color}, ${p.opacity * 0.3})`);
        grad.addColorStop(1, `hsla(${p.color}, 0)`);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [count]);

  return <canvas ref={canvasRef} className={`absolute inset-0 pointer-events-none ${className}`} />;
};

export default OrbitingParticles;
