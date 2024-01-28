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

export default function ExperiancePage({ posts, globalData }) {
  const router = useRouter();
  
  const navigateTo = (path) => {
    router.push(path);
  }
  return (
    <Layout>
      <Header>
        <title>My experience</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Header>

      <main className="w-full">
      <h1 className="text-3xl lg:text-5xl text-center mb-12">
        ⭐Experience in the Field⭐
        </h1>
        <p>
          As a Laboratory Demonstrator at University College Cork, I immersed myself in both audio & sound engineering and web development for digital media. Guiding students on studio-based sound engineering and teaching web development, I emphasized user-responsive applications using Java.
        </p>
        <p>
          In my role as a Freelance Web Designer/Developer at Appoint One, I successfully designed and implemented a responsive website using Node.js, CSS, and HTML for Appoint One Mediation Services. My focus on usability and accessibility, coupled with optimizing the website for speed and SEO, showcased my commitment to delivering high-quality web solutions.
        </p>
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