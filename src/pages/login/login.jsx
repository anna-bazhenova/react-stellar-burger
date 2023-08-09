import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from '../form.module.css';
import { useNavigate, useLocation, Link } from "react-router-dom"
import {login} from "../../services/actions/auth"


function Login() {
  const [form, setValue] = useState({ email: "", password: "" });
  const onFromChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const isAuthorized = useSelector((store) => store.authReducer.isAuthorized);
  
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(login(form));
    },
    [form, dispatch]
  );

  if (isAuthorized) {
    navigate(location.state?.from || "/");
  }

  return (
    <div className={styles.content}>
      <div>
        <form onSubmit={handleLogin}>
          <h1 className="text text_type_main-medium">Вход</h1>
          <EmailInput
            onChange={onFromChange}
            name={'email'}
            isIcon={false}
            extraClass="mt-6"
            value={form.email}
          />
          <PasswordInput
            onChange={onFromChange}
            name={'password'}
            extraClass="mb-6 mt-6"
            value={form.password}
          />
          <Button htmlType="submit">Войти</Button>
        </form>
        <p className="text text_type_main-default text_color_inactive mt-20 mb-4">Вы — новый пользователь? <Link to="/register" className={styles.link}>Зарегистрироваться</Link></p>
        <p className="text text_type_main-default text_color_inactive m-0">Забыли пароль? <Link to="/forgot-password" className={styles.link}>Восстановить пароль</Link></p>
      </div>
    </div>
  );
}

export { Login };