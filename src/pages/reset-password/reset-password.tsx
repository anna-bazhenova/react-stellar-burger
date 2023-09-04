import { FormEvent } from 'react';
import { PasswordInput, Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from '../form.module.css';
import { Navigate, useNavigate } from 'react-router';
import { resetPassword } from '../../services/actions/auth-actions';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { useForm } from '../../hooks/useForm';


const ResetPassword = () => {
  
  const {form, handleChange } = useForm({ token: "", password: "" });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  const isPasswordResetPending = useAppSelector((store) => store.auth.isPasswordResetPending);

  if (!isPasswordResetPending) {
    return <Navigate to="/" replace={true} />;
  }
  
  const handleResetPassword = async (e: FormEvent) => {
    e.preventDefault();
    await dispatch(resetPassword(form.password, form.token))
    navigate("/login", { replace: true });
  };

  return (
    <div className={styles.content}>
      <div>
        <form onSubmit={handleResetPassword}>
          <h1 className="text text_type_main-medium">Восстановление пароля</h1>
          <PasswordInput
            onChange={handleChange}
            value={form.password}
            name={'password'}
            extraClass="mb-6 mt-6"
            placeholder={'Введите новый пароль'}
          />
          <Input
            type={'text'}
            placeholder={'Введите код из письма'}
            onChange={handleChange}
            value={form.token}
            name={'token'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
            extraClass="mb-6"
          />
          <Button htmlType="submit">Сохранить</Button>
        </form>
        <p className="text text_type_main-default text_color_inactive mt-20 mb-4">Вспомнили пароль? <a href="/login" className={styles.link}>Войти</a></p>
      </div>
    </div>
  );
}

export { ResetPassword };