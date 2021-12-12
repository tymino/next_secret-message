import styles from '../styles/pages/Home.module.sass';
import Head from 'next/head';
import { useState } from 'react';

import FormMessage from '../components/FormMessage';
import LinkBlock from '../components/LinkBlock';

const Home = () => {
  const [activeHomeBlock, setActiveHomeBlock] = useState(true);
  const [urlLink, setUrlLink] = useState('');

  const createMessage = async (message) => {
    try {
      const response = await fetch(`https://secret-message-lime.vercel.app/api/message`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(message),
      });

      const json = await response.json();

      if (!json.success) {
        return;
      }

      setUrlLink(json.url);
      setActiveHomeBlock(false);
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

      {activeHomeBlock ? (
        <FormMessage createMessage={createMessage} />
      ) : (
        <LinkBlock urlLink={urlLink} setActiveHomeBlock={setActiveHomeBlock} />
      )}
    </div>
  );
};

export default Home;
