import Head from 'next/head';

import { Feed, Sidebar, Widgets } from '../components';

const Home = () => {
  console.log('Home');
  return (
    <div>
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/twitter-logo.png" />
      </Head>

      <main className="grid grid-cols-9">
        <Sidebar />

        <Feed />

        <Widgets />
      </main>
    </div>
  );
};

export default Home;
