<section class="register-sec">
	<div class="profile-container">
		<img
			src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.S171c9HYsokHyCPs9brbPwHaGP%26pid%3DApi&f=1&ipt=8caa9458bc5da3ba0bc074735564eab7bebb383a97c4f80e6f66fbd0907a6f8e&ipo=images"
			alt="Profile Picture"
			class="profile-img img-fluid"
		/>
		<h2 class="profile-name">Usuario</h2>
	</div>
	<section class="title-divisor">
		<h2>ALTERAR INFORMAÇÕES DO PERFIL</h2>
	</section>
	<div class="input-div container">
		<input type="text" placeholder="Nome de Usuário" class="input-box" />
		<input type="text" placeholder="Email" class="input-box" />
		<input type="text" placeholder="Senha" class="input-box" />
		<input type="text" placeholder="Comfirmar Senha" class="input-box" />
	</div>
	<div class="btn-container">
		<button class="btn btn-dark link-button">Alterar</button>
	</div>
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Just+Me+Again+Down+Here&display=swap');

	h2 {
		margin: 0;
	}

	.profile-img {
		width: 252px;
		height: 252px;
		object-fit: cover;
		border-radius: 50%;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
	}

	.profile-container {
		min-width: 252px;
		text-align: center;
		margin: 20px 0;
	}

	.profile-name {
		font-size: 36pt;
		margin-top: 10px;
	}

	.input-div {
		width: 388px;
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		justify-content: center; /* Center horizontally */
	}

	.input-box {
		margin: 14px 0;
		font-size: 16pt;
		border-radius: 5px;
		border: 0 solid black;
		box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.2); /* Adjusted for sharper shadow */
		min-width: 180px;
	}

	.btn-container {
		text-align: center;
	}

	.btn-dark {
		background-color: #000000;
		border: none;
		border-radius: 5px;
		color: #ffffff;
	}

	.btn-dark:hover {
		background-color: #333333;
	}

	.link-button {
		width: 123px;
		height: 54px;
		font-family: 'Amatic SC', sans-serif;
		font-weight: 700;
		font-style: bold;
		display: inline-block;
		font-size: 32px;
		padding: 0;
		margin: 25px 0;
		border: none;
		border-radius: 8px;
		text-decoration: none;
		text-align: center;
		box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.6); /* Adjusted for sharper shadow */
		transition:
			background-color 0.3s,
			border-radius 0.2s;
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
		box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.6); /* Adjusted for sharper shadow */
	}

	.title-divisor h2 {
		text-align: center; /* Center align the text */
		font-size: 32pt; /* Adjust font size as needed */
		color: #000; /* Black text color */
		margin: 0; /* Remove default margin */
		text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
	}
</style>
