import axios from "axios";
import { useUserStore } from "../store/user";

export const getSavedBlogs = async () => {
  const user = useUserStore.getState().user;
	if(user?.username) {
		try {
			const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/saved-blogs?id=${user?.userId}`);
			const blogs = response.data.filteredBlogs;
			return blogs;
		} catch (error) {
			console.error('Error fetching saved blogs:', error);
			throw error;
		}
	}
};