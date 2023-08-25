import React, { ChangeEvent, FormEvent } from 'react';
import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from '../form.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { requestPasswordReset } from '../../services/actions/auth-actions';
import { useAppDispatch } from '../../hooks/redux-hooks';


const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const dispatch = useAppDispatch()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await dispatch(requestPasswordReset(email));
    navigate("/reset-password", { replace: true });
  };

  return (
    <div className={styles.content}>
      <div>
        <form onSubmit={handleSubmit}>
          <h1 className="text text_type_main-medium">Восстановление пароля</h1>
          <EmailInput
            onChange={onEmailChange}
            value={email}
            name={'email'}
            isIcon={false}
            placeholder={'Укажите e-mail'}
            extraClass="mt-6 mb-6"
          />
          <Button htmlType='submit'>Восстановить</Button>
        </form>
        <p className="text text_type_main-default text_color_inactive mt-20 mb-4">Вспомнили пароль? <Link to="/login" className={styles.link}>Войти</Link></p>
      </div>
    </div>
  );
}

export { ForgotPassword };