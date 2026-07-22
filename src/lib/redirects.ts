export function canonicalRedirectPath(pathname: string) {
  if (pathname === "/index.html") return "/";

  if (pathname.endsWith(".html")) {
    return `${pathname.slice(0, -5).replace(/\/+$/, "")}/`;
  }

  const finalSegment = pathname.split("/").at(-1) || "";
  if (pathname !== "/" && !pathname.endsWith("/") && !finalSegment.includes(".")) {
    return `${pathname}/`;
  }

  return null;
}
