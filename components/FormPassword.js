import style from '../styles/components/FormPassword.module.sass';

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
      <button className={style.submit} type="submit" onClick={handleSubmit}>
        отправить
      </button>
    </form>
  );
};

export default FormPassword;
