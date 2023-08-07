import Head from 'next/head'
import 'styles/common/_index.scss'
import Layout from 'components/layout'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
    <title>rinaofk</title>
    <meta name="description" content="Hello. I am rina. I like to design and code." />
    <link rel="icon" href="/favicon.ico" />
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Ubuntu:wght@400;700&display=swap"
      rel="stylesheet"
    />
  </Head>
  <Layout>
    <Component {...pageProps} />
  </Layout>
  </>
  );
}

export default MyApp
