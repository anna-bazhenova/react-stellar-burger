import React from 'react';
import AppHeader from "../components/app-header/app-header";
import { PasswordInput, Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './form.module.css';


function ResetPassword() {
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
            <h1 className="text text_type_main-medium">Восстановление пароля</h1>
            <PasswordInput
              onChange={onChange}
              value={value}
              name={'password'}
              extraClass="mb-6 mt-6"
              placeholder={'Введите новый пароль'}
            />
            <Input
              type={'text'}
              placeholder={'Введите код из письма'}
              onChange={e => setValue(e.target.value)}
              value={value}
              name={'recovery-code'}
              error={false}
              errorText={'Ошибка'}
              size={'default'}
              extraClass="mb-6"
            />
            <Button>Сохранить</Button>
          </form>
          <p className="text text_type_main-default text_color_inactive mt-20 mb-4">Вспомнили пароль? <a href="/login" className={styles.link}>Войти</a></p>
        </div>
      </main>
    </div>
  );
}

export { ResetPassword };