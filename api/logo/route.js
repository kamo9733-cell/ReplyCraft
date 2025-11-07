export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  try {
    const { searchParams } = new URL(req.url);
    const uid = searchParams.get("uid") || "no-uid";

    // 1️⃣ Log the open to your Make webhook
    // (replace with your actual Make webhook URL)
    await fetch("https://hook.eu2.make.com/x5eip0w39o1naa4n7isu3s7fapinutfa", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        uid,
        ua: req.headers.get("user-agent"),
        time: new Date().toISOString(),
      }),
    }).catch(() => {});

    // 2️⃣ Fetch the logo image
    const logoResponse = await fetch("https://reply-craft.com/ReplyCraft.png");
    if (!logoResponse.ok) {
      return new Response("Logo not found", { status: 404 });
    }

    // 3️⃣ Stream it directly (Edge functions require streaming)
    const arrayBuffer = await logoResponse.arrayBuffer();

    return new Response(arrayBuffer, {
      status: 200,
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    });
  } catch (err) {
    console.error("Error in /api/logo:", err);
    return new Response("Server error", { status: 500 });
  }
}
