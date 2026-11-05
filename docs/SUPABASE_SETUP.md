# Supabase View Counter Setup Guide

This guide walks you through setting up the blog post view counter with Supabase.

## Prerequisites

- A Supabase account ([signup here](https://supabase.com))
- A Supabase project created

## Setup Steps

### 1. Create Supabase Project

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Click "New Project"
3. Fill in project details and create

### 2. Run Database Schema

1. In your Supabase project, navigate to **SQL Editor**
2. Click "New Query"
3. Copy the entire contents of `supabase-schema.sql`
4. Paste into the SQL Editor
5. Click "Run" or press `Ctrl/Cmd + Enter`

This will create:
- ✅ `views` table with proper indexes
- ✅ `update_views()` RPC function for atomic increments
- ✅ `get_all_view_counts()` helper function
- ✅ Row Level Security (RLS) policies
- ✅ Analytics view for insights

### 3. Get Your Supabase Credentials

1. Go to **Project Settings** → **API**
2. Copy the following:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **Anon/Public Key** (under "Project API keys")

### 4. Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your Supabase credentials:
   ```env
   SUPABASE_URL="https://your-project.supabase.co"
   SUPABASE_ANON_KEY="your-anon-key-here"
   ```

### 5. Verify Setup

1. In Supabase SQL Editor, run:
   ```sql
   -- Test the increment function
   SELECT update_views('test-post');

   -- Verify the record was created
   SELECT * FROM views WHERE slug = 'test-post';

   -- Check analytics view
   SELECT * FROM view_analytics;
   ```

2. You should see:
   - First query returns `{"count": 1}`
   - Second query shows the test post with 1 view
   - Third query shows analytics data

### 6. Test Locally

1. Start your dev server:
   ```bash
   npm run dev
   ```

2. Visit a blog post
3. Check Supabase dashboard → **Table Editor** → `views` table
4. You should see view counts incrementing

## Database Schema Overview

### `views` Table
| Column | Type | Description |
|--------|------|-------------|
| `id` | BIGSERIAL | Auto-incrementing primary key |
| `slug` | TEXT | Blog post slug (unique) |
| `view_count` | BIGINT | Total views for this post |
| `created_at` | TIMESTAMPTZ | When record was created |
| `updated_at` | TIMESTAMPTZ | Last view timestamp |

### RPC Functions

#### `update_views(input_slug TEXT)`
Atomically increments view count for a blog post.

**Usage:**
```typescript
const { data } = await supabase.rpc('update_views', {
  input_slug: 'my-blog-post'
});
// Returns: [{ count: 42 }]
```

#### `get_all_view_counts()`
Returns all view counts efficiently (single query).

**Usage:**
```typescript
const { data } = await supabase.rpc('get_all_view_counts');
// Returns: [{ slug: 'post-1', count: 100 }, ...]
```

### Row Level Security (RLS)

The following policies are configured:

- ✅ **Public READ access** - Anyone can view counts
- ✅ **Public INSERT/UPDATE** - Via RPC functions only
- ❌ **Public DELETE** - Blocked (admin only)

## Monitoring Views

### Check Top Posts
```sql
SELECT slug, view_count
FROM views
ORDER BY view_count DESC
LIMIT 10;
```

### View Analytics
```sql
SELECT * FROM view_analytics;
```

This shows:
- View counts
- Days since post creation
- Average views per day

## Troubleshooting

### Issue: "Missing Supabase environment variables"
**Solution:** Make sure `.env` file exists and contains valid `SUPABASE_URL` and `SUPABASE_ANON_KEY`

### Issue: Views not incrementing
**Solution:**
1. Check Supabase logs in Dashboard → **Logs** → **Postgres Logs**
2. Verify RPC function exists: `SELECT * FROM pg_proc WHERE proname = 'update_views'`
3. Check RLS policies are enabled

### Issue: "permission denied for table views"
**Solution:** Run the GRANT statements in `supabase-schema.sql` again

## Security Notes

- ✅ `.env` file is in `.gitignore` (never commit secrets!)
- ✅ RLS policies restrict direct table access
- ✅ Only increment/read operations allowed via RPC functions
- ✅ Anon key is safe for client-side use (with RLS enabled)

## Need Help?

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Discord](https://discord.supabase.com)
- Check `src/lib/supabase.ts` for implementation details
