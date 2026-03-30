# 🚀 Supabase Setup & Deployment Guide

Complete guide to setting up Supabase and deploying your view counter to Netlify.

---

## 📋 **Pre-Deployment Checklist**

Before you start, make sure you have:

- [ ] Supabase account ([signup here](https://supabase.com))
- [ ] Netlify account (connected to your GitHub)
- [ ] Git repository pushed to GitHub
- [ ] Local build successful (`npm run build`)

---

## Part 1: 🗄️ Supabase Database Setup

### Step 1: Create Supabase Project

1. **Go to:** [https://app.supabase.com](https://app.supabase.com)
2. **Click:** "New Project"
3. **Fill in:**
   - **Project Name:** `portfolio-blog` (or your choice)
   - **Database Password:** Create a strong password (save it!)
   - **Region:** Choose closest to your users (e.g., `US East (North Virginia)`)
   - **Pricing Plan:** Free tier is fine
4. **Click:** "Create new project"
5. **Wait:** ~2 minutes for database to provision

---

### Step 2: Run Database Schema

1. **Navigate to:** SQL Editor (left sidebar)
2. **Click:** "New Query"
3. **Open:** `SUPABASE_QUICK_FIX.md` in your project
4. **Copy:** The entire SQL script
5. **Paste:** Into Supabase SQL Editor
6. **Click:** "Run" or press `Ctrl/Cmd + Enter`

**Expected output:**
```
Success. No rows returned
```

**Alternative:** Use individual files in order:
```sql
-- First run: supabase-schema.sql
-- Then run: SUPABASE_QUICK_FIX.md (for security fixes)
```

---

### Step 3: Verify Database Setup

Run these verification queries:

```sql
-- Check table exists
SELECT * FROM views;
-- Expected: Empty table with columns: id, slug, view_count, created_at, updated_at

-- Check functions exist
SELECT routine_name FROM information_schema.routines
WHERE routine_schema = 'public';
-- Expected: update_views, get_all_view_counts, update_updated_at_column

-- Check RLS is enabled
SELECT tablename, rowsecurity FROM pg_tables
WHERE schemaname = 'public' AND tablename = 'views';
-- Expected: rowsecurity = true

-- Test increment function
SELECT update_views('test-post');
-- Expected: Returns 1

-- Verify it worked
SELECT * FROM views WHERE slug = 'test-post';
-- Expected: Shows row with view_count = 1
```

---

### Step 4: Get API Credentials

1. **Go to:** Project Settings → API (left sidebar)
2. **Copy these values:**

   **Project URL:**
   ```
   https://xxxxxxxxxxxxx.supabase.co
   ```

   **Anon/Public Key:**
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

3. **Keep these safe** - you'll need them in next step

---

### Step 5: Update Local `.env` File

```bash
# Update your .env file
SUPABASE_URL="https://your-project-id.supabase.co"
SUPABASE_ANON_KEY="your-anon-key-here"
```

**Test locally:**
```bash
npm run dev
# Visit http://localhost:4321/blog/your-first-post
# Check browser console for errors
```

---

## Part 2: 🌐 Netlify Deployment

### Option A: Deploy via Netlify Dashboard (Recommended)

#### Step 1: Connect Repository

1. **Go to:** [https://app.netlify.com](https://app.netlify.com)
2. **Click:** "Add new site" → "Import an existing project"
3. **Choose:** GitHub
4. **Authorize:** Netlify to access your repositories
5. **Select:** Your portfolio repository

#### Step 2: Configure Build Settings

**Build command:**
```bash
npm run build
```

**Publish directory:**
```
dist
```

**Build settings should auto-detect from `netlify.toml` if you have one**

#### Step 3: Add Environment Variables

**IMPORTANT:** Before deploying, add environment variables:

1. **Go to:** Site settings → Environment variables
2. **Click:** "Add a variable" → "Add a single variable"
3. **Add these:**

```bash
Key: SUPABASE_URL
Value: https://your-project-id.supabase.co

Key: SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### Step 4: Deploy

1. **Click:** "Deploy site"
2. **Wait:** ~2-3 minutes for build
3. **Check:** Build logs for errors

---

### Option B: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site (first time only)
netlify init

# Set environment variables
netlify env:set SUPABASE_URL "https://your-project-id.supabase.co"
netlify env:set SUPABASE_ANON_KEY "your-anon-key-here"

# Build and deploy
netlify deploy --prod
```

---

### Option C: Auto-Deploy via Git (Easiest)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Add view counter with Supabase"
   git push origin main
   ```

2. **Netlify auto-deploys** (if already connected)

3. **Add env vars** via dashboard (Step 3 in Option A)

---

## Part 3: ✅ Post-Deployment Verification

### Step 1: Test API Endpoints

**Test GET endpoint:**
```bash
curl https://your-site.netlify.app/api/views/test-post
```

**Expected response:**
```json
{"count": 0}
```

**Test POST endpoint:**
```bash
curl -X POST https://your-site.netlify.app/api/views/test-post
```

**Expected response:**
```json
{"count": 1, "message": "View count updated successfully"}
```

---

### Step 2: Test View Counter in Browser

1. **Visit:** `https://your-site.netlify.app/blog/[any-post]`
2. **Check:**
   - View counter appears (should show eye icon + number)
   - Number increments after ~500ms
3. **Open:** Browser DevTools Console
   - Should see no errors
   - May see: `POST /api/views/...` network request

---

### Step 3: Verify in Supabase

1. **Go to:** Supabase → Table Editor → `views` table
2. **Check:** You should see rows appearing as you visit blog posts
3. **Verify:** View counts are incrementing

**Example:**
```
| id | slug            | view_count | created_at | updated_at |
|----|-----------------|------------|------------|------------|
| 1  | test-post       | 3          | ...        | ...        |
| 2  | my-first-post   | 1          | ...        | ...        |
```

---

### Step 4: Test Bot Detection

**Simulate bot visit:**
```bash
curl -X POST \
  -H "User-Agent: GoogleBot/2.1" \
  https://your-site.netlify.app/api/views/test-post
```

**Expected:** Count should NOT increment (bot detected)

**Check logs:**
```
Bot detected for slug: test-post, skipping increment
```

---

### Step 5: Test Rate Limiting

**Rapid fire requests:**
```bash
# First request (should increment)
curl -X POST https://your-site.netlify.app/api/views/test-post

# Second request within 60s (should be rate limited)
curl -X POST https://your-site.netlify.app/api/views/test-post
```

**Expected:** Second request doesn't increment (returns current count)

---

## Part 4: 🔍 Troubleshooting

### Issue 1: "Missing Supabase environment variables"

**Cause:** Environment variables not set in Netlify

**Fix:**
```bash
# Via CLI
netlify env:set SUPABASE_URL "your-url"
netlify env:set SUPABASE_ANON_KEY "your-key"

# Then redeploy
netlify deploy --prod
```

---

### Issue 2: API Returns 500 Error

**Cause:** Database schema not created

**Fix:**
1. Go to Supabase SQL Editor
2. Run `supabase-schema.sql`
3. Verify with: `SELECT * FROM views;`

---

### Issue 3: View Counter Shows "0 views" Always

**Possible causes:**

**A. ISR cache issue:**
```bash
# Wait 60 seconds, then refresh
# Or clear Netlify cache and redeploy
```

**B. API endpoint not found:**
```bash
# Check: https://your-site.netlify.app/api/views/test
# Should return JSON, not 404
```

**C. CORS issue (rare):**
- Check browser console for CORS errors
- API should be same-origin, so this shouldn't happen

---

### Issue 4: Build Fails on Netlify

**Check build logs for:**

**A. Missing dependencies:**
```bash
# Add to package.json if missing
npm install @supabase/supabase-js
```

**B. TypeScript errors:**
```bash
# Fix locally first
npm run build
```

**C. Environment variable errors:**
- Make sure env vars are set in Netlify
- Rebuild after adding env vars

---

### Issue 5: Views Not Incrementing

**Debug checklist:**

1. **Check browser console:**
   ```javascript
   // Should see POST request
   POST /api/views/your-slug 200
   ```

2. **Check Netlify Functions logs:**
   - Go to: Netlify Dashboard → Functions
   - Look for errors in `entry.mjs`

3. **Check Supabase logs:**
   - Go to: Supabase → Logs → Postgres Logs
   - Look for errors in RPC calls

4. **Test RPC function directly:**
   ```sql
   SELECT update_views('debug-test');
   ```

---

## Part 5: 🎛️ Configuration Options

### Custom Revalidation Time

Change ISR cache duration:

```typescript
// src/pages/blog/[slug].astro
export const revalidate = 120; // 2 minutes instead of 60s
```

---

### Disable Views in Development

Already configured! Views are skipped in dev mode unless:

```bash
# .env
TRACK_VIEWS_IN_DEV="true"
```

---

### Analytics View

Query top posts:

```sql
-- In Supabase SQL Editor
SELECT * FROM view_analytics
ORDER BY view_count DESC
LIMIT 10;
```

---

## Part 6: 📊 Monitoring & Maintenance

### Check Supabase Usage

1. **Go to:** Supabase → Settings → Usage
2. **Monitor:**
   - Database size (should be tiny)
   - API requests (free tier: 500k/month)
   - Bandwidth (free tier: 5GB/month)

---

### Check Netlify Usage

1. **Go to:** Netlify → Usage
2. **Monitor:**
   - Build minutes (free tier: 300/month)
   - Bandwidth (free tier: 100GB/month)
   - Function invocations (free tier: 125k/month)

---

### Backup Database

**Option 1: SQL Dump**
```sql
-- In Supabase SQL Editor
COPY (SELECT * FROM views) TO STDOUT WITH CSV HEADER;
```

**Option 2: Supabase Dashboard**
- Go to: Database → Backups
- Free tier: Daily backups (7 day retention)

---

## Part 7: 🚀 Going Live Checklist

### Before Announcing

- [ ] Test all blog posts have view counters
- [ ] Verify counts increment correctly
- [ ] Check mobile responsiveness
- [ ] Test bot detection working
- [ ] Verify rate limiting working
- [ ] Check Netlify functions deployed
- [ ] Monitor Supabase for errors
- [ ] Set up error alerting (optional)

### After Going Live

- [ ] Monitor first 24 hours for errors
- [ ] Check Supabase logs daily (first week)
- [ ] Verify view counts look reasonable
- [ ] Set up analytics dashboard (optional)

---

## 📚 Quick Reference

### Useful Commands

```bash
# Local development
npm run dev

# Build and test locally
npm run build
npm run preview

# Deploy to Netlify
git push origin main  # Auto-deploy if connected

# Or manual deploy
netlify deploy --prod

# Check env vars
netlify env:list

# View logs
netlify functions:log entry
```

### Useful SQL Queries

```sql
-- Top 10 posts
SELECT slug, view_count FROM views
ORDER BY view_count DESC LIMIT 10;

-- Total views
SELECT SUM(view_count) FROM views;

-- Posts created today
SELECT * FROM views
WHERE created_at > CURRENT_DATE;

-- Reset test data
DELETE FROM views WHERE slug LIKE 'test%';
```

---

## 🆘 Need Help?

1. **Check logs:**
   - Netlify: Functions logs
   - Supabase: Postgres logs
   - Browser: Console (F12)

2. **Review documentation:**
   - `SUPABASE_SETUP.md` - Initial setup
   - `SUPABASE_SECURITY_FIX.md` - Security warnings
   - `SUPABASE_QUICK_FIX.md` - Quick fixes

3. **Common resources:**
   - [Supabase Docs](https://supabase.com/docs)
   - [Netlify Docs](https://docs.netlify.com)
   - [Astro Docs](https://docs.astro.build)

---

## ✅ Success Criteria

You'll know it's working when:

✅ Build completes on Netlify without errors
✅ Blog posts show view counters (eye icon + number)
✅ View counts increment when you visit posts
✅ Counts appear in Supabase `views` table
✅ Bot traffic doesn't increment counts
✅ No errors in browser console
✅ No errors in Netlify functions logs
✅ No errors in Supabase postgres logs

**Congratulations! 🎉 Your view counter is live!**
