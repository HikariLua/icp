<script>
	import InfoCard from '$lib/components/InfoCard.svelte';
	import { articles } from '$lib/data';
</script>

<section class="container">
	<div class="title">
		<h1>Informações</h1>
	</div>
	<div class="row justify-content-center">
		{#each articles as article}
			<div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
				<InfoCard
					href={`/informacoes/${article.title}`}
					title={article.title}
					img={article.cover}
				/>
			</div>
		{/each}
	</div>
	<div class="btn-container">
		<button class="btn link-button">Próxima Página ➨</button>
	</div>
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Just+Me+Again+Down+Here&display=swap');

	h1 {
		font-size: 64pt;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
	}

	.btn-container,
	.title {
		text-align: center;
	}

	.title {
		margin-top: 90px;
		font-family: 'Amatic SC', sans-serif;
		font-weight: 700;
		font-style: bold;
	}

	.link-button {
		font-family: 'Amatic SC', sans-serif;
		font-weight: 700;
		font-style: bold;
		display: inline-block;
		padding: 14px 24px;
		margin: 0px 2px;
		margin-bottom: 85px;
		font-size: 22pt;
		color: #010101;
		background-color: #ffff00;
		border: none;
		border-radius: 8px;
		text-decoration: none;
		text-align: center;
		box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.6); /* Adjusted for sharper shadow */
		transition:
			background-color 0.3s,
			border-radius 0.2s;
	}

	.link-button:hover {
		border-radius: 5px; /* Make the button square */
		background-color: #fff690; /* Darker shade for hover */
	}
</style>
