import Head from 'next/head';

import { Feed, Sidebar, Widgets } from '../components';
import { fetchTweets } from '../utils/fetchTweets';

const Home = ({ tweets }) => (
  <div>
    <Head>
      <title>Twitter</title>
      <link rel="icon" href="/twitter-logo.png" />
    </Head>

    <main className="grid grid-cols-9">
      <Sidebar />

      <Feed posts={tweets} />

      <Widgets />
    </main>
  </div>
);

export async function getServerSideProps() {
  const tweets = await fetchTweets();
  console.log(tweets);
  return {
    props: { tweets },
  };
}

export default Home;
