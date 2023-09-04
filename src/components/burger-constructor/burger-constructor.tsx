import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { useModal } from "../../hooks/useModal";
import { clearOrderId, placeOrder } from "../../services/actions/order-actions";
import { useDrop } from "react-dnd";
import { useMemo, useCallback } from "react";
import loaderImage from "../../images/circles.svg";
import { useNavigate } from "react-router";
import BurgerConstructorElement from "../burger-constructor-element/burger-constructor-element";
import { addBurgerIngredient, moveBurgerIngredient, removeBurgedIngredient } from "../../services/actions/burger-actions";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";

type TDropItem = {
  id: string;
};

const BurgerConstructor = () => {
  const { burgerIngredients, availableIngredients } = useAppSelector(
    (state) => {
      return {
        burgerIngredients: state.burgerIngredients,
        availableIngredients: state.availableIngredients.items,
      };
    }
  );

  const { isModalOpen, openModal, closeModal } = useModal();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuthorized = useAppSelector((store) => store.auth.isAuthorized);

  const orderBurger = async () => {
    if (isAuthorized) {
      await dispatch(placeOrder(burgerIngredientIds()));
      openModal();
    } else {
      navigate("login", { replace: true });
    }
  };

  const hideOrderDetails = () => {
    dispatch(clearOrderId());
    closeModal();
  };

  const burgerIngredientIds = () => {
    const ingredientIds = burgerIngredients.ingredients.map((it) => it._id);
    return [...ingredientIds, burgerIngredients.bun!._id];
  };

  const handleIngredientDrop = (item: TDropItem) => {
    const ingredient = availableIngredients.find(
      (ingredient) => ingredient._id === item.id
    );
    if (ingredient !== undefined) {
      dispatch(addBurgerIngredient(ingredient));
    }
  };

  const [, dropRef] = useDrop<TDropItem, unknown, unknown>(
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
      ) + (burgerIngredients.bun?.price ? burgerIngredients.bun.price * 2 : 0),
    [burgerIngredients]
  );

  const removeIngredient = (atIndex: number) => {
    dispatch(removeBurgedIngredient(atIndex));
  };

  const moveBurgerElement = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      dispatch(moveBurgerIngredient(dragIndex, hoverIndex));
    },
    [dispatch]
  );

  return (
    <section ref={dropRef} data-cy="burger-constructor">
      <ul className={styles.burger_list}>
        <li className="ml-8">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun?.name || "Перетяните булку"} (верх)`}
            price={bun?.price || 0}
            thumbnail={bun?.image || loaderImage}
          />
        </li>
        <li>
          <ul className={`${styles.mains_list} custom-scroll`}>
            {otherIngredients.map((ingredient, idx) => (
              <BurgerConstructorElement
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
        <li className="ml-8">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun?.name || "Перетяните булку"} (низ)`}
            price={bun?.price || 0}
            thumbnail={bun?.image || loaderImage}
          />
        </li>
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
          disabled={bun === null}
          data-cy="place-order-button"
        >
          Оформить заказ
        </Button>
        {isModalOpen && (
          <Modal header={""} onClose={hideOrderDetails}>
            <OrderDetails />
          </Modal>
        )}
      </div>
    </section>
  );
};

export default BurgerConstructor;
