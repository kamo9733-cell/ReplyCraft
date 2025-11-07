export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  try {
    const { searchParams } = new URL(req.url);
    const uid = searchParams.get("uid") || "no-uid";

    // ✅ Send tracking to your Make webhook
    fetch("https://hook.eu2.make.com/x5eip0w39o1naa4n7isu3s7fapinutfa", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        uid,
        ua: req.headers.get("user-agent"),
        time: new Date().toISOString(),
      }),
    }).catch(() => {});

    // ✅ Fetch image as a stream (don’t read as arrayBuffer)
    const imageRes = await fetch("https://reply-craft.com/ReplyCraft.png");

    if (!imageRes.ok) {
      return new Response("Not found", { status: 404 });
    }

    // ✅ Stream response directly
    return new Response(imageRes.body, {
      status: 200,
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    });
  } catch (err) {
    console.error("Edge error:", err);
    return new Response("Internal Error", { status: 500 });
  }
}
