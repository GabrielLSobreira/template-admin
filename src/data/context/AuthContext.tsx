import route from 'next/router';
import { createContext, ReactNode, useState } from 'react';
import firebase from '../../firebase/config';
import User from '../../model/User';

interface AuthContextProps {
  user?: User;
  loginGoogle?: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProps>({});

const userNormalized = async (userFirebase: firebase.User): Promise<User> => {
  const token = await userFirebase.getIdToken();
  return {
    uid: userFirebase.uid!,
    name: userFirebase.displayName!,
    email: userFirebase.email!,
    token,
    provider: userFirebase.providerData[0]?.providerId!,
    imageUrl: userFirebase.photoURL!,
  };
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>();

  const loginGoogle = async () => {
    const resp = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());
    if (resp.user?.email) {
      const user = await userNormalized(resp.user);
      setUser(user);
      route.push('/');
    }
  };
  return (
    <AuthContext.Provider value={{ user, loginGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
