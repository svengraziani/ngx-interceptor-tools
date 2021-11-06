
export function sanitizeUrlOrFragment(urlOrFragment: string) {
  return String(urlOrFragment)
    .replace(/[:\/&?]/g, '')
    .trim();
}
