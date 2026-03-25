import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollableHeader from '../components/ScrollableHeader';
import ContactForm from '../components/ContactForm';
import styles from '../components/ContactForm.module.css';
import { useRouter } from 'next/router';
import Layout, { GradientBackground } from '../components/Layout';
import SEO from '../components/SEO';
import { getGlobalData } from '../utils/global-data';
import { getPosts } from '../utils/mdx-utils';
import Head from 'next/head'

export default function AccessPage({ posts, globalData }) {
  const router = useRouter();
  
  const navigateTo = (path) => {
    router.push(path);
  }
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <SEO title={globalData.name + " - accessBugsThree"} description={globalData.blogTitle} />
        <title>Melanie Leonard - accessBugsThree</title>
      </Head>
      
      <Header>
        <title>ACCESSABILITY BUG TEST PAGE 3</title>
      </Header>
     

      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">how many probs can i make yippeeee</h1>
        <h3>This should be a h2 </h3>
        <h1>there should not be another h1</h1>
        <p>the below image has no alt text</p>
        <img src="https://www.katebackdrop.com/cdn/shop/files/186c369d720a6a3ee241c955d9f4ca46.jpg?v=1736844070&width=700" ></img>
          
           
        
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