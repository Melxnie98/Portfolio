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

export default function ExperiancePage({ posts, globalData }) {
  const router = useRouter();
  
  const navigateTo = (path) => {
    router.push(path);
  }
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <SEO title={globalData.name + " - experience"} description={globalData.blogTitle} />
        <title>Melanie Leonard - experience</title>
      </Head>
      
      <Header>
        <title>Professional experience</title>
      </Header>
     

      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">Professional experience</h1>
        <h2>Learning Designer & Web Developer (March 2024 - current)</h2>
          <ul>
            <li>
              Upgrading the university’s learning and teaching practices website from campuspress to wordpress, with a complete redesign based on UX review. In charge of all custom php code. I was also responsible for maintenance of custom code including documentation on github.
            </li>
            <li>
            Immersive learning design - My focus in the learning design aspect of my role was on researching and implementing procedures for interactive 3D models, virtual tours, VR and XR research including NeRF’s and Gaussian splatting, and how to integrate these with Canvas, the university’s LMS.
            </li>
            <li>
            Part of graphic design team working on look and feel of new transdisciplinary courses, information books using indesign, creating moving icons using blender, other tools include illustrator, photoshop, python for graphic design & figma.
            </li>
            <li>
            Advised on improving accessibility of content and activities, including writing and maintaining information for teaching staff on accessibility and UDL best practice.
            </li>
            <li>
            Media capture and production - Filming and audio recording interviews and online lecture material, editing using adobe Premier pro
            </li>
            <li>
            General learning design - Developed learning exercises for Canvas using H5P. Focused on accessibility and Universal Design for Learning (UDL).
            </li>
          </ul>

          <h2>Freelance Web Designer/Developer (2023 - 2024)</h2>
          <p>
            As a Freelance Web Designer/Developer, I specialised in crafting responsive and visually appealing websites that prioritize usability and accessibility. Leveraging my expertise in Node.js, CSS, and HTML, I designed and implemented custom solutions tailored to meet clients' specific needs. With a keen eye for detail and a focus on optimization for speed and SEO, I delivered high-quality websites that elevated brands and enhanced user experiences.
          </p>
          <br></br>

          <h2>Laboratory Demonstrator, University College Cork (2023)</h2>
          <p>
            At University College Cork, I was as a Laboratory Demonstrator, guiding students in various aspects of audio and sound engineering(Logic pro, ProTools & ChucK), web development for digital media (HTML, CSS, PHP & JavaScript), 3D modelling and Animation (Blender), and authoring (Java for processing). I mentored students on recording music and voiceovers, provided tutorials on web development technologies, and facilitated workshops on Java programming and application development. Additionally, I assisted in teaching short film creation and production, fostering creativity and technical skills among students.
          </p>
          <br></br>
          <h2>Priority Operations Specialist, Telus International - Stripe (2022 - 2023)</h2>
          <p>
            As a Priority Operations Specialist at Telus International - Stripe, I began as a customer support specialist before swiftly transitioning to handle more technical and critical issues. I provided support for Stripe products, including API support and resolution of disputes, account issues, and suspicious activity claims. My role involved delivering exceptional customer service via chat, email, and phone, ensuring timely resolution of issues to maintain customer satisfaction.
          </p>
          <br></br>
          <h2>Customer Support Representative, SAP Galway (2021 - 2022)</h2>
          <p>
            During my tenure at SAP Galway, as part of the iXP intern program, I offered customer support services to clients worldwide, with a focus on Spanish and English-speaking customers. I actively participated in SAP's Dev X Challenge, contributing to a team that won first prize for developing innovative solutions to enhance mobility in Dublin. My role involved resolving customer inquiries, providing technical assistance, and fostering positive customer relationships.
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