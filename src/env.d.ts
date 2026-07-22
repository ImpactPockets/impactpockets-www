/// <reference types="astro/client" />

declare namespace Cloudflare {
  interface Env {
    TURNSTILE_SECRET: string;
    TURNSTILE_SITEKEY: string;
    CONTACT_ALLOWED_ORIGINS: string;
    CONTACT_ALLOWED_HOSTNAMES: string;
    CONTACT_FROM: string;
    CONTACT_TO: string;
    EMAIL: SendEmail;
  }
}

interface Window {
  turnstile?: {
    reset: (widgetId?: string) => void;
  };
}
