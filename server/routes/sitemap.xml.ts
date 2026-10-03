// Lists the canonical URLs: the portfolio's copies at www.abdspace.xyz/writings/[slug], which this site's pages point to.
export default defineEventHandler(async (event) => {
	const posts = await queryCollection(event, "writings").select("slug", "createdAt").order("createdAt", "DESC").all();
	const base = useRuntimeConfig().public.canonicalBase as string;
	const entries = [{ loc: base, lastmod: posts[0]?.createdAt }, ...posts.map((post) => ({ loc: `${base}/${post.slug}`, lastmod: post.createdAt }))];
	const urls = entries.map(({ loc, lastmod }) => `  <url><loc>${loc}</loc>${lastmod ? `<lastmod>${new Date(lastmod).toISOString()}</lastmod>` : ""}</url>`).join("\n");

	setHeader(event, "content-type", "application/xml; charset=utf-8");
	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
});
