type OgpData = {
  title?: string;
  description?: string;
  image?: string;
};

const ogpCache = new Map<string, Promise<OgpData>>();

function parseAttributes(tag: string): Record<string, string> {
  const attrs: Record<string, string> = {};
  const attrRegex = /([^\s=/>]+)\s*=\s*("([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/g;

  for (const match of tag.matchAll(attrRegex)) {
    const key = match[1].toLowerCase();
    const value = (match[3] ?? match[4] ?? match[5] ?? "").trim();
    attrs[key] = value;
  }

  return attrs;
}

function decodeEntities(value: string): string {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function readMeta(html: string, key: string): string | undefined {
  const metaTagRegex = /<meta\s+[^>]*>/gi;
  for (const match of html.matchAll(metaTagRegex)) {
    const attrs = parseAttributes(match[0]);
    const property = attrs.property?.toLowerCase();
    const name = attrs.name?.toLowerCase();

    if ((property === key || name === key) && attrs.content) {
      return decodeEntities(attrs.content.trim());
    }
  }
  return undefined;
}

function readTitleTag(html: string): string | undefined {
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (!titleMatch?.[1]) return undefined;

  const raw = titleMatch[1].replace(/<[^>]*>/g, "").trim();
  return raw ? decodeEntities(raw) : undefined;
}

async function fetchOgp(url: string): Promise<OgpData> {
  try {
    const response = await fetch(url, {
      headers: {
        "user-agent": "Mozilla/5.0 (compatible; blog-card-bot/1.0)",
      },
    });
    if (!response.ok) return {};

    const contentType = response.headers.get("content-type")?.toLowerCase();
    if (contentType && !contentType.includes("text/html")) return {};

    const html = await response.text();
    const title = readMeta(html, "og:title") ?? readTitleTag(html);
    const description =
      readMeta(html, "og:description") ?? readMeta(html, "description");
    const image = readMeta(html, "og:image");

    let resolvedImage = image;
    if (image) {
      try {
        resolvedImage = new URL(image, url).toString();
      } catch {
        resolvedImage = image;
      }
    }

    return { title, description, image: resolvedImage };
  } catch {
    return {};
  }
}

export function getOgp(url: string): Promise<OgpData> {
  if (!ogpCache.has(url)) {
    ogpCache.set(url, fetchOgp(url));
  }
  return ogpCache.get(url)!;
}
