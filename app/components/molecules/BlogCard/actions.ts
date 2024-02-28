'use server'
import { useUserStore } from "@/app/store/user"
import axios from "axios"
import { redirect } from "next/navigation"

export const handleSave = async (id: string) => {
	const user = useUserStore.getState().user
	if(user?.username.length) {
		const data = { userId: user.userId, blogId: id }
		await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/blogs/`, {
			data,
		})
		.catch((error) => {
			console.error('Error:', error);
		});
	} else {
		redirect('/api/auth/login');
	}
}