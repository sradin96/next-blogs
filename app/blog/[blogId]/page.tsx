import PageHeader from "@/app/components/organisms/PageHeader/PageHeader";
import MainTemplate from "@/app/components/templates/MainTemplate/MainTemplate";
import { Blog } from "@/app/types/types";
import { getBlog } from "./action";

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