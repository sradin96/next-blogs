import BlogList from '../components/organisms/BlogList/BlogList';
import Hero from '../components/organisms/Hero/Hero';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import { getSavedBlogs } from './action';

const page = async () => {
	const blogs = await getSavedBlogs();

	return (
		<MainTemplate>
			<Hero />
			<BlogList title='Saved Blogs' blogs={blogs} />
		</MainTemplate>
	)
}

export default page

