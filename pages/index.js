import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.sass';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Secret messages | Node.js Express</title>
        <meta name="description" content="Secret messages. Next.js MongoDB" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  );
}
