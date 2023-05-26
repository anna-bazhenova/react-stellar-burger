import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredient.module.css";
import { useState } from "react";
import { ingredientPropType } from "../../utils/prop-types";

function BurgerIngredient({ingredient, onClick}) {
  const {image, price, name} = ingredient
  return (
    <>
      <li className={styles.list_item} onClick={onClick}>
        <img className={styles.image} src={image} alt={name} />
        <div className={`${styles.container_price} mt-1 mb-1`}>
          <p className="text text_type_digits-default">{price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className="text text_type_main-default">{name}</p>
        <Counter count={1} size="default" extraClass="m-1" />
      </li>
    </>
  );
}

BurgerIngredient.propTypes = {
  ingredient: ingredientPropType.isRequired
};

export default BurgerIngredient;
