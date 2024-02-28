import { Blog } from '@/app/types/types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../../atoms/Button/Button';
import { handleSave } from './actions';

interface BlogCardProps extends Blog {
	id: string
	isSaved: boolean
}

const BlogCard = async ({ rte, imagePicker, title, datePicker, id, isSaved }: BlogCardProps) => {
	const img = imagePicker.fields.file.url;

	const handleSaveClick = async () => {
		"use server"
		await handleSave(id)
	}

	return (
		<div id={id} className='flex-[0_1_32%] relative rounded-xl bg-white overflow-hidden'>
			<Image width={1000} height={1000} src={`https:${img}`} alt='' className='h-[200px] w-full object-cover' />
			<Link href={`/blog/${id}`}  className={`p-4 bg-gray-700 h-[calc(100%_-_200px)] flex flex-col`}>
				<h3 className="text-white text-center text-xl mb-1">{title}</h3>
				<div className='rte text-white text-center mb-auto'>{documentToReactComponents(rte)}</div>
				<span className="text-red-600 block mt-4">{datePicker}</span>
			</Link>
			<div className="absolute right-2 top-2 z-10">
				<form action={handleSaveClick}>
					<input name="itemId" className="hidden" type='hidden' readOnly value={id}/>
					<Button type='submit' className={`${isSaved === true ? 'active' : ''}`}>
						{
							isSaved === true ? 'Saved' : 'Save'
						}
					</Button>
				</form>
			</div>
		</div>
	)
}

export default BlogCard