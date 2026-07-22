import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";
import { handleContactRequest, type ContactEnv } from "@/lib/contact-form";

export const prerender = false;

export const POST: APIRoute = ({ request }) => handleContactRequest(request, env as ContactEnv);

export const ALL: APIRoute = () =>
  Response.json(
    { ok: false, message: "Not found." },
    { status: 404, headers: { "Cache-Control": "no-store" } }
  );
