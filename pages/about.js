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
        <h1 className="text-3xl lg:text-5xl text-center mb-12">About Me</h1>
          <p>
            Hello, I'm Melanie, a creative and highly motivated professional with a passion for crafting innovative & accessible digital experiences. After finishing my MSc I moved from Ireland to New Zealand for a year, where I worked for the University of Auckland as a learning designer & web developer. I absolutely loved my time here, got to travel the whole country, spent many weekends camping, surfing and hiking and got to travel the beautifl south island in a campervan (would not reccomend doing this at winter as i did but it was amazing). Highlights include seeing fairy penguins, climbing Mt Cook, and basically every beach and waterfall i had the privillage of seeing.
          </p>
          <p> 
            My academic journey includes earning an MSc in Interactive Media from University College Cork and a BA in Advanced Spanish & Linguistics with TESOL from the University of Limerick. I am a Certified Professional in Accessability Core Competencies having passed the IAAP CPACC exam in 2024, and also have a Google UX design certificate.
          </p>
          <h2>Interests</h2>
          <p>I am super interested in all things space related, while it's not something i have studied in any formal way I am prone to rabbit holes on things like dark energy and quantum entangleement, it is secretly a dream of mine to be able to work in this field some time in the future</p>
          <p>I really love reading fantasy books, listening to music of all kinds, playing guitar(badly), animals, surfing, swimming, hiking and travelling</p>
        <h2>
          Skills
        </h2>
        <p>
          My diverse skill set encompasses a range of programming languages such as JavaScript, CSS, HTML, C#, PHP, Swift, Java, ChucK, and Python. I am proficient in utilising development tools like Unity, Pro Tools, LogicPro, FinalCut, and XCode. Additionally, my expertise extends to Human-Computer Interaction (HCI), Blender, and various languages including Spanish, Irish, Japanese, and English.
        </p>
        
        <h2>
          Projects:
        </h2>
        <p>
          <a href="https://melanieleonard.netlify.app/posts/thesis">Masters Dissertation:</a> Developed a VR tool for empathy training in student intellectual disability nurses, incorporating 360 video, ambisonic sound, and haptic responses delivered through Unity and C# for Android.

          3D Animation: Modeled and created short animations using Blender & Three.js with WebXR.

          Audio Application Development: Mixed and mastered tracks using Logic Pro and created a Lo-Fi music generator application using ChucK.
          </p>
        <p>
          I am thrilled about the opportunity to contribute to innovative projects, combining my technical expertise and creative thinking. My experiences in VR development, web design, and audio engineering have equipped me to deliver impactful digital experiences.
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
  