import { NextRequest, NextResponse } from "next/server";
import { client } from "../contentful/client";
import { Blog, BlogPostSkeleton, SavedBlogsFields } from "@/app/types/types";

export async function GET(request: NextRequest) {
	const id = request.nextUrl.searchParams.get('id')
	const entires = await client.getEntries({ content_type: 'user-blog' });
	const filtered = entires.items.filter((item: SavedBlogsFields) => item.fields.userId === id);
	const filteredIds = filtered.map((blog: SavedBlogsFields) => blog.fields.blogId);

	const blogEntries = await client.getEntries({ content_type: 'blogPost' });
	const filteredBlogs: Blog = blogEntries.items.filter((blog: BlogPostSkeleton) => filteredIds.includes(blog.sys.id));

	return NextResponse.json({ filteredBlogs })
}
