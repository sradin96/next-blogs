import React from 'react'

const Banner = () => {
	return (
		<section className='relative h-[600px] bg-cover bg-fixed bg-bottom' style={{ backgroundImage: 'url(/static/banner.webp)'}}>
			<div className='max-w-7xl px-5 mx-auto'>
				<h1>Midnight Canine Symphony</h1>
			</div>
		</section>
	)
}

export default Banner