import React from 'react';
import AppHeader from "../components/app-header/app-header";
import { EmailInput, PasswordInput, Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './form.module.css';


function Register() {
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
            <h1 className="text text_type_main-medium">Регистрация</h1>
            <Input
              type={'text'}
              placeholder={'Имя'}
              onChange={e => setValue(e.target.value)}
              value={value}
              name={'name'}
              error={false}
              errorText={'Ошибка'}
              size={'default'}
              extraClass="mt-6"
            />
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
            <Button>Зарегистрироваться</Button>
          </form>
          <p className="text text_type_main-default text_color_inactive mt-20 mb-4">Уже зарегистрированы? <a href="/login" className={styles.link}>Войти</a></p>
        </div>
      </main>
    </div>
  );
}

export { Register };