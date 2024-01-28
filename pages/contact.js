import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollableHeader from '../components/ScrollableHeader';
import ContactForm from '../components/ContactForm';
import styles from '../components/ContactForm.module.css';
import { useRouter } from 'next/router';
import Layout, { GradientBackground } from '../components/Layout';

const ContactPage = () => {
  const router = useRouter();
  
    const navigateTo = (path) => {
      router.push(path);
    }
  return (
    <Layout>
      <Header>
        <title>Contact me</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Header>

      <main>
        <ContactForm  />
      </main>
     
      </Layout>
  );
};

export default ContactPage;