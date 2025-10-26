// src/pages/api/views/[slug].ts
import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';

export const GET: APIRoute = async ({ params }) => {
  const { slug } = params;

  if (!slug) {
    return new Response(JSON.stringify({ error: 'Slug is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const { data, error } = await supabase
      .from('views')
      .select('view_count')
      .eq('slug', slug)
      .single();

    if (error && error.code !== 'PGRST116') {
      throw error;
    }

    return new Response(JSON.stringify({
      count: data?.view_count || 0
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error fetching view count:', error);
    return new Response(JSON.stringify({
      error: 'Failed to fetch view count'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

export const POST: APIRoute = async ({ params }) => {
  const { slug } = params;

  if (!slug) {
    return new Response(JSON.stringify({ error: 'Slug is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const { data, error } = await supabase.rpc('update_views', {
      input_slug: slug
    });

    if (error) {
      throw error;
    }

    return new Response(JSON.stringify({
      count: data?.[0]?.count || 0,
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
