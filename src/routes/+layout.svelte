<script lang="ts">
	import LinkButton from '$lib/components/LinkButton.svelte';
</script>

<div class="wrapper">
	<nav class="navbar">
		<div class="container-fluid">
			<div class="links">
				<ul>
					<li>
						<a href="/"><img src="/logo.png" class="img-fluid nav-logo" alt="ICP" /></a>
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
			<div>
				<button class="btn">
					<img src="/moon-sun.svg" class="img-fluid flag" alt="Modo Escuro" />
				</button>
				<button class="btn"><img src="/brazil.svg" class="img-fluid flag" alt="Portugês" /></button>
				<button class="btn"><img src="/usa.svg" class="img-fluid flag" alt="English" /></button>
			</div>
		</div>
	</nav>

	<main>
		<slot />
	</main>

	<footer class="footer">
		<div class="footer-content">
			<div class="footer-section social-media">
				<h4>Instituto da Criança Preta</h4>
				<ul class="social-links">
					<li><a href=""><img src="/whatsapp.svg" class="img-fluid" alt="Whatsapp" /></a></li>
					<li><a href=""><img src="/instagram.svg" class="img-fluid" alt="Instagram" /></a></li>
					<li><a href=""><img src="/linkedin.svg" class="img-fluid" alt="Linkedin" /></a></li>
				</ul>
			</div>
			<div class="footer-section info">
				<p>Proteja sua criança com informação e acolhimento.</p>
				<p>Email de contato: contact@example.com</p>
			</div>
			<div class="footer-section social-media">
				<h4>Desenvolvedores do Site</h4>
				<ul class="social-links">
					<li><a href=""><img src="/github.svg" class="img-fluid" alt="Github" /></a></li>
					<li><a href=""><img src="/instagram.svg" class="img-fluid" alt="Instagram" /></a></li>
					<li><a href=""><img src="/linkedin.svg" class="img-fluid" alt="Linkedin" /></a></li>
				</ul>
			</div>
		</div>
		<div class="footer-bottom">
			<p>&copy; 2024 Instituto da Criança Preta. Todos os direitos reservados.</p>
		</div>
	</footer>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Just+Me+Again+Down+Here&display=swap');

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
		max-height: 50px;
		margin: 5px;
		margin-right: 30px;
	}

	.flag {
		max-height: 28px;
	}

	.img-fluid {
		max-width: 100%;
		height: auto;
	}
</style>
