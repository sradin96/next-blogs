import axios from "axios";

export const getBlogs = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/blogs/`);
    return response.data.items;
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return [];
  }
};