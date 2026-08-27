globalThis.process ??= {};
globalThis.process.env ??= {};
import { a as DefaultFetchHandler, i as App, o as manifest } from "./chunks/entrypoints_D6NxkzHY.mjs";
import "./chunks/image-binding-transform_BaQ0hnP8.mjs";
import "cloudflare:workers";
//#region \0virtual:astro-cloudflare:config
var sessionKVBindingName = "SESSION";
//#endregion
//#region \0virtual:astro:fetchable
var _virtual_astro_fetchable_default = new DefaultFetchHandler();
//#endregion
//#region node_modules/astro/dist/core/app/entrypoints/virtual/prod.js
var createApp$1 = ({ streaming } = {}) => {
	const app = new App(manifest, streaming);
	app.setFetchHandler(_virtual_astro_fetchable_default);
	return app;
};
//#endregion
//#region node_modules/astro/dist/core/app/entrypoints/virtual/index.js
var createApp = createApp$1;
//#endregion
//#region node_modules/@astrojs/internal-helpers/dist/request.js
function getFirstForwardedValue(multiValueHeader) {
	return multiValueHeader?.toString()?.split(",").map((e) => e.trim())?.[0];
}
var IP_RE = /^[0-9a-fA-F.:]{1,45}$/;
function isValidIpAddress(value) {
	return IP_RE.test(value);
}
function getValidatedIpFromHeader(headerValue) {
	const raw = getFirstForwardedValue(headerValue);
	if (raw && isValidIpAddress(raw)) return raw;
}
//#endregion
//#region node_modules/@astrojs/cloudflare/dist/utils/cf-helpers.js
function matchStaticAsset(manifest, requestUrl, env) {
	const { pathname } = new URL(requestUrl);
	if (manifest.assets.has(pathname)) return env.ASSETS.fetch(requestUrl.replace(/\.html$/, ""));
}
async function fallbackToAssets(requestUrl, env) {
	const asset = await env.ASSETS.fetch(requestUrl.replace(/index.html$/, "").replace(/\.html$/, ""));
	if (asset.status !== 404) return asset;
}
function createErrorPageFetch(env) {
	return async (url) => {
		return env.ASSETS.fetch(url.replace(/\.html$/, ""));
	};
}
function createLocals(ctx) {
	const locals = { cfContext: ctx };
	Object.defineProperty(locals, "runtime", {
		enumerable: false,
		value: {
			get env() {
				throw new Error(`Astro.locals.runtime.env has been removed in Astro v6. Use 'import { env } from "cloudflare:workers"' instead.`);
			},
			get cf() {
				throw new Error(`Astro.locals.runtime.cf has been removed in Astro v6. Use 'Astro.request.cf' instead.`);
			},
			get caches() {
				throw new Error(`Astro.locals.runtime.caches has been removed in Astro v6. Use the global 'caches' object instead.`);
			},
			get ctx() {
				throw new Error(`Astro.locals.runtime.ctx has been removed in Astro v6. Use 'Astro.locals.cfContext' instead.`);
			}
		}
	});
	return locals;
}
function getClientAddress(request) {
	return getValidatedIpFromHeader(request.headers.get("cf-connecting-ip"));
}
//#endregion
//#region node_modules/@astrojs/cloudflare/dist/utils/cf.js
function injectSessionBinding(manifest, env) {
	if (env["SESSION"]) {
		const sessionConfigOptions = manifest.sessionConfig?.options ?? {};
		Object.assign(sessionConfigOptions, { binding: env[sessionKVBindingName] });
	}
}
var app = createApp();
async function handle(request, env, context) {
	injectSessionBinding(app.manifest, env);
	const staticAsset = matchStaticAsset(app.manifest, request.url, env);
	if (staticAsset) return staticAsset;
	let routeData = void 0;
	if (app.isDev()) {
		const result = await app.devMatch(app.getPathnameFromRequest(request));
		if (result) routeData = result.routeData;
	} else routeData = app.match(request);
	if (!routeData) {
		const asset = await fallbackToAssets(request.url, env);
		if (asset) return asset;
	}
	const locals = createLocals(context);
	const waitUntil = context.waitUntil.bind(context);
	let response = await app.render(request, {
		routeData,
		locals,
		waitUntil,
		prerenderedErrorPageFetch: createErrorPageFetch(env),
		clientAddress: getClientAddress(request)
	});
	const setCookieHeaders = app.setCookieHeaders ? [...app.setCookieHeaders(response)] : [];
	if (setCookieHeaders.length > 0 || false) {
		const applyHeaders = (res) => {
			for (const setCookieHeader of setCookieHeaders) res.headers.append("Set-Cookie", setCookieHeader);
		};
		try {
			applyHeaders(response);
		} catch {
			response = new Response(response.body, response);
			applyHeaders(response);
		}
	}
	return response;
}
//#endregion
//#region node_modules/@astrojs/cloudflare/dist/entrypoints/server.js
var server_default = { fetch: handle };
//#endregion
//#region src/lib/redirects.ts
function canonicalRedirectPath(pathname) {
	if (pathname === "/index.html") return "/";
	if (pathname === "/about-impact-pocket" || pathname === "/about-impact-pocket.html") return "/about-impact-pockets/";
	if (pathname.endsWith(".html")) return `${pathname.slice(0, -5).replace(/\/+$/, "")}/`;
	const finalSegment = pathname.split("/").at(-1) || "";
	if (pathname !== "/" && !pathname.endsWith("/") && !finalSegment.includes(".")) return `${pathname}/`;
	return null;
}
function isAlternateProductionHostname(hostname) {
	return hostname.toLowerCase() === "impactpockets.com";
}
//#endregion
//#region \0virtual:cloudflare/worker-entry
var worker_entry_default = { async fetch(request, env, context) {
	if (request.method === "GET" || request.method === "HEAD") {
		const url = new URL(request.url);
		const alternateHostname = isAlternateProductionHostname(url.hostname);
		const redirectPath = canonicalRedirectPath(url.pathname);
		if (alternateHostname) url.hostname = "www.impactpockets.com";
		if (redirectPath) url.pathname = redirectPath;
		if (alternateHostname || redirectPath) return Response.redirect(url, 308);
	}
	return server_default.fetch(request, env, context);
} };
//#endregion
export { worker_entry_default as default };
