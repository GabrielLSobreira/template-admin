import { BellIcon, HomeIcon, LogoutIcon, SettingsIcon } from '../icons';
import { Logo } from './Logo';
import { MenuItem } from './MenuItem';

export const Sidebar = () => {
  return (
    <aside className="flex flex-col bg-gray-200 text-gray-700 dark:bg-gray-900">
      <div
        className={`
        flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-800 h-20 w-20`}
      >
        <Logo />
      </div>
      <ul className="flex-grow ">
        <MenuItem url="/" text="Início" icon={HomeIcon}></MenuItem>
        <MenuItem url="/ajustes" text="Ajustes" icon={SettingsIcon}></MenuItem>
        <MenuItem
          url="/notificacoes"
          text="Notificações"
          icon={BellIcon}
        ></MenuItem>
      </ul>
      <ul>
        <MenuItem
          onClick={() => console.log('logout')}
          text="Sair"
          icon={LogoutIcon}
          className={`
            text-red-600 dark:text-red-400
            hover:bg-red-400 hover:text-white
            dark:hover:text-white
          `}
        ></MenuItem>
      </ul>
    </aside>
  );
};
