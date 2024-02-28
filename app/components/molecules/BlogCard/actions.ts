'use server'
import { useUserStore } from "@/app/store/user"
import axios from "axios"
import { redirect } from "next/navigation"

// http://localhost:3000/api/blogs/

export const handleSave = async (id: string) => {
	const user = useUserStore.getState().user
	if(user?.username.length) {
		const data = { userId: user.userId, blogId: id }
		await axios.post(`http://localhost:3000/api/blogs/`, {
			data,
		})
		.catch((error) => {
			console.error('Error:', error);
		});
	} else {
		redirect('/api/auth/login');
	}
}