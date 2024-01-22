import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full">
      <h1 className="text-3xl lg:text-5xl text-center mb-12">
          About Me
        </h1>
        <p>
          Hello, I'm Melanie, a creative and highly motivated graduate with a passion for crafting innovative digital experiences. My academic journey includes earning an MSc in Interactive Media from University College Cork and a BA in Advanced Spanish & Linguistics with TESOL from the University of Limerick.
        </p>
        <p>
          Skills:
          My diverse skill set encompasses a range of programming languages such as JavaScript, CSS, HTML, C#, PHP, Swift, Java, ChucK, and Python. I am proficient in utilizing development tools like Unity, Pro Tools, LogicPro, FinalCut, and XCode. Additionally, my expertise extends to Human-Computer Interaction (HCI), Blender, and various languages including Spanish, Irish, Japanese, and English.
          </p>
        <p>
          Experience:
          As a Laboratory Demonstrator at University College Cork, I immersed myself in both audio & sound engineering and web development for digital media. Guiding students on studio-based sound engineering and teaching web development, I emphasized user-responsive applications using Java.

          In my role as a Freelance Web Designer/Developer at Appoint One, I successfully designed and implemented a responsive website using Node.js, CSS, and HTML for Appoint One Mediation Services. My focus on usability and accessibility, coupled with optimizing the website for speed and SEO, showcased my commitment to delivering high-quality web solutions.
          </p>
        <p>
          Projects:

          Masters Dissertation: Developed a VR tool for empathy training in student intellectual disability nurses, incorporating 360 video, ambisonic sound, and haptic responses delivered through Unity and C# for Android.

          3D Animation: Modeled and created short animations using Blender & Three.js with WebXR.

          Audio Application Development: Mixed and mastered tracks using Logic Pro and created a Lo-Fi music generator application using ChucK.
          </p>
        <p>
          Why I'm Excited:
          I am thrilled about the opportunity to contribute to innovative projects, combining my technical expertise and creative thinking. My experiences in VR development, web design, and audio engineering have equipped me to deliver impactful digital experiences.

          Let's embark on a journey to create captivating and memorable digital stories together!
        </p>
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
