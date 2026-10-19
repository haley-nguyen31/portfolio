const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Wrap numbers (e.g. "200 million VND", "85,463+", "120%+", "1x%") in a mono span without changing wording. */
export function highlightNumbers(text: string): string {
  return esc(text).replace(
    /(?<![\w])(~?\d[\d,.]*(?:\s?(?:million|M|K|B))?\+?%?\+?|\d+x%)(?![\w])/g,
    '<span class="font-mono text-[0.92em] font-medium text-ink">$1</span>',
  );
}

export const slugify = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
