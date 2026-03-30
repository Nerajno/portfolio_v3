-- =============================================================================
-- FIX: Remove SECURITY DEFINER warning from view_analytics
-- =============================================================================
-- Run this script in Supabase SQL Editor to fix the security warning
-- =============================================================================

-- Drop the existing view
DROP VIEW IF EXISTS view_analytics;

-- Recreate the view with explicit SECURITY INVOKER
-- This makes the view run with the permissions of the user executing it
CREATE OR REPLACE VIEW view_analytics
WITH (security_invoker = true)
AS
SELECT
  slug,
  view_count,
  created_at,
  updated_at,
  EXTRACT(EPOCH FROM (updated_at - created_at)) / 86400 AS days_since_creation,
  view_count::FLOAT / NULLIF(EXTRACT(EPOCH FROM (updated_at - created_at)) / 86400, 0) AS avg_views_per_day
FROM views
ORDER BY view_count DESC;

-- Add comment
COMMENT ON VIEW view_analytics IS 'Analytics view showing view counts with calculated metrics (SECURITY INVOKER)';

-- Grant SELECT permissions on the view
GRANT SELECT ON view_analytics TO anon, authenticated;

-- =============================================================================
-- OPTIONAL: Also update the RPC functions to be more explicit
-- =============================================================================

-- Update update_views function with explicit security settings
CREATE OR REPLACE FUNCTION update_views(input_slug TEXT)
RETURNS TABLE(count BIGINT)
LANGUAGE plpgsql
SECURITY DEFINER  -- Runs with permissions of function creator
SET search_path = public  -- Prevents schema injection attacks
AS $$
BEGIN
  -- Insert new record with count=1, or increment existing record
  INSERT INTO views (slug, view_count, created_at, updated_at)
  VALUES (input_slug, 1, NOW(), NOW())
  ON CONFLICT (slug)
  DO UPDATE SET
    view_count = views.view_count + 1,
    updated_at = NOW();

  -- Return the current count
  RETURN QUERY
  SELECT view_count FROM views WHERE slug = input_slug;
END;
$$;

-- Update get_all_view_counts function
CREATE OR REPLACE FUNCTION get_all_view_counts()
RETURNS TABLE(slug TEXT, count BIGINT)
LANGUAGE sql
STABLE  -- Indicates function doesn't modify database
SECURITY INVOKER  -- Runs with permissions of caller (safer for read-only)
SET search_path = public
AS $$
  SELECT slug, view_count FROM views ORDER BY slug;
$$;

-- =============================================================================
-- FIX: update_updated_at_column search_path warning
-- =============================================================================

-- Update the trigger function with fixed search_path
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public  -- Prevents schema injection attacks
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

-- =============================================================================
-- VERIFICATION
-- =============================================================================
-- Run these queries to verify the fix:

-- Check view definition
-- SELECT definition FROM pg_views WHERE viewname = 'view_analytics';

-- Test the view
-- SELECT * FROM view_analytics LIMIT 5;

-- Check function security settings
-- SELECT proname, prosecdef FROM pg_proc WHERE proname IN ('update_views', 'get_all_view_counts');
-- prosecdef = true means SECURITY DEFINER
-- prosecdef = false means SECURITY INVOKER

-- =============================================================================
-- DONE!
-- =============================================================================
