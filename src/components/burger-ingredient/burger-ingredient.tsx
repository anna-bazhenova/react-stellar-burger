import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredient.module.css";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";
import { TBurgerIngredient, TIngredient } from "../../utils/types";

type TBurgerIngredientProps = {
  ingredient: TIngredient;
  onClick: () => void;
};

type TDragItem = {
  id: string;
};

const BurgerIngredient = ({ ingredient, onClick }: TBurgerIngredientProps) => {
  const count = useSelector((store: any) => {
    const burgerIngredients = store.burgerIngredients as {
      bun: TBurgerIngredient;
      ingredients: TBurgerIngredient[];
    };
    if (ingredient.type === "bun") {
      return burgerIngredients.bun._id === ingredient._id ? 2 : 0;
    }
    return burgerIngredients.ingredients.filter((i) => i._id === ingredient._id)
      .length;
  });

  const [, dragRef] = useDrag<TDragItem, unknown, unknown>(() => ({
    type: "BURGER_INGREDIENT",
    item: { id: ingredient._id },
  }));

  const { image, price, name } = ingredient;

  return (
    <>
      <li className={styles.list_item} onClick={onClick} ref={dragRef}>
        <img className={styles.image} src={image} alt={name} />
        <div className={`${styles.container_price} mt-1 mb-1`}>
          <p className="text text_type_digits-default">{price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className="text text_type_main-default">{name}</p>
        {count !== 0 && (
          <Counter count={count} size="default" extraClass="m-1" />
        )}
      </li>
    </>
  );
};

export default BurgerIngredient;
