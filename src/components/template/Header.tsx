import useAppData from '../../data/hook/useAppData';
import { SwitchButton } from './SwitchButton';
import { Title } from './Title';

interface HeaderProps {
  title: string;
  subtitle: string;
}

export const Header = (props: HeaderProps) => {
  const { tema, alternarTema } = useAppData();

  return (
    <div className={`flex`}>
      <Title title={props.title} subtitle={props.subtitle} />
      <div className={`flex flex-grow justify-end`}>
        <SwitchButton tema={tema} alternarTema={alternarTema} />
      </div>
    </div>
  );
};
