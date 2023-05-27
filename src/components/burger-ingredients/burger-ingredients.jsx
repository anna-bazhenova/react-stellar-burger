import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import styles from "./burger-ingredients.module.css";
import { useState } from "react";
import { ingredientPropType } from "../../utils/prop-types";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../hooks/useModal";
import { hideIngredientDetails, showIngredientDetails } from "../../services/actions/ingredient-details";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

function BurgerIngredients() {
  const [tab, setTab] = useState('bun');
  
  const { isModalOpen, openModal, closeModal } = useModal();
  
  const dispatch = useDispatch();
  const ingredients = useSelector(state => state.availableIngredients.items)
  
  const buns = ingredients.filter((ingredient) => ingredient.type === 'bun');
  const sauces = ingredients.filter((ingredient) => ingredient.type === 'sauce');
  const mains = ingredients.filter((ingredient) => ingredient.type === 'main');

  const showDetails = (ingredient) => {
    dispatch(showIngredientDetails(ingredient));
    openModal();
  }

  const hideDetails = () => {
    dispatch(hideIngredientDetails());
    closeModal();
  }

  return (
    <section>
      <div className={styles.tab_block}>
        <Tab value="bun" active={tab === 'bun'} onClick={setTab}>
          Булки
        </Tab>
        <Tab value="sauce" active={tab === 'sauce'} onClick={setTab}>
          Соусы
        </Tab>
        <Tab value="main" active={tab === 'main'} onClick={setTab}>
          Начинки
        </Tab>
      </div>
      <div className={`${styles.burger_ingredients} custom-scroll mt-10`}>
        <h2 className="text text_type_main-medium">Булки</h2>
        <ul className={`${styles.list} pt-6 pl-4 pr-4`}>
          {buns.map((bun) => (
            <BurgerIngredient key={bun._id} ingredient={bun} onClick={() => showDetails(bun)}/>
          ))}
        </ul>
        <h2 className="text text_type_main-medium mt-10">Соусы</h2>
        <ul className={`${styles.list} pt-6 pl-4 pr-4`}>
          {sauces.map((sauce) => (
            <BurgerIngredient key={sauce._id} ingredient={sauce} onClick={() => showDetails(sauce)}/>
          ))}
        </ul>
        <h2 className="text text_type_main-medium mt-10">Начинки</h2>
        <ul className={`${styles.list} pt-6 pl-4 pr-4`}>
          {mains.map((main) => (
            <BurgerIngredient key={main._id} ingredient={main} onClick={() => showDetails(main)}/>
          ))}
        </ul>
      </div>
      {isModalOpen && 
      <Modal
        header={"Детали ингредиента"}
        onClose={hideDetails}>
        <IngredientDetails/>
      </Modal>
      }
    </section>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType)
};

export default BurgerIngredients;
