<script>
	import PostCard from '$lib/components/PostCard.svelte';
	import { posts } from '$lib/data';
</script>

<h1 class="text-center mb-5 title-divisor">BEM-VINDO AO ACOLHIMENTO DO PORTAL DA CRIANÇA PRETA!</h1>
<section class="container">
	<div class="row">
		<div class="col-md-6">
			<form>
				<h3 class="text-center">Acesse a sua conta ou cadastre-se!</h3>
				<div class="form-group">
					<label for="email">Email</label>

					<input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
				</div>

				<div class="form-group">
					<label for="senha">Senha</label>

					<input type="password" class="form-control" id="senha" />
					<a href="#" class="text-dark">Esqueci minha senha</a>
				</div>

				<div class="log-button">
					<button class="btn btn-dark mb-3 log">Entrar</button>
				</div>

				<div class="register-div">
					<h4 class="mt-4">Ou</h4>
					<a href="/acolhimento/cadastro" class="btn btn-outline-dark">Cadastre-se aqui!</a>
				</div>
			</form>
			<h3 class="mt-5 text-center">DISCUSSÕES RECENTES</h3>
			<PostCard post={posts[0]} />
			<!-- <div class="card"> -->
			<!-- 	<div class="card-body"> -->
			<!-- 		<h5 class="card-title">SUBTÓPICO</h5> -->
			<!---->
			<!-- 		<p class="card-text"> -->
			<!-- 			Body text for whatever you'd like to suggest. Add main takeaway points, quotes, -->
			<!-- 			anecdotes, or even a very very short story. -->
			<!-- 		</p> -->
			<!-- 	</div> -->
			<!-- </div> -->
		</div>

		<div class="col-md-6">
			<h2 class="text-center mb-4 main-topic">PRINCIPAIS TÓPICOS</h2>

			<div class="form-group search-bar">
				<input type="text" class="form-control" id="busca" placeholder="Buscar" />
				<button class="btn search-btn">
					<img src="/mag-glass.svg" class="img-fluid" alt="Pesquisar" />
				</button>
			</div>

			<h3 class="mt-5">DÚVIDAS FREQUENTES</h3>

			<a href="#" class="btn btn-dark mt-3">Acessar</a>

			<h3 class="mt-5">RODAS DE CONVERSA</h3>

			<p class="about-text">
				Mães de crianças pretas vivenciam situações semelhantes, mas quase sempre são
				descredbilizadas por conta da negação em torno da existência do racismo estrutural. Daí a
				importância de encontrarem um espaço comum de identificação onde sintam-se à vontade e
				seguras para compartilhar suas necessidades, medos e dificuldades.
			</p>

			<a href="/acolhimento/rodas-de-conversa" class="btn btn-dark mt-3">Acessar</a>
		</div>
	</div>

	<div class="row mt-4">
		<div class="col-md-12"></div>
	</div>
</section>

<style>
	a,
	button {
		font-size: 20px;
	}
	.about-text {
		background-color: #ffff00;
		width: 100%;
		padding: 20px;
		font-size: 24px;
		box-sizing: border-box;
		border-radius: 25px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		border: 2pt solid #000;
	}

	.search-bar {
		display: flex;
		justify-content: center; /* Center horizontally */
		max-height: 40px; /* Maximum height */
	}

	.search-btn {
		background-color: #ffff00; /* Transparent background */
		height: 100%;
		min-height: 35px;
		padding: 0; /* No padding */
		margin: 0 5px;
		box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.6); /* Adjusted for sharper shadow */
	}

	.search-btn img {
		max-height: 20px; /* Maximum height of the image */
		display: block; /* Ensure the image is block-level */
		margin: 0 5px; /* Center the image horizontally */
	}

	.register-div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.log {
		margin: auto;
	}

	.log-button {
		display: flex;
		width: 100%;
		align-items: center;
	}

	.main-topic {
		font-family: 'Amatic SC', sans-serif;
		font-weight: 700;
		font-style: bold;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		background-color: #ffff00; /* Yellow background color */
		min-height: 53px;
		margin-top: 40px;
		font-size: 36px;
	}

	.title-divisor {
		font-family: 'Amatic SC', sans-serif;
		font-weight: 700;
		font-style: bold;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		background-color: #ffff00; /* Yellow background color */
		min-height: 53px;
		margin-top: 40px;
		box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.6); /* Adjusted for sharper shadow */
	}

	.text-dark {
		color: #000000;
	}

	.card {
		border: none;
		border-radius: 10px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	.card-body {
		padding: 20px;
	}

	.card-title {
		font-size: 1.5rem;
		font-weight: bold;
	}

	.card-text {
		font-size: 1rem;
	}

	.btn-dark {
		background-color: #000000;
		border: none;
		border-radius: 5px;
		color: #ffffff;
	}

	.btn-outline-dark {
		border: 2px solid #000000;
		border-radius: 5px;
		color: #000000;
	}

	.btn-dark:hover {
		background-color: #333333;
	}

	.btn-outline-dark:hover {
		background-color: #000000;
		color: #ffffff;
	}
</style>
