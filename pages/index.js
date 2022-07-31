import Head from 'next/head';
import { Toaster } from 'react-hot-toast';

import { Feed, Sidebar, Widgets } from '../components';
import { fetchTweets } from '../utils/fetchTweets';

const Home = ({ tweets }) => (
  <div className="lg:max-w-6xl mx-auto overflow-hidden max-h-screen py-2">
    <Head>
      <title>Twitter</title>
      <link rel="icon" href="/twitter-logo.png" />
    </Head>
    <Toaster />

    <main className="grid grid-cols-9">
      <Sidebar />

      <Feed posts={tweets} />

      <Widgets />
    </main>
  </div>
);

export async function getServerSideProps() {
  const tweets = await fetchTweets();

  return {
    props: { tweets },
  };
}

export default Home;
