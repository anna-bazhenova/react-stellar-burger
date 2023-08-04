import React from 'react';
import AppHeader from "../components/app-header/app-header";
import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './form.module.css';


function Login() {
  const [value, setValue] = React.useState('');
  const onChange = e => {
    setValue(e.target.value)
  }

  return (
    <div>
      <AppHeader></AppHeader>
      <main className={styles.content}>
        <div>
          <form>
            <h1 className="text text_type_main-medium">Вход</h1>
            <EmailInput
              onChange={onChange}
              value={value}
              name={'email'}
              isIcon={false}
              extraClass="mt-6"
            />
            <PasswordInput
              onChange={onChange}
              value={value}
              name={'password'}
              extraClass="mb-6 mt-6"
            />
            <Button>Войти</Button>
          </form>
          <p className="text text_type_main-default text_color_inactive mt-20 mb-4">Вы — новый пользователь? <a href="/register" className={styles.link}>Зарегистрироваться</a></p>
          <p className="text text_type_main-default text_color_inactive m-0">Забыли пароль? <a href="/forgot-password" className={styles.link}>Восстановить пароль</a></p>
        </div>
      </main>
    </div>
  );
}

export { Login };