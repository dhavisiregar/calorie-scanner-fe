export function NutrientRing({ label, value, unit, color, max, delay = 0 }) {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const pct = Math.min(value / max, 1);
  const dashFill = pct * circumference;

  // Animation delay must stay inline — Tailwind can't generate arbitrary delay values
  const delayStyle = delay ? { animationDelay: `${delay}s` } : undefined;

  return (
    <div
      className="flex flex-col items-center gap-2 animate-fade-up"
      style={delayStyle}
    >
      <div className="relative w-20 h-20">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 72 72">
          {/* Track */}
          <circle
            cx="36"
            cy="36"
            r={radius}
            fill="none"
            stroke="#1a1a2e"
            strokeWidth="6"
          />
          {/* Fill — stroke color and dasharray must stay inline (dynamic values) */}
          <circle
            cx="36"
            cy="36"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={`${dashFill} ${circumference}`}
            className="transition-[stroke-dasharray] duration-1000 ease-in-out"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-sm font-bold text-white leading-none">
            {Math.round(value)}
          </span>
          <span className="text-[9px] text-zinc-400 uppercase tracking-wider">
            {unit}
          </span>
        </div>
      </div>

      {/* Label color is dynamic so stays inline */}
      <span
        className="text-xs font-semibold tracking-widest uppercase"
        style={{ color }}
      >
        {label}
      </span>
    </div>
  );
}
