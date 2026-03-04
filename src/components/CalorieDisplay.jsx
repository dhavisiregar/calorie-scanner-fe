export function CalorieDisplay({ calories }) {
  const level = calories < 300 ? "Low" : calories < 600 ? "Moderate" : "High";

  const levelColorClass =
    calories < 300
      ? "text-green-400"
      : calories < 600
        ? "text-yellow-400"
        : "text-red-400";

  const barColorClass =
    calories < 300
      ? "bg-green-400"
      : calories < 600
        ? "bg-yellow-400"
        : "bg-red-400";

  const pct = Math.min((calories / 1000) * 100, 100);

  return (
    <div className="text-center animate-fade-up-1">
      <p className="text-xs tracking-[0.3em] uppercase text-zinc-400 mb-1">
        Estimated Calories
      </p>

      <p className="text-7xl font-black font-display tracking-tighter text-white leading-none">
        {Math.round(calories)}
        <span className="text-2xl font-light text-zinc-400 ml-1">kcal</span>
      </p>

      <div className="mt-4 mx-auto max-w-xs">
        <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-1000 ease-out ${barColorClass}`}
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[10px] text-zinc-600">0</span>
          <span className={`text-[10px] font-semibold ${levelColorClass}`}>
            {level}
          </span>
          <span className="text-[10px] text-zinc-600">1000+</span>
        </div>
      </div>
    </div>
  );
}
