import axios from 'axios';
import BlogList from '../components/organisms/BlogList/BlogList';
import Hero from '../components/organisms/Hero/Hero';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import { getSavedBlogs } from '../saved/page';
import { BlogPostSkeleton } from '../types/types';

const page = async () => {
	const blogs = await getBlogs();
	const savedBlogs = await getSavedBlogs();

	const combinedBlogs = blogs.map((blog: BlogPostSkeleton) => {
    const isSaved = savedBlogs.some((savedBlog: BlogPostSkeleton) => savedBlog.sys.id === blog.sys.id);
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

const getBlogs = async () => {
	const response = await axios.get(`http://localhost:3000/api/blogs/`);
	return response.data.items;
}