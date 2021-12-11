import style from '../styles/pages/Custom404.module.sass';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className={style.error}>
      <h1 className={style.header}>404</h1>
      <p className={style.subtext}>page not found</p>
      <Link href="/">
        <a className={style.linkHome} rel="noopener noreferrer">
          go home
        </a>
      </Link>
    </div>
  );
};
export default Custom404;
