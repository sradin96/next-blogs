import { client } from "@/app/api/contentful/client";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  id: string;
};

export async function GET(request: NextRequest, { params }: { params: Params }) {
	const blogId = params.id;
	const entry = await client.getEntry(blogId);
	const items = entry.fields;
	return NextResponse.json({ items })
}