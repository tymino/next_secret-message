import style from '../styles/FormMessage.module.sass';
import { useEffect, useState } from 'react';

const FormMessage = ({}) => {
  const [formMessage, setFormMessage] = useState({
    message: '',
    password: '',
  });
  const [errorFormMessage, setErrorFormMessage] = useState({
    message: false,
    password: false,
  });

  const validate = () => {
    const localObj = {};
    let errs = false;

    if (formMessage.message.length < 1) {
      localObj.message = true;
      errs = true;
    }

    if (formMessage.password.length < 4 || formMessage.password.length > 8) {
      localObj.password = true;
      errs = true;
    }

    setErrorFormMessage(localObj);
    return errs;
  };


  const handleFormMessage = (e) => {
    setFormMessage({
      ...formMessage,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errs = validate();
    if (errs) return;

    console.log(formMessage);
  };

  // useEffect(() => {
  //   validateText();
  //   // validatePassword();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [formMessage]);

  return (
    <form className={style.homePage} method="post">
      <h1 className={style.header}>Сообщение</h1>
      <div className={style.messageWrapper}>
        <textarea
          className={
            errorFormMessage.message
              ? `${style.message} ${style.error}`
              : `${style.message}`
          }
          name="message"
          onChange={handleFormMessage}
          value={formMessage.message}></textarea>
        <p className={style.messageLimit}>0/500</p>
      </div>
      <div className={style.passwordWrapper}>
        <input
          className={
            errorFormMessage.password
              ? `${style.password} ${style.error}`
              : `${style.password}`
          }
          type="text"
          name="password"
          onChange={handleFormMessage}
          value={formMessage.password}
        />
        <p className={style.passwordInfo}>4-8 длина</p>
      </div>
      <button className={style.submit} type="submit" onClick={handleSubmit}>
        отправить
      </button>
    </form>
  );
};

export default FormMessage;
