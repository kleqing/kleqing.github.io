<script>
	import Image from '$lib/components/Image.svelte';
	export let artist;
	export let onClick;

	function handleKey(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			onClick(artist);
		}
	}
</script>

<div class="card" role="button" tabindex="0" onclick={() => onClick(artist)} onkeydown={handleKey} aria-label={`Open ${artist.title}`}>
	<div class="avatar">
		<Image image={artist.image} alt={artist.title} loading="lazy" decoding="async" />
	</div>
	<div class="name">{artist.title}</div>
</div>

<style>
	.card {
		border: none;
		background: transparent;
		cursor: pointer;
		padding: 0.5rem;
		text-align: center;
		width: 120px;
	}

	.avatar {
		width: 96px;
		height: 96px;
		border-radius: 50%;
		overflow: hidden;
		margin: 0 auto;
		--aspect-ratio: 1/1;
	}

	.name {
		margin-top: 0.5rem;
		font-size: 0.95rem;
		color: var(--text);
		font-family: "Space Grotesk Variable", sans-serif;
		font-weight: 10;
	}

	.card:focus {
		outline: 2px solid var(--accent);
		outline-offset: 4px;
	}
</style>
