export default {
  async fetch(request) {
    const url = new URL(request.url);
    const text = url.searchParams.get("Text") || "";
    return new Response(JSON.stringify({ text }), {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}
