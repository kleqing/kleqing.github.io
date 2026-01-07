import { dev } from '$app/environment';

export function nameFromPath(path) {
	return path.split('/').slice(-1)[0].split('.')[0].replace(/^\++/, '');
}

export async function getPosts(modules) {
	const postPromises = Object.entries(modules).map(([path, resolver]) =>
		resolver().then((post) => ({
			slug: nameFromPath(path),
			...post.metadata
		}))
	);

	let posts = await Promise.all(postPromises);

	// In production we only want to *exclude* items that are explicitly unpublished.
	// Previously this filtered to only include posts with a truthy `published` flag,
	// which caused folders without `published` frontmatter to be dropped on deploy.
	if (!dev) {
		posts = posts.filter((post) => post.published !== false);
	}

	return posts;
}

export async function importThumbImage(imagePath) {
	const images = import.meta.glob(`/src/content/**/*.{jpg,png,jpeg,webp}`, {
		import: 'default',
		query: {
			enhanced: true,
			w: '1200',
			format: 'jpg;png'
		},
	});
	for (const [path, src] of Object.entries(images)) {
		if (path.includes(imagePath)) {
			return await src();
		}
	}
}
