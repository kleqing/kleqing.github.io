import { getPosts } from '$lib/js/posts.js';

export async function load() {
	const modules = import.meta.glob('/src/content/musics/artists/*/*.md');
	let posts = await getPosts(modules);

	// order by title
	posts = posts.sort((a, b) => {
		const t1 = a.metadata?.title ?? '';
		const t2 = b.metadata?.title ?? '';
		return t1.localeCompare(t2);
	});

	return {
		artists: posts,
		meta: {
			title: 'musics',
			description: 'list of artists.'
		}
	};
}
