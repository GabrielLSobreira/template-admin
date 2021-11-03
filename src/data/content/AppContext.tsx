import { createContext, useState } from 'react';

type Tema = 'dark' | '';

interface AppContextProps {
  tema?: Tema;
  alternarTema?: () => void;
}

const AppContext = createContext<AppContextProps>({});

export const AppProvider = (props: any) => {
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
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContext;
