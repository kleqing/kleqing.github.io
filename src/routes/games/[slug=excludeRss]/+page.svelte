<script>
	import { formatDate } from '$lib/js/utils.js';
	import { iconMap } from '$lib/js/icons.js';

	let { data } = $props();

	const { default: Content, metadata } = data.post;
	const Icon = iconMap[metadata.icon] ?? iconMap.code;
</script>

<main>
	<div class="head-1">
		<a href="/games" class="back"><span class="arrow">&lt;-</span>games</a>
	</div>
	<div class="head-2">
		<div class="row">
			<h1>
				{#if Icon}
					<Icon class="icon" />
				{/if}
				{metadata.name}
			</h1>
			<div class="links">
				{#if metadata.link}
					<a class="external" href={metadata.link} target="_blank">
						get game<span class="arrow">/></span>
					</a>
				{/if}
			</div>
		</div>
	</div>

	<p class="date">game released date: {formatDate(metadata?.date)}</p>
	<p class="userGameId">
		user id: {metadata.gameId}
		{#if metadata?.gameUserName}
			({metadata.gameUserName})
		{/if}
	</p>

	<!-- render the thumbnail image if the loader provided it -->
	{#if data?.meta?.image}
		<div class="thumb-wrap">
			{#if typeof data.meta.image === 'string'}
				<img class="thumb" src={data.meta.image} alt={metadata?.name} loading="lazy" />
			{:else if data.meta.image?.img?.src}
				<picture>
					{#if data.meta.image?.sources?.avif}
						<source srcset={data.meta.image.sources.avif} type="image/avif" sizes="(min-width: 1200px) 53rem, 100vw" />
					{/if}
					{#if data.meta.image?.sources?.webp}
						<source srcset={data.meta.image.sources.webp} type="image/webp" sizes="(min-width: 1200px) 53rem, 100vw" />
					{/if}
					<img class="thumb" src={data.meta.image.img.src} alt={metadata?.name} loading="lazy" width={data.meta.image.img.w} height={data.meta.image.img.h} />
				</picture>
			{:else}
				<!-- fallback: try to render whatever was provided (string/unknown) -->
				<img class="thumb" src={data.meta.image} alt={metadata?.name} loading="lazy" />
			{/if}
		</div>
	{/if}
	<p class="description">{metadata?.description}</p>


	<div class="content">
		<Content />
	</div>
</main>

<style>
	main {
		width: 100%;
		max-width: 53rem;
		margin: 0 auto 10rem auto;
		padding: 1.5rem;
	}

	.content {
		overflow-x: hidden;
		max-width: 100%;
	}

	.date {
		margin: 0.5rem 0;
		font-size: 1.375rem;
		font-family: 'Space Mono', monospace;
	}

	.userGameId {
		margin: 0 0 1.3rem 0;
		font-size: 1rem;
		font-family: 'Space Mono', monospace;
		color: var(--txt-3);
	}

	.description {
		font-size: 1.125rem;
		margin: 0.5rem 0 1.5rem 0;
		font-style: italic;
		color: var(--txt-2);
	}

	/* thumbnail styles */
	.thumb-wrap {
		margin: 0.5rem 0 1rem 0;
		width: 100%;
		display: block;
		border-radius: 8px;
		overflow: hidden;
		background: var(--bg-3);
	}

	.thumb {
		width: 100%;
		height: auto;
		display: block;
		object-fit: cover;
	}

	h1 {
		font-size: 2.5rem;
		margin: 1rem 0;
	}

	h1 :global(.icon) {
		margin-right: 0.75ch;
		font-size: 2rem;
	}

	.head-1 {
		margin: 0 auto;
		padding: 0 1.5rem;
		width: 100%;
		max-width: 53rem;
	}

	.head-2 {
		margin: 1rem auto 2rem auto;
		padding: 0 0.25rem;
		width: 100%;
		max-width: 53rem;

		a {
			font-family: 'Space Mono', monospace;
			font-size: 1.5rem;
		}

		.row,
		.links {
			display: flex;
			align-items: center;
			gap: 1rem 2rem;
		}
	}

	.head-2 .row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	.head-2 h1 {
		display: flex;
		align-items: center;
		flex: 1;
		margin: 0;
	}

	.head-2 .links {
		flex-shrink: 0;
	}

	.back {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;

		font-size: 1.25rem;
		font-family: 'Space Mono', monospace;

		text-decoration: none;
		color: var(--txt-2);

		padding: 0.4rem 0;
		border-radius: 6px;
	}

	.back .arrow {
		font-size: 1.4em;
		line-height: 1;
	}
</style>
