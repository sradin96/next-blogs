import axios from "axios";

export const getBlog = async (params: string) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/blogs/${params}`);
    return response.data.items;
  } catch (error) {
    console.error(`Failed to fetch blog with params: ${params}`, error);
    return null;
  }
};