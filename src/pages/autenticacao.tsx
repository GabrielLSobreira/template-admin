/* eslint-disable @next/next/no-img-element */
import { MouseEvent, useState } from 'react';
import { AuthInput } from '../components/auth/AuthInput';
import { ErrorIcon } from '../components/icons';
import useAuth from '../data/hook/useAuth';

const Auth = () => {
  const { register, login, loginGoogle } = useAuth();
  const [mode, setMode] = useState<'login' | 'cadastro'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<any | null>(null);

  const showError = (msg: string, time: number = 3) => {
    setError(msg);
    setTimeout(() => setError(null), time * 1000);
  };

  const handleSubmit = async () => {
    try {
      if (mode === 'login') {
        await login!(email, password);
      } else {
        await register!(email, password);
      }
    } catch (e: any) {
      if (mode === 'login') {
        showError('E-mail ou senha estão incorretos!');
      } else {
        showError(e?.message ?? 'Ocorreu um erro inesperado!');
      }
    }
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="md:w-1/2 hidden md:block lg:w-2/3">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1473&q=80"
          alt="Imagem da Tela de Autenticação"
          className="h-screen w-full objesct-cover"
        />
      </div>
      <div className="m-10 w-full md:w-1/2">
        <h1
          className={`
        text-2xl font-bold mb-5
      `}
        >
          {mode === 'login'
            ? 'Entre com a sua Conta'
            : 'Cadastre-se na plataforma'}
        </h1>
        {error ? (
          <div
            className={`
          bg-red-400 text-white py-3 px-5 my-2 
          border border-red-700 rounded-lg
          flex items-center
        `}
          >
            {ErrorIcon(7)}
            <span className="ml-3">{error}</span>
          </div>
        ) : (
          false
        )}
        <AuthInput
          label="Email"
          value={email}
          onChange={setEmail}
          type="email"
          required
        />
        <AuthInput
          label="Senha"
          value={password}
          onChange={setPassword}
          type="password"
          required
        />
        <button
          onClick={handleSubmit}
          className={`
        w-full bg-indigo-500 hover:bg-indigo-400
        text-white rounded-lg px=4 py-3 mt-6
      `}
        >
          {mode === 'login' ? 'Entrar' : 'Cadastrar'}
        </button>

        <hr className="my-6 border-gray-300 w-full" />

        <button
          onClick={loginGoogle}
          className={`
        w-full bg-red-500 hover:bg-red-400
        text-white rounded-lg px=4 py-3 
      `}
        >
          Entrar com o google
        </button>

        {mode === 'login' ? (
          <p className="mt-8">
            Novo por aqui?
            <a
              onClick={() => setMode('cadastro')}
              className={`
              text-blue-500 hover:text-blue-700 font-semibold 
              cursor-pointer
            `}
            >
              {' '}
              Crie uma conta gratuitamente
            </a>
          </p>
        ) : (
          <p className="mt-8">
            Já faz parte da nossa comunidade?
            <a
              onClick={() => setMode('login')}
              className={`
            text-blue-500 hover:text-blue-700 font-semibold 
            cursor-pointer
          `}
            >
              {' '}
              Entre com suas credenciais
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Auth;
