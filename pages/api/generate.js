import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "No prompt provided" });
  }

  const input = {
    prompt,
    system_prompt: "You only output After Effects expression code",
    reasoning_effort: "medium",
  };

  try {
    const prediction = await replicate.run("openai/o4-mini", { input });
    res.status(200).json({ result: prediction });
  } catch (error) {
    console.error("API error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
}
