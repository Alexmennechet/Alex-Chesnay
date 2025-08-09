import '../styles.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Header from '../components/Layout/Header';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={router.asPath}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
