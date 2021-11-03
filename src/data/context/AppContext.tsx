import { createContext, ReactNode, useState } from 'react';

type Tema = 'dark' | '';

interface AppContextProps {
  tema?: Tema;
  alternarTema?: () => void;
}

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextProps>({});

export const AppProvider = ({ children }: AppProviderProps) => {
  const [tema, setTema] = useState<Tema>('dark');

  const alternarTema = () => {
    setTema(tema === '' ? 'dark' : '');
  };
  return (
    <AppContext.Provider
      value={{
        tema,
        alternarTema,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
