<script>
</script>

<main>
	<div class="container">
		<div class="row">
			<h1>kleqing</h1>
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
		gap: 1.5rem;
	}

	h1 {
		font-size: 3rem;
		margin: 0;
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
