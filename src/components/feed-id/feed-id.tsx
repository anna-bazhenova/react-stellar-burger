import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./feed-id.module.css";
import { useParams } from "react-router";
import { useAppSelector } from "../../hooks/redux-hooks";
import { getOrder } from "../../services/orders";
import { useEffect, useState } from "react";
import { TOrderFeedItem } from "../../utils/types";

const FeedId = () => {

  const { id } = useParams();

  const orders = useAppSelector((store) => store.feed.orderFeed.orders);
  
  const availableIngredients = useAppSelector(
    (store) => store.availableIngredients.items
  );
  const ingredientsById = new Map(availableIngredients.map(i => [i._id, i]));

  const [order, setOrder] = useState<TOrderFeedItem>();
  
  useEffect(() => {
    const order = orders.find((el) => el._id === id);
    if (order) {
      setOrder(order);
    } else {
      getOrder(Number(id)).then((order) => {
        setOrder(order);
      });
    }
  }, [id, orders]);

  const orderStatusMapping = {
    "done": "Выполнен",
    "pending": "Готовится",
    "created": "Создан",
  }

  if (!order) {
    return (
      <div>
        <p className="text text_type_main-medium mt-10">Заказ не найден</p>
      </div>
    );
  }

  const ingredientFrequencies = order.ingredients.reduce((frequencies, ingredient) => {
    if (frequencies.has(ingredient)) {
      frequencies.set(ingredient, frequencies.get(ingredient)! + 1);
    } else {
      frequencies.set(ingredient, 1);
    }
    return frequencies;   
  }, new Map<string, number>())

  return (
    <div className={styles.id_container}>
      <p className={`${styles.text_id} text text_type_digits-default mb-10`}>
        #{order.number}
      </p>
      <h3 className="text text_type_main-medium mb-3">{order.name}</h3>
      <p className={`${styles.title} text text_type_main-default mb-15`}>
        {orderStatusMapping[order.status]}
      </p>
      <h3 className="text text_type_main-medium mb-6">Состав:</h3>
      <ul className={`${styles.item_list} custom-scroll mb-10`}>
        {[...ingredientFrequencies.keys()].map((ingredientId) => (
          <li className={styles.item_flex} key={ingredientId}>
            <div className={styles.image_flex}>
              <div className={styles.image_box}>
                <img
                  className={styles.image}
                  src={ingredientsById.get(ingredientId)?.image}
                  alt={ingredientsById.get(ingredientId)?.name}
                />
              </div>
              <h4 className="text text_type_main-default">
                {ingredientsById.get(ingredientId)?.name}
              </h4>
            </div>
            <div className={styles.price_flex}>
              <p className="text text_type_digits-default mr-2">
                {ingredientsById.get(ingredientId)?.type === "bun"
                  ? 2
                  : ingredientFrequencies.get(ingredientId)}
                x {ingredientsById.get(ingredientId)?.price}
              </p>
              <CurrencyIcon type="primary" />
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.item_flex}>
        <FormattedDate
          date={new Date()}
          className="text text_type_main-default text_color_inactive"
        />
        <div className={styles.price_flex}>
          <p className="text text_type_digits-default mr-2">
            {order.ingredients
              .map((ingredientId) => ingredientsById.get(ingredientId)!)
              .reduce(
                (a, b) => a + (b.type === "bun" ? b.price * 2 : b.price),
                0
              )}
          </p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
}

export { FeedId };