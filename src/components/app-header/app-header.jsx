import { BurgerIcon, ListIcon, Logo, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";

function AppHeader() {
  return (
    <header className={`${styles.header} text text_type_main-default p-4`}>
      <div className={styles.menu_container}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav className={styles.navigation_block}>
          <ul className={styles.list}>
            <li className={`${styles.list_item} p-5 mr-2`}>
              <a href="#" className={styles.link}>
                <BurgerIcon type="primary" />
                <p className={`${styles.text} text_color_primary pl-2`}>Конструктор</p>
              </a>
            </li>
            <li className={`${styles.list_item} p-5`}>
              <a href="#" className={styles.link}>
                <ListIcon type="secondary" />
                <p className={`${styles.text} text_color_inactive pl-2`}>Лента заказов</p>
              </a>
            </li>
            <li className={`${styles.list_item} p-5`}>
              <a href="#" className={styles.link}>
                <ProfileIcon type="secondary" />
                <p className={`${styles.text} text_color_inactive pl-2`}>Личный кабинет</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default AppHeader;
