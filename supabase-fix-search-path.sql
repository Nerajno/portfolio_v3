-- =============================================================================
-- FIX: Mutable search_path Security Warning
-- =============================================================================
-- Fixes the warning: "public.update_updated_at_column has a role mutable search_path"
--
-- This warning appears because the function doesn't explicitly set search_path,
-- which could allow SQL injection attacks via schema manipulation.
-- =============================================================================

-- Fix the trigger function by setting an explicit search_path
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER  -- Runs with elevated privileges (needed for triggers)
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

-- Check that search_path is now set
SELECT
  proname AS function_name,
  prosecdef AS security_definer,
  proconfig AS search_path_config
FROM pg_proc
WHERE proname = 'update_updated_at_column';

-- Expected output:
-- function_name              | security_definer | search_path_config
-- ---------------------------+------------------+--------------------
-- update_updated_at_column   | t                | {search_path=public}

-- =============================================================================
-- DONE! The warning should now be resolved.
-- =============================================================================
