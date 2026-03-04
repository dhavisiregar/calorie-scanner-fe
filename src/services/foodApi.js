const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

/**
 * Sends a food image to the backend and returns nutrition data.
 * @param {File} file
 * @returns {Promise<{ name: string, calories: number, protein: number, carbs: number, fat: number }>}
 */
export async function analyzeFood(file) {
  const form = new FormData();
  form.append("image", file);

  const res = await fetch(`${API_URL}/analyze`, {
    method: "POST",
    body: form,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Server error ${res.status}`);
  }

  return res.json();
}
