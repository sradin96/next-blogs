import { create } from 'zustand'
import contentful from 'contentful';
import { Blog } from '../types/types';

type BlogStoreState = {
  blogs: Blog[];
	savedBlogs: Blog[];
	setSavedBlogs: (blog: Blog) => void
};

export const useBlogStore = create<BlogStoreState>((set) => ({
  blogs: [],
	savedBlogs: [],
	setSavedBlogs: (blog: Blog) => set((state) => ({
    savedBlogs: [...state.savedBlogs, blog]
  })),
}));