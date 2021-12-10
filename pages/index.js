import styles from '../styles/Home.module.sass';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import { useState } from 'react';
import { useRouter } from 'next/router';

import FormMessage from '../components/FormMessage';

const Home = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  // useEffect(() => {
  //   if (isSubmitting) {
  //     if (Object.keys(errors).length === 0) {
  //       createNote();
  //     }
  //     else {
  //       setIsSubmitting(false);
  //     }
  //   }
  // }, [errors]);

  const createMessage = async (message) => {
    try {
      await fetch(`http://localhost:3000/api/message`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Secret messages | Nextjs MongoDB</title>
        <meta name="description" content="Secret messages. Next.js MongoDB" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FormMessage createMessage={createMessage} />
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
