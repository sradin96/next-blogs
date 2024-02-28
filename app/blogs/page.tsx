import BlogList from '../components/organisms/BlogList/BlogList';
import Hero from '../components/organisms/Hero/Hero';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import { getSavedBlogs } from '../saved/action';
import { BlogPostSkeleton } from '../types/types';
import { getBlogs } from './action';

const page = async () => {
	const blogs = await getBlogs();
	const savedBlogs = await getSavedBlogs();

	const combinedBlogs = blogs?.map((blog: BlogPostSkeleton) => {
    const isSaved = savedBlogs?.some((savedBlog: BlogPostSkeleton) => savedBlog.sys.id === blog.sys.id);
    return { ...blog, isSaved };
  });

	return (
		<MainTemplate>
			<Hero />
			<BlogList title='Our Blogs' blogs={combinedBlogs} />
		</MainTemplate>
	)
}

export default page