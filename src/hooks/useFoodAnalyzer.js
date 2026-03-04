import { useState, useCallback } from "react";
import { analyzeFood } from "../services/foodApi";

export function useFoodAnalyzer() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const selectFile = useCallback(
    (f) => {
      if (preview) URL.revokeObjectURL(preview);
      setFile(f);
      setPreview(URL.createObjectURL(f));
      setResult(null);
      setError(null);
    },
    [preview],
  );

  const analyze = useCallback(async () => {
    if (!file) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const data = await analyzeFood(file);
      setResult(data);
    } catch (err) {
      setError(err.message || "Unknown error occurred.");
    } finally {
      setLoading(false);
    }
  }, [file]);

  const reset = useCallback(() => {
    if (preview) URL.revokeObjectURL(preview);
    setFile(null);
    setPreview(null);
    setResult(null);
    setError(null);
  }, [preview]);

  const dismissError = useCallback(() => setError(null), []);

  return {
    file,
    preview,
    result,
    loading,
    error,
    selectFile,
    analyze,
    reset,
    dismissError,
  };
}
