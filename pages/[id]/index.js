// import styles from '../styles/pages/Message.module.sass';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import { useState } from 'react';
import { useRouter } from 'next/router';

import FormPassword from '../../components/FormPassword';
import MessageBlock from '../../components/MessageBlock';

const Message = () => {
  const router = useRouter();
  const [activePasswordBlock, setActivePasswordBlock] = useState(true);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [encryptedMessage, setEncryptedMessage] = useState('');

  const submitPassword = async (password) => {
    try {
      const response = await fetch(
        `https://secret-message-lime.vercel.app/api/message/${router.query.id}`,
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify({ password }),
        },
      );

      const json = await response.json();

      if (!json.success) {
        setPassword('');
        setError(true);
        return;
      }

      setEncryptedMessage(json.data);
      setActivePasswordBlock(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleinputPassword = (e) => {
    setError(false);
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 4 || password.length > 8) {
      setError(true);
      return;
    }

    submitPassword(password);
  };

  return (
    <div>
      <Head>
        <title>Secret messages | Nextjs MongoDB</title>
        <meta name="description" content="Secret messages. Next.js MongoDB" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {activePasswordBlock ? (
        <FormPassword
          password={password}
          error={error}
          handleinputPassword={handleinputPassword}
          handleSubmit={handleSubmit}
        />
      ) : (
        <MessageBlock message={encryptedMessage} />
      )}
    </div>
  );
};

export default Message;
