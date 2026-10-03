/**
 * Points search engines at the portfolio's copy of a page (www.abdspace.xyz/writings/...),
 * which mirrors every post and is the one both sites agree is canonical.
 */
export const useCanonical = (slug?: string) => {
	const base = useRuntimeConfig().public.canonicalBase as string;
	const url = slug ? `${base}/${slug}` : base;
	useSeoMeta({ ogUrl: url });
	useHead({ link: [{ rel: "canonical", href: url }] });
	return url;
};
