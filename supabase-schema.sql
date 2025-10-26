-- =============================================================================
-- SUPABASE DATABASE SCHEMA FOR VIEW COUNTER
-- =============================================================================
-- This file contains the SQL schema for the blog post view counter feature.
-- Run this in your Supabase SQL Editor to set up the database.
-- =============================================================================

-- -----------------------------------------------------------------------------
-- 1. CREATE VIEWS TABLE
-- -----------------------------------------------------------------------------
-- Stores view counts for each blog post slug
CREATE TABLE IF NOT EXISTS views (
  id BIGSERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  view_count BIGINT DEFAULT 0 NOT NULL CHECK (view_count >= 0),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Add comment for documentation
COMMENT ON TABLE views IS 'Tracks view counts for blog posts';
COMMENT ON COLUMN views.slug IS 'Unique identifier for blog post (URL slug)';
COMMENT ON COLUMN views.view_count IS 'Total number of views for this post';
COMMENT ON COLUMN views.created_at IS 'When this record was first created';
COMMENT ON COLUMN views.updated_at IS 'Last time the view count was incremented';

-- -----------------------------------------------------------------------------
-- 2. CREATE INDEXES FOR PERFORMANCE
-- -----------------------------------------------------------------------------
-- Index on slug for faster lookups (most common query)
CREATE INDEX IF NOT EXISTS idx_views_slug ON views(slug);

-- Index on view_count for sorting/analytics queries
CREATE INDEX IF NOT EXISTS idx_views_count ON views(view_count DESC);

-- Index on updated_at for time-based queries
CREATE INDEX IF NOT EXISTS idx_views_updated_at ON views(updated_at DESC);

-- -----------------------------------------------------------------------------
-- 3. CREATE RPC FUNCTION FOR ATOMIC INCREMENT
-- -----------------------------------------------------------------------------
-- This function atomically increments the view count or creates a new record
-- Returns the new count after increment
CREATE OR REPLACE FUNCTION update_views(input_slug TEXT)
RETURNS TABLE(count BIGINT)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
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

-- Add comment for documentation
COMMENT ON FUNCTION update_views IS 'Atomically increments view count for a blog post slug';

-- -----------------------------------------------------------------------------
-- 4. CREATE HELPER FUNCTION TO GET ALL VIEWS
-- -----------------------------------------------------------------------------
-- Returns all view counts as a JSON object for efficient bulk retrieval
CREATE OR REPLACE FUNCTION get_all_view_counts()
RETURNS TABLE(slug TEXT, count BIGINT)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT slug, view_count FROM views ORDER BY slug;
$$;

COMMENT ON FUNCTION get_all_view_counts IS 'Returns all blog post view counts';

-- -----------------------------------------------------------------------------
-- 5. ENABLE ROW LEVEL SECURITY (RLS)
-- -----------------------------------------------------------------------------
-- Enable RLS to control access at the row level
ALTER TABLE views ENABLE ROW LEVEL SECURITY;

-- -----------------------------------------------------------------------------
-- 6. CREATE RLS POLICIES
-- -----------------------------------------------------------------------------
-- Policy: Allow anyone to read view counts (public data)
CREATE POLICY "Allow public read access"
  ON views
  FOR SELECT
  TO public
  USING (true);

-- Policy: Allow inserts only through the RPC function
-- (Direct inserts are blocked, must use update_views function)
CREATE POLICY "Allow insert via RPC"
  ON views
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Policy: Allow updates only through the RPC function
CREATE POLICY "Allow update via RPC"
  ON views
  FOR UPDATE
  TO public
  USING (true);

-- Policy: Prevent direct deletes (only admins can delete)
CREATE POLICY "Prevent public delete"
  ON views
  FOR DELETE
  TO public
  USING (false);

-- -----------------------------------------------------------------------------
-- 7. CREATE TRIGGER TO AUTO-UPDATE updated_at
-- -----------------------------------------------------------------------------
-- Automatically update the updated_at timestamp on any update
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_views_updated_at
  BEFORE UPDATE ON views
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- -----------------------------------------------------------------------------
-- 8. OPTIONAL: CREATE VIEW FOR ANALYTICS
-- -----------------------------------------------------------------------------
-- Create a view for easy analytics queries
CREATE OR REPLACE VIEW view_analytics AS
SELECT
  slug,
  view_count,
  created_at,
  updated_at,
  EXTRACT(EPOCH FROM (updated_at - created_at)) / 86400 AS days_since_creation,
  view_count::FLOAT / NULLIF(EXTRACT(EPOCH FROM (updated_at - created_at)) / 86400, 0) AS avg_views_per_day
FROM views
ORDER BY view_count DESC;

COMMENT ON VIEW view_analytics IS 'Analytics view showing view counts with calculated metrics';

-- -----------------------------------------------------------------------------
-- 9. GRANT PERMISSIONS
-- -----------------------------------------------------------------------------
-- Grant necessary permissions to anon and authenticated users
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT ON views TO anon, authenticated;
GRANT EXECUTE ON FUNCTION update_views TO anon, authenticated;
GRANT EXECUTE ON FUNCTION get_all_view_counts TO anon, authenticated;

-- -----------------------------------------------------------------------------
-- 10. OPTIONAL: SEED DATA FOR TESTING
-- -----------------------------------------------------------------------------
-- Uncomment to add sample data for testing
-- INSERT INTO views (slug, view_count) VALUES
--   ('my-first-blog-post', 42),
--   ('getting-started-with-astro', 156),
--   ('building-with-supabase', 89)
-- ON CONFLICT (slug) DO NOTHING;

-- =============================================================================
-- SETUP COMPLETE!
-- =============================================================================
-- To verify the setup, run:
-- SELECT * FROM views;
-- SELECT update_views('test-post');
-- SELECT * FROM view_analytics;
-- =============================================================================
