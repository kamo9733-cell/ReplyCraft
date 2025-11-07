export default async function handler(req, res) {
  const { searchParams } = new URL(req.url);
  const uid = searchParams.get("uid") || null;

  // Log open to your Make webhook
  try {
    await fetch("https://hook.eu2.make.com/x5eip0w39o1naa4n7isu3s7fapinutfa", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        uid,
        ua: req.headers["user-agent"],
        time: new Date().toISOString(),
      }),
    });
  } catch (err) {
    console.error("Webhook send failed:", err);
  }

  // Fetch and return your logo
  const response = await fetch("https://reply-craft.com/ReplyCraft.png");
  const buffer = Buffer.from(await response.arrayBuffer());

  return new Response(buffer, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "no-store",
    },
  });
}
