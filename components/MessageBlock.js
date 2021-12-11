import style from '../styles/components/MessageBlock.module.sass';
import Link from 'next/link';

const MessageBlock = ({ message }) => {
  return (
    <div className={style.container}>
      <h1 className={style.header}>сообщение</h1>

      <div className={style.wrapper}>
        <p className={style.text}>{message}</p>
      </div>

      <Link href='/'>
        <a className={style.linkHome} rel="noopener noreferrer">
          главная
        </a>
      </Link>
    </div>
  );
};

export default MessageBlock;
