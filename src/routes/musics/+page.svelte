<script>
	import ArtistCard from '$lib/components/ArtistCard.svelte';
	import ArtistModal from '$lib/components/ArtistModal.svelte';
	let { data } = $props();

	let selected = $state(null);
	let open = $state(false);

	function openArtist(artist) {
		selected = artist;
		open = true;
	}

	function close() {
		open = false;
		selected = null;
	}
</script>

<main>
	<h1>musics<span class="count" aria-label="{data.artists.length} artists">[{data.artists.length}]</span></h1>
	<p class="sub">my favourite artists/bands</p>
	<br />
	<div class="grid">
		{#each data.artists as artist}
			<ArtistCard {artist} onClick={openArtist} />
		{/each}
	</div>

	<ArtistModal artist={selected} open={open} on:close={close} />
</main>

<style>
	main {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 4rem 4rem;
	}

	.count {
		color: var(--bg-3);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
		gap: 1rem;
		align-items: start;
		touch-action: pan-y;
	}

	@media (max-width: 850px) {
		main {
			padding-left: 1.5rem;
			padding-right: 1.5rem;
		}
		.grid {
			grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
		}
	}
</style>
