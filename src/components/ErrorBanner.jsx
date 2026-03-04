export function ErrorBanner({ message, onDismiss }) {
  return (
    <div className="flex items-start gap-3 bg-red-950/60 border border-red-800/60 rounded-xl p-4 animate-fade-up-4">
      <WarningIcon />

      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-red-300">Analysis Failed</p>
        <p className="text-xs text-red-400/80 mt-0.5 wrap-break-word">
          {message}
        </p>
      </div>

      <button
        onClick={onDismiss}
        className="text-red-600 hover:text-red-400 transition-colors shrink-0"
        aria-label="Dismiss error"
      >
        <CloseIcon />
      </button>
    </div>
  );
}

function WarningIcon() {
  return (
    <svg
      className="w-4 h-4 text-red-400 mt-0.5 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}
