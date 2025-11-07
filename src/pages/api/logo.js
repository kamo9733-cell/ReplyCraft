import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  try {
    const uid = req.query.uid || null;
    const ua = req.headers["user-agent"] || null;
    const time = new Date().toISOString();

    // --- 1️⃣ Send open log to Make webhook ---
    const webhookUrl = "https://hook.eu2.make.com/x5eip0w39o1naa4n7isu3s7fapinutfa"; // replace this later
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid, ua, time }),
      });
    } catch (err) {
      console.error("Webhook failed:", err);
    }

    // --- 2️⃣ Serve the logo image ---
    const logoPath = path.join(process.cwd(), "public", "ReplyCraft.png");
    const fileBuffer = fs.readFileSync(logoPath);

    res.setHeader("Content-Type", "image/png");
    res.setHeader(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0"
    );
    res.status(200).send(fileBuffer);
  } catch (err) {
    console.error("API error:", err);
    res.status(500).send("error");
  }
}
