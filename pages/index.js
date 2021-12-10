import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.sass';

import FormMessage from '../components/FormMessage';

const Home = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Secret messages | Nextjs MongoDB</title>
        <meta name="description" content="Secret messages. Next.js MongoDB" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FormMessage />
    </div>
  );
};

// export const getServerSideProps = async (context) => {
//   const res = await fetch(`${process.env.URL}/api/hello`);
//   const data = await res.json();

//   if (!data) {
//     return { notFound: true };
//   }

//   return {
//     props: { data },
//   };
// };

export default Home;
