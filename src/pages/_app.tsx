import GlobalLayout from 'components/layout/Global'
import type { AppProps } from 'next/app'
import 'bulma/css/bulma.min.css'
import '../styles/globals.css'

type Props = AppProps & {

}

const MyApp: React.FunctionComponent<Props> = (props) => {
  const { Component, pageProps } = props;

  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  );
};

export default MyApp
