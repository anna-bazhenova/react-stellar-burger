import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredient.module.css";

function BurgerIngredient({image, price, name}) {
  return (
    <li className={styles.list_item}>
      <img className={styles.image} src={image} alt={name} />
      <div className={`${styles.container_price} mt-1 mb-1`}>
        <p className="text text_type_digits-default">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default">{name}</p>
      <Counter count={1} size="default" extraClass="m-1" />
    </li>
  );
}

export default BurgerIngredient;
