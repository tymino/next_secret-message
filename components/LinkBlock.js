import style from '../styles/components/LinkBlock.module.sass';
import Link from 'next/link';
import { useState } from 'react';

const LinkBlock = ({ urlLink, setActiveHomeBlock }) => {
  const [copyIsHide, setCopyIsHide] = useState(true);
  const handleClickLink = () => setActiveHomeBlock(true);

  const handleClickCopy = () => {
    const dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = `${process.env.URL}/${urlLink}`;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    setCopyIsHide(false);
  };

  return (
    <div className={style.container}>
      <h1 className={style.header}>url</h1>
      <Link href={`/${urlLink}`}>
        <a className={style.linkUrl} rel="noopener noreferrer">
          {`${process.env.URL}/${urlLink}`}
        </a>
      </Link>
      <div className={style.wrapper}>
        {copyIsHide ? (
          <button className={style.copyBtn} onClick={handleClickCopy}>
            скопировать
          </button>
        ) : (
          <div className={style.copiedInfo}>скопировано</div>
        )}

        <Link href="/">
          <a className={style.linkHome} onClick={handleClickLink}>
            главная
          </a>
        </Link>
      </div>
    </div>
  );
};

export default LinkBlock;
