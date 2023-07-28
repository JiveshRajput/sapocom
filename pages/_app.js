import { Provider } from 'react-redux'
import Layout from '../layouts/Layout'
import store from '../store/store'

import '../styles/globals.css'
import '../styles/fonts.css'

export default function App({ Component, pageProps }) {
  return <>
    <Provider store={store}> 
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  </>
}
