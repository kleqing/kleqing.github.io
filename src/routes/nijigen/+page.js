import { getPosts } from '$lib/js/posts.js';

export async function load() {
	const modules = import.meta.glob('/src/content/nijigen/*/*.md');
	let posts = await getPosts(modules);

	// //* Sort by name
	// posts = posts.sort((a, b) => {
	// 	if (a.metadata.title < b.metadata.title) return -1;
	// 	if (a.metadata.title > b.metadata.title) return 1;
	// 	return 0;
	// });

	return {
		posts,
		meta: {
			title: 'nijigen',
			description: 'a collection of nijigen (2D) related articles and posts.',
		}
	};
}
