import { BurgerIcon, ListIcon, Logo, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import { NavLink } from "react-router-dom";

const AppHeader = () => {
  return (
    <header className={`${styles.header} text text_type_main-default p-4`}>
      <div className={styles.menu_container}>
        <NavLink to="/" className={styles.logo}>
          <Logo />
        </NavLink>
        <nav className={styles.navigation_block}>
          <ul className={styles.list}>
            <li className={`${styles.list_item} p-5 mr-2`}>
              <NavLink to="/" className={styles.link}>
              {({ isActive }) => (
                <>
                  <BurgerIcon type={isActive ? "primary" : "secondary"}/>
                  <p className={isActive ? `${styles.text} pl-2 text_color_primary` : `${styles.text} pl-2 text_color_inactive`}>Конструктор</p>
                </> 
              )}
              </NavLink>
            </li>
            <li className={`${styles.list_item} p-5`}>
              <NavLink to="/feed" className={styles.link}>
              {({ isActive }) => (
                <>
                <ListIcon type={isActive ? "primary" : "secondary"}/>
                <p className={isActive ? `${styles.text} pl-2 text_color_primary` : `${styles.text} pl-2 text_color_inactive`}>Лента заказов</p>
                </> 
              )}
              </NavLink>
            </li>
            <li className={`${styles.list_item} p-5`}>
              <NavLink to="/profile" className={styles.link}>
              {({ isActive }) => (
                <>
                <ProfileIcon type={isActive ? "primary" : "secondary"}/>
                <p className={isActive ? `${styles.text} pl-2 text_color_primary` : `${styles.text} pl-2 text_color_inactive`}>Личный кабинет</p>
                </> 
              )}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default AppHeader;
