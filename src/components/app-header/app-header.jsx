import { BurgerIcon, ListIcon, Logo, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";

function AppHeader() {
  return (
    <header className={`${styles.header} text text_type_main-default p-4`}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <nav className={styles.navigation_block}>
        <ul className={styles.list}>
          <li className={`${styles.list_item} p-5 mr-2`}>
            <BurgerIcon type="primary" />
            <p className={`${styles.text} pl-2`}>Конструктор</p>
          </li>
          <li className={`${styles.list_item} p-5`}>
            <ListIcon type="secondary" />
            <p className={`${styles.text} text_color_inactive pl-2`}>Лента заказов</p>
          </li>
          <li className={`${styles.list_item} p-5`}>
            <ProfileIcon type="secondary" />
            <p className={`${styles.text} text_color_inactive pl-2`}>Личный кабинет</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;
