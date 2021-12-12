import style from '../styles/components/LinkBlock.module.sass';
import Link from 'next/link';

const LinkBlock = ({ urlLink, setActiveHomeBlock }) => {
  const handleClickLink = () => setActiveHomeBlock(true);

  return (
    <div className={style.container}>
      <h1 className={style.header}>url</h1>
      <Link href={`/${urlLink}`}>
        <a className={style.linkUrl} rel="noopener noreferrer">
          {`${process.env.URL}/${urlLink}`}
        </a>
      </Link>
      <Link href="/">
        <a className={style.linkHome} onClick={handleClickLink}>
          главная
        </a>
      </Link>
    </div>
  );
};

export default LinkBlock;
