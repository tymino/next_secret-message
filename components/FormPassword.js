import style from '../styles/components/FormPassword.module.sass';
import { useState } from 'react';

const FormPassword = ({ submitPassword }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const validatePassword = () => {
    if (password.length < 4 || password.length > 8) {
      setError(true);
      return true;
    }
  };

  const handleinputPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validatePassword();
    if (isValid) return;

    submitPassword(password);
  };
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
