import React from 'react'
import MainTemplate from '../components/templates/MainTemplate/MainTemplate'
import axios from 'axios'
import BlogList from '../components/organisms/BlogList/BlogList';
import { useUserStore } from '../store/user';
import Hero from '../components/organisms/Hero/Hero';

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

export const getSavedBlogs = async () => {
  const user = useUserStore.getState().user;
  try {
    const response = await axios.get(`http://localhost:3000/api/saved-blogs?id=${user?.userId}`);
		const blogs = response.data.filteredBlogs;
    return blogs;
  } catch (error) {
    console.error('Error fetching saved blogs:', error);
    throw error;
  }
};