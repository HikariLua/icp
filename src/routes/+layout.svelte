<script lang="ts">
	import LinkButton from '$lib/components/LinkButton.svelte';
</script>

<div class="wrapper">
	<nav class="navbar">
		<div class="container-fluid">
			<div class="links">
				<ul>
					<li>
						<a href="/"><img src="/pcp.svg" class="img-fluid nav-logo" alt="ICP" /></a>
					</li>
					<li>
						<LinkButton href="/sobre" title="SOBRE" />
					</li>
					<li>
						<LinkButton href="/acolhimento" title="ACOLHIMENTO" />
					</li>
					<li>
						<LinkButton href="/informacoes" title="INFORMAÇÕES" />
					</li>
				</ul>
			</div>
			<div class="buttons d-flex justify-content-center align-items-center">
				<button class="btn">
					<img src="/moon-sun.svg" class="img-fluid flag" alt="Modo Escuro" />
				</button>
				<!-- <button class="btn"><img src="/brazil.svg" class="img-fluid flag" alt="Portugês" /></button> -->
				<!-- <button class="btn"><img src="/usa.svg" class="img-fluid flag" alt="English" /></button> -->
				<div class="user-container d-flex justify-content-center align-items-center">
					<div class="d-flex align-items-center">
						<img
							src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.S171c9HYsokHyCPs9brbPwHaGP%26pid%3DApi&f=1&ipt=8caa9458bc5da3ba0bc074735564eab7bebb383a97c4f80e6f66fbd0907a6f8e&ipo=images"
							class="user-icon img-fluid"
							alt=""
						/>

						<h6>Usuário</h6>
					</div>

					<div class="settings-button">
						<a href="/acolhimento/usuario">
							<img src="/gear.svg" alt="Configurar Perfil" />
						</a>
					</div>

					<div class="logout-button">
						<a href="">
							<img src="/exit.svg" alt="Sair" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</nav>

	<main>
		<slot />
	</main>

	<footer class="footer">
		<div class="footer-content">
			<div class="footer-section social-media">
				<h4>Portal da Criança Preta</h4>
				<ul class="social-links">
					<li><a href=""><img src="/whatsapp.svg" class="img-fluid" alt="Whatsapp" /></a></li>
					<li><a href=""><img src="/instagram.svg" class="img-fluid" alt="Instagram" /></a></li>
					<li><a href=""><img src="/linkedin.svg" class="img-fluid" alt="Linkedin" /></a></li>
				</ul>
			</div>
			<div class="footer-section info info-text">
				<p>Proteja sua criança com informação e acolhimento.</p>
				<p>Email de contato: gc.vanna@gmail.com</p>
			</div>
			<div class="footer-section social-media">
				<a
					href="https://linktr.ee/desenvolvedoresdosite?utm_source=linktree_profile_share&ltsid=4b918cee-0e9d-4c35-98a0-c5d3cc11d5ac"
				>
					<h4>Desenvolvedores do Site</h4>
				</a>
				<ul class="social-links">
					<li>
						<a
							href="https://linktr.ee/desenvolvedoresdosite?utm_source=linktree_profile_share&ltsid=4b918cee-0e9d-4c35-98a0-c5d3cc11d5ac"
							><img src="/linktree.png" alt="Acessar Linktree" /></a
						>
					</li>
				</ul>
			</div>
		</div>
		<div class="footer-bottom">
			<p>&copy; 2024 Portal da Criança Preta. Todos os direitos reservados.</p>
		</div>
	</footer>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Just+Me+Again+Down+Here&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Just+Me+Again+Down+Here&display=swap');

	* {
		font-family: 'Just Me Again Down Here', cursive;
		font-weight: 400;
		font-style: normal;
	}

	html,
	body {
		height: 100%;
		margin: 0;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	nav {
		background-color: #352b2b;
		min-height: 81px;
	}

	main {
		background-color: #f8e830;
		flex: 1;
	}

	.info-text {
		font-size: 14pt;
	}

	.buttons {
		display: flex;
	}

	.buttons button img {
		min-height: 40px;
	}

	.links ul {
		display: flex;
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.links li {
		margin: 5px; /* Adjust spacing between items as needed */
	}

	.footer {
		background-color: #352b2b;
		color: #fff;
		padding: 20px 0;
		text-align: center;
		border-top: 2px solid black;
	}

	.footer-content {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 20px;
		border-bottom: 1px solid #444;
	}

	.footer-section {
		margin: 10px 20px;
		flex: 1;
		min-width: 200px;
	}

	.footer-section h4 {
		margin-bottom: 15px;
		font-size: 18px;
		text-transform: uppercase;
		color: #ff9900;
	}

	.footer-section p {
		margin: 10px 0;
		line-height: 1.6;
	}

	.footer-section .social-links {
		list-style: none;
		padding: 0;
	}

	.social-media a {
		text-decoration: none;
	}

	.footer-section .social-links img {
		max-width: 44px;
	}

	.footer-section .social-links li {
		display: inline;
		margin: 0 5px;
	}

	.footer-section .social-link {
		color: #ff9900;
		text-decoration: none;
		transition: color 0.3s;
	}

	.footer-section .social-link:hover {
		color: #fff;
	}

	.footer-bottom {
		padding: 10px 0;
	}

	.footer-bottom p {
		margin: 0;
		font-size: 14px;
	}

	.nav-logo {
		max-height: 55px;
		margin: 5px;
		margin-right: 30px;
		background-color: #f8e830;
		border-radius: 50%;
	}

	.flag {
		max-height: 28px;
	}

	.img-fluid {
		max-width: 100%;
		height: auto;
	}

	.user-container {
		width: 100%;
		margin: 15px;
		color: #fff;
	}
	h6 {
		margin: 0;
		font-size: 24px;
	}
	.user-icon {
		width: 3rem;
		height: 3rem;
		background-color: #000000;
		border: 2px solid;
		border-radius: 50%;
		margin-right: 1rem;
	}

	.settings-button {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 1rem;
	}

	.logout-button {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 1rem;
	}
</style>
