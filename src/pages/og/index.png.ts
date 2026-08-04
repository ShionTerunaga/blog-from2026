import type { APIRoute } from "astro";
import { SITE_TITLE } from "../../consts";
import { createOgImage } from "../../utils/og-image";

export const GET: APIRoute = async () => {
  const image = await createOgImage(SITE_TITLE);

  return new Response(Uint8Array.from(image), {
    headers: { "Content-Type": "image/png" },
  });
};
