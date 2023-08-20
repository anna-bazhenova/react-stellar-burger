import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { useModal } from "../../hooks/useModal";
import { useDispatch, useSelector } from "react-redux";
import { clearOrderId } from "../../services/actions/order-details";
import { useDrop } from "react-dnd";
import {
  addBurgerIngredient,
  removeBurgedIngredient,
} from "../../services/actions/burger-constructor";
import { useMemo, useCallback } from "react";
import { placeOrder } from "../../services/actions/api";
import loaderImage from "../../images/circles.svg";
import { moveBurgerIngredient } from "../../services/actions/burger-constructor";
import { useNavigate } from "react-router";
import { TBurgerIngredient, TIngredient } from "../../utils/types";
import BurgerConstructorElement from "../burger-constructor-element/burger-constructor-element";

type TBurgerIngredients = {
  bun: TBurgerIngredient;
  ingredients: TBurgerIngredient[];
};

type TDropItem = {
  id: string;
};

const BurgerConstructor = () => {
  const { burgerIngredients, availableIngredients } = useSelector(
    (state: any) => {
      return {
        burgerIngredients: state.burgerIngredients,
        availableIngredients: state.availableIngredients.items,
      };
    }
  ) as {
    burgerIngredients: TBurgerIngredients;
    availableIngredients: TIngredient[];
  };

  const { isModalOpen, openModal, closeModal } = useModal();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthorized = useSelector(
    (store: any) => store.auth.isAuthorized
  ) as boolean;

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
    return [...ingredientIds, burgerIngredients.bun._id];
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
      ) + (burgerIngredients.bun.price ? burgerIngredients.bun.price * 2 : 0),
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
            <OrderDetails />
          </Modal>
        )}
      </div>
    </section>
  );
};

export default BurgerConstructor;
