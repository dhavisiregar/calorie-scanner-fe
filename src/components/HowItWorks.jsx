const STEPS = [
  { icon: "📸", step: "01", label: "Snap a photo" },
  { icon: "🤖", step: "02", label: "AI analyzes" },
  { icon: "📊", step: "03", label: "Get nutrition" },
];

export function HowItWorks() {
  return (
    <div className="mt-8 animate-fade-up-35">
      <p className="text-center text-[10px] tracking-[0.3em] uppercase text-zinc-700 mb-4">
        How it works
      </p>

      <div className="grid grid-cols-3 gap-3">
        {STEPS.map(({ icon, step, label }) => (
          <div
            key={step}
            className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 text-center"
          >
            <div className="text-2xl mb-2">{icon}</div>
            <div className="text-[9px] text-zinc-600 mb-1 tracking-widest">
              {step}
            </div>
            <div className="text-xs text-zinc-400 font-medium leading-tight">
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
