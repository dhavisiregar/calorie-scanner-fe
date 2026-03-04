import { useFoodAnalyzer } from "../hooks/useFoodAnalyzer";
import { DropZone } from "../components/DropZone";
import { ResultCard } from "../components/ResultCard";
import { ErrorBanner } from "../components/ErrorBanner";
import { HowItWorks } from "../components/HowItWorks";
import { BackgroundGlow } from "../components/BackgroundGlow";

export function ScannerPage() {
  const {
    preview,
    result,
    loading,
    error,
    selectFile,
    analyze,
    reset,
    dismissError,
  } = useFoodAnalyzer();

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-surface-base">
      <BackgroundGlow />

      <div className="relative z-10 max-w-md mx-auto px-4 py-12">
        <Header />

        {/* Drop Zone */}
        <div className="mb-4 animate-fade-up-15">
          <DropZone onFile={selectFile} preview={preview} loading={loading} />
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4">
            <ErrorBanner message={error} onDismiss={dismissError} />
          </div>
        )}

        {/* Actions */}
        {preview && !loading && (
          <ActionButtons onAnalyze={analyze} onReset={reset} />
        )}

        {/* Initial CTA */}
        {!preview && !loading && <InitialCTA />}

        {/* Result */}
        {result && (
          <div className="mb-8">
            <ResultCard data={result} />
          </div>
        )}

        {/* How it works */}
        {!result && <HowItWorks />}

        <Footer />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="mb-10 text-center animate-fade-up">
      <div className="inline-flex items-center gap-2 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-4 py-1.5 mb-5">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        <span className="text-[10px] tracking-[0.25em] uppercase text-emerald-400 font-semibold">
          AI Powered
        </span>
      </div>

      <h1 className="text-5xl font-display font-black text-white leading-none tracking-tight mb-3">
        Calorie
        <br />
        <span className="text-[#0c9f70]">Scanner</span>
      </h1>

      <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mx-auto">
        Snap any food photo. AI estimates calories and macros in seconds.
      </p>
    </div>
  );
}

function ActionButtons({ onAnalyze, onReset }) {
  return (
    <div className="flex gap-3 mb-6 animate-fade-up-4">
      <button
        onClick={onAnalyze}
        className="flex-1 py-3.5 rounded-xl font-bold text-sm tracking-wider text-black transition-all cursor-pointer duration-200 active:scale-95"
        style={{ background: "linear-gradient(135deg, #34d399, #059669)" }}
      >
        Analyze Food
      </button>

      <button
        onClick={onReset}
        className="px-4 py-3.5 cursor-pointer rounded-xl border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 transition-all duration-200 text-sm active:scale-95"
      >
        Reset
      </button>
    </div>
  );
}

function InitialCTA() {
  return (
    <div className="mb-6 animate-fade-up-25">
      <button
        onClick={() => document.querySelector("input[type=file]")?.click()}
        className="w-full py-3.5 rounded-xl font-bold text-sm tracking-wider text-black transition-all duration-200 active:scale-95"
        style={{ background: "linear-gradient(135deg, #34d399, #059669)" }}
      >
        Choose a Photo
      </button>
    </div>
  );
}

function Footer() {
  return (
    <div className="mt-12 text-center animate-fade-up-4">
      <p className="text-[10px] text-zinc-700">
        Built by{" "}
        <span className="text-zinc-500 font-semibold">Dhavi Siregar</span>
        {" · "}
        <span className="text-emerald-700">Powered by Groq + Llama 4</span>
      </p>
    </div>
  );
}
