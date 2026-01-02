<script>
	import { createEventDispatcher, onMount } from 'svelte';
	import Image from '$lib/components/Image.svelte';
	let { artist, open } = $props();
	const dispatch = createEventDispatcher();

	function close() {
		dispatch('close');
	}

	onMount(() => {
		function onKey(e) {
			if (e.key === 'Escape') close();
		}
		document.addEventListener('keydown', onKey);
		return () => document.removeEventListener('keydown', onKey);
	});

	onMount(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = '';
		};
	});
</script>

{#if open && artist}
	<div class="backdrop" onclick={(e) => { if (e.target === e.currentTarget) close(); }} aria-hidden={!open}>
		<div class="modal" role="dialog" aria-modal="true" aria-labelledby="artist-title" tabindex="0">
			<button class="close" onclick={close} aria-label="Close">×</button>
			<div class="content">
				<div class="left">
					<div class="image-wrap">
						<Image image={artist.image} alt={artist.title} sizes="(max-width:600px) 80vw, 300px" />
					</div>
				</div>
				<div class="right">
					<h2 id="artist-title">{artist.title} <span class="year">({artist.year})</span></h2>
					<div class="desc">{@html artist.description}</div>
					<h3>Famous tracks</h3>
					{#if artist.tracks && artist.tracks.length}
						<ol>
							{#each artist.tracks as track}
								<li><a href={track.youtube} target="_blank" rel="noopener noreferrer">{track.title}</a></li>
							{/each}
						</ol>
					{:else}
						<p>No tracks listed.</p>
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.backdrop {
		position: fixed;
		inset: 0;
		background: rgba(0,0,0,0.6);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 50;
		padding: 1rem;
	}

	.modal {
		background: var(--bg);
		color: var(--text);
		width: 100%;
		max-width: 900px;
		min-height: 30vh;
		max-height: 60vh;
		border-radius: 10px;
		padding: 1rem;
		position: relative;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	.close {
		position: absolute;
		top: 8px;
		right: 8px;
		background: transparent;
		border: none;
		font-size: 1.5rem;
		cursor: pointer;
	}

	.content { display: flex; gap: 1rem; overflow-y: auto; }

	.left {
		flex: 0 0 320px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.image-wrap {
		width: 100%;
		max-height: 420px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.right { flex: 1; overflow: visible; }
	.image-wrap { width: 100%; border-radius: 6px; overflow: hidden; }
	.year { font-weight: normal; color: var(--muted); font-size: 0.9rem; }

	@media (max-width: 600px) {
		.modal {
			min-height: unset;
			max-height: 92vh;
		}

		.content {
			flex-direction: column;
		}

		.left {
			flex: none;
		}
	}

	h3 {
		font-family: "Space Grotesk Variable", sans-serif;
		margin-top: 1.5rem;
	}
</style>
