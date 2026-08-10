export function canonicalRedirectPath(pathname: string) {
  if (pathname === "/index.html") return "/";

  if (pathname === "/about-impact-pocket" || pathname === "/about-impact-pocket.html") {
    return "/about-impact-pockets/";
  }

  if (pathname.endsWith(".html")) {
    return `${pathname.slice(0, -5).replace(/\/+$/, "")}/`;
  }

  const finalSegment = pathname.split("/").at(-1) || "";
  if (pathname !== "/" && !pathname.endsWith("/") && !finalSegment.includes(".")) {
    return `${pathname}/`;
  }

  return null;
}

export function isAlternateProductionHostname(hostname: string) {
  return hostname.toLowerCase() === "impactpockets.com";
}
