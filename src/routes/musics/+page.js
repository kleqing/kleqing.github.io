import { getPosts } from '$lib/js/posts.js';

export async function load() {
	const modules = import.meta.glob('/src/content/musics/artists/*/*.md');
	let posts = await getPosts(modules);
	// keep ordering (reverse to show newest first)
	posts = posts.reverse();

	return {
		artists: posts,
		meta: {
			title: 'musics',
			description: 'list of artists.'
		}
	};
}
