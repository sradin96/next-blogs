import Link from 'next/link';
import React, { MouseEvent } from 'react';

type AppLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
	onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
};

const AppLink = ({ href, children, className, target, onClick }: AppLinkProps) => {
  return (
    <Link
      className={`text-white font-medium${className ? ` ${className}` : ''}`}
      target={target}
      href={href}
			onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default AppLink;
