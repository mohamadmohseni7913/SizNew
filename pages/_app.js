import '../styles/globals.css'
import "../src/sass/main.scss"
import Layout from './component/Layout'

import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {

 
  return <Layout>
    
    <Component {...pageProps} />

  </Layout>
}

export default MyApp
