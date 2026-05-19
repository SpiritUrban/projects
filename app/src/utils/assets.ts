const baseUrl = import.meta.env.BASE_URL

export function assetPath(path: string): string {
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path

  return `${baseUrl}${normalizedPath}`
}
