import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredient.module.css";
import { ingredientPropType } from "../../utils/prop-types";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";

function BurgerIngredient({ingredient, onClick}) {

  const count = useSelector((store) => {
    const burgerIngredients = store.burgerIngredients;
    if (ingredient.type === "bun") {
      return burgerIngredients.bun._id === ingredient._id ? 2 : 0;
    }
    return burgerIngredients.ingredients.filter((i) => i._id === ingredient._id).length;
  });

  const [, dragRef] = useDrag(() => ({
    type: "BURGER_INGREDIENT",
    item: {id: ingredient._id},
  }));
  
  const {image, price, name} = ingredient
  
  return (
    <>
      <li className={styles.list_item} onClick={onClick} ref={dragRef}>
        <img className={styles.image} src={image} alt={name} />
        <div className={`${styles.container_price} mt-1 mb-1`}>
          <p className="text text_type_digits-default">{price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className="text text_type_main-default">{name}</p>
        <Counter count={count} size="default" extraClass="m-1" />
      </li>
    </>
  );
}

BurgerIngredient.propTypes = {
  ingredient: ingredientPropType.isRequired
};

export default BurgerIngredient;
