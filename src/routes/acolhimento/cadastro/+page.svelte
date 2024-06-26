<section class="title-divisor">
	<h2>CADASTRE-SE NO ACOLHIMENTO DO INSTITUTO DA CRIANÇA PRETA!</h2>
</section>
<section class="register-sec">
	<div class="input-div container">
		<input type="text" placeholder="Nome de Usuário" class="input-box" />
		<input type="text" placeholder="Email" class="input-box" />
		<input type="text" placeholder="Senha" class="input-box" />
		<input type="text" placeholder="Comfirmar Senha" class="input-box" />
	</div>
	<div class="btn-container">
		<button class="btn link-button">Cadastrar</button>
	</div>
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Just+Me+Again+Down+Here&display=swap');

	.input-div {
		width: 388px;
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

	.link-button {
		width: 123px;
		height: 54px;
		font-family: 'Amatic SC', sans-serif;
		font-weight: 700;
		font-style: bold;
		display: inline-block;
		font-size: 32px;
		padding: 0;
		margin: 14px 0;
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

	.register-sec {
		margin: 100px 0;
		margin-bottom: 200px;
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

	.title-divisor h2 {
		text-align: center; /* Center align the text */
		font-size: 32pt; /* Adjust font size as needed */
		color: #000; /* Black text color */
		margin: 0; /* Remove default margin */
		text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
	}
</style>
