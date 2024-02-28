'use client';
import { User } from '@/app/types/types';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import AppLink from '../../atoms/AppLink/AppLink';

type UserModalProps = {
  user?: User;
};

const UserModal = ({ user }: UserModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <div className='relative flex justify-center items-center'>
      <button
        type='button'
        className='rounded-full overflow-hidden'
        onClick={handleModal}
      >
        <Image src={`${user?.picture}`} alt='' width={36} height={36} />
      </button>
      {isOpen && (
        <ul className='absolute right-0 -bottom-4 translate-y-full bg-gray-700 z-20 rounded-2xl p-4 text-right min-w-32'>
          <li className='mb-2'>
            <span className='block text-sm text-white'>{user?.username}</span>
          </li>
          <li className='mb-2'>
            <AppLink className='text-sm block' href='/settings'>
              Settings
            </AppLink>
          </li>
          <li className=''>
            <AppLink className='text-sm block' href='/api/auth/logout'>
              Logout
            </AppLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default UserModal;
