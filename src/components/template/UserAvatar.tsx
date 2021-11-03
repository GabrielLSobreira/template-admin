/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import useAuth from '../../data/hook/useAuth';

interface UserAvatarProps {
  className?: string;
}

export const UserAvatar = (props: UserAvatarProps) => {
  const { user } = useAuth();
  return (
    <Link href="/perfil">
      <a>
        <img
          src={user?.imageUrl ?? '/images/avatar.svg'}
          alt="Avatar do usuário"
          className={`
          h-10 w-10 rounded-full cursor-pointer 
          ${props.className}
      `}
        />
      </a>
    </Link>
  );
};
