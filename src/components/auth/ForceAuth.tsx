import Head from 'next/head';
import Image from 'next/image';
import router from 'next/router';
import { ReactNode } from 'react';
import loadingGif from '../../../public/images/loading.gif';
import useAuth from '../../data/hook/useAuth';

interface ForceAuthProps {
  children: ReactNode;
}
export const ForceAuth = (props: ForceAuthProps) => {
  const { loading, user } = useAuth();
  const renderContent = () => {
    return (
      <>
        <Head>
          <>
            <Head>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                                if(!document.cookie?.includes("admin-template-cod3r-auth")) {
                                    window.location.href = "/autenticacao"
                                }
                            `,
                }}
              />
            </Head>
            {props.children}
          </>
        </Head>
        {props.children}
      </>
    );
  };

  const renderLoading = () => {
    return (
      <div
        className={`
                flex justify-center items-center h-screen
            `}
      >
        <Image src={loadingGif} alt="loading gif" />
      </div>
    );
  };

  if (!loading && user?.email) {
    return renderContent();
  } else if (loading) {
    return renderLoading();
  } else {
    router.push('/autenticacao');
    return null;
  }
};
