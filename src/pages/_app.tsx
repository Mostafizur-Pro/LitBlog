// pages/_app.tsx
import React from 'react';
import type { AppProps } from 'next/app';
import MainLayout from '@/components/Layouts/MainLayout';
import "@/styles/globals.css";




const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const getLayout = (Component as any).getLayout || ((page: React.ReactNode) => page);

  return getLayout(
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
};

export default MyApp;
