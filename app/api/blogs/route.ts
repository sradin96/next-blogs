'use server'
import { client, environment } from "@/app/api/contentful/client";
import { NextResponse } from "next/server";

export async function GET() {
	const entry = await client.getEntries({ content_type: 'blogPost' });
	const items = entry.items;
	return NextResponse.json({ items })
}

export async function POST(req: Request) {
	const data = await req.json();

	try {
		const entry = await environment.createEntry('user-blog', {
		  fields: {
		    userId: {
		      'en-US': data.userId,
		    },
		    blogId: {
		      'en-US': data.blogId,
		    },
		  },
		});

		await entry.publish();
		return new Response("All is good my man!", {
			status: 200
		})
	} catch (error) {
		return new Response("Not good fam!", {
			status: 500
		})
	}
}