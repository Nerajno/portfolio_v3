import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { slug, deviceId } = await request.json();

    // Validate inputs
    if (!slug || !deviceId) {
      return new Response(
        JSON.stringify({ error: 'Missing slug or deviceId' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Initialize Supabase client
    const supabase = createClient(
      import.meta.env.SUPABASE_URL,
      import.meta.env.SUPABASE_ANON_KEY
    );

    // Insert view record (ignore if duplicate)
    const { error } = await supabase
      .from('post_views')
      .upsert(
        {
          post_slug: slug,
          device_id: deviceId,
          viewed_at: new Date().toISOString()
        },
        {
          onConflict: 'post_slug,device_id',
          ignoreDuplicates: true
        }
      );

    if (error) {
      console.error('Supabase error:', error);
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('API error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
