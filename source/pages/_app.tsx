import '../styles/globals.scss'
import type { AppProps } from 'next/app';
import AppLayout from '../shared/components/layouts/AppLayout';
import { Provider } from 'react-redux';
import store from '../shared/states/store';
import { createWrapper } from "next-redux-wrapper";

async function getInitialProps({ Component, ctx }: { Component: any, ctx: any }) {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  //Anything returned here can be access by the client
  return { pageProps: pageProps };
}

function MyApp({ Component, pageProps }: AppProps) {

  return <>
    <Provider store={store}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  </>
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
