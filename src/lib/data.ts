const default_image: string = 'https://images.pexels.com/photos/7328448/pexels-photo-7328448.jpeg';

interface article {
	title: string,
	cover: string
}

const main_articles: Array<article> = [
	{
		title: 'Ancestralidade',
		cover: default_image,
	},
	{
		title: 'Cultura',
		cover: default_image,
	},
	{
		title: 'Infância',
		cover: default_image,
	},
];


const articles: Array<article> = [
	{
		title: 'Afrocentricidade',
		cover: default_image,
	},
	{
		title: 'Lesgislação',
		cover: default_image,
	},
	{
		title: 'Literatura',
		cover: default_image,
	},
	{
		title: 'Paternidade',
		cover: default_image,
	},
	{
		title: 'Saúde',
		cover: default_image,
	},
	{
		title: 'Religiosidade',
		cover: default_image,
	},
];

export {
	main_articles,
	articles
}
