'use client'
import React from 'react';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  className?: string;
};

const Button = ({
  type = 'button',
  onClick,
  children,
  className,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={(e) => onClick?.(e)}
      className={`text-white px-4 py-2 rounded-full bg-slate-700 text-xs ${className} [&.active]:bg-red-600`}
    >
      {children}
    </button>
  );
};

export default Button;
