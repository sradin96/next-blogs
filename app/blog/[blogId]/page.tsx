import PageHeader from "@/app/components/organisms/PageHeader/PageHeader"
import MainTemplate from "@/app/components/templates/MainTemplate/MainTemplate"
import { Blog } from "@/app/types/types"
import axios from "axios"

type Params = {
	params: { blogId: string }
};

const page = async ({params}: Params) => {
	const blog: Blog = await getBlog(params.blogId)
	return (
		<MainTemplate>
			<PageHeader blog={blog} />
		</MainTemplate>
	)
}

export default page

const getBlog = async (params: string) => {
	const response = await axios.get(`http://localhost:3000/api/blogs/${params}`)
	return response.data.items;
}