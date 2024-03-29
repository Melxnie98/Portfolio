import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <link rel="icon" href="/public/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>
  );
}
