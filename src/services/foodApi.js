const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const GROQ_MODEL =
  import.meta.env.VITE_GROQ_MODEL ||
  "meta-llama/llama-4-scout-17b-16e-instruct";

/**
 * Converts a File to a base64 string.
 * @param {File} file
 * @returns {Promise<string>}
 */
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(",")[1]);
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}

/**
 * Sends a food image directly to Groq and returns nutrition data.
 * @param {File} file
 * @returns {Promise<{ name: string, calories: number, protein: number, carbs: number, fat: number }>}
 */
export async function analyzeFood(file) {
  if (!GROQ_API_KEY)
    throw new Error("Missing VITE_GROQ_API_KEY environment variable.");

  const base64Image = await fileToBase64(file);

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      temperature: 0.2,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `Return ONLY valid JSON, no markdown, no explanation:
{
  "name": "food name",
  "calories": number,
  "protein": number,
  "carbs": number,
  "fat": number
}`,
            },
            {
              type: "image_url",
              image_url: {
                url: `data:image/jpeg;base64,${base64Image}`,
              },
            },
          ],
        },
      ],
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Groq API error: ${text}`);
  }

  const data = await res.json();
  let content = data.choices?.[0]?.message?.content || "";

  // Strip markdown code fences if present
  content = content.replace(/```json|```/g, "").trim();

  try {
    return JSON.parse(content);
  } catch {
    throw new Error(`Invalid response from AI: ${content}`);
  }
}
