import { Blog } from '@/app/types/types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
import React from 'react'

type PageHeaderProps = {
	blog: Blog
}

const PageHeader = ({ blog }: PageHeaderProps) => {
	const img = blog.imagePicker.fields.file.url;
	return (
		<section className='w-full'>
			<Image className='h-[600px] w-full object-cover mb-5' src={`https:${img}`} width={1000} height={1000} alt=''/>
			<div className="px-5 relative">
				<h1 className="text-center text-white text-5xl font-bold mx-auto mb-4 w-4/5">{blog.title}</h1>
				<div className='rte text-white text-xl text-center'>{documentToReactComponents(blog.rte)}</div>
				<span className='absolute right-5 top-0 text-red-600 text-xl'>{blog.datePicker}</span>
			</div>
		</section>
	)
}

export default PageHeader