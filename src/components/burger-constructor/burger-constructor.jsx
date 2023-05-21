import { ConstructorElement, DragIcon, Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import { data } from "./data";
import { useState } from "react";
import Modal from "../modal/modal";

function BurgerConstructor() {

  const [showOrderDetails, setShowOrderDetails] = useState(false);

  const totalSum = data.bun.price + data.ingredients.reduce(
    (acc, current) => acc + current.price,
    0
  );
  
  return (
    <section>
      <ul style={{ display: "flex", flexDirection: "column", gap: "16px" }} className={styles.burger_list}>
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
              <li className={styles.mains_list_item}>
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
        <Button htmlType="button" type="primary" size="large" onClick={() => setShowOrderDetails(true)}>
          Оформить заказ
        </Button>
        { showOrderDetails && (
            <Modal header={"Детали заказа"} onClose={() => setShowOrderDetails(false)}/>
          )
        }
      </div>
    </section>
  );
}

export default BurgerConstructor;
