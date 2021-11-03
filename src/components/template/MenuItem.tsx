import Link from 'next/link';

interface MenuItemProps {
  url?: string;
  text: string;
  icon: any;
  onClick?: (evento: any) => void;
  className?: string;
}

export const MenuItem = (props: MenuItemProps) => {
  const renderLink = () => {
    return (
      <a
        className={`
            flex flex-col justify-center items-center h-20 w-20 text-gray-600 ${props.className} dark:text-gray-200
            `}
      >
        {props.icon}
        <span className={`text-xs font-light `}>{props.text}</span>
      </a>
    );
  };
  return (
    <li
      className={`hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer`}
      onClick={props.onClick}
    >
      {props.url ? <Link href={props.url}>{renderLink()}</Link> : renderLink()}
    </li>
  );
};
