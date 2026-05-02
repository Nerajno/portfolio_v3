#!/usr/bin/env bash
#
# GitHub Issue Consolidation Script
# Safely closes duplicates and merges related issues
#
# Usage:
#   ./consolidate-issues.sh           # Dry run (preview only)
#   ./consolidate-issues.sh --execute  # Actually execute changes
#   ./consolidate-issues.sh --verbose  # Dry run with detailed output
#

set -euo pipefail

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Parse arguments
DRY_RUN=true
VERBOSE=false

for arg in "$@"; do
  case $arg in
    --execute)
      DRY_RUN=false
      shift
      ;;
    --verbose)
      VERBOSE=true
      shift
      ;;
    --help|-h)
      echo "Usage: $0 [--execute] [--verbose]"
      echo "  --execute   Actually perform the changes (default: dry-run)"
      echo "  --verbose   Show detailed output"
      exit 0
      ;;
  esac
done

# Counters
CLOSED_COUNT=0
EDITED_COUNT=0
SKIPPED_COUNT=0
FAILED_COUNT=0

# Logging functions
log_info() {
  echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
  echo -e "${GREEN}[OK]${NC} $1"
}

log_warn() {
  echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
  echo -e "${RED}[ERROR]${NC} $1"
}

# Verify gh CLI is installed and authenticated
check_prerequisites() {
  log_info "Checking prerequisites..."

  if ! command -v gh &> /dev/null; then
    log_error "GitHub CLI (gh) is not installed. Install from https://cli.github.com/"
    exit 1
  fi

  if ! gh auth status &> /dev/null; then
    log_error "Not authenticated with GitHub. Run: gh auth login"
    exit 1
  fi

  # Get repo info
  REPO=$(gh repo view --json nameWithOwner -q .nameWithOwner 2>/dev/null || echo "")
  if [[ -z "$REPO" ]]; then
    log_error "Could not determine repository. Run from within a git repo with gh configured."
    exit 1
  fi

  log_success "Authenticated and using repository: $REPO"
}

# Verify an issue exists before operating on it
verify_issue_exists() {
  local issue_number=$1
  if ! gh issue view "$issue_number" &> /dev/null; then
    log_warn "Issue #$issue_number does not exist or you don't have access. Skipping..."
    ((SKIPPED_COUNT++)) || true
    return 1
  fi
  return 0
}

# Close an issue with a comment
close_issue() {
  local issue_number=$1
  local comment=$2

  if ! verify_issue_exists "$issue_number"; then
    return
  fi

  if [[ "$DRY_RUN" == true ]]; then
    log_info "[DRY-RUN] Would close issue #$issue_number"
    if [[ "$VERBOSE" == true ]]; then
      echo "  Comment: $comment"
    fi
    ((CLOSED_COUNT++)) || true
  else
    log_info "Closing issue #$issue_number..."
    if gh issue close "$issue_number" --comment "$comment" 2>/dev/null; then
      log_success "Closed issue #$issue_number"
      ((CLOSED_COUNT++)) || true
    else
      log_error "Failed to close issue #$issue_number"
      ((FAILED_COUNT++)) || true
    fi
  fi
}

# Edit an issue body
edit_issue_body() {
  local issue_number=$1
  local new_body=$2

  if ! verify_issue_exists "$issue_number"; then
    return
  fi

  if [[ "$DRY_RUN" == true ]]; then
    log_info "[DRY-RUN] Would edit issue #$issue_number body"
    if [[ "$VERBOSE" == true ]]; then
      echo "  New body preview (first 200 chars): ${new_body:0:200}..."
    fi
    ((EDITED_COUNT++)) || true
  else
    log_info "Editing issue #$issue_number..."
    if gh issue edit "$issue_number" --body "$new_body" 2>/dev/null; then
      log_success "Edited issue #$issue_number"
      ((EDITED_COUNT++)) || true
    else
      log_error "Failed to edit issue #$issue_number"
      ((FAILED_COUNT++)) || true
    fi
  fi
}

