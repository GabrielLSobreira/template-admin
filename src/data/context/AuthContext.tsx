import route from 'next/router';
import { createContext, ReactNode, useState, useEffect } from 'react';
import firebase from '../../firebase/config';
import User from '../../model/User';
import Cookies from 'js-cookie';

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

const manageCookie = (logado: any) => {
  if (logado) {
    Cookies.set('admin-template-auth', logado, {
      expires: 7,
    });
  } else {
    Cookies.remove('admin-template-auth');
  }
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cancel = firebase.auth().onIdTokenChanged(configureSession);
    return () => cancel();
  }, []);

  const configureSession = async (firebaseUser: any) => {
    if (firebaseUser?.email) {
      const user = await userNormalized(firebaseUser);
      setUser(user);
      manageCookie(true);
      setLoading(false);
      return user.email;
    } else {
      manageCookie(false);
      setLoading(false);
      return false;
    }
  };

  const loginGoogle = async () => {
    try {
      setLoading(true);
      const resp = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());
      configureSession(resp.user);
      route.push('/');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loginGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
