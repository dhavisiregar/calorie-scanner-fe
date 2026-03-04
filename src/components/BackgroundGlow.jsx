export function BackgroundGlow() {
  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Green top-center glow */}
      <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-150 h-150 rounded-full bg-glow-green animate-pulse-slow" />
      {/* Blue bottom-right glow */}
      <div className="absolute bottom-[10%] -right-[5%] w-100 h-100 rounded-full bg-glow-blue animate-pulse-slow-d" />
    </div>
  );
}
