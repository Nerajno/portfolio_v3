import { g as getViewCount, i as isBot, h as hashIdentifier, a as incrementViewCount } from '../../../chunks/supabase_1bq2gweo.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ params }) => {
  const { slug } = params;
  if (!slug) {
    return new Response(JSON.stringify({ error: "Slug is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    const count = await getViewCount(slug);
    return new Response(JSON.stringify({ count }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=600"
      }
    });
  } catch (error) {
    console.error("Error fetching view count:", error);
    return new Response(JSON.stringify({
      error: "Failed to fetch view count",
      count: 0
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
const POST = async ({ params, request, clientAddress }) => {
  const { slug } = params;
  if (!slug) {
    return new Response(JSON.stringify({ error: "Slug is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    const userAgent = request.headers.get("user-agent") || "";
    if (isBot(userAgent)) {
      console.log(`Bot detected for slug: ${slug}, skipping increment`);
      const count2 = await getViewCount(slug);
      return new Response(JSON.stringify({
        count: count2,
        message: "Bot detected, view not counted"
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    const clientIP = request.headers.get("x-forwarded-for")?.split(",")[0] || request.headers.get("x-real-ip") || clientAddress || "unknown";
    const clientIdentifier = hashIdentifier(clientIP);
    const count = await incrementViewCount(slug, userAgent, clientIdentifier);
    return new Response(JSON.stringify({
      count: count || 0,
      message: "View count updated successfully"
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error updating view count:", error);
    return new Response(JSON.stringify({
      error: "Failed to update view count"
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
