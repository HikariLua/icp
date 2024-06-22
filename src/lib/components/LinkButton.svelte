<script lang="ts">
	export let href: string;
	export let title: string;
</script>

<a class="link-button" {href}>{title}</a>

<style>
	.link-button {
		display: inline-block;
		padding: 14px 24px;
		margin: 0px 2px;
		font-size: 16pt;
		color: #010101;
		background-color: #f8e830;
		border: none;
		border-radius: 8px;
		text-decoration: none;
		text-align: center;
		transition:
			background-color 0.3s,
			transform 0.2s,
			border-radius 0.2s,
			margin 0.2s;
	}

	.link-button:hover {
		transform: scaleX(1.1); /* Slightly enlarge the button */
		border-radius: 5px; /* Make the button square */
		margin: 0px 4px; /* Adjust padding to maintain square shape */
		background-color: #fff690; /* Darker shade for hover */
	}
</style>
