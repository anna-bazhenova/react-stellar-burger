import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import styles from "./burger-ingredients.module.css";
import { useRef, useState } from "react";
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

  const sectionRef = useRef()
  const bunsRef = useRef()
  const saucesRef = useRef()
  const mainsRef = useRef()
  
  const handleScroll = () => {
    const sectionRect = sectionRef.current.getBoundingClientRect();
    const bunsRect = bunsRef.current.getBoundingClientRect();
    const saucesRect = saucesRef.current.getBoundingClientRect();
    const mainsRect = mainsRef.current.getBoundingClientRect();

    const bunsDistance = Math.min(
      Math.abs(bunsRect.bottom - sectionRect.top),
      Math.abs(bunsRect.top - sectionRect.top)
    );

    const saucesDistance = Math.min(
      Math.abs(saucesRect.bottom - sectionRect.top),
      Math.abs(saucesRect.top - sectionRect.top)
    );

    const mainsDistance = Math.min(
      Math.abs(mainsRect.bottom - sectionRect.top),
      Math.abs(mainsRect.top - sectionRect.top)
    );

    let tabToSelect;
    if (bunsDistance < saucesDistance && bunsDistance < mainsDistance) {
      tabToSelect = "bun"
    }
    if (saucesDistance < bunsDistance && saucesDistance < mainsDistance) {
      tabToSelect = "sauce"
    }
    if (mainsDistance < saucesDistance && mainsDistance < bunsDistance) {
      tabToSelect = "main"
    }

    if (tab !== tabToSelect) {
      setTab(tabToSelect)
    }

  }

  return (
    <section ref={sectionRef}>
      <div className={styles.tab_block}>
        <Tab value="bun" active={tab === 'bun'} onClick={() => bunsRef.current.scrollIntoView()}>
          Булки
        </Tab>
        <Tab value="sauce" active={tab === 'sauce'} onClick={() => saucesRef.current.scrollIntoView()}>
          Соусы
        </Tab>
        <Tab value="main" active={tab === 'main'} onClick={() => mainsRef.current.scrollIntoView()}>
          Начинки
        </Tab>
      </div>
      <div className={`${styles.burger_ingredients} custom-scroll mt-10`} onScroll={handleScroll}>
        <h2 id="buns" ref={bunsRef} className="text text_type_main-medium">Булки</h2>
        <ul className={`${styles.list} pt-6 pl-4 pr-4`}>
          {buns.map((bun) => (
            <BurgerIngredient key={bun._id} ingredient={bun} onClick={() => showDetails(bun)}/>
          ))}
        </ul>
        <h2 id="sauces" ref={saucesRef} className="text text_type_main-medium mt-10">Соусы</h2>
        <ul className={`${styles.list} pt-6 pl-4 pr-4`}>
          {sauces.map((sauce) => (
            <BurgerIngredient key={sauce._id} ingredient={sauce} onClick={() => showDetails(sauce)}/>
          ))}
        </ul>
        <h2 id="mains" ref={mainsRef} className="text text_type_main-medium mt-10">Начинки</h2>
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

export default BurgerIngredients;
