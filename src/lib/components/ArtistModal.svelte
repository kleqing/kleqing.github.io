<script>
	import Image from '$lib/components/Image.svelte';
	import { fade, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import {createEventDispatcher, onDestroy} from 'svelte';

	let { artist, open } = $props();

	const dispatch = createEventDispatcher();

	$effect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	});

	function close() {
		dispatch('close');
	}

	$effect(() => {
		function onKey(e) {
			if (e.key === 'Escape' && open) close();
		}

		document.addEventListener('keydown', onKey);
		return () => document.removeEventListener('keydown', onKey);
	});
</script>

{#if open && artist}
	<div class="backdrop" in:fade={{ duration: 110 }} out:fade={{ duration: 150 }} onclick={(e) => { if (e.target === e.currentTarget) close(); }} aria-hidden={!open}>
		<div class="modal" role="dialog" aria-modal="true" aria-labelledby="artist-title" tabindex="0" in:scale={{ start: 0.92, duration: 220, easing: quintOut }} out:scale={{ start: 1, end: 0.96, duration: 150 }}>
			<div class="content">
				<div class="left">
					<div class="image-wrap">
						<Image image={artist.image} alt={artist.title} sizes="(max-width:600px) 80vw, 300px" loading="lazy" decoding="async" />
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
		background: rgba(0,0,0,0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 50;
		padding: 1rem;
		cursor: pointer;
	}

	.modal {
		background: var(--bg);
		color: var(--text);
		width: 100%;
		max-width: 900px;
		min-height: 30vh;
		max-height: 200vh;
		border-radius: 10px;
		padding: 1rem;
		position: relative;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		cursor: default;
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

	/*Hide scroll bar */

	/* Chrome, Edge, Safari */
	.content::-webkit-scrollbar {
		display: none;
	}

	/* Firefox */
	.content {
		scrollbar-width: none;
	}

	/* iOS smooth scroll */
	.content {
		-webkit-overflow-scrolling: touch;
	}

	#artist-title {
		font-family: "Space Grotesk Variable", sans-serif;
		font-size: 1.2rem;
		font-weight: 100;
	}
</style>
