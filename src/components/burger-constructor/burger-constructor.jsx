import { ConstructorElement, DragIcon, Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { useModal } from "../../hooks/useModal";
import { useDispatch, useSelector } from "react-redux";
import { clearOrderId } from "../../services/actions/order-details";
import { useDrop } from "react-dnd";
import { addBurgerIngredient } from "../../services/actions/burger-constructor";
import { useMemo } from "react";

function BurgerConstructor() {

  const { burgerIngredients, availableIngredients } = useSelector((state) => {
    return {
      burgerIngredients: state.burgerIngredients,
      availableIngredients: state.availableIngredients.items,
    };
  });

  console.log("Available ingredients toplevel");
  console.log(burgerIngredients);

  const { isModalOpen, openModal, closeModal } = useModal();

  const dispatch = useDispatch();

  const showOrderDetails = () => {
    openModal();
  }
  
  const hideOrderDetails = () => {
    dispatch(clearOrderId())
    closeModal();
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

  let bun = burgerIngredients.find((ingredient) => ingredient.type === "bun");
  if (!bun) {
    bun = availableIngredients.find((ingredient) => ingredient.type === "bun");
    if (bun) {
      dispatch(addBurgerIngredient(bun));
    }
  }

  const otherIngredients = burgerIngredients.filter(ingredient => ingredient.type !== "bun")

  const totalSum = useMemo(
    () =>
      burgerIngredients.reduce(
        (acc, ingredient) =>
          acc +
          (ingredient.type === "bun" ? ingredient.price * 2 : ingredient.price),
        0
      ),
    [burgerIngredients]
  );
  
  return (
    <section ref={dropRef}>
      <ul className={styles.burger_list}>
        {bun && (
          <li className="ml-8">
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </li>
        )}
        <li>
          <ul className={`${styles.mains_list} custom-scroll`}>
            {otherIngredients.map((ingredient) => (
              <li className={styles.mains_list_item} key={ingredient._id}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={ingredient.name}
                  price={ingredient.price}
                  thumbnail={ingredient.image}
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
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image}
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
          onClick={showOrderDetails}
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
