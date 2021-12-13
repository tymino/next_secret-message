import style from '../styles/pages/Custom404.module.sass';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className={style.error}>
      <h1 className={style.header}>404</h1>
      <p className={style.subtext}>страница не найдена</p>
      <Link href="/">
        <a className={style.linkHome} rel="noopener noreferrer">
          главная
        </a>
      </Link>
    </div>
  );
};
export default Custom404;
