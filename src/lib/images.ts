import type { ImageMetadata } from 'astro';

const all = import.meta.glob<{ default: ImageMetadata }>('/src/assets/images/*.{jpg,jpeg,png,webp}', { eager: true });

const byName: Record<string, ImageMetadata> = {};
for (const [path, mod] of Object.entries(all)) byName[path.split('/').pop()!] = mod.default;

/** Look up an image in src/assets/images by file name (e.g. "p11-01.jpg"). */
export function getImg(name?: string | null): ImageMetadata | undefined {
  if (!name) return undefined;
  const img = byName[name];
  if (!img) console.warn(`[images] "${name}" not found in src/assets/images`);
  return img;
}
