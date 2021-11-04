import { createContext, ReactNode, useEffect, useState } from 'react';

interface AppContextProps {
  tema?: string;
  alternarTema?: () => void;
}

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextProps>({});

export const AppProvider = ({ children }: AppProviderProps) => {
  const [tema, setTema] = useState('dark');

  useEffect(() => {
    const temaSalvo = localStorage.getItem('tema');
    setTema(temaSalvo!);
  }, []);

  const alternarTema = () => {
    const novoTema = tema === '' ? 'dark' : '';
    setTema(novoTema);
    localStorage.setItem('tema', novoTema);
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
