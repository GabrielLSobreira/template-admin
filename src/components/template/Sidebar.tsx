import { BellIcon, HomeIcon, SettingsIcon } from '../icons';
import { Logo } from './Logo';
import { MenuItem } from './MenuItem';

export const Sidebar = () => {
  return (
    <aside>
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-800 h-20 w-20`}
      >
        <Logo />
      </div>
      <ul>
        <MenuItem url="/" text="Início" icon={HomeIcon}></MenuItem>
        <MenuItem url="/ajustes" text="Ajustes" icon={SettingsIcon}></MenuItem>
        <MenuItem
          url="/notificacoes"
          text="Notificações"
          icon={BellIcon}
        ></MenuItem>
      </ul>
    </aside>
  );
};
