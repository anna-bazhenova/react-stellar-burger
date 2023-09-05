import { FormEvent } from 'react';
import { EmailInput, PasswordInput, Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from '../form.module.css';
import { register } from '../../services/actions/auth-actions';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { useForm } from '../../hooks/useForm';
import { Link } from 'react-router-dom';


const Register = () => {
  
  const {form, handleChange } = useForm({ name: "", email: "", password: "" });

  const dispatch = useAppDispatch();
  const handleUserRegistration = (e: FormEvent) => {
    e.preventDefault();
    dispatch(register(form));
  }

  return (
    <div className={styles.content}>
      <div>
        <form onSubmit={handleUserRegistration}>
          <h1 className="text text_type_main-medium">Регистрация</h1>
          <Input
            type={'text'}
            placeholder={'Имя'}
            onChange={handleChange}
            value={form.name}
            name={'name'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
            extraClass="mt-6"
          />
          <EmailInput
            onChange={handleChange}
            value={form.email}
            name={'email'}
            isIcon={false}
            extraClass="mt-6"
          />
          <PasswordInput
            onChange={handleChange}
            value={form.password}
            name={'password'}
            extraClass="mb-6 mt-6"
          />
          <Button htmlType="submit">Зарегистрироваться</Button>
        </form>
        <p className="text text_type_main-default text_color_inactive mt-20 mb-4">Уже зарегистрированы? <Link to="/login" className={styles.link}>Войти</Link></p>
      </div>
    </div>
  );
}

export { Register };