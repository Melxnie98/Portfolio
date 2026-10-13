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
        <div className="contentBlock">
          <h2>Product Engineer - Nexus Inclusion (March 2025 - Current)</h2>
          <p>Designing product experiences for an AI-powered accessibility data platform, from concept and prototype through to interface design and delivery.</p>
        </div>
        <div className="contentBlock">
          <h2>Learning Designer & Web Developer - University of Auckland (March 2024 - Jan 2025)</h2>
            <ul className="custom-bullets">
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
        </div>
          
        <div className="contentBlock">
          <h2>Laboratory Demonstrator, University College Cork (2023)</h2>
          <p> Technical instruction and mentoring across programming, audio engineering, and educational technology.</p>
          <ul>
            <li>Technical Instruction: delivered JavaScript, PHP, HTML/CSS tutorials and Java programming through Processing IDE</li>
            <li>Audio Engineering: provided Logic Pro and music production mentoring for multimedia projects</li>
            <li>Educational Technology: taught Python scripting for Minecraft and Final Cut Pro video editing</li>
          </ul>
        </div>
        <div className="contentBlock">
          <h2>Priority Operations Specialist, Telus International - Stripe (2022 - 2023)</h2>
          <p>Customer-facing role within a world-class CX operation, supporting Stripe's enterprise users</p>
          <ul>
            <li>Empathetic Champion of the User: handled chat, phone, and email support for Stripe's enterprise (Priority) customers, resolving complex account and API integration issues</li>
            <li>User Pain-Point Awareness: identified and flagged card testing and suspicious activity patterns, managing support cases end-to-end with direct, sustained exposure to real user friction</li>
          </ul>
        </div>
        <div className="contentBlock">
          <h2>Customer Support Representative, SAP Galway (2021 - 2022)</h2>
          <p>
            During my tenure at SAP Galway, as part of the iXP intern program, I offered customer support services to clients worldwide, with a focus on Spanish and English-speaking customers. I actively participated in SAP's Dev X Challenge, contributing to a team that won first prize for developing innovative solutions to enhance mobility in Dublin. My role involved resolving customer inquiries, providing technical assistance, and fostering positive customer relationships.
          </p>
        </div>
        
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