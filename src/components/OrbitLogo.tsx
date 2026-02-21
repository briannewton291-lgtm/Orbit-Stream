const OrbitLogo = ({ className = "h-8 w-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Orbit ring */}
    <ellipse cx="24" cy="24" rx="20" ry="10" stroke="hsl(176 88% 41%)" strokeWidth="2" transform="rotate(-30 24 24)" opacity="0.6" />
    <ellipse cx="24" cy="24" rx="20" ry="10" stroke="hsl(17 100% 62%)" strokeWidth="1.5" transform="rotate(30 24 24)" opacity="0.4" />
    {/* Center streaming signal */}
    <circle cx="24" cy="24" r="6" fill="hsl(176 88% 41%)" />
    <circle cx="24" cy="24" r="3" fill="hsl(220 30% 8%)" />
    {/* Signal waves */}
    <path d="M30 18C32.5 20.5 32.5 27.5 30 30" stroke="hsl(176 88% 41%)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    <path d="M33 15C37 19 37 29 33 33" stroke="hsl(17 100% 62%)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    {/* Orbiting dot */}
    <circle cx="44" cy="24" r="2" fill="hsl(17 100% 62%)">
      <animateTransform attributeName="transform" type="rotate" from="0 24 24" to="360 24 24" dur="8s" repeatCount="indefinite" />
    </circle>
  </svg>
);

export default OrbitLogo;
