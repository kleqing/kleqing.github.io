<script>
	import GithubIcon from '~icons/ph/github-logo';
	import DiscordIcon from '~icons/ph/discord-logo';
	import XIcon from '~icons/ph/x-logo';

	let content = {
		tech: {
			languages: ['c#', 'js', 'ts', 'html', 'css', 'python', 'java'],
			frameworks: ['asp .net core', 'react'],
			databases: ['mssql', 'postgresql'],
			versionControl: ['git'],
			tools: ['webstorm', 'rider', 'datagrip', 'sublime text', 'postman'],
		}
	};

	const label = {
		languages: 'languages',
		frameworks: 'frameworks',
		databases: 'databases',
		versionControl: 'version control',
		tools: 'tools',
	};
</script>

<main>
	<h1>about</h1>
	<p>
		hi there! i'm nhan, a se student at fpt university da nang, vn. i also know as kleqing ingame. i'm interested in web development, game development, and more. i love to explore new technologies and improve my skills.
	</p>
	<h2>links</h2>
	<div class="links">
		<a href="https://github.com/kleqing" class="external icon">
			<GithubIcon /><span class="text">github</span><span class="arrow">/></span>
		</a>
		<a href="https://x.com/kleqingosu" class="external icon">
			<XIcon /><span class="text">X</span><span class="arrow">/></span>
		</a>
		<a href="https://discord.com/users/847029283180511283" class="external icon">
			<DiscordIcon /><span class="text">discord</span><span class="arrow">/></span>
		</a>
	</div>

	<h2>tech</h2>
	{#each Object.entries(content.tech) as [key, items]}
		<div class="info">
			{label[key]} <span class="sub">→</span>
			{#each items as item, i}
				{item}{i < items.length - 1 ? ' / ' : ''}
			{/each}
		</div>
	{/each}

	<h2>colophon</h2>
	<a href="https://github.com/kleqing/kleqing.github.io" class="external"
		>github repo<span class="arrow">/></span></a
	>
<!--	<a href="https://us.umami.is/share/HwZnyuHQ5Rqz3NWf/refact0r.dev" class="external"-->
<!--		>analytics<span class="arrow">/></span></a-->
<!--	>-->
	<div class="info">
		stack <span class="sub">-></span> sveltekit <span class="sub">/</span> mdsvex
		<span class="sub">/</span> vite <span class="sub">/</span> vercel
	</div>
	<div class="info">
		fonts <span class="sub">-></span> space mono <span class="sub">/</span>
		<span style="font-family: 'Space Grotesk Variable'">space grotesk</span>
	</div>
	<div class="info">
		<div class="colors">
			<div class="color" style="background: var(--bg); border: 2px solid var(--bg-2);">bg</div>
			<div class="color" style="background: var(--bg-2);">bg-2</div>
			<div class="color" style="background: var(--bg-3);">bg-3</div>
			<div class="color" style="background: var(--txt-3); color: var(--bg);">txt-3</div>
			<div class="color" style="background: var(--txt-2); color: var(--bg);">txt-2</div>
			<div class="color" style="background: var(--txt); color: var(--bg);">txt</div>
			<div class="color" style="background: var(--txt-0); color: var(--bg);">txt-0</div>
			<div class="color" style="background: var(--red); color: var(--bg);">red</div>
			<div class="color" style="background: var(--light-green); color: var(--bg);">green</div>
			<div class="color" style="background: var(--light-blue); color: var(--bg);">blue</div>
		</div>
	</div>
	<h2>credits</h2>
	<a class="webring home" href="https://refact0r.dev/">origin page</a>
<!--	<div class="info">-->
<!--		<a class="card" href="/" rel="nofollow">-->
<!--			<img src="/88x31.png" alt="refact0r" />-->
<!--		</a>-->
<!--		<a class="card" href="https://enochlau.com" rel="nofollow">-->
<!--			<img src="https://enochlau.com/88x31.webp" alt="tnixc" />-->
<!--		</a>-->
<!--		<a class="card" href="https://www.sadan.zip" rel="nofollow">-->
<!--			<img src="https://www.sadan.zip/assets/88x31.png" alt="sadan" />-->
<!--		</a>-->
<!--		<a class="card" href="https://vendicated.dev" rel="nofollow">-->
<!--			<img src="https://vendicated.dev/_astro/me.D0UvsSv8.gif" alt="ven" />-->
<!--		</a>-->
<!--	</div>-->
<!--	<div class="info">-->
<!--		<a class="webring previous" href="https://ctp-webr.ing/refact0r/previous">-->
<!--			<span> &lt;- </span>&nbsp;-->
<!--		</a><a class="webring home" href="https://refact0r.dev/">origin page</a><a-->
<!--			class="webring next"-->
<!--			href="https://ctp-webr.ing/refact0r/next"-->
<!--		>-->
<!--			&nbsp;<span> -> </span>-->
<!--		</a>-->
<!--	</div>-->
	<h2>notes</h2>
	<span class="info">all material of this page all belongs to refact0r. this is just a fork/clone and re-edited to make it become my portfolio. shoutout to yifan (refact0r) for the design!</span>
</main>

<style>
	main {
		width: 100%;
		max-width: 53rem;
		margin: 0 auto 10rem auto;
		padding: 0 1.5rem;
	}

	a {
		font-family: 'Space Mono', monospace;
		font-size: 1.25rem;
		margin: 0.5rem 0;
		display: block;
	}

	.info {
		font-size: 1.125rem;
		margin: 0.5rem 0;
		font-family: 'Space Mono', monospace;
	}

	/*.webring {*/
	/*	display: inline-block;*/
	/*	margin: 0;*/
	/*	span {*/
	/*		display: inline-block;*/
	/*		transition: 0.2s;*/
	/*	}*/
	/*	&.home:hover {*/
	/*		text-decoration: underline 2px;*/
	/*	}*/
	/*	&.next:hover span {*/
	/*		transform: translateX(0.3em);*/
	/*	}*/
	/*	&.previous:hover span {*/
	/*		transform: translateX(-0.3em);*/
	/*	}*/
	/*}*/

	/*.card {*/
	/*	margin: 0;*/
	/*	display: inline;*/
	/*	width: 88px;*/
	/*	height: 31px;*/

	/*	img {*/
	/*		image-rendering: pixelated;*/
	/*		width: 88px;*/
	/*		height: 31px;*/
	/*	}*/
	/*}*/

	.colors {
		display: inline-flex;
		margin-top: 0.5rem;
		flex-wrap: wrap;
	}

	.color {
		display: inline-block;
		padding: 0 0.5rem;
		width: 5rem;
		text-align: center;
		font-size: 1.125rem;
	}
</style>
