interface Article {
	title: string,
	cover: string,
	body: string,
}

interface User {
	name: string,
	pfp: string,
}

interface Post {
	title: string,
	body: string,
	date: string,
	user: User,
	answers: number,
}

export type {
	User,
	Post,
	Article	
}
