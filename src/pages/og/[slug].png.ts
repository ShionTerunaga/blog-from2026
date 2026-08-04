import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { createOgImage } from "../../utils/og-image";

export const getStaticPaths = (async () => {
  const posts = await getCollection("blog");

  return posts.map((post) => ({
    params: { slug: post.id },
    props: { title: post.data.title },
  }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const image = await createOgImage(props.title);

  return new Response(Uint8Array.from(image), {
    headers: { "Content-Type": "image/png" },
  });
};
