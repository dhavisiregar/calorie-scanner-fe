import { CalorieDisplay } from "./CalorieDisplay";
import { NutrientRing } from "./NutrientRing";

const MACROS = [
  {
    key: "protein",
    label: "Protein",
    unit: "g",
    color: "#34d399",
    max: 50,
    delay: 0.2,
  },
  {
    key: "carbs",
    label: "Carbs",
    unit: "g",
    color: "#60a5fa",
    max: 100,
    delay: 0.3,
  },
  {
    key: "fat",
    label: "Fat",
    unit: "g",
    color: "#f59e0b",
    max: 50,
    delay: 0.4,
  },
];

export function ResultCard({ data }) {
  return (
    <div className="rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden animate-fade-up-6">
      {/* ── Header ── */}
      <div className="px-6 pt-6 pb-4 border-b border-zinc-800">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] tracking-[0.25em] uppercase text-emerald-400 font-semibold">
            AI Analysis Complete
          </span>
        </div>
        <h2 className="text-2xl font-display font-black text-white capitalize tracking-tight">
          {data.name}
        </h2>
      </div>

      {/* ── Calories ── */}
      <div className="px-6 py-6 border-b border-zinc-800">
        <CalorieDisplay calories={data.calories} />
      </div>

      {/* ── Macros ── */}
      <div className="px-6 py-6">
        <p className="text-[10px] tracking-[0.3em] uppercase text-zinc-600 mb-5 text-center">
          Macronutrients
        </p>
        <div className="flex justify-around">
          {MACROS.map(({ key, label, unit, color, max, delay }) => (
            <NutrientRing
              key={key}
              label={label}
              value={data[key]}
              unit={unit}
              color={color}
              max={max}
              delay={delay}
            />
          ))}
        </div>
      </div>

      {/* ── Disclaimer ── */}
      <div className="px-6 pb-5">
        <p className="text-center text-[10px] text-zinc-600 leading-relaxed">
          Estimates based on visual analysis. Values may vary by portion size
          and preparation method.
        </p>
      </div>
    </div>
  );
}
