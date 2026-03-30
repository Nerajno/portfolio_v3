// src/pages/api/views/[slug].ts
import type { APIRoute } from 'astro';
import { incrementViewCount, getViewCount, hashIdentifier, isBot } from '../../../lib/supabase';

export const GET: APIRoute = async ({ params }) => {
  const { slug } = params;

  if (!slug) {
    return new Response(JSON.stringify({ error: 'Slug is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const count = await getViewCount(slug);

    return new Response(JSON.stringify({ count }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=600'
      }
    });
  } catch (error) {
    console.error('Error fetching view count:', error);
    return new Response(JSON.stringify({
      error: 'Failed to fetch view count',
      count: 0
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

export const POST: APIRoute = async ({ params, request, clientAddress }) => {
  const { slug } = params;

  if (!slug) {
    return new Response(JSON.stringify({ error: 'Slug is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    // Get user agent for bot detection
    const userAgent = request.headers.get('user-agent') || '';

    // Check if bot
    if (isBot(userAgent)) {
      console.log(`Bot detected for slug: ${slug}, skipping increment`);
      const count = await getViewCount(slug);
      return new Response(JSON.stringify({
        count,
        message: 'Bot detected, view not counted'
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Get client IP for rate limiting
    const clientIP =
      request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      clientAddress ||
      'unknown';

    // Hash the IP for privacy
    const clientIdentifier = hashIdentifier(clientIP);

    // Increment with bot detection and rate limiting
    const count = await incrementViewCount(slug, userAgent, clientIdentifier);

    return new Response(JSON.stringify({
      count: count || 0,
      message: 'View count updated successfully'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error updating view count:', error);
    return new Response(JSON.stringify({
      error: 'Failed to update view count'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
