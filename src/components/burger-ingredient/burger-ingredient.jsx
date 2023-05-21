import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredient.module.css";
import { useState } from "react";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

function BurgerIngredient({ingredient}) {
  const [showIngredient, setShowIngredient] = useState(false);
  const {image, price, name, ...rest} = ingredient
  return (
    <>
      <li className={styles.list_item} onClick={() => setShowIngredient(true)}>
        <img className={styles.image} src={image} alt={name} />
        <div className={`${styles.container_price} mt-1 mb-1`}>
          <p className="text text_type_digits-default">{price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className="text text_type_main-default">{name}</p>
        <Counter count={1} size="default" extraClass="m-1" />
      </li>
      {showIngredient && (
        <Modal
          header={"Детали ингредиента"}
          onClose={() => setShowIngredient(false)}>
            <IngredientDetails ingredient={ingredient}/>
        </Modal>
      )}
    </>
  );
}

export default BurgerIngredient;
