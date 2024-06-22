<script>
	import InfoCard from '$lib/components/InfoCard.svelte';
	import { main_articles } from '$lib/data';
</script>

<section class="logo-banner">
	<img src="/logo.svg" class="logo" alt="Instituto da Criança Preta" />
</section>

<section class="slogan">
	<h2>Proteja sua criança com informação e acolhimento.</h2>
</section>

<section class="search-bar">
	<div>
		<input type="text" placeholder=" Buscar" class="input-box" />
		<button class="btn search-btn">
			<img src="/mag-glass.svg" class="img-fluid" alt="Pesquisar" />
		</button>
	</div>
</section>

<section class="container">
	<div class="row justify-content-center">
		{#each main_articles as article}
			<div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
				<InfoCard href="#" title={article.title} img={article.cover} />
			</div>
		{/each}
	</div>
</section>

<style>
	.logo-banner {
		position: relative;
		width: 100%;
		height: 535px; /* Fixed height */
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
		background: url('$lib/assets/mom-and-children.webp') no-repeat center center;
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

	.slogan {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		background-color: #ffff00; /* Yellow background color */
		min-height: 53px;
		margin: 20px 0px;
		box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.6); /* Adjusted for sharper shadow */
	}

	.slogan h2 {
		text-align: center; /* Center align the text */
		font-size: 24px; /* Adjust font size as needed */
		color: #000; /* Black text color */
		margin: 0; /* Remove default margin */
	}

	.search-bar {
		display: flex;
		justify-content: center; /* Center horizontally */
		max-height: 40px; /* Maximum height */
	}

	.search-bar > div {
		display: flex;
		align-items: center; /* Center items vertically */
		padding-bottom: 5px; /* Padding inside the search bar */
	}

	.search-btn {
		background-color: #ffff00; /* Transparent background */
		height: 100%;
		padding: 0; /* No padding */
		margin: 0 5px;
		box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.6); /* Adjusted for sharper shadow */
	}

	.search-btn img {
		max-height: 20px; /* Maximum height of the image */
		display: block; /* Ensure the image is block-level */
		margin: 0 5px; /* Center the image horizontally */
	}

	.input-box {
		font-size: 16pt;
		border-radius: 5px;
		border: 1px solid black;
		box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.6); /* Adjusted for sharper shadow */
		min-width: 180px;
	}
</style>
