<script>
	import { formatDate } from '$lib/js/utils.js';

	let { data } = $props();

	// helper to construct image URL from post metadata
	function imgSrc(post) {
		const file = post.thumb || post.image || post.cover;
		if (file) {
			return `/src/content/games/${post.slug}/${file}`;
		}
		return '/images/placeholder-game.png';
	}

	//* Add preview hover effect on touch devices */
	let activeSlug = $state(null);

	function onTitleClick(e, slug) {
		if (window.matchMedia('(hover: none)').matches) {
			if (activeSlug !== slug) {
				e.preventDefault();
				activeSlug = slug;
			}
		}
	}
</script>

<main>
	<div class="header">
		<h1>games<span class="count" aria-label={`${data.posts.length} posts`}>[{data.posts.length}]</span>
		</h1>
		<p class="sub">some games that i played most since 2021</p>

	</div>

	<div class="gallery">
		{#each data.posts as post}
			<a
					class="tile {activeSlug === post.slug ? 'active' : ''}"
					onclick={(e) => onTitleClick(e, post.slug)}
					href={'/games/' + post.slug}
					aria-label={post.name}
			>
				<div class="media">
					<img src={imgSrc(post)} alt={post.name} loading="lazy" />
				</div>

				<div class="overlay" aria-hidden="true">
					<div class="overlay-inner">
						<div class="name">{post.name}</div>
						{#if post.description}
							<div class="desc">{post.description}</div>
						{/if}
						<div class="meta">Played from {formatDate(post.playedDate)}</div>
					</div>
				</div>
			</a>
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
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}

	@media (max-width: 900px) {
		.gallery {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (max-width: 600px) {
		.gallery {
			grid-template-columns: 1fr;
		}
	}

	.tile {
		position: relative;
		overflow: hidden;
		display: block;
		border-radius: 8px;
		text-decoration: none;
		color: inherit;
		height: 16rem;
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
	
	@media (max-width: 600px) {
		.tile {
			height: 14rem;
		}
	}

	@media (hover: none) {
		.tile:hover .media img {
			transform: none;
		}
	}

	.tile:hover .media img,
	.tile:focus .media img {
		transform: scale(1.02);
	}

	.overlay {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		transform: translateY(100%);
		transition: transform 320ms cubic-bezier(.2,.9,.2,1);
		display: flex;
		align-items: flex-start;
		justify-content: center;
		max-height: 0;
		overflow: hidden;
		background: linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(30,30,30,0.95) 100%);
		pointer-events: none;
	}

	.tile:hover .overlay,
	.tile:focus .overlay {
		transform: translateY(0);
		max-height: 80%;
		overflow: auto;
		pointer-events: auto;
	}

	.tile.active .overlay {
		transform: translateY(0);
		max-height: 80%;
		overflow: auto;
		pointer-events: auto;
	}

	.overlay-inner {
		color: white;
		text-align: left;
		padding: 0.75rem 1rem;
		width: 100%;
		box-sizing: border-box;
	}

	.name {
		font-weight: 700;
		font-size: 1.05rem;
		white-space: normal;
		overflow: visible;
		text-overflow: unset;
	}

	.desc {
		margin-top: 0.4rem;
		font-size: 0.95rem;
		color: rgba(255,255,255,0.95);
		line-height: 1.25;
	}

	.meta {
		margin-top: 0.5rem;
		font-family: 'Space Mono', monospace;
		font-size: 0.85rem;
		opacity: 0.9;
	}

	.count {
		color: var(--bg-3);
	}

</style>
