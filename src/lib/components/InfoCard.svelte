<script lang="ts">
	export let href: string;
	export let title: string;
	export let img: string;
</script>

<a {href} class="article-link">
	<div class="article-card">
		<img src={img} alt={title} class="background-image" />
		<h1 class="article-title">{title}</h1>
	</div>
</a>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Just+Me+Again+Down+Here&display=swap');

	.article-link {
		display: inline-block;
		text-decoration: none;
		width: 393px;
		height: 216px;
		background-color: white;
		border-radius: 12px;
		margin: 15px 5px;
		overflow: hidden;
		box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.6); /* Adjusted for sharper shadow */
		transition: box-shadow 0.3s ease;
		position: relative;
		border: 2px solid black; /* Add a black border */
		transition:
			background-color 0.3s,
			transform 0.2s,
			box-shadow 0.2s;
	}

	.article-link:hover {
		transform: scale(1.1); /* Slightly enlarge the button */
		box-shadow: 6px 8px 4px 2px rgba(0, 0, 0, 0.6); /* Adjusted for sharper shadow */
	}

	.article-card {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.background-image {
		opacity: 0.8;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: blur(0.1px);
	}

	.article-title {
		font-family: 'Amatic SC', sans-serif;
		font-weight: 700;
		font-style: bold;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		-webkit-text-stroke: 1px black;
		margin: 0;
		font-size: 48pt;
		color: #f8e830;
		text-align: center;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
		z-index: 1;
		display: inline-block;
		padding: 10px;
	}
</style>
