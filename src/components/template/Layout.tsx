import useAppData from '../../data/hook/useAppData';
import { ForceAuth } from '../auth/ForceAuth';
import { Content } from './Content';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  title: string;
  subtitle: string;
  children?: any;
}

export const Layout = (props: LayoutProps) => {
  const { tema } = useAppData();
  return (
    <ForceAuth>
      <div className={`flex h-screen w-screen ${tema}`}>
        <Sidebar />
        <div
          className={`
      flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800
      `}
        >
          <Header title={props.title} subtitle={props.subtitle} />
          <Content>{props.children}</Content>
        </div>
      </div>
    </ForceAuth>
  );
};
