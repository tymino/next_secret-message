import style from '../styles/components/FormPassword.module.sass';
import Link from 'next/link';

const FormPassword = ({ password, error, handleinputPassword, handleSubmit }) => {
  return (
    <form className={style.container}>
      <h1 className={style.header}>пароль</h1>
      <input
        className={error ? `${style.input} ${style.error}` : `${style.input}`}
        type="text"
        name="password"
        onChange={handleinputPassword}
        value={password}
      />
      <div className={style.wrapper}>
      <button className={style.submit} type="submit" onClick={handleSubmit}>
        отправить
      </button>
      <Link href='/'>
        <a className={style.linkHome} rel="noopener noreferrer">
          главная
        </a>
      </Link>
      </div>
    </form>
  );
};

export default FormPassword;
