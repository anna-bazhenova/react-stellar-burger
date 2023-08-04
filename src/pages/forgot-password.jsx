import React from 'react';
import AppHeader from "../components/app-header/app-header";
import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './form.module.css';


function ForgotPassword() {
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
            <EmailInput
              onChange={onChange}
              value={value}
              name={'email'}
              isIcon={false}
              placeholder={'Укажите e-mail'}
              extraClass="mt-6 mb-6"
            />
            <Button>Восстановить</Button>
          </form>
          <p className="text text_type_main-default text_color_inactive mt-20 mb-4">Вспомнили пароль? <a href="/login" className={styles.link}>Войти</a></p>
        </div>
      </main>
    </div>
  );
}

export { ForgotPassword };