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

export default function About({ posts, globalData }) {
    const router = useRouter();
    
    const navigateTo = (path) => {
      router.push(path);
    }
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Melanie Leonard - about</title>
        <SEO title={globalData.name + " - about"} description={globalData.blogTitle} />
      </Head>
      
      <Header>
        <title>About me</title>
      </Header>

      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12 contentBlock">About Me</h1>
          <p>Hi, I'm Melanie, creative, curious, and a little obsessed with all things nature. This section is to outline who I am outside of work, if that is of interest!</p>
          <p>I'm originally from Ireland, though travel has always been part of the story. I loved languages from a young age, studying English, Irish, Spanish and Japanese in secondary school. I later studied Spanish and Japanese in college and spent a year in Madrid on Erasmus, which only fed my love of languages and exploring new places. Later, I spent a year living in New Zealand, where I worked as a learning designer & web developer for the University of Auckland, but more excitingly I got to travel the whole country. I camped, surfed, hiked, and drove the length of the South Island in a campervan (in winter, which I do not recommend, but would absolutely do again). Highlights include spotting fairy penguins, climbing Mt Cook, and pretty much every beach and waterfall I stumbled across along the way.</p>
          <p>I'm a total bookworm, fantasy novels especially, and I love love love the sea. I spend a lot of weekends helping my partner (PhD researcher) with oyster restoration projects around Ireland, which involves the most random things from counting baby oysters to making cages and putting them in the sea or testing levels of oxygen in the water. I get to see the coolest wildlife from crabs and snails to pipefish and shrimp and I usually find myself in the water myself for a sea swim that I told myself I would probably be able to resist. I grew up a competitive horse rider, swam and ran competitively, and basically played every team sport going. In college I was secretary of the Equestrian Club and Health & Safety Officer for the Brazilian Jiu Jitsu Club but these days my exercise is a bit more relaxed: swimming, hiking, sea swims, and the odd game of tag rugby.</p>
          <p>When I'm not outdoors, I'm probably playing guitar badly (or drums even worse), painting, drawing, or getting invested in games with pretty animation and art styles. Throw in a love of flowers, plants, nature, music, the odd spot of Lego, a profound love of dogs, and any excuse to travel somewhere new, and that's pretty much me.</p>
          
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
  