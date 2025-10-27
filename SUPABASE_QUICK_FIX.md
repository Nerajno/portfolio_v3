# Quick Fix: Supabase Security Warnings

## 🚨 Run This in Supabase SQL Editor

Copy and paste this entire script to fix both security warnings:

```sql
-- =============================================================================
-- FIX ALL SUPABASE SECURITY WARNINGS
-- =============================================================================

-- 1. Fix view_analytics SECURITY DEFINER warning
DROP VIEW IF EXISTS view_analytics;

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

GRANT SELECT ON view_analytics TO anon, authenticated;

-- 2. Fix update_updated_at_column mutable search_path warning
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

-- 3. Update get_all_view_counts to SECURITY INVOKER (safer)
CREATE OR REPLACE FUNCTION get_all_view_counts()
RETURNS TABLE(slug TEXT, count BIGINT)
LANGUAGE sql
STABLE
SECURITY INVOKER
SET search_path = public
AS $$
  SELECT slug, view_count FROM views ORDER BY slug;
$$;

-- 4. Update update_views with explicit search_path
CREATE OR REPLACE FUNCTION update_views(input_slug TEXT)
RETURNS TABLE(count BIGINT)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO views (slug, view_count, created_at, updated_at)
  VALUES (input_slug, 1, NOW(), NOW())
  ON CONFLICT (slug)
  DO UPDATE SET
    view_count = views.view_count + 1,
    updated_at = NOW();

  RETURN QUERY
  SELECT view_count FROM views WHERE slug = input_slug;
END;
$$;

-- =============================================================================
-- VERIFICATION
-- =============================================================================

-- Check warnings are gone
SELECT
  proname,
  prosecdef AS is_security_definer,
  proconfig AS search_path_settings
FROM pg_proc
WHERE proname IN ('update_views', 'get_all_view_counts', 'update_updated_at_column');

-- Test the view
SELECT * FROM view_analytics LIMIT 3;

-- =============================================================================
-- ✅ DONE! Both warnings should be resolved.
-- =============================================================================
```

## ✅ What This Fixes

| Warning | Fix |
|---------|-----|
| `view_analytics is defined with SECURITY DEFINER` | ✅ Changed to SECURITY INVOKER |
| `update_updated_at_column has mutable search_path` | ✅ Set `search_path = public` |

## 📋 Steps

1. Go to [Supabase SQL Editor](https://app.supabase.com)
2. Copy the entire script above
3. Paste and click "Run" (or `Ctrl/Cmd + Enter`)
4. Check warnings are gone in dashboard

That's it! 🎉
