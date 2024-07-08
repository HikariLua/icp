import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Article } from '$lib/types'
import { articles, main_articles } from '$lib/data';

export const load: PageLoad = ({ params }) => {
	let article = articles.find(article => article.title === params.slug);

	// MAKE THIS BETTER
	if (article === undefined) {
		article = main_articles.find(article => article.title === params.slug);
	}

	return {
		title: article?.title,
		content: article?.body,
		cover: article?.cover,
	};

};
