import type { APIRoute } from "astro";

// Keep in sync with the `resolveUrl` allowlist in astro.config.mjs.
const isAllowedHost = (hostname: string) =>
  hostname === "www.googletagmanager.com" ||
  hostname === "analytics.google.com" ||
  hostname === "stats.g.doubleclick.net" ||
  hostname === "www.clarity.ms" ||
  hostname.endsWith(".google-analytics.com");

const resolveTarget = (request: Request) => {
  const target = new URL(request.url).searchParams.get("url");

  if (!target) {
    return { error: new Response("Missing url parameter", { status: 400 }) };
  }

  let targetUrl: URL;
  try {
    targetUrl = new URL(target);
  } catch {
    return { error: new Response("Invalid url parameter", { status: 400 }) };
  }

  if (!isAllowedHost(targetUrl.hostname)) {
    return { error: new Response("Host not allowed", { status: 403 }) };
  }

  return { targetUrl };
};

export const GET: APIRoute = async ({ request }) => {
  const { targetUrl, error } = resolveTarget(request);
  if (error) return error;

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

// GA4 sends its measurement hits as POSTs, which would otherwise fall through
// to the 404 page and break the JSON the worker expects back.
export const POST: APIRoute = async ({ request }) => {
  const { targetUrl, error } = resolveTarget(request);
  if (error) return error;

  const response = await fetch(targetUrl.toString(), {
    method: "POST",
    headers: {
      "User-Agent": request.headers.get("User-Agent") ?? "",
      "Content-Type":
        request.headers.get("Content-Type") ?? "text/plain;charset=UTF-8",
    },
    body: await request.arrayBuffer(),
  });

  const body = await response.arrayBuffer();

  return new Response(body, {
    status: response.status,
    headers: {
      "Content-Type": response.headers.get("Content-Type") ?? "text/plain",
      "Cache-Control": "no-store",
    },
  });
};