# Append content to an existing issue body
append_to_issue() {
  local issue_number=$1
  local append_content=$2

  if ! verify_issue_exists "$issue_number"; then
    return
  fi

  # Get current body
  local current_body
  current_body=$(gh issue view "$issue_number" --json body -q .body 2>/dev/null || echo "")

  if [[ -z "$current_body" ]]; then
    log_warn "Issue #$issue_number has empty body or couldn't be fetched"
    current_body=""
  fi

  local new_body="${current_body}

${append_content}"

  edit_issue_body "$issue_number" "$new_body"
}

# ─────────────────────────────────────────────────────────────────────────────
# MAIN EXECUTION
# ─────────────────────────────────────────────────────────────────────────────

main() {
  log_info "GitHub Issue Consolidation Script"
  log_info "Repository: $REPO"
  log_info "Mode: $([[ "$DRY_RUN" == true ]] && echo "DRY RUN (preview only)" || echo "EXECUTE")"
  echo ""

  check_prerequisites

  echo ""
  log_info "Starting consolidation operations..."
  echo ""

  # ── Group 1: Vue Series duplicates ──
  log_info "Group 1: Vue Series duplicates (#300–304 → #263–267)"
  close_issue 300 "Duplicate of #263 (State Management with Pinia). Closing in favour of the canonical issue. Use the title 'Staying in State: Managing Data with Pinia' as the published article title."
  close_issue 301 "Duplicate of #265 (Next Generation Tooling: Vite). Closing in favour of the canonical issue. Use the title 'A Faster Vue: Getting Started with Vite' as the published article title."
  close_issue 302 "Duplicate of #264 (TypeScript with Vue 3). Closing in favour of the canonical issue. Use the title 'Typed and True: Using TypeScript in Vue 3' as the published article title."
  close_issue 303 "Duplicate of #266 (Testing Vue Apps with Vitest). Closing in favour of the canonical issue. Use the title 'Tested and Trusted: Writing Tests with Vitest' as the published article title."
  close_issue 304 "Duplicate of #267 (Exploring Nuxt for Vue App Structure). Closing in favour of the canonical issue. Use the title 'Going Full Stack: Exploring Nuxt' as the published article title."
  echo ""

  # ── Group 2: Infrastructure / Tooling ──
  log_info "Group 2: Infrastructure tooling - absorb #197 & #198 into #195"

  INFRA_BODY="## Infrastructure — Tooling, Linting & Pre-commit Hooks

Set up the full developer-tooling baseline for portfolio_v3.

### Checklist
- [ ] Install and configure ESLint (flat config or \`.eslintrc\`)
- [ ] Install and configure Prettier (\`.prettierrc\`)
- [ ] Align ESLint + Prettier so they don't conflict
- [ ] Install Husky (\`npx husky init\`)
- [ ] Configure \`lint-staged\` for pre-commit linting
- [ ] Add \`commitlint\` + Conventional Commits config for commit-msg hook
- [ ] Verify hooks fire correctly on \`git commit\`
- [ ] Document setup steps in CONTRIBUTING.md or README

### Related
Absorbs #197 (Linting Configure) and #198 (Husky Integration)."

  edit_issue_body 195 "$INFRA_BODY"
  close_issue 197 "Absorbed into #195 (InfraStructure - Tooling). All linting config work is tracked there."
  close_issue 198 "Absorbed into #195 (InfraStructure - Tooling). Husky setup checklist has been added to that issue."
  echo ""

  # ── Group 3: Accessibility ──
  log_info "Group 3: Accessibility - merge #322 into #351"

  MOBILE_A11Y_APPEND="---

## Mobile-Specific Considerations (from #322)
- [ ] Touch targets ≥ 44×44 px on all interactive elements
- [ ] No horizontal scroll on 320 px viewport
- [ ] Pinch-to-zoom not blocked (\`user-scalable=no\` removed)
- [ ] Test with iOS VoiceOver + Safari and Android TalkBack + Chrome
- [ ] Verify focus-visible styles are visible on mobile browsers
- [ ] Check colour contrast under forced-colours / high-contrast mode on mobile"

  append_to_issue 351 "$MOBILE_A11Y_APPEND"
  close_issue 322 "Mobile accessibility requirements have been merged into the main WCAG 2.2 audit in #351 under a 'Mobile-Specific Considerations' section."
  close_issue 218 "Accessibility work is now tracked in #351 (A11y: WCAG 2.2 full audit + fixes). SEO work is tracked in #355 (SEO: Open Graph, Twitter Cards & Structured Data). Closing this older catch-all."
  echo ""

  # ── Group 4: SEO + AEO structured data ──
  log_info "Group 4: SEO - merge #357 into #355"

  AEO_APPEND="---

## AEO / AI Engine Schemas (from #357)
**Goal:** Improve AI citation rate on ChatGPT, Perplexity, and Google AI Overviews.

### JSON-LD Schemas to implement
| Page | Schema type |
|------|-------------|
| Home | \`Person\`, \`WebSite\` |
| Blog post | \`Article\`, \`BreadcrumbList\` |
| Speaking | \`Event\` (per talk) |
| Projects | \`SoftwareApplication\` (per project) |
| 404 | — |

### AEO-specific additions
- [ ] Add \`speakable\` property to \`Article\` schema on blog posts
- [ ] Add \`sameAs\` links (GitHub, LinkedIn, Twitter/X, Dev.to) to \`Person\` schema
- [ ] Verify schemas with Google Rich Results Test
- [ ] Verify with Schema.org validator
- [ ] Check discoverability via Perplexity and ChatGPT browse after deploy

### Related
Absorbs #357. Broader AEO strategy tracked in #362."

  append_to_issue 355 "$AEO_APPEND"
  close_issue 357 "AEO JSON-LD schema tasks have been merged into #355 (SEO: Open Graph, Twitter Cards & Structured Data) under the 'AEO / AI Engine Schemas' section. Broader AEO strategy remains in #362."
  echo ""

  # ── Group 5: Post-MVP catch-alls ──
  log_info "Group 5: Post-MVP - absorb #98 into #97"

  POST_MVP_BODY="## Post-MVP Ideas & Known Fixes

Backlog for improvements after the v1 launch.

### 💡 Ideas
- Site view counter (ref: https://www.vorillaz.com/astro-views / https://backyardcoder.me/posts/implementing-a-page-view-counter/)
- Add commenting system (see #120)
- Embed slides/PDFs from self-hosted storage (see #111)
- Back-to-top button on blog posts (see #99)
- Tools/Uses page (see #118)
- AI-generated audio narration for blog posts (see #289)

### 🐛 Known Fixes
- [ ] Replace all web image assets / internet links with locally hosted or CDN-hosted versions
- [ ] Audit and fix any broken links (also tracked via monthly link audit #286)

### Related
Absorbs #98."

  edit_issue_body 97 "$POST_MVP_BODY"
  close_issue 98 "Absorbed into #97 (Post MVP Ideas). Known fixes list added there."
  echo ""

  # ── Group 6: Speaking page ──
  log_info "Group 6: Speaking page - close old #182 in favor of #344"
  close_issue 182 "The full speaking page redesign spec — including layout, accordion structure, upcoming/past split, and all subcomponents — is tracked in #344 (Page: Speaking /speaking). Closing this older structural review."
  echo ""

  # ── Group 7: Old sprint template issues ──
  log_info "Group 7: Close old sprint template issues"
  close_issue 209 "Project config and setup work is now tracked within the active Epic #316 (Emerald Design System Migration) and its child issues. Closing this older sprint-template issue."
  close_issue 212 "Design system and theme setup is tracked in #312 (Implement Emerald Design System) and #316 (Epic). Closing this older sprint-template issue."
  close_issue 213 "Header & Navigation work is tracked in #314 (Rebuild bell notification / navbar component). Closing this older sprint-template issue."
  close_issue 215 "Advanced filtering & search will be addressed as part of #341 (Blog Index page) and #343 (Projects page). Closing this older sprint-template issue."
  close_issue 216 "Timeline virtualization is out of current scope. Closing this older sprint-template issue — re-open as a dedicated issue if needed in a future sprint."
  close_issue 217 "State management (Pinia) is handled within the active design system and page-build issues (#312, #316). Closing this older sprint-template issue."
  echo ""

  # ── Add detail to empty/thin issues ──
  log_info "Group 8: Enrich empty/thin issues with detailed bodies"

  ISSUE_364_BODY="## Let's Build Something: A Weather Dashboard in Vue 3

A hands-on tutorial blog post building a real-world weather dashboard using Vue 3.

### Stack
- Vue 3 (Composition API + \`<script setup>\`)
- OpenWeatherMap API (free tier)
- Pinia for state
- Tailwind CSS for styling

### Components to build
| Component | Responsibility |
|-----------|---------------|
| \`SearchBar.vue\` | City input with debounce |
| \`WeatherCard.vue\` | Current conditions (temp, icon, humidity, wind) |
| \`ForecastStrip.vue\` | 5-day forecast row |
| \`ErrorState.vue\` | API error / city not found feedback |
| \`LoadingSkeleton.vue\` | Shimmer placeholder while fetching |

### Acceptance criteria
- [ ] Draft article written and saved to \`src/content/blog/\`
- [ ] All code examples are runnable (Vue SFC format)
- [ ] Screenshots / GIFs added (width=960, descriptive alt text)
- [ ] publishDate set; draft: true until ready
- [ ] Part of the 'A Clearer Vue' series (see #259)

### Article series
Part of the 'A Clearer Vue' series alongside #260–#267."

  edit_issue_body 364 "$ISSUE_364_BODY"

  ISSUE_271_BODY="## Implement Post Creation and Management

Define and build the workflow for creating, editing, and publishing blog posts in the Astro content-collections setup.

### Scope
- [ ] Document the content authoring workflow (Astro content collections in \`src/content/blog/\`)
- [ ] Establish frontmatter schema and required fields (title, description, publishDate, draft, tags, series)
- [ ] Add a content authoring checklist / template (e.g., \`_post-template.md\`)
- [ ] Decide on image/asset strategy (local vs Cloudinary)
- [ ] Document how to set \`draft: true\` and future \`publishDate\` to stage posts
- [ ] Explore whether a lightweight CMS (Decap / TinaCMS) is desirable long-term

### Notes
- Blog and series pages already filter out drafts and future-dated posts (publishDate < new Date())
- Currently purely file-based; no admin UI exists"

  edit_issue_body 271 "$ISSUE_271_BODY"

  ISSUE_224_BODY="## Refactor: Simpler Home Page

Collapse and simplify the home page layout.

### What to change
- [ ] Merge the two below-the-fold content sections (currently rendered as separate blocks) into a single unified section
- [ ] Remove redundant padding/margin between collapsed sections
- [ ] Ensure the simplified layout is consistent with the Emerald design spec in #339 and #316
- [ ] Verify responsive behaviour on mobile (320 px, 375 px, 768 px)
- [ ] Smoke-test dark mode after changes

### Related
- #339 (Page: Home / full spec)
- #316 (Emerald Design System Epic)"

  edit_issue_body 224 "$ISSUE_224_BODY"

  ISSUE_186_BODY="## Resources

Reference list of tools, docs, and guides used to build portfolio_v3.

### Astro
- https://docs.astro.build
- https://astro.build/blog/astro-db-deep-dive/

### Design
- https://inclusive-components.design/ (see #201)
- Tailwind CSS docs

### Accessibility
- WCAG 2.2 spec
- https://www.a11yproject.com/checklist/

### Performance
- https://web.dev/measure/
- Lighthouse CI

### Testing
- Playwright docs
- Vitest docs

### Blog inspiration
- Josh W. Comeau — https://joshwcomeau.com

_Add links here as they're used. This issue serves as a living reference list._"

  edit_issue_body 186 "$ISSUE_186_BODY"

  echo ""
  echo "═══════════════════════════════════════════════════════════════"
  if [[ "$DRY_RUN" == true ]]; then
    log_info "DRY RUN COMPLETE - No changes were made"
  else
    log_info "EXECUTION COMPLETE"
  fi
  echo "═══════════════════════════════════════════════════════════════"
  echo "Summary:"
  echo "  Issues that would be closed: $CLOSED_COUNT"
  echo "  Issues that would be edited:  $EDITED_COUNT"
  echo "  Issues skipped (not found):    $SKIPPED_COUNT"
  echo "  Operations failed:             $FAILED_COUNT"
  echo ""
  if [[ "$DRY_RUN" == true ]]; then
    log_warn "This was a dry run. To execute changes, run: $0 --execute"
  fi
}

# Run main function
main
