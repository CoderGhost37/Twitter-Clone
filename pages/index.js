import Head from 'next/head';

const Home = () => {
  console.log('Home');
  return (
    <div>
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/twitter-logo.png" />
      </Head>
      <h1 className="text-blue-500 font-bold">Let us Begin</h1>
    </div>
  );
};

export default Home;
