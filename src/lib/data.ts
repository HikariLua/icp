const default_image: string = 'https://images.pexels.com/photos/7328448/pexels-photo-7328448.jpeg';

interface article {
	title: string,
	cover: string
}

const main_articles: Array<article> = [
	{
		title: 'Ancestralidade',
		cover: 'https://i.imgur.com/VI6etsj.jpeg',
	},
	{
		title: 'Cultura',
		cover: 'https://i.imgur.com/j516tW2.jpeg',
	},
	{
		title: 'Infância',
		cover: 'https://i.imgur.com/0toBqmc.jpeg',
	},
];


const articles: Array<article> = [
	{
		title: 'Afrocentricidade',
		cover: 'https://i.imgur.com/5SCpISj.jpeg',
	},
	{
		title: 'Lesgislação',
		cover: 'https://i.imgur.com/5zGx3ab.jpeg',
	},
	{
		title: 'Literatura',
		cover: 'https://i.imgur.com/JoXzUTP.jpeg',
	},
	{
		title: 'Paternidade',
		cover: 'https://i.imgur.com/5Ruewb4.jpeg',
	},
	{
		title: 'Saúde',
		cover: default_image,
	},
	{
		title: 'Religiosidade',
		cover: 'https://i.imgur.com/IZoEdKp.jpeg',
	},
];

export {
	main_articles,
	articles
}
