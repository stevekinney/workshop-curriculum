import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Steve's Workshops: Home</title>
      </Head>

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Link href="/react-hooks">
        <a>React Hooks</a>
      </Link>
    </div>
  );
}
