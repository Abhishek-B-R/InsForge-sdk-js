/**
 * Resolves an API path against the SDK base URL without dropping a path prefix.
 *
 * `new URL('/api/x', 'https://hub.example.com/projects/abc')` resolves to
 * `https://hub.example.com/api/x`, which loses the project prefix of a
 * path-routed base URL. Resolving a relative path against a base that ends in
 * `/` keeps it. Absolute URLs are returned unchanged.
 */
export function resolveUrl(baseUrl: string, path: string): URL {
  const base = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  return new URL(path.replace(/^\/+/, ''), base);
}
