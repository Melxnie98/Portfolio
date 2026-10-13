import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import FixedHeader from '../components/FixedHeader.js'
import ScrollableHeader from '../components/ScrollableHeader.js';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <span className="theme-bejamas" />
      <FixedHeader title="+353831381137" />
      <ScrollableHeader />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
