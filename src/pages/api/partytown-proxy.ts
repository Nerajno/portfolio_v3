import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const target = url.searchParams.get("url");

  if (!target) {
    return new Response("Missing url parameter", { status: 400 });
  }

  let targetUrl: URL;
  try {
    targetUrl = new URL(target);
  } catch {
    return new Response("Invalid url parameter", { status: 400 });
  }

  const allowedHosts = [
    "www.googletagmanager.com",
    "www.google-analytics.com",
    "www.clarity.ms",
  ];

  if (!allowedHosts.includes(targetUrl.hostname)) {
    return new Response("Host not allowed", { status: 403 });
  }

  const response = await fetch(targetUrl.toString(), {
    headers: { "User-Agent": request.headers.get("User-Agent") ?? "" },
  });

  const body = await response.arrayBuffer();

  return new Response(body, {
    status: response.status,
    headers: {
      "Content-Type": response.headers.get("Content-Type") ?? "text/plain",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
