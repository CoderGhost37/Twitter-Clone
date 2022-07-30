import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/twitter-logo.png" />
      </Head>
      <h1 className='text-blue-500 font-bold'>Let us Begin</h1>
    </div>
  )
}
