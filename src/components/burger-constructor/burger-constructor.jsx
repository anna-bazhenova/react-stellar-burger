import { ConstructorElement, DragIcon, Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { useModal } from "../../hooks/useModal";
import { useDispatch, useSelector } from "react-redux";
import { clearOrderId } from "../../services/actions/order-details";
import { useDrop } from "react-dnd";
import { addBurgerIngredient, removeBurgedIngredient } from "../../services/actions/burger-constructor";
import { useMemo } from "react";
import { placeOrder } from "../../services/actions/api";
import loaderImage from "../../images/circles.svg";

function BurgerConstructor() {

  const { burgerIngredients, availableIngredients } = useSelector((state) => {
    return {
      burgerIngredients: state.burgerIngredients,
      availableIngredients: state.availableIngredients.items,
    };
  });

  const { isModalOpen, openModal, closeModal } = useModal();

  const dispatch = useDispatch();

  const orderBurger = () => {
    dispatch(placeOrder(burgerIngredientIds()));
    openModal();
  }
  
  const hideOrderDetails = () => {
    dispatch(clearOrderId())
    closeModal();
  }

  const burgerIngredientIds = () => {
    const ingredientIds = burgerIngredients.ingredients.map((it) => it._id);
    return [...ingredientIds, burgerIngredients.bun._id]
  }

  const handleIngredientDrop = (item, monitor) => {
    const ingredient = availableIngredients.find(ingredient => ingredient._id === item.id)
    dispatch(addBurgerIngredient(ingredient));
  }

  const [, dropRef] = useDrop(
    () => ({
      accept: "BURGER_INGREDIENT",
      drop: handleIngredientDrop,
    }),
    [availableIngredients]
  );
  
  const bun = burgerIngredients.bun;
  const otherIngredients = burgerIngredients.ingredients;

  const totalSum = useMemo(
    () =>
      burgerIngredients.ingredients.reduce(
        (acc, ingredient) => acc + ingredient.price,
        0
      ) + burgerIngredients.bun.price ? burgerIngredients.bun.price * 2 : 0,
    [burgerIngredients]
  );

  const removeIngredient = (atIndex) => {
    dispatch(removeBurgedIngredient(atIndex))
  }
  
  return (
    <section ref={dropRef}>
      <ul className={styles.burger_list}>
        {bun && (
          <li className="ml-8">
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name || "Перетяните булку"} (верх)`}
              price={bun.price || 0}
              thumbnail={bun.image || loaderImage}
            />
          </li>
        )}
        <li>
          <ul className={`${styles.mains_list} custom-scroll`}>
            {otherIngredients.map((ingredient, idx) => (
              <li key={`${idx}-${ingredient._id}`} className={styles.mains_list_item}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={ingredient.name}
                  price={ingredient.price}
                  thumbnail={ingredient.image}
                  handleClose={() => removeIngredient(idx)}
                />
              </li>
            ))}
          </ul>
        </li>
        {bun && (
          <li className="ml-8">
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bun.name || "Перетяните булку"} (низ)`}
              price={bun.price || 0}
              thumbnail={bun.image || loaderImage}
            />
          </li>
        )}
      </ul>
      <div className={`${styles.order_container} mt-10`}>
        <div className={styles.sum_container}>
          <p className="text text_type_digits-medium">{totalSum}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={orderBurger}
        >
          Оформить заказ
        </Button>
        {isModalOpen && (
          <Modal header={""} onClose={hideOrderDetails}>
            <OrderDetails/>
          </Modal>
        )}
      </div>
    </section>
  );
}

export default BurgerConstructor;
