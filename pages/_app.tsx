import Head from 'next/head';
import Layout from '../components/Layout';

import '../styles/globals.scss';

const App = ({ Component, pageProps }) => (
  <Layout>
    <Head>
      <title>Movie App</title>
    </Head>
    <Component {...pageProps} />
  </Layout>
)

export default App;