<script>
	import { onMount } from 'svelte';

	let { data } = $props();

	// helper to construct image URL from post metadata
	function imgSrc(post) {
		const file = post.thumbnail || post.cover || post.image;
		if (file) {
			return `/src/content/nijigen/${post.slug}/${file}`;
		}
		return '/images/placeholder-game.png';
	}

	//* Add preview hover effect on touch devices */
	let activeSlug = $state(null);

	function onTileClick(slug) {
		if (window.matchMedia('(hover: none)').matches) {
			activeSlug = activeSlug === slug ? null : slug;
		}
	}

	onMount(() => {
		const mq = window.matchMedia('(hover: hover)');

		function handleChange(e) {
			if (e.matches) {
				activeSlug = null; // Reset activeSlug on hover-capable devices
			}
		}

		mq.addEventListener('change', handleChange);

		return () => mq.removeEventListener('change', handleChange);
	});
</script>

<main>
	<div class="header">
		<h1>nijigen<span class="count" aria-label="{data.posts.length} posts">[{data.posts.length}]</span>
		</h1>
		<p class="sub">a small list of my manga/anime/LN</p>

	</div>

	<div class="gallery">
		{#each data.posts as post}
			<div
					class="tile {activeSlug === post.slug ? 'active' : ''}"
					role="button"
					tabindex="0"
					aria-label={post.title}
					onclick={() => onTileClick(post.slug)}
					onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && onTileClick(post.slug)}
			>
				<div class="media">
					<img src={imgSrc(post)} alt={post.title} loading="lazy" decoding="async"/>
				</div>

				<div class="overlay" aria-hidden="true">
					<div class="overlay-inner">
						<div class="name">{post.title} ({post.releaseYear})</div>
						{#if post.description}
							<div class="desc">{post.description}</div>
						{/if}
						<div class="meta">- {post.authors} -</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</main>

<style>
	main {
		width: 100%;
		max-width: min(90rem, 95%);
		margin: 0 auto 10rem auto;
		padding: 0 1.25rem;
	}

	.header {
		margin-bottom: 0;
	}

	.gallery {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
	}

	@media (max-width: 1100px) {
		.gallery {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 800px) {
		.gallery {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 600px) {
		.gallery {
			grid-template-columns: 1fr;
		}

		.tile {
			aspect-ratio: auto;
			height: auto;
			min-height: 18rem;
		}

		.overlay {
			transform: translateY(0);
			opacity: 1;
			max-height: 0;
		}

		.tile.active .overlay {
			max-height: 100%;
		}
	}

	@media (max-width: 300px) {
		.gallery {
			grid-template-columns: 1fr;
		}
	}

	.tile {
		position: relative;
		overflow: hidden;
		display: block;
		border-radius: 8px;
		aspect-ratio: 2 / 3;
		background: var(--bg-2);
	}

	.media {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--bg-3);
	}

	.media img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: transform 0.45s cubic-bezier(.2,.9,.2,1);
	}

	/* Hover and focus effect */

	@media (hover: none) {
		.tile:hover .media img {
			transform: none;
		}

		.overlay {
			transform: translateY(0);
			opacity: 1;
			max-height: 0;
			transition: max-height 300ms ease;
		}

		.tile.active .overlay {
			max-height: 100%;
			pointer-events: auto;
		}
	}

	@media (hover: hover) {
		.tile:hover .media img,
		.tile:focus-visible .media img {
			transform: scale(1.02);
		}

		.tile:hover .overlay,
		.tile:focus-visible .overlay {
			transform: translateY(0);
			opacity: 1;
			max-height: 80%;
			pointer-events: auto;
		}

		/* Disable active in desktop */
		.tile.active .overlay {
			transform: translateY(100%);
			opacity: 0;
			max-height: 0;
			pointer-events: none;
		}

		.tile:hover .media img {
			transform: scale(1.02);
		}

		/* Disable click behavior on desktop */
		.tile {
			outline: none;
		}

		.tile:focus,
		.tile:focus-visible {
			outline: none;
		}
	}

	.overlay {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		transform: translateY(100%);
		opacity: 0;
		max-height: 0;
		overflow: hidden;
		background: linear-gradient(180deg, rgba(0,0,0,0.45), rgba(30,30,30,0.95));
		pointer-events: none;
		transition:
				transform 320ms cubic-bezier(.2,.9,.2,1),
				opacity 200ms ease;
	}

	.tile.active .overlay {
		transform: translateY(0);
		opacity: 1;
		max-height: 80%;
		pointer-events: auto;
	}

	.overlay-inner {
		color: white;
		text-align: center;
		padding: 0.75rem 1rem;
		width: 100%;
		box-sizing: border-box;
	}

	.name {
		font-weight: 700;
		font-size: 0.9rem;
		white-space: normal;
		overflow: visible;
		text-overflow: unset;
	}

	.desc {
		margin-top: 0.4rem;
		font-size: 0.75rem;
		color: rgba(255,255,255,0.95);
		line-height: 1.25;
	}

	.meta {
		margin-top: 0.5rem;
		font-size: 0.75rem;
		font-weight: 400;
		opacity: 0.9;
	}

	.count {
		color: var(--bg-3);
	}

</style>
