import { Router } from "express";
import auth from "../middleware/auth.js";

const router = Router();

const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";
const SYSTEM_PROMPT =
  "You are a helpful and friendly chatbot assistant. Keep your answers concise.";

// POST /api/chat  – proxy OpenAI (authenticated)
router.post("/", auth, async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    if (!message) {
      return res.status(400).json({ message: "Message is required" });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ message: "OpenAI API key not configured" });
    }

    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...history,
      { role: "user", content: message },
    ];

    const response = await fetch(OPENAI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-3.5-turbo",
        messages,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      console.error("[OpenAI] API error:", error);
      return res
        .status(502)
        .json({ message: error?.error?.message || "OpenAI request failed" });
    }

    const data = await response.json();
    const reply =
      data.choices?.[0]?.message?.content?.trim() || "No response.";

    res.json({ reply });
  } catch (error) {
    console.error("Chat error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
