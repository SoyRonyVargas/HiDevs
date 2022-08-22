import ProviderAuth from 'components/Auth/ProviderAuth'
import type { AppContext, AppProps } from 'next/app'
import GlobalLayout from 'components/layout/Global'
import { PageProps } from '../../types'
import { Provider } from 'react-redux'
import { NextPageContext } from 'next'
import 'bulma/css/bulma.min.css'
import '../styles/globals.css'
import { store } from 'store'
import App from 'next/app'
import { FC } from 'react'

type Props = AppProps<PageProps> & {
  getInitialProps?: (ctx: NextPageContext) => Promise<any>
}

const MyApp: FC<Props> = (props) => {
  
  const { Component, pageProps } = props;

  return (
      <Provider store={store}>
        <ProviderAuth>
          <GlobalLayout>
              <Component {...pageProps} />
          </GlobalLayout>
        </ProviderAuth>
      </Provider>
  );
};

MyApp.getInitialProps = async ( appContext : AppContext ) => {
  
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps }

}

export default MyApp
