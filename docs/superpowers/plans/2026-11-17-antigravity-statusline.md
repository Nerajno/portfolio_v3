# Antigravity Status Bar Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a high-performance Powerlevel10k-style status bar for Antigravity CLI (`agy`) matching the Claude Code terminal UI aesthetic with folder, git branch/dirty state, active model, token counter, and cost badges.

**Architecture:** A standalone bash script (`~/.gemini/statusline.sh`) that accepts Antigravity's JSON payload via `stdin`, extracts workspace/model/VCS/token telemetry with `jq` and Git, renders ANSI 256-color Powerline chevron segments (``), and is configured via Antigravity's `/statusline` command.

**Tech Stack:** Bash, `jq`, Git, ANSI 256 colors, Powerline / Nerd Font glyphs (`\xee\x82\xb0`, `\xef\x81\xbc`, `\xee\x82\xa0`).

**Spec:** Replicate the Powerline statusline from `~/.claude/statusline-with-tokens.sh` adapted to Antigravity CLI (`agy`)'s `StatusLineData` schema without external Anthropic rate-limit dependencies.

## Global Constraints

- Must work in macOS default Bash (`/bin/bash` 3.2+) without requiring Bash 4/5 syntax (use byte sequences for Nerd Font glyphs).
- Must fail open gracefully: if `stdin` is empty, malformed, or if `jq` is unavailable, output a minimal fallback or empty string without throwing terminal errors.
- Must not block or hang: all git commands must use `--no-optional-locks` and fast short-circuit timeouts.
- Safe execution in any terminal width: truncate deep directory paths (`~/.../dir`).

## Review Focus

1. **Empty/Null Stdin Handling:** Statusline must execute cleanly and return valid directory/branch even if Antigravity pipes `{}` or empty stdin.
2. **Dirty vs Clean Git States:** Green background for clean repo, yellow/amber background when working directory has modifications/untracked files.
3. **Model & Effort Formatting:** Correctly display model name (e.g., `Gemini 3.8 Flash`) and optional effort/role if present in Antigravity's JSON payload.
4. **Token Formatting:** Compact representation of tokens (e.g., `42k` or `125k`).
5. **Nerd Font Glyphs vs ASCII Fallback:** If `CLAUDER_ASCII=1` or non-UTF-8 locale is detected, fallback gracefully to ASCII delimiters (`>` or `|`).

---

### Task 1: Create the Antigravity Statusline Script (`~/.gemini/statusline.sh`)

**Files:**
- Create: `/Users/nerandojohnson/.gemini/statusline.sh`

- [ ] **Step 1: Draft the script with segment styling and JSON parsing**
  Implement `~/.gemini/statusline.sh` featuring:
  - System path resolution prioritizing `/usr/bin/jq` (native arm64 on macOS).
  - Powerline chevron renderer `seg <bg_color> <fg_color> <text>`.
  - Directory segment (blue `#31` / white `#255`) with folder glyph `\xef\x81\xbc` and `~` contraction.
  - Git branch segment (green `#70` when clean, amber `#178` when dirty) with branch glyph `\xee\x82\xa0` and status flags (`+` staged, `!` modified, `?` untracked).
  - Model segment (dark gray `#240` / white `#255`) showing Antigravity model name and reasoning effort level.
  - Token telemetry segment (charcoal `#236` / light gray `#250`) showing input and total tokens formatted with `k` notation.
  - Cost segment (gold `#214` / black `#0`) showing session cost if non-zero.

- [ ] **Step 2: Make the script executable**
  Run `chmod +x ~/.gemini/statusline.sh`.

---

### Task 2: Verification with Simulated Antigravity & Edge-Case Payloads

**Files:**
- Test: Run terminal commands to test the script with various JSON inputs.

- [ ] **Step 1: Test with realistic Antigravity `StatusLineData` JSON**
  Test execution with standard payload:
  ```bash
  echo '{"workspace":{"current_dir":"/Users/nerandojohnson/Documents/Dev/Projects/Portfolio_Pieces/astro_portfolio_v3"},"model":{"display_name":"Gemini 3.8 Flash (High)","effort":"high"},"total_tokens":45200,"input_tokens":32000,"cost":{"estimated":0.02}}' | bash ~/.gemini/statusline.sh
  ```
  Verify all segments (dir, git branch, model, tokens, cost) render cleanly with powerline chevrons.

- [ ] **Step 2: Test edge case: empty JSON `{}`**
  ```bash
  echo '{}' | bash ~/.gemini/statusline.sh
  ```
  Verify it falls back to current working directory and local git status without errors.

- [ ] **Step 3: Test edge case: clean git repo vs dirty git repo**
  Verify background color toggles between green (`#70`) and amber (`#178`).

---

### Task 3: Patch Claude's TSV Parsing Bug in `~/.claude/statusline-command.sh` (Optional/Bonus)

**Files:**
- Modify: `~/.claude/statusline-command.sh:514-525`

- [ ] **Step 1: Fix IFS tab coalescing in `statusline-command.sh`**
  Update the `read` command to explicitly parse tab-delimited streams or use line-by-line reading so empty timestamps do not shift into the `SEVEN_DAY` percentage field.

- [ ] **Step 2: Verify Claude statusline execution**
  Run `echo '{}' | bash ~/.claude/statusline-with-tokens.sh` and confirm the `value too great for base` error is resolved.

---

### Task 4: Configure Antigravity CLI (`agy`)

**Files:**
- Configuration instruction in CLI: `/statusline bash ~/.gemini/statusline.sh`

- [ ] **Step 1: Set the statusline in Antigravity**
  Provide instructions / command for activating the statusline in the CLI:
  `/statusline bash ~/.gemini/statusline.sh`
- [ ] **Step 2: Verify active rendering inside Antigravity session**
  Confirm the statusline appears at the bottom of the CLI interface.
