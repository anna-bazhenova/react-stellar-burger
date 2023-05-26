import { ConstructorElement, DragIcon, Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import { data } from "./data";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { useModal } from "../../hooks/useModal";
import { useDispatch } from "react-redux";
import { clearOrderId } from "../../services/actions/order-details";

function BurgerConstructor() {

  const { isModalOpen, openModal, closeModal } = useModal();

  const dispatch = useDispatch();

  
  const showOrderDetails = () => {
    openModal();
  }
  
  const hideOrderDetails = () => {
    dispatch(clearOrderId())
    closeModal();
  }

  const totalSum = data.bun.price + data.ingredients.reduce(
    (acc, current) => acc + current.price,
    0
  );
  
  return (
    <section>
      <ul className={styles.burger_list}>
        <li className="ml-8">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${data.bun.name} (верх)`}
            price={data.bun.price}
            thumbnail={data.bun.image}
          />
        </li>
        <li>
          <ul className={`${styles.mains_list} custom-scroll`}>
            {data.ingredients.map((ingredient) => (
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
        <li className="ml-8">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${data.bun.name} (низ)`}
            price={data.bun.price}
            thumbnail={data.bun.image}
          />
        </li>
      </ul>
      <div className={`${styles.order_container} mt-10`}>
        <div className={styles.sum_container}>
          <p className="text text_type_digits-medium">{totalSum}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={showOrderDetails}>
          Оформить заказ
        </Button>
        { isModalOpen && (
            <Modal header={""} onClose={hideOrderDetails}>
              <OrderDetails orderId={123456}/>
            </Modal>
          )
        }
      </div>
    </section>
  );
}

export default BurgerConstructor;
