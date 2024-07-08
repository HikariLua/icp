<script>
	import gio from '$lib/assets/gio.webp';
</script>

<section class="about">
	<section class="about-wrapper">
		<div class="about-text">
			<p class="about-title">SOBRE NÓS</p>
			<p class="about-body">
				O Portal da Criança Preta tem o propósito de, por meio de informações e acolhimento, ajudar
				mães e famílias a proteger crianças negras que sofrem desde muito cedo com o processo de
				auto-ódio imposto pelo racismo estrutural brasileiro. O Portal pretende tornar-se um grande
				repositório qualificado e seguro de informações relativas à infância preta que – não deveria
				– mas é diferenciada por conta dos desafios enfrentados sistematicamente.
			</p>
		</div>
		<div class="about-profile">
			<img class="profile-img" src={gio} alt="Giovanna" />
			<h2 class="profile-name">Giovanna Castro - CEO</h2>
		</div>
	</section>

	<section class="title-divisor">
		<h2>MÉTODO 7R DE EDUCAÇÃO RACIALIZADA</h2>
	</section>

	<section class="seven-rs">
		<div class="row-one">
			<h1>1. Referência</h1>
			<h1>2. Respeito</h1>
			<h1>3. Reconhecimento</h1>
			<h1>4. Recorrência</h1>
		</div>
		<div class="row-two">
			<h1>5. Reforço</h1>
			<h1>6. Recompensa</h1>
			<h1>7. Reajuste</h1>
		</div>
	</section>
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Just+Me+Again+Down+Here&display=swap');

	.about {
		margin-top: 75px;
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
		margin: 20px 0px;
		box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.6); /* Adjusted for sharper shadow */
	}

	.title-divisor h2 {
		text-align: center; /* Center align the text */
		font-size: 32pt; /* Adjust font size as needed */
		color: #000; /* Black text color */
		margin: 0; /* Remove default margin */
		text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
	}

	.about-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		gap: 20px;
		margin-bottom: 20px 0;
	}

	.about-text {
		background-color: #ffff00;
		width: 540px;
		height: 386px;
		padding: 20px;
		box-sizing: border-box;
		border-radius: 25px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		border: 2pt solid #000;
	}

	.about-title {
		text-align: center;
		font-size: 28px;
		margin-bottom: 10px;
	}

	.about-body {
		text-align: center;
		font-size: 24px;
	}

	.about-profile {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.profile-img {
		width: 325px;
		height: 330px;
		border-radius: 45px;
		margin-bottom: 10px;
		object-fit: cover;
	}

	.profile-name {
		font-size: 27px;
		padding: 5px 10px;
		border-radius: 10px;
		background-color: #ffff00;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
	}

	.seven-rs {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		padding: 40px 0;
	}

	.seven-rs h1 {
		font-size: 48px;
		margin: 10px 25px;
		text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
	}

	.row-one,
	.row-two {
		display: flex;
		justify-content: center;
		gap: 20px;
		margin-bottom: 10px;
	}

	h1 {
		font-size: 24px;
	}
</style>
