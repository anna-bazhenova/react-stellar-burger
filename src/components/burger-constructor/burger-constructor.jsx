import { ConstructorElement, DragIcon, Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { useModal } from "../../hooks/useModal";
import { useDispatch, useSelector } from "react-redux";
import { clearOrderId } from "../../services/actions/order-details";
import { useDrop } from "react-dnd";
import { addBurgerIngredient, removeBurgedIngredient } from "../../services/actions/burger-constructor";
import { useMemo, useCallback } from "react";
import { placeOrder } from "../../services/actions/api";
import loaderImage from "../../images/circles.svg";
import { BugregConstructorElement } from "../burger-constructor-element/burger-constructor-element";
import { moveBurgerIngredient } from "../../services/actions/burger-constructor";
import { useNavigate } from "react-router";

function BurgerConstructor() {

  const { burgerIngredients, availableIngredients } = useSelector((state) => {
    return {
      burgerIngredients: state.burgerIngredients,
      availableIngredients: state.availableIngredients.items,
    };
  });

  const { isModalOpen, openModal, closeModal } = useModal();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthorized = useSelector((store) => store.authReducer.isAuthorized);
  
  const orderBurger = async () => {
    if (isAuthorized) {
      await dispatch(placeOrder(burgerIngredientIds()));
      openModal();
    } else {
      navigate("login", {replace: true});
    }
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
      ) + (burgerIngredients.bun.price ? burgerIngredients.bun.price * 2 : 0),
    [burgerIngredients]
  );

  const removeIngredient = (atIndex) => {
    dispatch(removeBurgedIngredient(atIndex))
  }

  const moveBurgerElement = useCallback((dragIndex, hoverIndex) => {
    dispatch(moveBurgerIngredient(dragIndex, hoverIndex))
  }, [])
  
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
              <BugregConstructorElement
                 key={ingredient.uniqueId}
                 text={ingredient.name}
                 price={ingredient.price}
                 thumbnail={ingredient.image}
                 onRemove={() => removeIngredient(idx)}
                 index={idx}
                 moveElement={moveBurgerElement}
              />
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
          disabled={Object.keys(bun).length === 0}
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
