// src/env.d.ts
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SUPABASE_URL: string;
  readonly SUPABASE_ANON_KEY: string;
  readonly SUPABASE_SERVICE_ROLE_KEY?: string;
  readonly TRACK_VIEWS_IN_DEV?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
