const OrbitLogo = ({ className = "h-8 w-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Left node */}
    <circle cx="10" cy="24" r="5" fill="hsl(176 88% 41%)" />
    <circle cx="10" cy="24" r="2.5" fill="hsl(220 30% 8%)" />
    {/* Right node */}
    <circle cx="38" cy="24" r="5" fill="hsl(17 100% 62%)" />
    <circle cx="38" cy="24" r="2.5" fill="hsl(220 30% 8%)" />
    {/* Connection link chain */}
    <path d="M15 24 L21 24" stroke="hsl(176 88% 41%)" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M27 24 L33 24" stroke="hsl(17 100% 62%)" strokeWidth="2.5" strokeLinecap="round" />
    {/* Center link ring */}
    <rect x="19" y="19" width="10" height="10" rx="3" stroke="hsl(176 88% 41%)" strokeWidth="2" fill="none" />
    <rect x="21" y="21" width="6" height="6" rx="1.5" fill="hsl(176 88% 41%)" opacity="0.5" />
    {/* Signal pulses on left */}
    <circle cx="10" cy="24" r="5" stroke="hsl(176 88% 41%)" strokeWidth="1" fill="none" opacity="0.4">
      <animate attributeName="r" from="5" to="10" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" from="0.4" to="0" dur="2s" repeatCount="indefinite" />
    </circle>
    {/* Signal pulses on right */}
    <circle cx="38" cy="24" r="5" stroke="hsl(17 100% 62%)" strokeWidth="1" fill="none" opacity="0.4">
      <animate attributeName="r" from="5" to="10" dur="2s" begin="1s" repeatCount="indefinite" />
      <animate attributeName="opacity" from="0.4" to="0" dur="2s" begin="1s" repeatCount="indefinite" />
    </circle>
  </svg>
);

export default OrbitLogo;
