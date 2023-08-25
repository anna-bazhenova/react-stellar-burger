import { ChangeEvent, FormEvent, useState } from 'react';
import { EmailInput, PasswordInput, Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from '../form.module.css';
import { register } from '../../services/actions/auth-actions';
import { useAppDispatch } from '../../hooks/redux-hooks';


const Register = () => {
  
  const [form, setValue] = useState({ name: "", email: "", password: "" });
  const onFromChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

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
            onChange={onFromChange}
            value={form.name}
            name={'name'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
            extraClass="mt-6"
          />
          <EmailInput
            onChange={onFromChange}
            value={form.email}
            name={'email'}
            isIcon={false}
            extraClass="mt-6"
          />
          <PasswordInput
            onChange={onFromChange}
            value={form.password}
            name={'password'}
            extraClass="mb-6 mt-6"
          />
          <Button htmlType="submit">Зарегистрироваться</Button>
        </form>
        <p className="text text_type_main-default text_color_inactive mt-20 mb-4">Уже зарегистрированы? <a href="/login" className={styles.link}>Войти</a></p>
      </div>
    </div>
  );
}

export { Register };