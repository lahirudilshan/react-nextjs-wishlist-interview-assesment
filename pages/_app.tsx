import '../styles/globals.scss'
import type { AppProps } from 'next/app';
import AppLayout from '../shared/components/layouts/AppLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  </>
}

export default MyApp
