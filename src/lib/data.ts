import type { Article, Post, User } from "./types";

const default_image: string = 'https://images.pexels.com/photos/7328448/pexels-photo-7328448.jpeg';

const userTest: User = {
	name: 'Usuário Teste',
	pfp: '',
}

const posts: Array<Post> = [
	{
		title: 'Título teste',
		body: 'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
		answers: 12,
		user: userTest,
		date: '26/06/2024 13:45:21'
	}
]

const main_articles: Array<Article> = [
	{
		title: 'Ancestralidade',
		cover: 'https://i.imgur.com/VI6etsj.jpeg',
		body: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
	},
	{
		title: 'Cultura',
		cover: 'https://i.imgur.com/j516tW2.jpeg',
		body: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
	},
	{
		title: 'Infância',
		cover: 'https://i.imgur.com/0toBqmc.jpeg',
		body: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
	},
];


const articles: Array<Article> = [
	{
		title: 'Afrocentricidade',
		cover: 'https://i.imgur.com/5SCpISj.jpeg',
		body: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
	},
	{
		title: 'Lesgislação',
		cover: 'https://i.imgur.com/5zGx3ab.jpeg',
		body: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
	},
	{
		title: 'Literatura',
		cover: 'https://i.imgur.com/JoXzUTP.jpeg',
		body: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
	},
	{
		title: 'Paternidade',
		cover: 'https://i.imgur.com/5Ruewb4.jpeg',
		body: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
	},
	{
		title: 'Saúde',
		cover: 'https://i.imgur.com/HZm13sk.jpeg',
		body: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
	},
	{
		title: 'Religiosidade',
		cover: 'https://i.imgur.com/IZoEdKp.jpeg',
		body: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
	},
];

export {
	main_articles,
	articles,
	posts
}
