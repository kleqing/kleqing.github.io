<script>
	import { onMount, onDestroy } from 'svelte';
	import IconWave from '$lib/icons/IconWave.svelte';

	const colors = [
		'var(--light-blue)',
		'var(--light-green)',
		'var(--red)'
	];

	let color = colors[0];
	let timer;
	let hovering = false;

	function randomColor() {
		let next;
		do {
			next = colors[Math.floor(Math.random() * colors.length)];
		} while (next === color);
		color = next;
	}

	onMount(() => {
		timer = setInterval(() => {
			if (!hovering) randomColor();
		}, 1500);
	});

	onDestroy(() => {
		clearInterval(timer);
	});
</script>


<main>
	<div class="container">
		<div class="row">
			<h1>kleqing</h1>
			<div
					class="logo"
					role="img"
					aria-label="waving hand icon"
					style="color: {color}"
					on:mouseenter={() => (hovering = true)}
					on:mouseleave={() => (hovering = false)}
			>
				<IconWave />
			</div>
		</div>
		<p>hi there! i'm nhan, a se student interested in web dev, gaming, and more.</p>
		<nav>
			<a class="nav" href="/about">
				<span class="arrow">-></span><span class="slash">/</span>about
			</a>
			<a class="nav" href="/projects">
				<span class="arrow">-></span><span class="slash">/</span>projects
			</a>
			<a class="nav" href="/games">
				<span class="arrow">-></span><span class="slash">/</span>games
			</a>
			<a class="nav" href="/musics">
				<span class="arrow">-></span><span class="slash">/</span>musics
			</a>
			<a class="nav" href="/nijigen">
				<span class="arrow">-></span><span class="slash">/</span>nijigen
			</a>
			<a class="nav" href="/contact">
				<span class="arrow">-></span><span class="slash">/</span>contact
			</a>
		</nav>
	</div>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		max-height: calc(100vh - 12rem);
		margin: 0 1.5rem;
	}

	.row {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	h1 {
		font-size: 3rem;
		margin: 0;
	}

	/* icon container: rely on existing .logo styles if present; add small layout and hover cues */
	.logo {
		cursor: default;
		transition: transform 200ms ease, color 200ms ease;
		align-items: center;
	}

	.logo:hover {
		transform: translateY(-4px);
	}

	nav {
		display: flex;
		gap: 2rem;

		a {
			font-size: 1.5rem;
			font-family: 'Space Mono', monospace;
		}
	}

	p {
		font-size: 1.25rem;
		margin: 1rem 0;
	}

	@media (max-width: 600px) {
		nav {
			flex-direction: column;
			gap: 1rem;
		}
		.row {
			flex-direction: column-reverse;
			gap: 0.5rem;
			align-items: flex-start;
		}
	}
</style>
