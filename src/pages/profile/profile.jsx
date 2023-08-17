import { NavLink, Outlet } from 'react-router-dom';
import styles from './profile.module.css'
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { logout } from "../../services/actions/auth";


function Profile() {

  const setNavStyle = ({isActive}) => {
    return isActive ? `${styles.link} text text_type_main-medium text_color_primary mb-6` : `${styles.link} text text_type_main-medium text_color_inactive mb-6`
  }

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <div className={styles.content}>
      <div className={`${styles.containerNav} mr-15`}>
        <nav>
          <ul className={styles.list}>
            <li>
              <NavLink to="/profile" className={setNavStyle} end>
                Профиль
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile/orders" className={setNavStyle}>
                История заказов
              </NavLink>
            </li>
            <li onClick={handleLogout} className={`${styles.logoutLink} text text_type_main-medium text_color_inactive`}>Выход</li>
          </ul>
        </nav>
        <p className={`${styles.caption} text text_type_main-default text_color_inactive mt-20`}>В этом разделе вы можете изменить свои персональные данные</p>
      </div>
      <Outlet />
    </div>
  );
} 

export { Profile };