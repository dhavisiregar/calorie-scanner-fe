import { useRef, useState, useCallback } from "react";

export function DropZone({ onFile, preview, loading }) {
  const inputRef = useRef();
  const [dragging, setDragging] = useState(false);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      setDragging(false);
      const f = e.dataTransfer.files[0];
      if (f && f.type.startsWith("image/")) onFile(f);
    },
    [onFile],
  );

  const handleChange = (e) => {
    const f = e.target.files[0];
    if (f) onFile(f);
    e.target.value = "";
  };

  const containerClass = [
    "relative overflow-hidden rounded-2xl border-2 transition-all duration-300 min-h-[260px]",
    preview
      ? "border-transparent cursor-default"
      : "border-dashed cursor-pointer",
    dragging
      ? "border-emerald-400 bg-emerald-400/5 scale-[1.01]"
      : "border-zinc-700 hover:border-zinc-500",
    loading ? "pointer-events-none" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={containerClass}
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      onClick={() => !preview && inputRef.current.click()}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={handleChange}
      />

      {preview ? (
        <PreviewState
          preview={preview}
          loading={loading}
          onReplace={() => inputRef.current.click()}
        />
      ) : (
        <EmptyState />
      )}
    </div>
  );
}

function PreviewState({ preview, loading, onReplace }) {
  return (
    <>
      <img
        src={preview}
        alt="food"
        className="w-full h-64 object-cover rounded-2xl"
      />

      {!loading && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onReplace();
          }}
          className="absolute bottom-3 right-3 text-xs bg-black/70 text-white px-3 py-1.5 rounded-full backdrop-blur-sm hover:bg-black/90 transition-colors border border-white/10"
        >
          Change photo
        </button>
      )}

      {loading && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center rounded-2xl gap-3">
          <div className="w-10 h-10 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-emerald-300 tracking-widest uppercase animate-pulse">
            Analyzing…
          </p>
        </div>
      )}
    </>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-12 text-center min-h-65">
      <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center border border-zinc-700">
        <CameraIcon />
      </div>
      <div>
        <p className="text-white font-semibold">Drop your food photo here</p>
        <p className="text-zinc-500 text-sm mt-1">
          or click to browse · also supports camera snap
        </p>
      </div>
      <div className="flex gap-2 flex-wrap justify-center">
        {["JPG", "PNG", "WEBP", "HEIC"].map((f) => (
          <span
            key={f}
            className="text-[10px] bg-zinc-800 text-zinc-500 px-2 py-0.5 rounded-full"
          >
            {f}
          </span>
        ))}
      </div>
    </div>
  );
}

function CameraIcon() {
  return (
    <svg
      className="w-8 h-8 text-zinc-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
      />
    </svg>
  );
}
