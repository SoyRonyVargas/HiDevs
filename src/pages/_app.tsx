import GlobalLayout from 'components/layout/Global'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import 'bulma/css/bulma.min.css'
import '../styles/globals.css'
import { store } from 'store'

type Props = AppProps & {

}

const MyApp: React.FunctionComponent<Props> = (props) => {
  const { Component, pageProps } = props;

  return (
    <Provider store={store}>
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </Provider>
  );
};

export default MyApp
