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

export default function UniversityPage({ posts, globalData }) {
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
      <Header>
        <title>Education</title>
        
      </Header>

      <main className="w-full">
      <h1 className="text-3xl lg:text-5xl text-center mb-12">
        ⭐Education⭐
        </h1>
        <h2>University of Limerick</h2>
        <p>
            My educational journey has been a rich tapestry of linguistic exploration, cultural immersion, and technological innovation. I completed my Bachelor of Arts with a focus on languages and linguistics, specializing in Teaching English to Speakers of Other Languages (TESOL) while also delving into Spanish and Japanese language and culture. During my undergraduate studies, I undertook a significant translation project, translating Ciro Alegría’s "Fábulas y Leyendas de Latinoamérica" into English, which deepened my appreciation for language and literature. This project not only sharpened my language skills but also instilled in me a profound understanding of cross-cultural communication and storytelling.
        </p>
        <br></br>
        <p>
            My academic pursuits extended beyond linguistics into the realms of sociology, philosophy, and new media studies, providing me with a holistic understanding of the interconnectedness of language, society, and technology. This interdisciplinary approach fueled my curiosity and laid the groundwork for my future endeavors in the realm of interactive media.
        </p>
        <p>
        Key Modules:
        <ul>
            <li>Translation of Ciro Alegría’s "Fábulas y Leyendas de Latinoamérica"</li>
            <li>Japanese Language, Culture, and Society (Levels 1-3)</li>
            <li>Spanish Language and Society (Levels 1-3)</li>
            <li>Linguistics (Levels 1-6)</li>
            <li>Celtic Civilization: Culture, Language, and Representations</li>
            <li>Discourse Analysis for Arts, Humanities & Social Sciences</li>
            <li>Socio-political Issues in the Hispanic World: Society, Culture, and Representation</li>
            <li>Modern Trends in Hispanic Culture and the Arts</li>
            <li>Indigenismo and Negrismo in Latin American Literature</li>
            <li>Modern and Contemporary Spain</li>
            <li>Media and Current Issues in the Spanish-speaking World</li>
            <li>Women's Narratives of Resistance in the Hispanic World Spain, Europe, and Beyond</li>
        </ul>
        </p>
        <br></br>
        <h2>University College Cork</h2>
        <p>
            Building upon this foundation, I pursued a Master's degree in Interactive Media, where I delved into the cutting-edge realms of digital design and technology. Here, I had the opportunity to engage in a diverse range of projects that pushed the boundaries of innovation and creativity. One of the highlights of my master's program was my thesis project, which involved the development, implementation, and evaluation of a groundbreaking VR tool for empathy training in student Intellectual Disability Nurses. This project incorporated elements such as 360-degree video, ambisonic sound, and haptic feedback, providing a immersive and impactful learning experience. The success of this project not only demonstrated my technical proficiency but also underscored my passion for using technology for social good.
        </p>
        <br></br>
        <p>
            Throughout my academic journey, I've honed my skills in 3D animation, audio application development, iOS app development, and web development, further solidifying my expertise in leveraging technology to create impactful solutions. These experiences have not only shaped my academic and professional trajectory but have also instilled in me a lifelong commitment to innovation and continuous learning.
        </p>
        <p>
            Modules Studied:
            <ul>
                <li>Authoring</li>
                <li>Web Development for Digital Media</li>
                <li>Graphics for Interactive Media</li>
                <li>Audio and Sound Engineering</li>
                <li>Digital Video Capture and Packaging</li>
                <li>3D Graphics and Modelling</li>
                <li>Future and Emerging Interaction Technologies</li>
                <li>Internet-based Applications</li>
                <li>Digital Video Compression and Delivery</li>
                <li>Human-Computer Interaction</li>
                <li>Mobile Multimedia</li>
                <li>Audio Processing</li>
            </ul>
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