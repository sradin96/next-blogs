'use client'
import { routes } from '@/app/routes/routes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
	const pathname = usePathname();
	return (
		<nav className="">
			<ul className="flex">
				{
					routes.map(route => (
						<li className='mr-4' key={route.id}>
							<Link className={`text-white font-semibold hover:underline ${pathname === route.href ? 'active' : ''} [&.active]:text-red-500`} href={route.href}>{route.text}</Link>
						</li>
					))
				}
			</ul>
		</nav>
	)
}

export default Navbar