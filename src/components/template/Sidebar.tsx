import { BellIcon, HomeIcon, SettingsIcon } from '../icons';
import { MenuItem } from './MenuItem';

export const Sidebar = () => {
  return (
    <aside>
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
