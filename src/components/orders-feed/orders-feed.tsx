import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./orders-feed.module.css";
import { useLocation, useNavigate } from "react-router";
import { useAppSelector } from "../../hooks/redux-hooks";
import { Fragment } from "react";
import { nanoid } from "nanoid";

type TOrdersFeedProps = {
  showOrderStatuses: boolean,
  basePath: string
}

const orderStatusMapping = {
  "done": "Выполнен",
  "pending": "Готовится",
  "created": "Создан",
}

const OrdersFeed = ({showOrderStatuses, basePath}: TOrdersFeedProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const showDetails = (orderNumber: number) => {
    navigate(`/${basePath}/${orderNumber}`, {
      state: { background: location },
    });
  };

  const feed = useAppSelector((store) => store.feed.orderFeed);

  const availableIngredients = useAppSelector((store) => store.availableIngredients.items);
  const ingredientsById = new Map(availableIngredients.map(i => [i._id, i]));

  return (
    <div className={`${styles.orders} custom-scroll pr-2`}>
      {feed.orders
        .sort((a, b) => b.number - a.number)
        .map((order) => (
          <Fragment key={order._id}>
            <div
              className={`${styles.order_item} p-6 mb-4`}
              onClick={() => showDetails(order.number)}
            >
              <div className={styles.order_flex}>
                <p className="text text_type_digits-default">#{order.number}</p>
                <FormattedDate
                  date={new Date(order.createdAt)}
                  className="text text_type_main-default text_color_inactive"
                />
              </div>
              <h2 className="text text_type_main-medium mt-6">
                {order.name}
              </h2>
              {showOrderStatuses && 
                <p className={`${order.status === "done" && styles.status_title} text text_type_main-default mt-2`}>
                  {orderStatusMapping[order.status]}
                </p>
              }
              <div className={`${styles.order_flex} mt-6`}>
                <div className={styles.images_flex}>
                  {order.ingredients.slice(0, 6).map((ingredientId, idx) => {
                    const className = `image_${idx + 1}`;
                    return (
                      <div key={nanoid()} className={`${styles.image_box} ${styles[className]}`}>
                        <img
                          className={styles.image}
                          src={ingredientsById.get(ingredientId)?.image_mobile}
                          alt={ingredientsById.get(ingredientId)?.name}
                        />
                        {idx === 5 && order.ingredients.length > 6 && (
                          <p
                            className={`${styles.image_digit} text text_type_digits-default`}
                          >
                            +{order.ingredients.length - 6}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className={styles.order_flex}>
                  <p className="text text_type_digits-default mr-2">
                    {order.ingredients
                      .map((ingredientId) => ingredientsById.get(ingredientId)!)
                      .reduce((a, b) =>
                          a + (b.type === "bun" ? b.price * 2 : b.price),
                        0
                      )}
                  </p>
                  <CurrencyIcon type="primary" />
                </div>
              </div>
            </div>
          </Fragment>
        ))}
    </div>
  );
}

export { OrdersFeed };
