import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import styles from "./burger-ingredients.module.css";
import { useState } from "react";
import { ingredientPropType } from "../../utils/prop-types";
import PropTypes from "prop-types";

function BurgerIngredients({ingredients}) {
  const [tab, setActive] = useState('bun');
  
  const buns = ingredients.filter((ingredient) => ingredient.type === 'bun');
  const sauces = ingredients.filter((ingredient) => ingredient.type === 'sauce');
  const mains = ingredients.filter((ingredient) => ingredient.type === 'main');

  return (
    <section>
      <div className={styles.tab_block}>
        <Tab value="bun" active={tab === 'bun'} onClick={setActive}>
          Булки
        </Tab>
        <Tab value="sauce" active={tab === 'sauce'} onClick={setActive}>
          Соусы
        </Tab>
        <Tab value="main" active={tab === 'main'} onClick={setActive}>
          Начинки
        </Tab>
      </div>
      <div className={`${styles.burger_ingredients} custom-scroll mt-10`}>
        <h2 className="text text_type_main-medium">Булки</h2>
        <ul className={`${styles.list} pt-6 pl-4 pr-4`}>
          {buns.map((bun) => (
            <BurgerIngredient ingredient={bun} key={bun._id}/>
          ))}
        </ul>
        <h2 className="text text_type_main-medium mt-10">Соусы</h2>
        <ul className={`${styles.list} pt-6 pl-4 pr-4`}>
          {sauces.map((sauce) => (
            <BurgerIngredient ingredient={sauce} key={sauce._id}/>
          ))}
        </ul>
        <h2 className="text text_type_main-medium mt-10">Начинки</h2>
        <ul className={`${styles.list} pt-6 pl-4 pr-4`}>
          {mains.map((main) => (
            <BurgerIngredient ingredient={main} key={main._id}/>
          ))}
        </ul>
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType)
};

export default BurgerIngredients;
