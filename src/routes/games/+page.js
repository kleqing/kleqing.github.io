import { getPosts } from '$lib/js/posts.js';

export async function load() {
	const modules = import.meta.glob('/src/content/games/*/*.md');
	let posts = await getPosts(modules);

	posts.sort((a, b) => new Date(b.playedDate) - new Date(a.playedDate));

	return {
		posts,
		meta: {
			title: 'games',
			description: 'posts about various topics.'
		}
	};
}
