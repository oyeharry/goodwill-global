/** Prefix a public-folder path with the configured base (works with or without a custom domain). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

/** "Sunil Kumar Thakur" -> "ST" */
export function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
}
