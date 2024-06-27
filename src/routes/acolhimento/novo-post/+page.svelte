<script lang="ts">
	import { marked } from 'marked';

	let postTitle = '';
	let postContent = '';
	let previewContent = '';

	const handlePreview = () => {
		previewContent = marked(postContent).toString();
	};

	const submitPost = () => {
		// Handle the submission of the post to your backend or API
		alert('Post submitted!');
	};
</script>

<section class="post container">
	<h1>Escreva um Novo Post</h1>
	<form on:submit|preventDefault={handlePreview} class="form">
		<div class="form-group">
			<label for="postTitle">Título</label>
			<input type="text" id="postTitle" bind:value={postTitle} class="form-control" required />
		</div>
		<div class="form-group">
			<label for="postContent">Conteúdo</label>
			<textarea id="postContent" bind:value={postContent} class="form-control" rows="10" required
			></textarea>
		</div>
		<div class="form-group">
			<button type="submit" class="btn btn-primary">Pré-visualizar</button>
		</div>
	</form>

	{#if previewContent}
		<section class="preview">
			<h2>Pré-visualização</h2>
			<div class="preview-content" contenteditable="true" bind:innerHTML={previewContent}></div>
			<button class="btn btn-success" on:click={submitPost}>Enviar Post</button>
		</section>
	{/if}
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
	h1 {
		text-align: center;
		margin-bottom: 20px;
		font-size: 2.5rem;
		color: #352b2b;
	}

	.form-group {
		margin-bottom: 20px;
	}

	label {
		display: block;
		margin-bottom: 5px;
		color: #352b2b;
	}

	.post {
		margin: 10px auto;
	}

	.form-control {
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
		font-style: normal;
		width: 100%;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 4px;
		box-sizing: border-box;
	}

	textarea.form-control {
		resize: vertical;
	}

	.btn {
		display: inline-block;
		padding: 10px 20px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-size: 1.1rem;
		font-family: 'Just Me Again Down Here', cursive;
	}

	.btn-primary {
		background-color: #352b2b;
		color: #f8e830;
	}

	.btn-success {
		background-color: #28a745;
		color: #fff;
		margin-top: 20px;
	}

	.preview {
		margin-top: 40px;
		padding: 20px;
		border: 1px solid #ccc;
		border-radius: 4px;
		background-color: #f9f9f9;
		box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.4);
	}

	.preview-content {
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
		font-style: normal;
		margin-top: 20px;
		background-color: #f8e830;
		padding: 20px;
		border-radius: 12px;
		box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.4);
		border: 1px solid black;
	}
</style>
