import GlobalLayout from 'components/layout/Global'
import { SessionProvider } from "next-auth/react"
import { useSession } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import { Session } from 'next-auth'
import 'bulma/css/bulma.min.css'
import '../styles/globals.css'
import { store } from 'store'
import { ReactNode } from 'react'
type Props = AppProps<{s : string}> & {
  session: Session
  Component: any
}

const MyApp: React.FunctionComponent<Props> = (props) => {
  
  const { Component, pageProps , session } = props;

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <GlobalLayout>
          {
            Component.auth 
            ?
            <Auth>
              <Component {...pageProps} />
            </Auth>
            :
            <Component {...pageProps} />
          }
        </GlobalLayout>
      </Provider>
    </SessionProvider>
  );
};

function Auth({ children } : { children? : ReactNode} ) : any {

  const router = useRouter()

  const { status } = useSession()

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if( status === "unauthenticated" ){

    router.push('/')

    return null

  }

  return children
  
}

export default MyApp
