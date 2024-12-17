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
      </Head>
      
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />

      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
        ⭐About Me⭐
        </h1>
        <p>
          Hello, I'm Melanie, a creative and highly motivated professional with a passion for crafting innovative & accessible digital experiences. My academic journey includes earning an MSc in Interactive Media from University College Cork and a BA in Advanced Spanish & Linguistics with TESOL from the University of Limerick. I am a Certified Professional in Accessability Core Competencies having passed the IAAP CPACC exam in 2024, and also have a Google UX design certificate.
        </p>
        
        <h2>
          Skills
        </h2>
        <p>
          My diverse skill set encompasses a range of programming languages such as JavaScript, CSS, HTML, C#, PHP, Swift, Java, ChucK, and Python. I am proficient in utilizing development tools like Unity, Pro Tools, LogicPro, FinalCut, and XCode. Additionally, my expertise extends to Human-Computer Interaction (HCI), Blender, and various languages including Spanish, Irish, Japanese, and English.
        </p>
        
        <h2>
          Projects:
        </h2>
        <p>
          Masters Dissertation: Developed a VR tool for empathy training in student intellectual disability nurses, incorporating 360 video, ambisonic sound, and haptic responses delivered through Unity and C# for Android.

          3D Animation: Modeled and created short animations using Blender & Three.js with WebXR.

          Audio Application Development: Mixed and mastered tracks using Logic Pro and created a Lo-Fi music generator application using ChucK.
          </p>
        <p>
          Why I'm Excited:
          I am thrilled about the opportunity to contribute to innovative projects, combining my technical expertise and creative thinking. My experiences in VR development, web design, and audio engineering have equipped me to deliver impactful digital experiences.

          Let's embark on a journey to create captivating and memorable digital stories together!
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
  