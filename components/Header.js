import Link from 'next/link';
import Head from 'next/head';  // Import Head component

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      {/* Include the favicon link inside the Head component */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* The rest of your header content */}
      <img src="/images/MLlogo." alt="Logo" />
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}

