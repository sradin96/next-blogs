import { BlogPostSkeleton } from '@/app/types/types'
import BlogCard from '../../molecules/BlogCard/BlogCard'

type BlogListProps = {
	blogs: BlogPostSkeleton[],
	title: string
}

const BlogList = ({ blogs, title }: BlogListProps) => {
	return (
		<div className='max-w-6xl mx-auto'>
			<div className="px-5">
				<h2 className="mb-8 text-white text-3xl">{title}</h2>
				<div className="flex flex-wrap justify-center gap-3">
					{
						blogs?.map((blog, index) => (
							<BlogCard {...blog.fields} isSaved={blog.isSaved} id={blog.sys.id} key={index}  />
						))
					}
				</div>
			</div>
		</div>
	)
}

export default BlogList