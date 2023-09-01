import { useAppSelector } from "../../hooks/redux-hooks";
import styles from "./orders-info.module.css";

const OrdersInfo = () => {

  const feed = useAppSelector((store) => store.feed.orderFeed);

  return (
    <div>
      <div className={styles.info_grid}>
        <div>
          <h3 className="text text_type_main-medium mb-6">Готовы:</h3>
          <ul className={`${styles.info_list} ${styles.list_color}`}>
            {feed.orders.filter(order => order.status === 'done').slice(0, 10).map((order) => (
              <li key={order._id} className="text text_type_digits-default mb-2">{order.number}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text text_type_main-medium mb-6">В работе:</h3>
          <ul className={`${styles.info_list}`}>
            {feed.orders.filter(order => order.status === 'pending').slice(0, 10).map((order) => (
              <li key={order._id} className="text text_type_digits-default mb-2">{order.number}</li>
            ))}
          </ul>
        </div>
      </div>
      <h3 className="text text_type_main-medium mt-15">Выполнено за все время:</h3>
      <p className={`${styles.text_shadow} text text_type_digits-large`}>{feed.total}</p>
      <h3 className="text text_type_main-medium mt-15">Выполнено за сегодня:</h3>
      <p className={`${styles.text_shadow} text text_type_digits-large`}>{feed.totalToday}</p>
    </div>
  );
}

export { OrdersInfo };