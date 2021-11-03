import useAppData from '../../data/hook/useAppData';
import { SwitchButton } from './SwitchButton';
import { Title } from './Title';
import { UserAvatar } from './UserAvatar';

interface HeaderProps {
  title: string;
  subtitle: string;
}

export const Header = (props: HeaderProps) => {
  const { tema, alternarTema } = useAppData();

  return (
    <div className={`flex`}>
      <Title title={props.title} subtitle={props.subtitle} />
      <div className={`flex flex-grow justify-end items-center`}>
        <SwitchButton tema={tema!} alternarTema={alternarTema!} />
        <UserAvatar className="ml-3" />
      </div>
    </div>
  );
};
