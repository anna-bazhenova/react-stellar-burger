import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import styles from "./burger-ingredients.module.css";
import { useState } from "react";
import { data } from "../../utils/data";

function BurgerIngredients() {
  const [tab, setActive] = useState('bun');
  
  const buns = data.filter((ingredient) => ingredient.type === 'bun');
  const sauces = data.filter((ingredient) => ingredient.type === 'sauce');
  const mains = data.filter((ingredient) => ingredient.type === 'main');

  return (
    <section>
      <div style={{ display: 'flex' }}>
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
            <BurgerIngredient image={bun.image} price={bun.price} name={bun.name}/>
          ))}
        </ul>
        <h2 className="text text_type_main-medium mt-10">Соусы</h2>
        <ul className={`${styles.list} pt-6 pl-4 pr-4`}>
          {sauces.map((sauce) => (
            <BurgerIngredient image={sauce.image} price={sauce.price} name={sauce.name}/>
          ))}
        </ul>
        <h2 className="text text_type_main-medium mt-10">Начинки</h2>
        <ul className={`${styles.list} pt-6 pl-4 pr-4`}>
          {mains.map((main) => (
            <BurgerIngredient image={main.image} price={main.price} name={main.name}/>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BurgerIngredients;
