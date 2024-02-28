export interface User {
	username: string,
	picture?: string,
	email: string,
	userId?: string,
}

export interface Blog {
	datePicker: string,
	title: string,
	imagePicker: any,
	rte: any
}

export interface BlogPostSkeleton {
  metadata: any,
	sys: {
		id: string
	},
  fields: Blog
	isSaved: boolean
}

export interface Route {
	id: number,
	href: string,
	text: string,
}

export interface SavedBlogs {
	blogId: string,
	userId: string
}

export interface SavedBlogsFields {
	fields: {
		blogId: string,
		userId: string
	}
}