<script lang="ts">
	import type { Post } from '$lib/types';

	export let post: Post;

	let summary: string = shortenText(post.body);

	function shortenText(input: string): string {
		const maxLength = 140;
		const suffix = '...';

		if (input.length <= maxLength) {
			return input;
		}

		const truncatedLength = maxLength - suffix.length;
		return input.slice(0, truncatedLength) + suffix;
	}
</script>

<div class="card">
	<div class="card-body">
		<div class="card-main">
			<a href="#" class="title-link">
				<h5 class="card-title">{post.title}</h5>
			</a>
			<h6 class="card-user">
				por <a href="" class="user-link">{post.user.name}</a> em {post.date}
			</h6>
		</div>
		<p class="card-text">{summary}</p>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

	/* * { */
	/* 	font-family: 'Roboto', sans-serif; */
	/* 	font-weight: 400; */
	/* 	font-style: normal; */
	/* } */

	.card {
		border: none;
		border-radius: 10px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	.card-body {
		padding: 20px;
	}

	.title-link {
		text-decoration-color: black;
	}

	.card-title {
		font-size: 1.5rem;
		font-weight: bold;
		color: #000;
	}

	.card-text {
		font-size: 1rem;
	}
</style>
