<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="logo-banner">
	<h1 class="article-title container-fluid">{data.title}</h1>
	<img src={data.cover} alt="cover" class="img-fluid background-image" />
</section>
<hr />
<section class="container article-body">
	<h2>{data.title}</h2>
	<p class="article-p">{data.content}</p>
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Just+Me+Again+Down+Here&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

	.logo-banner {
		position: relative;
		width: 100%;
		min-height: 400px; /* Fixed height */
		overflow: hidden; /* Hide overflow to contain absolutely positioned elements */
		background-color: white;
	}

	.logo-banner::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-size: cover; /* Ensure the background covers the area */
		background-attachment: fixed; /* Fixed background */
		opacity: 0.45; /* Opacity for the background image */
	}

	.logo {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 20%; /* Adjust as needed */
		height: auto;
		fill: white; /* Adjust fill color if needed */
		z-index: 1; /* Ensure the logo is above the background */
	}

	/* Optionally, you can add styles for responsiveness */
	@media (max-width: 768px) {
		.logo {
			width: 40%; /* Adjust as needed for smaller screens */
		}
	}

	.background-image {
		opacity: 0.8;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-bottom: 4px solid black;
		object-fit: cover;
		filter: blur(0.8px);
	}

	.article-body {
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
		font-style: normal;
		font-size: 14pt;
		margin-bottom: 100px;
	}

	.article-body h2 {
		text-align: center;
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
		font-size: 56pt;
		color: #f8e830;
		text-align: center;
		text-shadow: 6px 2px 4px rgba(0, 0, 0, 1);
		z-index: 1;
		display: inline-block;
		padding: 10px;
	}
</style>
