import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import Head from 'next/head'

import { useRouter } from 'next/router';
import ScrollableHeader from '../components/ScrollableHeader.js';
import FixedHeader from '../components/FixedHeader.js';

export default function Index({ posts, globalData }) {
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
          Welcome to my blog !
        </h1>
        <p>
          Hello, I'm Melanie, a creative and highly motivated professional with a passion for crafting innovative digital experiences. This is a next.js blog, created using netlify alongside github, I don't update it too regularly, it's kind of a dump onece evry 6 months type vibe but hoping to keep it more up to date in the future so bare with me while I catch up on what I have been up to!
        <p>
          Each of the posts below is little insights into work I have done over the last while, gif you have any questions please feel free to get in touch.
        </p>
        <br/>
        
       
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          {globalData.blogTitle}
        </h1>
        <ul className="w-full">
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
                <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
                  {post.data.date && (
                    <p className="uppercase mb-3 font-bold opacity-60">
                      {post.data.date}
                    </p>
                  )}
                  <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                  {post.data.description && (
                    <p className="mt-3 text-lg opacity-60">
                      {post.data.description}
                    </p>
                  )}
                  <ArrowIcon className="mt-4" />
                </a>
              </Link>
            </li>
          ))}
        </ul>
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
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
