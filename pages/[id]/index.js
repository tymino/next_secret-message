// import styles from '../styles/pages/Message.module.sass';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import { useState } from 'react';
import { useRouter } from 'next/router';

import FormPassword from '../../components/FormPassword';
import MessageBlock from '../../components/MessageBlock';

const Message = () => {
  const [activePasswordBlock, setActivePasswordBlock] = useState(true);
  const router = useRouter();

  const [encryptedMessage, setEncryptedMessage] = useState('');

  const submitPassword = async (password) => {
    try {
      const response = await fetch(
        `${process.env.URL}/api/message/${router.query.id}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ password }),
        },
      );

      const json = await response.json();

      setEncryptedMessage(json.data);
      setActivePasswordBlock(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Head>
        <title>Secret messages | Nextjs MongoDB</title>
        <meta name="description" content="Secret messages. Next.js MongoDB" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {activePasswordBlock ? (
        <FormPassword submitPassword={submitPassword} />
      ) : (
        <MessageBlock message={encryptedMessage} />
      )}
    </div>
  );
};

export default Message;
