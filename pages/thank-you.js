import React from 'react';
import Header from '../components/Header';
import { useRouter } from 'next/router';
import ScrollableHeader from '../components/ScrollableHeader';
import Head from 'next/head'
import Layout, { GradientBackground } from '../components/Layout';
import { getPosts } from '../utils/mdx-utils';
import Footer from '../components/Footer';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Thanks({ posts, globalData }) {
  const router = useRouter();
  
  const navigateTo = (path) => {
    router.push(path);
  }

  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <SEO title={globalData.name + " - Thank you"} description={globalData.blogTitle} />
        <title>Melanie Leonard: Thank you</title>
      </Head>
      <Header>
        <title>Thank you</title>
      </Header>

      <main className="w-full">
        <h1>Thanks for Getting in touch</h1>     
        <h2>I'll reach out to you soon!</h2>
        <button  onClick={() => navigateTo('/index')}>Continue browsing</button> 
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
};

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}